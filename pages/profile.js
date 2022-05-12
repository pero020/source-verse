import { useState, useEffect} from "react"
import { useSession } from "next-auth/react"
import Image from "next/image";
import CircularProgress from '@mui/material/CircularProgress';
import StatsDialog from "/components/StatsDialog";
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid'
import PostsList from "/components/PostsList"
import Typography from '@mui/material/Typography';
import { Container } from "@mui/material";
import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import ReviewsList from "/components/ReviewsList"
import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress'
import { Chip } from '@mui/material'

export default function Profile(props) {
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
      <LinearProgress></LinearProgress>
      {/* <Container maxWidth="xl" sx={{mt: 2, px:2, py:3, bgcolor: 'background.container', borderRadius: 2}} >
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
            {session.role === "specialist" ?
              userData.domainReviews.length !== 0 ?
              <Box>
                <ReviewsList reviews={userData.domainReviews} getProfileData={getProfileData}></ReviewsList> : 
                
              </Box> :
              <Typography variant="h5" color="backgound.contrastColor">You don't have any Reviews yet!</Typography>
            :
            null
            }
          </Grid>
        </Grid>
      </Container> */}

    </>
  }




  return <>

  <Container maxWidth="xl" sx={{mt: 2, px:2, py:3, borderRadius: 2}} >
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid 
          container item xs={12} md={6} alignItems="center" direction="column">
            <Avatar alt="" src={userData.image} sx={{ width: 175, height: 175 }}/><br/>
            <Typography variant="h5" color="background.contrastColor">{userData.name}</Typography>
            <Typography variant="h5" color="background.contrastColor">{userData.email}</Typography>
            <Typography variant="h5" color="background.contrastColor">Score: {userData.stats.score}</Typography>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Box>
                <Typography variant="h5" color="background.contrastColor">Rank: {userData.rank.name}</Typography>
              </Box>
              <Box>
                <Image src={"/badges/" + userData.rank.badge + ".png"} width="50" height="50"></Image>
              </Box>
              
            </Stack>
            <StatsDialog userData={userData}></StatsDialog>

          </Grid>
          <Grid item xs={12} md={6}>
          {(session.role === "user" || session.role === "admin") &&
            <Box>
              <Box>
                <Typography variant="h4" sx={{color:"background.contrastColor", textDecoration:'underline', textDecorationColor:"#52d17b", mb: 2}}>Your Achievements: </Typography>
              </Box>
              <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={5}
              >
              <Box>
                <Image src="/Achievements/a1.png" width="100" height="100"></Image>
              </Box>
              <Box>
                <Image src="/Achievements/a1.png" width="100" height="100"></Image>
              </Box>
              <Box>
                <Image src="/Achievements/a1.png" width="100" height="100"></Image>
              </Box>
              </Stack>
            </Box>
          }
          <Typography variant="h4" color="background.contrastColor" sx={{color:"background.contrastColor", textDecoration:'underline', textDecorationColor:"#52d17b", mt: 5, mb: 2}}>Your posts</Typography>
            {userPosts ? <PostsList posts={userPosts} />: <CircularProgress />}
            {/* {Array.isArray(userPosts) && userPosts.length === 0 && <Typography variant="h5">You don't have any posts yet!</Typography> } */}
            {session.role === "specialist" ?
              userData.domainReviews.length !== 0 ?
              <Box>
                <Typography sx={{color:"background.contrastColor", textDecoration:'underline', textDecorationColor:"#52d17b", mt: 5, mb: 2}} color="background.contrastColor" variant="h4">Your Domain Reviews</Typography>
                <ReviewsList reviews={userData.domainReviews} getProfileData={getProfileData}></ReviewsList> : 
              </Box> :
              <Typography variant="h5" color="backgound.contrastColor">You don't have any Reviews yet!</Typography>
            :
            null
            }
          </Grid>
        </Grid>
      </Container>

    {/* <Stack
direction={{xs:'column', md:'row'}}
justifyContent="space-evenly"
alignItems={{xs:'center', md:'flex-start'}}
sx={{mt:{xs:25}, mx: {xs: 2, md: 30}}}
spacing={30}
>

      <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={10}
      >

          <Box>
            <Avatar alt="" src={userData.image} sx={{ width: 175, height: 175 }}/>
            <Typography variant="h4" sx={{color:"background.contrastColor", mt:4}}>{userData.name}</Typography>
          </Box>
          {session.role === "specialist" && 
          <Box>
            <Typography variant="h4" sx={{color:"background.contrastColor", textDecoration:'underline', textDecorationColor:"#52d17b", mb: 2}}>Specialist in: </Typography>
            <Typography variant="h5" sx={{color:"background.contrastColor"}}>{userData.category}</Typography>
          </Box>
          }

         

          

      </Stack>

      <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={20}
      sx={{mb:20}}
      >

      
        

          <Stack
      direction="column"
      justifyContent="center"
      alignItems="flext-start"
      spacing={5}
      >
          <Typography variant="h4" sx={{color:"background.contrastColor",textDecoration:'underline', textDecorationColor:"#52d17b", mb: 2}}>Your posts</Typography>
          {userPosts ? <PostsList posts={userPosts} />: <CircularProgress />}
          {Array.isArray(userPosts) && userPosts.length === 0 && <Typography variant="h5">You don't have any posts yet!</Typography> }
        </Stack>
      </Stack>

      <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={3}
      >

      {session.role === "user" || session.role === "admin" &&
      <Box>
        <Box>
          <Typography variant="h4" sx={{color:"background.contrastColor", textDecoration:'underline', textDecorationColor:"#52d17b", mb: 2}}>Your Achievements: </Typography>
        </Box>
        <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={5}
        >
        <Box>
          <Image src="/Achievements/a1.png" width="100" height="100"></Image>
        </Box>
        <Box>
          <Image src="/Achievements/a1.png" width="100" height="100"></Image>
        </Box>
        <Box>
          <Image src="/Achievements/a1.png" width="100" height="100"></Image>
        </Box>
        </Stack>
      </Box>
      }
      {session.role === "specialist" ?
      <>
      <Typography variant="h4" color="background.contrastColor" sx={{textDecoration:'underline', textDecorationColor:"#52d17b"}}>Your Domain Reviews</Typography>
        {userData.domainReviews.length !== 0 ?
        <Box>

          <ReviewsList reviews={userData.domainReviews} getProfileData={getProfileData}></ReviewsList> : 
          
        </Box> :
        <Typography variant="h5" color="backgound.contrastColor">You don't have any Reviews yet!</Typography>}
      </>
      :
      null
      
      }
      

      </Stack>

</Stack> */}


    

    

  </>
};