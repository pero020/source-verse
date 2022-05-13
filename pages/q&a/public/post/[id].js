import { useSession } from "next-auth/react"
import Router from 'next/router'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Avatar, ListItemSecondaryAction, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { useState, useEffect } from "react"
import { CircularProgress} from "@mui/material"
import { Grid } from '@mui/material'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Button } from "@mui/material";
import { Container } from "@mui/material";
import { Box } from "@mui/system";

import AnswersList from "/components/AnswersList"
import NewAnswerDialog from "/components/NewAnswerDialog"
import DeletePostDialog from "/components/DeletePostDialog"
import AnswersSortInput from "/components/AnswersSortInput"
import ReportDialog from "/components/ReportDialog"

export default function Post () {
  const style = {
    width: '100%',
    maxWidth: "md",
    bgcolor: 'background.paper',
    borderRadius: '10px',
    p: 3
  };



  const router = useRouter()
  const { id } = router.query

  const { data: session } = useSession()
  const [postData, setPostData] = useState(null)
  const [sortParam, setSortParam] = useState("votes")

  async function getPost() {
    try {
      // setPostData(null)
      const res = await fetch("/api/posts/getOnePost/" + id);
      const data = await res.json();

      data.answers.forEach((answer, index) => {
        answer.databaseIndex = index
      })
      
      if (sortParam === "votes") {
        data.answers = await sortByVotes(data.answers)
      }

      if (sortParam === "date") {
        data.answers = await sortByDate(data.answers)
      }

      setPostData(data)
    } catch (e) {
      console.log(e)
      Router.push('/q&a/public/')
    }
  }

  useEffect(()=> {
    getPost()
  }, [sortParam])

  function formatDate(date) {
    let formatedDate = date.split("T")[0]
    return(formatedDate)
  }
  async function sortByVotes(answers) {
    return answers.sort((a, b) => {
      let votesA = 0
      let votesB = 0
      a.votes.forEach((vote) => { 
        votesA = votesA + vote.status
      })
      b.votes.forEach((vote) => { 
        votesB = votesB + vote.status
      })
      return votesB - votesA 
    })
  }

  async function sortByDate(answers) {
    return answers.sort((a, b) => {
      let dateA = new Date(a.creationDate)
      let dateB = new Date(b.creationDate)
      return dateB.getTime() - dateA.getTime()
    })
  }



  if (!postData) {
    return <>
      <CircularProgress sx={{color: "secondary.main"}}></CircularProgress>
    </>
  }

  return <>
  <Container maxWidth="xl" sx={{mt: 2, px:2, py:3, bgcolor: 'background.container', borderRadius: 2}} >
    <Stack direction="row" spacing={1} justifyContent="space-between">  
      {/* <Button href="/q&a/public" sx={{mr: 1}}>
       <ArrowBackIcon fontSize="large"></ArrowBackIcon>
      </Button> */}
    </Stack>
    <Typography variant="h4">{postData.title}</Typography>
    <br/>
    <Stack direction="row" spacing={1} justifyContent="left" alignItems="center">
      <div>
      <Chip
        avatar={<Avatar alt={postData.author.name} src={postData.author.image} />}
        label={postData.author.name}
        variant="outlined"
        sx={{mr:1,bgcolor: 'background.paper'}}
      />
      <Chip label={formatDate(postData.creationDate)} color="secondary" />
      
      </div>
      <div>
        
      {session && session.user.email === postData.author.email ?
        <DeletePostDialog postId={postData._id}/> : 
        <ReportDialog reportEmail={postData.author.email}></ReportDialog>
      }
      
      </div>
    </Stack>
    <Typography variant="subtitle1">{postData.description}</Typography>
    <br/>

    <Stack direction="row" justifyContent="space-between" alignItems="baseLine">
        <AnswersSortInput style={sortParam} sortParam={sortParam} setSortParam={setSortParam} ></AnswersSortInput>
        <NewAnswerDialog getPost={getPost} postId={postData._id}></NewAnswerDialog>
    </Stack>

    {console.log(postData.answers)}
    <AnswersList postId={postData._id} getPost={getPost} answers={postData.answers}></AnswersList>
    </Container>
  </>
  
}
