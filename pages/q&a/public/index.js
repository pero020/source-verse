import { useSession } from "next-auth/react"
import { useState, useEffect } from "react"

import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

import PostsList from "/components/PostsList"
import NewQuestionDialog from "/components/NewQuestionDialog"

export default function Public() {
  const { data: session } = useSession()
  const [isLoading, setIsLoading] = useState(true)
  const [postsData, setPostsData] = useState(null)

  async function getAllPosts() {
    const res = await fetch("/api/posts/getAllPosts");
    const data = await res.json();
    setPostsData(data)
    setIsLoading(false)
  }

  useEffect(()=> {
    getAllPosts()
  }, [])

  return <>

    {session && <NewQuestionDialog getAllPosts={getAllPosts} />}
    <Typography variant="h4">Questions list</Typography>
    {isLoading ? <CircularProgress sx={{color: "secondary.main"}} /> :  <PostsList getAllPosts={getAllPosts} posts={postsData}/> }

  </>
}