import ResponsiveAppBar from "./ResponsiveAppBar"

import { useSession } from "next-auth/react"

import LinearProgress from '@mui/material/LinearProgress';



export default function Layout({ children }) {
  const { data: session } = useSession()

  if (!session) {
    return <>
    <div style={{width: 100}}></div>
    <LinearProgress />
    </>
  }
  return (
    <>
      <ResponsiveAppBar></ResponsiveAppBar>
      <main>{children}</main>
    </>
  )
}