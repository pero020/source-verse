import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"

import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

import PostsList from "/components/PostsList"
import NewQuestionDialog from "/components/NewQuestionDialog"

export default function Public() {
  const { data: session } = useSession()
  const [isLoading, setIsLoading] = useState(true)
  const [postsData, setPostsData] = useState(null)

  useEffect(()=> {
    async function getAllPosts() {
      const res = await fetch("/api/posts/getAllPosts");
      const data = await res.json();
      setPostsData(data)
      setIsLoading(false)
    }
    getAllPosts()
  }, [])

  return <>

    {session && <NewQuestionDialog />}

    <Typography variant="h3">Questions list</Typography>

    {isLoading ? <CircularProgress /> :  <PostsList posts={postsData}/> }

  </>
}