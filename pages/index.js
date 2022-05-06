import { LogoDev } from "@mui/icons-material";
import { useSession } from "next-auth/react"
import Image from "next/image";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import Demo from "/components/indexDemo/Demo"
import React from 'react';
import { Paper } from "@mui/material";
import { Container } from "@mui/material";
import { Chip } from "@mui/material";
import Lottie from 'react-lottie'
import exampleAnimationData from '/public/lotties/animacija';
import trophy from '/public/lotties/trophy';
import specialist from '/public/lotties/specialist';
import information from '/public/lotties/information';
import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import { positions } from '@mui/system';
import { BottomNavigation } from "@mui/material";

export default function Home() {
  const { data: session, status } = useSession();

   function detectMob() {
    return ( ( window.innerWidth <= 900 ) && ( window.innerHeight <= 1000 ) );
  }
  const isMobile = detectMob()

  if (status === "authenticated") {
    return <>
    <Container maxWidth="xl" sx={{mt: 2, px:2, py:3, bgcolor: 'background.container', borderRadius: 2}} >
      <h1>Hello {session.user.name}</h1>
      <img src={session.user.image} ></img>
      <Lottie options={{loop: true, autoplay: true, animationData: exampleAnimationData,}} height={100} width={200}/>
      </Container>
    </>
  }


    return <>
      <Stack
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
      sx={{mt:25}}
      >
        <Box>
          <Typography variant="h2" sx={{color: "background.contrastColor"}}>We authenticate solutions to <Typography variant="h2" sx={{color:'background.contrastColor', textDecoration:'underline', textDecorationColor:"#52d17b", display:'inline'}}>Your problems</Typography>.</Typography>
        </Box>
        <Box sx={{maxWidth:"25%"}}>
          <Lottie options={{loop: true, autoplay: true, rendererSettings: {preserveAspectRatio: 'xMidYMid meet'}, animationData: exampleAnimationData,}}/>
        </Box>
      </Stack>
      <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{mt:55}}
      >
        <Typography variant="h2" sx={{color:"background.contrastColor", textDecoration:'underline', textDecorationColor:'#52D17B'}}>Ask, Answer, Achieve!</Typography>
      </Stack>

      <Stack
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
      sx={{mt:10}}
      >

        <Box sx={{mb:5, maxWidth:"25%"}}>
          <Lottie options={{loop: true, autoplay: true, rendererSettings: {preserveAspectRatio: 'xMidYMid meet'}, animationData: trophy,}}/>
        </Box>
        <Box>
          <Typography variant="h4" sx={{color:"background.contrastColor", maxWidth:'400px'}}>Choose a topic of Your interest, submit a solution and get rewarded for Your effort.</Typography>
          <Typography variant="h4" sx={{color:"background.contrastColor",maxWidth:'400px'}}><Typography variant="h4" bgcolor="yellow" borderRadius={2} sx={{maxWidth:'210px', color:'black', display:'inline'}}>Earn Achievements</Typography> and display them on Your profile.</Typography>
        </Box>
        
      </Stack>



      <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{mt:55}}
      >

        <Typography variant="h2" sx={{color:"background.contrastColor", textDecoration:'underline', textDecorationColor:'#52D17B'}}>Get feedback from Specialists.</Typography>
        
      </Stack>
        
      <Stack
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
      sx={{mt:10}}
      >
        <Box>
          <Typography variant="h4" sx={{color:"background.contrastColor", maxWidth:720}}>Connect with our <Typography variant="h4" bgcolor="yellow" borderRadius={2} sx={{color:'black', display:'inline'}}>most reputable Specialists</Typography> dedicated to providing concrete results.</Typography>
        </Box>
        <Box sx={{maxWidth:"25%"}}>
          <Lottie options={{loop: true, autoplay: true, rendererSettings: {preserveAspectRatio: 'xMidYMid meet'}, animationData: specialist}}/>
        </Box>
      </Stack>

      <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      >

        <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{mt:55}}
        >
          <Typography variant="h2" sx={{color:"background.contrastColor", textDecoration:'underline', textDecorationColor:'#52D17B'}}>Improve Your digital literacy.</Typography>
        </Stack>

        <Stack
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        sx={{mt:10}}
        >
          <Box>
            <Typography variant="h4" sx={{color:"background.contrastColor", maxWidth:'720px'}}>Connect with our <Typography variant="h4" bgcolor="yellow" borderRadius={2} sx={{width:'210px', color:'black', display:'inline'}}>most reputable Specialists</Typography> dedicated to providing concrete results.</Typography>  
          </Box>
          <Box sx={{maxWidth:"25%"}}>
            <Lottie options={{loop: true, autoplay: true, rendererSettings: {preserveAspectRatio: 'xMidYMid meet'}, animationData:information}}/>
          </Box>
        </Stack>

  </Stack>
  
  <Stack
  direction="row"
  justifyContent="flex-start"
  alignItems="flex-start"
  sx={{mt:55, ml:2}}
 
  >
    <Typography variant="h2" sx={{color:"background.contrastColor", textDecoration:'underline', textDecorationColor:'#52D17B'}}>FAQ</Typography>
  </Stack>

  <Stack
  direction="column"
  justifyContent="flex-start"
  alignItems="flex-start"
  spacing={5}
  sx={{mt:5, ml:2}}
  >
    <Stack
    direction="column"
    justifyContent="center"
    alignItems="flex-start"
    spacing={1}
    >

      <Typography variant="h5" sx={{color:"background.contrastColor"}}>1. Why are we here?</Typography>
      <Typography variant="h6" sx={{color:"background.contrastColor"}}>Learn how to find trustworthy information in the evermore growing pile of questionable data.</Typography>
    </Stack>
    <Stack
    direction="column"
    justifyContent="center"
    alignItems="flex-start"
    spacing={1}
    >

      <Typography variant="h5" sx={{color:"background.contrastColor"}}>1. Why are we here?</Typography>
      <Typography variant="h6" sx={{color:"background.contrastColor"}}>Learn how to find trustworthy information in the evermore growing pile of questionable data.</Typography>
    </Stack>
    <Stack
    direction="column"
    justifyContent="center"
    alignItems="flex-start"
    spacing={1}
    >

      <Typography variant="h5" sx={{color:"background.contrastColor"}}>1. Why are we here?</Typography>
      <Typography variant="h6" sx={{color:"background.contrastColor"}}>Learn how to find trustworthy information in the evermore growing pile of questionable data.</Typography>
    </Stack>
    <Stack
    direction="column"
    justifyContent="center"
    alignItems="flex-start"
    spacing={1}
    >

      <Typography variant="h5" sx={{color:"background.contrastColor"}}>1. Why are we here?</Typography>
      <Typography variant="h6" sx={{color:"background.contrastColor"}}>Learn how to find trustworthy information in the evermore growing pile of questionable data.</Typography>
    </Stack>
    <Stack
    direction="column"
    justifyContent="center"
    alignItems="flex-start"
    spacing={1}
    >

      <Typography variant="h5" sx={{color:"background.contrastColor"}}>1. Why are we here?</Typography>
      <Typography variant="h6" sx={{color:"background.contrastColor"}}>Learn how to find trustworthy information in the evermore growing pile of questionable data.</Typography>
    </Stack>
  </Stack>

  </>
  }

 


