import { useSession } from "next-auth/react"
import { useState, useEffect } from "react"

import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import Chip from '@mui/material/Chip';
import { Container } from "@mui/material";

import PostsList from "/components/PostsList"
import NewQuestionDialog from "/components/NewQuestionDialog"
import QuestionFilters from "/components/QuestionFilters"



export default function Public() {
  const { data: session } = useSession()
  const [isLoading, setIsLoading] = useState(true)
  const [postsData, setPostsData] = useState(null)
  const [filters, setFilters] = useState()

  async function getAllPosts() {
    setFilters()
    const res = await fetch("/api/posts/getAllPosts");
    const data = await res.json();
    setPostsData(data)
    setIsLoading(false)
  }

  async function getFilteredPosts(category, searchTerm) {
    setFilters([category, searchTerm])
    const res = await fetch(`/api/posts/getFilteredPosts?category=${category}&searchTerm=${searchTerm}`);
    if (res.ok) {
      const data = await res.json();
      setPostsData(data.posts)
      setIsLoading(false)
    } else {
      return 1
    }
    
  }

  useEffect(()=> {
    getAllPosts()
  }, [])

  return <>
    <Container maxWidth="xl" sx={{mt:2, px:1}} >
      <Stack justifyContent="space-between" alignItems="center" direction="row">
        <Typography variant="h5">Questions list</Typography>
        {session && <NewQuestionDialog getAllPosts={getAllPosts} />}
      </Stack>

      <QuestionFilters getAllPosts={getAllPosts} getFilteredPosts={getFilteredPosts}></QuestionFilters>
      <Stack direction="row" spacing={1}>
        {filters && filters.map((filter, index) => {if (filter) {return <Chip key={index} label={filter} />}})}
      </Stack>
      
      {postsData ? <PostsList  getAllPosts={getAllPosts} posts={postsData}/> : <CircularProgress sx={{color: "secondary.main"}} /> }
    </Container>
  </>
}