import { Avatar, ListItemSecondaryAction, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { useState, useEffect } from "react"
import AnswersList from "/components/AnswersList"
import NewAnswerDialog from "/components/NewAnswerDialog"
import { CircularProgress} from "@mui/material"
import { Grid } from '@mui/material'

export default function Post () {
  const router = useRouter()
  const { id } = router.query

  const [postData, setPostData] = useState(null)

  async function getPosts() {
    const res = await fetch("/api/posts/getOnePost/" + id);
    const data = await res.json();
    setPostData(data)
  }

  useEffect(()=> {
    getPosts()
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
    <Grid container spacing = {1}>
      <Grid item xs={2.5}>
            <Typography  variant="h6">Asked on: {formatDate(postData.creationDate) + " by " + postData.author.name}</Typography>
      </Grid>
      <Grid item xs={4}>
            <Avatar src={postData.author.image} width={20} height={20}></Avatar>
      </Grid>
    </Grid>
    <br/><br/>
    <Typography variant="subtitle1">{postData.description}</Typography>
    <br/><br/><br/>
    <NewAnswerDialog getPosts={getPosts} postId={postData._id}></NewAnswerDialog>
    <Typography variant="h4">Answers:</Typography>
    <AnswersList answers={postData.answers}></AnswersList>
  </>
  
}
