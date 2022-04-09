import { useState, useEffect } from "react"

import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

import PostsList from "/components/PostsList"

export default function Public() {
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
    <Typography variant="h2">
      Public Q&A
    </Typography>
    {isLoading ? <CircularProgress /> :  <PostsList posts={postsData}/> }

  </>
}