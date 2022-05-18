import { useSession } from "next-auth/react"
import Router from 'next/router'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Avatar, ListItemSecondaryAction, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { useState, useEffect } from "react"
import { CircularProgress, LinearProgress } from "@mui/material"
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
  const [authorsData, setAuthorsData] = useState(null)
  const [authorData, setAuthorData] = useState(null)

  async function getPost() {
    try {
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
      setAuthorsData(null)
      setPostData(data)
      if (authorData === null) {
        getAuthorData(data.author.email)
      }
      getAuthorsData(data.answers)
    } catch (e) {
      console.log(e)
      Router.push('/q&a/public/')
    }
  }

  async function getAuthorData(email) {
    const res = await fetch("/api/getUser/" + email)
    if (res.ok) {
      const data = await res.json()
      setAuthorData(data)
    }

  }

  async function getAuthorsData(answers) {
    let authors = answers.map(answer => answer.author.email)
    const res = await fetch(`/api/posts/getUsersData`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(authors)
    });
    if (res.ok) {
      const data = await res.json();
      setAuthorsData(data)
    } else {
      return 1
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



  if (!authorData) {
    return <>
      <LinearProgress color="secondary"></LinearProgress>
    </>
  }

  return <>
  <Container maxWidth="xl" sx={{mt: 2, px:2, py:3, bgcolor: 'primary.main', borderRadius: 2}} >
    <Typography color="white" variant="h4">{postData.title}</Typography>
    <Stack direction="row" sx={{mt: 2}} spacing={1} justifyContent="left" alignItems="center">
      <div>
      <Chip
        avatar={<Avatar alt={authorData.name} src={authorData.image} />}
        label={authorData.name}
        variant="outlined"
        sx={{mr:1, bgcolor: 'background.paper'}}
      />
      <Chip label={formatDate(postData.creationDate)} color="secondary" />
      
      </div>
      <div>
        
      {(session && session.user.email === postData.author.email) ?
        <DeletePostDialog postId={postData._id}/> : 
        <ReportDialog reportEmail={postData.author.email}></ReportDialog>
      }
      
      </div>
    </Stack>
    <Typography variant="body1" color="white" sx={{my: 2}}>{postData.description}</Typography>

    <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{mb: 1}}>
      <AnswersSortInput style={sortParam} sortParam={sortParam} setSortParam={setSortParam} ></AnswersSortInput>
      {session && <NewAnswerDialog getPost={getPost} postId={postData._id}></NewAnswerDialog> }
    </Stack>

    {(postData && authorsData) && <AnswersList postId={postData._id} getPost={getPost} answers={postData.answers} authorsData={authorsData}></AnswersList> }
    </Container>
  </>
  
}
