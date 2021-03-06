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
  const [authorsData, setAuthorsData] = useState(null)
  const [postsData, setPostsData] = useState(null)
  const [filters, setFilters] = useState()

  async function getAuthorsData(posts) {
    let authors = posts.map(post => post.author.email)
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
      setIsLoading(false)
    } else {
      return 1
    }
  }

  async function getAllPosts() {
    setFilters()
    setAuthorsData(null)
    const res = await fetch("/api/posts/getAllPosts");
    const data = await res.json();
    setPostsData(data)
    setIsLoading(false)

    getAuthorsData(data)

    
  }

  async function getFilteredPosts(category, searchTerm) {
    setFilters([category, searchTerm])
    setAuthorsData(null)
    const res = await fetch(`/api/posts/getFilteredPosts?category=${category}&searchTerm=${searchTerm}`);
    if (res.ok) {
      const data = await res.json();
      setPostsData(data.posts)
      setIsLoading(false)
      getAuthorsData(data.posts)
    } else {
      return 1
    }
    

    
  }

  useEffect(()=> {
    getAllPosts()
  }, [])

  return <>
    <Container maxWidth="xl" sx={{mt: 1, px:0, py:3, bgcolor: 'primary.main', borderRadius: 2, opacity:0.9}} >
      <Container maxWidth="md">
        <Stack justifyContent="space-between" alignItems="center" direction="row" sx={{mb:2}}>
          <Typography color="white" variant="h4">Questions list</Typography>
          {session && <NewQuestionDialog getAllPosts={getAllPosts} />}
        </Stack>
      </Container>

      <Container sx={{ mt: {xs: 5, md:7}, mb:3, px:2, py:3, bgcolor: "green.main", borderRadius: 2,}} maxWidth="xl" width="100%">
      <Stack
      direction="center"
      justifyContent="center"
      alignItems="center">

        <Typography align="center" color="white" variant="h6"><span style={{color: "black"}}> Community </span> questions and answers. Please place your questions in the <span style={{color: "black"}}> appropriate categories</span>.</Typography>
      </Stack>
    </Container>

      <Stack alignItems="center">
        <QuestionFilters getAllPosts={getAllPosts} getFilteredPosts={getFilteredPosts}></QuestionFilters>
        <Stack sx={{mb: 2}} direction="row" spacing={1}>
          {filters && filters.map((filter, index) => {if (filter) {return <Chip key={index} label={filter} />}})}
        </Stack>
        {(postsData && authorsData) ? <PostsList  getAllPosts={getAllPosts} posts={postsData} authorsData={authorsData} /> : <CircularProgress sx={{color: "secondary.main"}} /> }
      </Stack>
      
    </Container>
  </>
}