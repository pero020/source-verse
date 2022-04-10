import ResponsiveAppBar from "./ResponsiveAppBar"

import { useSession } from "next-auth/react"

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
      <ResponsiveAppBar></ResponsiveAppBar>
      <Container maxWidth="xl">
        <main>{children}</main>
      </Container>
    </>
  )
}