import ResponsiveAppBar from "./ResponsiveAppBar"
import { useSession } from "next-auth/react"
import { Paper } from "@mui/material";
import LinearProgress from '@mui/material/LinearProgress';
import Container from '@mui/material/Container';
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { Stack } from "@mui/material";


export default function Layout({ children }) {
  const { status } = useSession()

  if (status==="loading") {
    return <>
    <LinearProgress />
    </>
  }
  return (
    <>   
      <ResponsiveAppBar sx={{color: "secondary.main"}}></ResponsiveAppBar>
      <main>{children}</main>
      
      {/* <div style={{height: "40px", width: '100%',backgroundColor:'black'}}>
      <Stack direction="row"
      justifyContent="center"
      alignItems="flex-end"
      sx={{mt:10}}>
        <Typography sx={{color:"background.contrastColor", mt:1}}>
          Copyright © 2022 Team Vision All rights reserved.
        </Typography>
        </Stack>
        </div> */}
    </>
  )
}