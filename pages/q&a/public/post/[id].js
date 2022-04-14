import { Avatar, ListItemSecondaryAction, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { useState, useEffect } from "react"
import AnswersList from "/components/AnswersList"
import NewAnswerDialog from "/components/NewAnswerDialog"
import { CircularProgress} from "@mui/material"
import { Grid } from '@mui/material'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

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
    <Stack direction="row" spacing={1}>
      <Chip
        avatar={<Avatar alt={postData.author.name} src={postData.author.image} />}
        label={postData.author.name}
        variant="outlined"
      />
      <Chip label={formatDate(postData.creationDate)} color="secondary" />
    </Stack>
    <br/><br/>
    <Typography variant="subtitle1">{postData.description}</Typography>
    <br/><br/><br/>
    <NewAnswerDialog getPosts={getPosts} postId={postData._id}></NewAnswerDialog>
    <Typography variant="h4">Answers:</Typography>
    <AnswersList answers={postData.answers}></AnswersList>
  </>
  
}
