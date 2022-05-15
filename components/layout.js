import ResponsiveAppBar from "./ResponsiveAppBar"
import { useSession } from "next-auth/react"
import { Paper } from "@mui/material";
import LinearProgress from '@mui/material/LinearProgress';
import Container from '@mui/material/Container';
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { Stack } from "@mui/material";

import Footer from "/components/Footer"


export default function Layout({ children }) {
  const { status } = useSession()

  if (status==="loading") {
    return <>
    <LinearProgress />
    </>
  }
  return (
    <>   
    <Box sx={{minHeight: "88vh"}}>
      <ResponsiveAppBar sx={{color: "secondary.main"}}></ResponsiveAppBar>
      <main>{children}</main>
    </Box>
    <Footer></Footer>
    </>
  )
}