import { useSession } from "next-auth/react"
import { Container } from "@mui/material";
import NewDomainReviewForm from "/components/NewDomainReviewForm"

export default function Admin() {
  const { data: session } = useSession()

  if (session.role !== "specialist") {
    return <>
    <Container maxWidth="xl" sx={{mt: 2, px:2, py:3, bgcolor: 'background.container', borderRadius: 2}} >
      <p>Access not allowed</p>
    </Container>
    </>
  }

  return <>
  <Container maxWidth="xl" sx={{mt: 2, px:2, py:3, bgcolor: 'background.container', borderRadius: 2}} >
    <h1>New Domain Review</h1>
    <NewDomainReviewForm></NewDomainReviewForm>
  </Container>
  </>
};