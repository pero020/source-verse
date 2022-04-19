import { useSession } from "next-auth/react"
import { Container } from "@mui/material"

export default function Admin() {
  const { data: session } = useSession()

  if (session.role !== "admin") {
    return <>
    <Container maxWidth="xl" sx={{mt:2, px:1}} >
      <p>Access not allowed</p>
    </Container>
    </>
  }

  return <>
  <Container maxWidth="xl" sx={{mt:2, px:1}} >
    <h1>Admin Page</h1>
  </Container>
  </>
};