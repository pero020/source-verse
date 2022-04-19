import ResponsiveAppBar from "./ResponsiveAppBar"
import { useSession } from "next-auth/react"
import { Paper } from "@mui/material";
import LinearProgress from '@mui/material/LinearProgress';
import Container from '@mui/material/Container';




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
    
      <ResponsiveAppBar sx={{color: "secondary.main"}}></ResponsiveAppBar>
      <Container maxWidth="xl" disableGutters sx={{mt:2, px:1}} >
        <main>{children}</main>
      </Container>
      
    </>
  )
}