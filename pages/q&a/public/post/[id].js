import { ListItemSecondaryAction, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { useState, useEffect } from "react"
import AnswersList from "/components/AnswersList"
import { CircularProgress} from "@mui/material"

export default function Post () {
  const router = useRouter()
  const { id } = router.query

  const [postData, setPostData] = useState(null)

  async function getPosts() {
    const res = await fetch("/api/posts/getOnePost/" + id);
    const data = await res.json();
    console.log(data)
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
    <Typography  variant="p">{postData.author.name + ", " + formatDate(postData.creationDate)}</Typography>
    <Typography variant="subtitle1">{postData.description}</Typography>
    <Typography variant="h4">Answers:</Typography>
    <AnswersList answers={postData.answers}></AnswersList>
  </>

  
  
}