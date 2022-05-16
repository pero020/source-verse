import { useState, useEffect} from "react"
import { useSession } from "next-auth/react"
import Image from "next/image";
import CircularProgress from '@mui/material/CircularProgress';
import StatsDialog from "/components/StatsDialog";
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid'
import PostsList from "/components/PostsList"
import Typography from '@mui/material/Typography';
import { Container, ListItemSecondaryAction } from "@mui/material";
import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import { Button, IconButton } from "@mui/material";
import ReviewsList from "/components/ReviewsList"
import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress'
import { Chip } from '@mui/material'
import styled from "@emotion/styled";
import EditIcon from '@mui/icons-material/Edit';

import EditUsernameDialog from "/components/profile/EditUsernameDialog"
import SpecialistQuestionsList from "/components/SpecialistQuestionsList"



export default function Profile(props) {
  const { data: session } = useSession()
  const [userData, setUserData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [userPosts, setUserPosts] = useState(null)
  const[specialistQuestions, setSpecialistQuestions] = useState(null)

  const getProfileData = async () => {
    const res = await fetch("api/getUser/" + session.user.email);
    const data = await res.json();
    setUserData(data)
    setIsLoading(false)
  }

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
  }));

  const styles = {
    root: {
      flexGrow: 1
    },
    colorPrimary: {
      background: 'green'
    }
  };

  async function getPosts() {
    const res = await fetch("api/posts/allFromUser/" + session.user.email);
    if (!res.ok) {
      return 1
    }
    const data = await res.json();
      setUserPosts(data)
  }

  async function getSpecialistQuestionsSpecialist() {
    const res = await fetch("api/specialists/getUserQuestions/");
    if (!res.ok) {
      return 1
    }
    const data = await res.json();
      setSpecialistQuestions(data)
  }

  async function getSpecialistQuestionsUser() {
    const res = await fetch("api/specialists/getUserQuestions/");
    if (!res.ok) {
      return 1
    }
    const data = await res.json();
      setSpecialistQuestions(data)
  }

  useEffect(() => {
    if (session) {
      getProfileData()
      getPosts()
      if (session.role === "specialist") {
        getSpecialistQuestionsSpecialist()
      } else {
        getSpecialistQuestionsUser()
      }
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
    </>
  }

  let current = userData.stats.score;
  let novimax = null;



  function leftToGo()
  {
    return novimax-current;
  }

  function updateMax()
  {
    let lastLvl = null;

    if(current>=1000)
    {
      novimax=999999; {/*maximalni level */}
      lastLvl = 1000;
    }
    else if(current >= 600)
    {
      lastLvl = 600;
      novimax=1000;
    }
    else if(current >= 400)
    {
      lastLvl = 400;
      novimax=600;
    }
    else if(current >= 250)
    {
      lastLvl = 250;
      novimax=400;
    }
    else if(current >= 150)
    {
      lastLvl = 150;
      novimax=250;
    }else if(current >= 100)
    {
      lastLvl = 100;
      novimax=150;
    }else if(current >= 50)
    {
      lastLvl = 50;
      novimax=100;
    }else if(current >= 25)
    {
      lastLvl = 25;
      novimax=50;
    }else if(current >= 10)
    {
      lastLvl = 10;
      novimax=25;
    }else
    {
      lastLvl = 0;
      novimax=10;
    }
    return (current-lastLvl)/(novimax-lastLvl)*100;
  }


  return <>

  <Container maxWidth="xl" sx={{mt: 2, px:2, py:3, borderRadius: 2}} >
    <Grid container spacing={4} alignItems="center" justifyContent="center">
      <Grid 
      container item xs={12} md={6} alignItems="center" direction="column">
        <Avatar alt="" src={userData.image} sx={{ width: 175, height: 175 }}/><br/>
        <Stack direction="row" sx={{ml:4}} alignItems="center">
          <Typography sx={{display: "inline"}} variant="h5" color="background.contrastColor">{userData.name}</Typography>
          <EditUsernameDialog getProfileData={getProfileData}></EditUsernameDialog>
        </Stack>
        <Typography sx={{mb:2}} variant="h5" color="background.contrastColor">{userData.email}</Typography>
        {userData.role === "specialist" && <Typography variant="h5" color="background.contrastColor">Category: {userData.category}</Typography>}
        {userData.role === "specialist" && <Typography variant="h5" color="background.contrastColor">Answer price: {userData.answerCost} {userData.answerCost === 1 ? "Coin" : "Coins"} </Typography>}
        {userData.role !== "specialist" &&
        <Stack direction="row" alignItems="center" spacing={2} sx={{mt:2}}>
          <Typography sx={{display: "inline"}} variant="h5" color="background.contrastColor">Coins: {userData.coins}</Typography>
          <Button href="/getCoins" sx={{borderRadius: 2}} variant="contained" color="secondary" >Buy Coins</Button>
        </Stack>
        }

        <Stack direction="row" alignItems="center" spacing={1} sx={{mt:5}}>
          <Box>
            <Typography variant="h5" color="background.contrastColor">Rank: {userData.rank.name}</Typography>
          </Box>
          <Box>
            <Image src={"/badges/" + userData.rank.badge + ".svg"} width="50" height="50"></Image>
          </Box>
          
        </Stack>
        <Box sx={{ width: '70%' }}>
            <BorderLinearProgress size={10} sx={{mb:1}} color="secondary" variant="determinate" value={updateMax()}/>
          </Box>
          <Box>
            <Typography color="background.contrastColor">{leftToGo() === 1 ? leftToGo() + " point until the next rank!" : leftToGo() + " points until the next rank!"}</Typography>
          </Box>
          
        <StatsDialog userData={userData}></StatsDialog>
        
      </Grid>
      <Grid item xs={12} md={6}>
      <Typography variant="h4" color="background.contrastColor" sx={{color:"background.contrastColor", textDecoration:'underline', textDecorationColor:"#52d17b", mt: 5, mb: 2}}>Your posts</Typography>
        {userPosts ? <PostsList posts={userPosts} />: <CircularProgress />}
        {/* {Array.isArray(userPosts) && userPosts.length === 0 && <Typography variant="h5">You don't have any posts yet!</Typography> } */}
        {session.role === "specialist" &&
        ( userData.domainReviews.length !== 0 ?
        <Box>
          <Typography sx={{color:"background.contrastColor", textDecoration:'underline', textDecorationColor:"#52d17b", mt: 5, mb: 2}} color="background.contrastColor" variant="h4">Your Domain Reviews</Typography>
          <ReviewsList reviews={userData.domainReviews} getProfileData={getProfileData}></ReviewsList> : 
        </Box> :
        <Typography variant="h5" color="background.contrastColor">You don't have any Reviews yet!</Typography>
        )
        }
        {specialistQuestions && session.role === "specialist" &&
        ( userData.mySpecialistQuestions.length !== 0 ?
        <Box>
          <Typography sx={{color:"background.contrastColor", textDecoration:'underline', textDecorationColor:"#52d17b", mt: 5, mb: 2}} color="background.contrastColor" variant="h4">Specialist Questions to answer</Typography>
          <SpecialistQuestionsList questions={specialistQuestions.filter(question => !question.answered)}></SpecialistQuestionsList>
        </Box> :
        <Typography variant="h5" color="background.contrastColor">No Specialist Questions yet!</Typography>
        )
        }
        {specialistQuestions && session.role !== "specialist" &&
        ( specialistQuestions.length !== 0 ?
        <Box>
          <Typography sx={{color:"background.contrastColor", textDecoration:'underline', textDecorationColor:"#52d17b", mt: 5, mb: 2}} color="background.contrastColor" variant="h4">Specialist Questions</Typography>
          <SpecialistQuestionsList questions={specialistQuestions}></SpecialistQuestionsList>
        </Box> :
        <Typography variant="h5" color="background.contrastColor">No Specialist Questions yet!</Typography>
        )
        }
      </Grid>
    </Grid>
  </Container>

  </>
};