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
  if(window.location.href == "http://sourced-info.herokuapp.com/" || window.location.href == "http://localhost:3000/")
  {
    return <>
    <Paper style={{background: "linear-gradient(#696363, #64e38d, #696363)"}} height="500">
    <ResponsiveAppBar sx={{color: "secondary.main"}}></ResponsiveAppBar>
      
        <main>{children}</main>
      
      </Paper>
    </>
  }

  return (
    <>   
   <Paper style={{background: "linear-gradient(#696363, #64e38d)", minHeight: "100vh"}} >
      
      <ResponsiveAppBar sx={{color: "secondary.main"}}></ResponsiveAppBar>
      
        <main>{children}</main>
      
      
     </Paper>
    </>
  )
}