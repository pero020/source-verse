import { LogoDev } from "@mui/icons-material";
import { useSession } from "next-auth/react"
import Image from "next/image";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import Demo from "/components/indexDemo/Demo"

export default function Home() {
  const { data: session, status } = useSession();
  if (status === "authenticated") {
    return <>
      <h1>Hello {session.user.name}</h1>
      <img src={session.user.image} ></img>

    </>
  }
  return <>
   
    <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    >
       <h1>Welcome to</h1>
      <Image src="/logo.svg" width="500" height="300"></Image>
    </Grid>

  </>

}
