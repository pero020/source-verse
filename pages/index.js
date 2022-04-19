import { LogoDev } from "@mui/icons-material";
import { useSession } from "next-auth/react"
import Image from "next/image";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import Demo from "/components/indexDemo/Demo"
import React from 'react';
import { Paper } from "@mui/material";
import { Container } from "@mui/material";

export default function Home() {
  const { data: session, status } = useSession();
  if (status === "authenticated") {
    return <>
    <Container maxWidth="xl" sx={{mt:2, px:1}} >
      <h1>Hello {session.user.name}</h1>
      <img src={session.user.image} ></img>
      </Container>
    </>
  }
  return <>

    
<Container maxWidth="xl" sx={{mt:2, px:1}} >
    <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center">
       <Typography variant="h2">Welcome to</Typography>
      <Image src="/logo.png" width="500" height="200"></Image>

     

      
    </Grid>
  </Container>
    
    
  </>

}
