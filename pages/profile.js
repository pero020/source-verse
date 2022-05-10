import { useState, useEffect} from "react"
import { useSession } from "next-auth/react"
import Image from "next/image";
import CircularProgress from '@mui/material/CircularProgress';
import AchievementsDialog from "../components/AchievementsDialog";
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid'
import PostsList from "/components/PostsList"
import Typography from '@mui/material/Typography';
import { Container } from "@mui/material";
import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import ReviewsList from "/components/ReviewsList"

export default function Profile() {
  const { data: session } = useSession()
  const [userData, setUserData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [userPosts, setUserPosts] = useState(null)

  const getProfileData = async () => {
    const res = await fetch("api/getUser/" + session.user.email);
    const data = await res.json();
    setUserData(data)
    setIsLoading(false)
  }

  async function getPosts() {
    const res = await fetch("api/posts/allFromUser/" + session.user.email);
    if (!res.ok) {
      return 1
    }
    const data = await res.json();
      setUserPosts(data)
  }

  useEffect(() => {
    if (session) {
      getProfileData()
      getPosts()
    }
  }, [])

  if (!session) {
    return <>
      <p>Access not allowed</p>
    </>
  }
  if (isLoading) {
    return <>
      {/* <LinearProgress></LinearProgress> */}
    </>
  }

  return <>
    <Container maxWidth="xl" sx={{mt: 2, px:2, py:3, bgcolor: 'background.container', borderRadius: 2}} >
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid 
        container item xs={12} md={6} alignItems="center" direction="column">
          <Avatar alt="" src={userData.image} sx={{ width: 175, height: 175 }}/><br/>
          <Typography variant="h5">User: {userData.name}</Typography>
          <Typography variant="h5">Email: {userData.email}</Typography>
          <AchievementsDialog></AchievementsDialog>
        </Grid>
        <Grid item xs={12} md={6}>
        <Typography variant="h5">Your posts</Typography>
          {userPosts ? <PostsList posts={userPosts} />: <CircularProgress />}
          {Array.isArray(userPosts) && userPosts.length === 0 && <Typography variant="h5">You don't have any posts yet!</Typography> }
          <Typography sx={{mt:5}} variant="h5">Your Domain Reviews</Typography>
          {session.role === "specialist" &&
            userData.domainReviews.length !== 0 ? 
            <ReviewsList reviews={userData.domainReviews} getProfileData={getProfileData}></ReviewsList> : 
            <Typography variant="h5">You don't have any posts yet!</Typography>
          }
        </Grid>
        <Grid item xs={12} md={6}>
          
        </Grid>
      </Grid>
    </Container>

  </>
};