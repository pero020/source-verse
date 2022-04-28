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
    <div style={{width: 100}}></div>
    <LinearProgress />
    </>
  }
  return (
    <>   
<Box style={{width: '100%',height:'100vh', background: 'linear-gradient(to right,  #00C0A1, #52D17B)'}}>
      <ResponsiveAppBar sx={{color: "secondary.main"}}></ResponsiveAppBar>
      <main>{children}</main>
      </Box>
    </>
  )
}