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


export default function Home() {
  const { data: session, status } = useSession();
  if (status === "authenticated") {
    return <>
    <Container maxWidth="xl" sx={{mt: 2, px:2, py:3, bgcolor: 'background.container', borderRadius: 2}} >
      <h1>Hello {session.user.name}</h1>
      <img src={session.user.image} ></img>
      </Container>
    </>
  }
  return <>


<Container maxWidth="xl" sx={{mt: 2, px:2, py:3, bgcolor: 'background.container', borderRadius: 2}} >
    <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center">
       <Typography variant="h2">Welcome to</Typography>
      <Image src="/logo.png" width="500" height="200"></Image>

      <Typography>Check out "Learn" and "FAQ" sections for more information.</Typography>

      
    </Grid>
  </Container>
 
    
  </>

}
