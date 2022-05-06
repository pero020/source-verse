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
direction="column"
justifyContent="center"
alignItems="center"
spacing={{md:20, xs:10}}
>
           
        <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        spacing={{md:12, xs:-50}}>

            <Typography variant="h2" sx={{color:'white'}}>We authenticate solutions to <Typography variant="h2" sx={{color:'white', textDecoration:'underline', textDecorationColor:'#52D17B', display:'inline'}}>Your problems</Typography>.</Typography>

            <Lottie options={{loop: true, autoplay: true, animationData: exampleAnimationData,}} height={700} width={700}/>
        </Stack>


      <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={0}
      >
    

        <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={70}
        >

          <Typography variant="h2" sx={{color:'white', textDecoration:'underline', textDecorationColor:'#52D17B'}}>Ask, Answer, Achieve!</Typography>
          <Box></Box>
        
        </Stack>

        <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={15}
        >

            <Lottie options={{loop: true, autoplay: true, animationData: trophy,}} height={400} width={400}/>


            <Stack direction="column" justifyContent="center" alignItems="flex-start" spacing={5}>
                <Typography variant="h4" sx={{color:'white', width:'400px'}}>Choose a topic of Your interest, submit a solution and get rewarded for Your effort.</Typography>
                <Typography variant="h4" sx={{color:'white',width:'400px'}}><Typography variant="h4" bgcolor="yellow" borderRadius={2} sx={{width:'210px', color:'black', display:'inline'}}>Earn Achievements</Typography> and display them on Your profile.</Typography>
            </Stack>
        </Stack>
        
</Stack>



          <Stack
  direction="column"
  justifyContent="center"
  alignItems="center"
  spacing={-5}
  >

        <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={70}
        >

            <Typography variant="h2" sx={{color:'white', textDecoration:'underline', textDecorationColor:'#52D17B'}}>Get feedback from Specialists.</Typography>
            <Box></Box>
        
        </Stack>
        
        <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={15}
        >

            <Stack direction="column" justifyContent="center" alignItems="flex-start" spacing={5}>
                <Typography variant="h4" sx={{color:'white',width:'700px'}}>Connect with our <Typography variant="h4" bgcolor="yellow" borderRadius={2} sx={{width:'210px', color:'black', display:'inline'}}>most reputable Specialists</Typography> dedicated to providing concrete results.</Typography>
            </Stack>
            <Lottie options={{loop: true, autoplay: true, animationData: specialist}} height={700} width={700}/>
        </Stack>
  </Stack>

  <Stack
  direction="column"
  justifyContent="center"
  alignItems="center"
  spacing={-5}
  >

        <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={70}
        >
            <Typography variant="h2" sx={{color:'white', textDecoration:'underline', textDecorationColor:'#52D17B'}}>Improve Your digital literacy.</Typography>
            <Box></Box>
        
        </Stack>

        <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={0}
        >

            <Stack direction="column" justifyContent="center" alignItems="flex-start" spacing={5}>
                <Typography variant="h4" sx={{color:'white',width:'700px'}}>Connect with our <Typography variant="h4" bgcolor="yellow" borderRadius={2} sx={{width:'210px', color:'black', display:'inline'}}>most reputable Specialists</Typography> dedicated to providing concrete results.</Typography>
            </Stack>
            <Lottie options={{loop: true, autoplay: true, animationData:information}} height={700} width={700}/>
        </Stack>

  </Stack>

  <Stack
  direction="column"
  justifyContent="center"
  alignItems="flex-start"
  spacing={3}
 
  >
        <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={70}
        
        >
            <Typography variant="h2" sx={{color:'white', textDecoration:'underline', textDecorationColor:'#52D17B'}}>FAQ</Typography>
            <Box></Box><Box></Box>
        </Stack>

        <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={5}
      >
                  <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={1}
            >

                    <Typography variant="h4" sx={{color:'white'}}>1. Why are we here?</Typography>
                    <Typography variant="h5" sx={{color:'white'}}>Learn how to find trustworthy information in the evermore growing pile of questionable data.</Typography>
            </Stack>
      </Stack>

      <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={5}
      >
                  <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={1}
            >

                    <Typography variant="h4" sx={{color:'white'}}>2. What is the point of life ?</Typography>
                    <Typography variant="h5" sx={{color:'white'}}>Learn how to find trustworthy information in the evermore growing pile of questionable data.</Typography>
            </Stack>
      </Stack>

      <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={5}
      >
                  <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={1}
            >

                    <Typography variant="h4" sx={{color:'white'}}>3. What is the point of life ?</Typography>
                    <Typography variant="h5" sx={{color:'white'}}>Learn how to find trustworthy information in the evermore growing pile of questionable data.</Typography>
            </Stack>
      </Stack>

      <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={5}
      >
                  <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={1}
            >

                    <Typography variant="h4" sx={{color:'white'}}>4. What is the point of life ?</Typography>
                    <Typography variant="h5" sx={{color:'white'}}>Learn how to find trustworthy information in the evermore growing pile of questionable data.</Typography>
            </Stack>
      </Stack>
  </Stack>

 
  
</Stack>




    </>
  }

 


