import { useSession } from "next-auth/react"
import Router from 'next/router'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Avatar, ListItemSecondaryAction, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { useState, useEffect } from "react"
import AnswersList from "/components/AnswersList"
import NewAnswerDialog from "/components/NewAnswerDialog"
import { CircularProgress} from "@mui/material"
import { Grid } from '@mui/material'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Button } from "@mui/material";
import DeletePostDialog from "/components/DeletePostDialog"


export default function Post () {
  const router = useRouter()
  const { id } = router.query

  const { data: session } = useSession()
  const [postData, setPostData] = useState(null)

  async function getPost() {
    try {
      setPostData(null)
      const res = await fetch("/api/posts/getOnePost/" + id);
      const data = await res.json();
      setPostData(data)
      
    } catch (e) {
      Router.push('/q&a/public/')
    }
  }

  useEffect(()=> {
    getPost()
  }, [])

  function formatDate(date) {
    let formatedDate = date.split("T")[0]
    return(formatedDate)
  }

  if (!postData) {
    return <>
      <CircularProgress sx={{color: "secondary.main"}}></CircularProgress>
    </>
  }

  return <>
    <Typography variant="h4">{postData.title}</Typography>
    <br/>
    <Stack direction="row" spacing={1} justifyContent="space-between">
      <div>
      <Chip
        avatar={<Avatar alt={postData.author.name} src={postData.author.image} />}
        label={postData.author.name}
        variant="outlined"
        sx={{mr:1}}
      />
      <Chip label={formatDate(postData.creationDate)} color="secondary" />
      
      <Button href="/q&a/public">
       <ArrowBackIcon fontSize="large"></ArrowBackIcon> Go back
      </Button>
      </div>
      <div>
        
      {session && session.user.email === postData.author.email && 
        <DeletePostDialog postId={postData._id}/>}
      
      </div>
    </Stack>
    <br/>
    <Typography variant="subtitle1">{postData.description}</Typography>
    <br/><br/>
    <NewAnswerDialog getPost={getPost} postId={postData._id}></NewAnswerDialog>
    <Typography variant="h4">Answers:</Typography>
    <AnswersList postId={postData._id} getPost={getPost} answers={postData.answers.reverse()}></AnswersList>
  </>
  
}
