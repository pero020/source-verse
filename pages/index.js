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
import { Button } from "@mui/material";
import { Avatar } from "@mui/material";


export default function Home() {
  const { data: session, status } = useSession();

   function detectMob() {
    return ( ( window.innerWidth <= 900 ) && ( window.innerHeight <= 1000 ) );
  }
  const isMobile = detectMob()

 
 
    return <>
    {status === "authenticated" ? <Stack
    justifyContent="center"
    alignItems="center"
    spacing={5}
    sx={{my:10}}>
      <Avatar src={session.user.image} sx={{width: 150, height: 150}}></Avatar>
      <Typography sx={{color:"background.contrastColor"}} variant="h3">Hello {session.user.name}</Typography>
      <Button variant="contained" color="success" size="large" href="/profile">Profile</Button> 
      
      

          </Stack> 
          
          : null
            
  }

      <Stack
      direction={{md:'row', xs:'column'}}
      justifyContent="space-evenly"
      alignItems="center"
      sx={{mt:{xs: 5, md: 15}}}
      mx={{xs:2}}
      >
        <Box>
          <Typography variant="h2" sx={{color: "background.contrastColor"}}>We authenticate solutions to <Typography variant="h2" sx={{color:'background.contrastColor', textDecoration:'underline', textDecorationColor:"#52d17b", display:'inline'}}>Your problems</Typography>.</Typography>
        </Box>
        
        <Box maxWidth={{md:'25%', xs:'100%'}} ml={{xs:-5}}>
          <Lottie isClickToPauseDisabled={true} options={{loop: true, autoplay: true, rendererSettings: {preserveAspectRatio: 'xMidYMid meet'}, animationData: exampleAnimationData,}}/>
        </Box>
        
      </Stack>

      <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      mt={{xs:10, md:0}}>

          <Button variant="contained" color="success" size="large" href="#explore">
            Explore
          </Button>
      
      </Stack>
<Box id="explore"></Box>
      <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{mt: {md:55, xs:20}}}
      mx={{xs:2}}
      >
        <Typography  variant="h2" sx={{color:"background.contrastColor", textDecoration:'underline', textDecorationColor:'#52D17B'}}>Ask, Answer, Achieve!</Typography>
      </Stack>

      <Stack
      direction={{xs:'column', md:'row'}}
      justifyContent="space-evenly"
      alignItems="center"
      sx={{mt:{xs: 0, md: 10}}}
      mx={{xs:2}}
      >

        <Box sx={{mb:5}} maxWidth={{xs:'70%', md:'25%'}}>
          <Lottie isClickToPauseDisabled={true} options={{loop: true, autoplay: true, rendererSettings: {preserveAspectRatio: 'xMidYMid meet'}, animationData: trophy,}}/>
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
      sx={{mt: {md:55, xs:20}}}
      mx={{xs:2}}
      >

        <Typography variant="h2" sx={{color:"background.contrastColor", textDecoration:'underline', textDecorationColor:'#52D17B'}}>Get feedback from Specialists.</Typography>
        
      </Stack>
        
      <Stack
      direction={{md:'row', xs:'column'}}
      justifyContent="space-evenly"
      alignItems="center"
      sx={{mt:10}}
      mx={{xs:2}}
      >
        <Box>
          <Typography variant="h4" sx={{color:"background.contrastColor", maxWidth:720}}>Connect with our <Typography variant="h4" bgcolor="yellow" borderRadius={2} sx={{color:'black', display:'inline'}}>most reputable Specialists</Typography> dedicated to providing concrete results.</Typography>
        </Box>
        <Box maxWidth={{md:'25%', xs:'100%'}}>
          <Lottie isClickToPauseDisabled={true} options={{loop: true, autoplay: true, rendererSettings: {preserveAspectRatio: 'xMidYMid meet'}, animationData: specialist}}/>
        </Box>

        
      </Stack>
      <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      mt={{xs:10}}>

          <Button variant="contained" color="success" size="large" href="/q&a/private">
            Connect
          </Button>
      
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
        sx={{mt: {md:55, xs:25}}}
        mx={{xs:2}}
        >
          <Typography variant="h2" sx={{color:"background.contrastColor", textDecoration:'underline', textDecorationColor:'#52D17B'}}>Improve Your digital literacy.</Typography>
        </Stack>

        <Stack
        direction={{md:'row', xs:'column'}}
        justifyContent="space-evenly"
        alignItems="center"
        sx={{mt:10}}
        mx={{xs:2}}
        >
          <Box>
            <Typography variant="h4" sx={{color:"background.contrastColor", maxWidth:'800px'}}>Learn how to <Typography variant="h4" bgcolor="yellow" borderRadius={2} sx={{width:'210px', color:'black', display:'inline'}}>find trustworthy information</Typography> in the evermore growing pile of questionable data.</Typography>  
          </Box>
          <Box maxWidth={{md:'25%', xs:'100%'}} mr={{xs: 2}}>
            <Lottie isClickToPauseDisabled={true} options={{loop: true, autoplay: true, rendererSettings: {preserveAspectRatio: 'xMidYMid meet'}, animationData:information}}/>
          </Box>
        </Stack>

  </Stack>
  <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      mt={{xs:0, md:10}}>

          <Button variant="contained" color="success" size="large" href="/learn">
            Guide
          </Button>
      
      </Stack>
  <Stack
  direction="row"
  justifyContent={{md:'center', xs:'center'}}
  alignItems="flex-start"
  sx={{mt: {md:55, xs:25}}}
  
  
  >
    <Typography variant="h2" sx={{color:"background.contrastColor", textDecoration:'underline', textDecorationColor:'#52D17B'}}>FAQ</Typography>
  </Stack>

  <Stack
  direction="column"
  justifyContent="flex-start"
  alignItems="center"
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

 


