import { getProviders, signIn } from "next-auth/react"

import { Button, Container, Stack, Typography } from "@mui/material"

export default function SignIn({ providers }) {
  const google = providers.google
  return (
    <>
      <Container maxWidth="sm" sx={{mt: 2, px:2, py:3, bgcolor: "primary.main", borderRadius: 2}} >
      <Stack
      justifyContent="center"
      alignItems="center"
      >

      <Typography variant="h2" sx={{color:"background.contrastColor", textDecoration:'underline', textDecorationColor:'#52D17B', textUnderlineOffset:"5px", mb: 5}}>Welcome!</Typography>
      <Typography sx={{mb: 5}} variant="h5" color="text.softWhite">Use your Google account for maximum security</Typography>

      <Button color="success" variant="contained" onClick={() => signIn(google.id)}>
        Continue with {google.name}
      </Button>
      <Typography sx={{mt: 1}} variant="body2" color="text.softWhite">Dont have a Google account? Create one <a style={{color: "#52d17b", textDecoration: "none"}} href="https://support.google.com/accounts/answer/27441?hl=en">here</a> in under 5 minutes</Typography>
      <Typography sx={{mt: 5}} variant="body1" color="text.softWhite">Want to become a <em style={{color: "#52d17b"}}>specialist</em> ? Contact us at <em style={{color: "#52d17b"}}>sourceverse@gmail.com</em></Typography>
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