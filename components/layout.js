import ResponsiveAppBar from "./ResponsiveAppBar"
import { useSession } from "next-auth/react"
import { Paper } from "@mui/material";
import LinearProgress from '@mui/material/LinearProgress';
import Container from '@mui/material/Container';
import { Box } from "@mui/system";




export default function Layout({ children }) {
  const { status } = useSession()

  if (status==="loading") {
    return <>
    <LinearProgress />
    </>
  }
  return (
    <>   
      <Box style={{width: '100%', minHeight:'100vh', background: `linear-gradient(to right, #00C0A1,  #52D17B)`}}>
        <ResponsiveAppBar sx={{color: "secondary.main"}}></ResponsiveAppBar>
        <main>{children}</main>
        <div style={{height: "64px", width: '100%'}}></div> 
        {/* div je placeholder za buduci footer */}
      </Box>
    </>
  )
}