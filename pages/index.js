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
    <Container maxWidth="xl" width="100%" sx={{mt:2}} style={{height: "100vh"}}>
      <h1>Hello {session.user.name}</h1>
      <img src={session.user.image} ></img>
      </Container>
    </>
  }
  return <>

    
    <Container style={{minWidth: "100%", height: "400vh"}}> 
    <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center">
       <h1>Welcome to</h1>
      <Image src="/logo.png" width="500" height="200"></Image>

     

      
    </Grid>
    </Container>
    
    
  </>

}
