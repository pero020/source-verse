import { useSession } from "next-auth/react"
import { Container } from "@mui/material"

export default function Admin() {
  const { data: session } = useSession()

  if (session.role !== "admin") {
    return <>
    <Container maxWidth="xl" width="100%" sx={{mt:2}} >
      <p>Access not allowed</p>
      </Container>
    </>
  }

  return <>
  <Container maxWidth="xl" width="100%" sx={{mt:2}} >
    <h1>Admin Page</h1>
    </Container>
  </>
};