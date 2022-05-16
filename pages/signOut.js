import { getProviders, signOut } from "next-auth/react"
import Lottie from 'react-lottie'
import leaving from '/public/lotties/leaving';
import { Button, Container, Stack, Typography, Box } from "@mui/material"

export default function SignIn({ providers }) {
  const google = providers.google
  return (
    <>
      <Container maxWidth="sm" sx={{mt: 2, px:2, py:3, bgcolor: "primary.main", borderRadius: 2}} >
      <Stack
      justifyContent="center"
      alignItems="center"
      >

      <Typography variant="h2" sx={{color:"background.contrastColor", textDecoration:'underline', textDecorationColor:'#52D17B', textUnderlineOffset:"10px", mb: 5}}>See you soon!</Typography>
      <Box maxWidth={{md:'50%', xs:'100%'}} ml={{xs:0, md:-2}}>
          <Lottie isClickToPauseDisabled={true} options={{loop: true, autoplay: true, rendererSettings: {preserveAspectRatio: 'xMidYMid meet'}, animationData: leaving}}/>
        </Box>
      <Button color="success" variant="contained" onClick={() => signOut(google.id)}>
        Leave for now
      </Button>
      </Stack>
    </Container>
      
        
    </>
  )
}

export async function getServerSideProps(context) {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}