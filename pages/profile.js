import { useState, useEffect} from "react"
import { useSession } from "next-auth/react"
import Image from "next/image";
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';
import DraggableDialog from "../components/Dialog";
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid'
import PostsList from "/components/PostsList"
import FixedBottomNavigation from "../components/FixedBottomNav";

export default function Profile() {
  const { data: session } = useSession()
  const [userData, setUserData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [userPosts, setUserPosts] = useState(null)

  useEffect(() => {
    async function getProfileData() {
      const res = await fetch("api/getUser/" + session.user.email);
      const data = await res.json();
      setUserData(data)
      setIsLoading(false)
    }
    async function getPosts() {
      const res = await fetch("api/posts/allFromUser/" + session.user.email);
      const data = await res.json();
      setUserPosts(data)
    }
    if (session) {
      getProfileData()
      getPosts()
      console.log(userPosts)
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
      <Grid container spacing={2}>
        <Grid item sm={12} md={6}>
          <Avatar alt="" src={userData.image} />
          <h2>User: {userData.name}</h2>
          <h2>Email: {userData.email}</h2>
          <DraggableDialog></DraggableDialog>
        </Grid>
        <Grid item sm={12} md={6}>
          <h2>Your Posts</h2>
          {userPosts ? <PostsList posts={userPosts} />: <CircularProgress />}
          {Array.isArray(userPosts) && userPosts.length === 0 && <h2>You don't have any posts yet!</h2> }
        </Grid>
      </Grid>

    <FixedBottomNavigation></FixedBottomNavigation>
    
  </>
};