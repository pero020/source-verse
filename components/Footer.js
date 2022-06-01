import { Typography } from "@mui/material";
import { Stack } from "@mui/material";
import { Box } from "@mui/material";
import { Container } from "@mui/material";
export default function Footer () {
  return <>
    <Box style={{height: "40px", width: '100%', backgroundColor:'background.default'}}>
    <Container maxWidth="xl" sx={{mt: 2, px:2, py:3, bgcolor: "green.main", borderRadius: 2}}>
    <Stack direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{mt:2, mb: 2}}
      spacing={'30%'}>
        
        <Stack direction="column"
            justifyContent="center"
            alignItems="flex-start">
                <Typography>Platform</Typography>
                <Typography>Q&A</Typography>
                <Typography>Learn</Typography>
                <Typography>Domain Reviews</Typography>
                <Typography>Browser Extension</Typography>
              </Stack>

              <Stack direction="column"
            justifyContent="center"
            alignItems="flex-start">

            
              <Typography>Info</Typography>
              <Typography>About Us</Typography>
              <Typography>FAQ</Typography>
            

              </Stack>

              <Stack direction="column"
            justifyContent="center"
            alignItems="flex-start">
                <Typography>Connect with us</Typography>
                <Typography>Instagram</Typography>
                <Typography>GitHub</Typography>
              </Stack>

              
          
        </Stack>
        </Container>
      <Stack direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{mt:2, mb: 2}}>
        <Typography variant="body2" sx={{color:"background.contrastColor", mt:1}}>
          Copyright © 2022 Team Vision All rights reserved.
        </Typography>
      </Stack>



    </Box>
  </>
}