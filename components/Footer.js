import { Typography } from "@mui/material";
import { Stack } from "@mui/material";
import { Box } from "@mui/material";
import { Container, Button } from "@mui/material";
import Lottie from 'react-lottie'
import Link from "react-scroll/modules/components/Link";

export default function Footer () {
  return <>
    
    <Container maxWidth="xl" sx={{mt:{xs: 5, md:15}, px:2, py:3, opacity:0.9, bgcolor: "secondary.main", borderRadius: 2}} >
        <Stack
      direction="row"
      justifyContent="space-evenly"
      alignItems="flex-start"
      sx={{mt:{xs:1}}}
      >

          <Box>
          
                <Typography align="center" color="#003300" variant="h4" sx={{mb:2}}>Platform</Typography>
                <Stack direction="column" alignItems="center">
                  <Button sx={{ textTransform: 'none'}} href="q&a/public" variant="h6"><Typography variant="h6" color="text.primary">Public Q&A</Typography></Button>
                  <Button sx={{ textTransform: 'none'}} href="q&a/private" variant="h6"><Typography variant="h6" color="text.primary">Private Q&A</Typography></Button>
                  <Button sx={{ textTransform: 'none'}} variant="h6" href="learn"><Typography variant="h6" color="text.primary">Learn</Typography></Button>
                </Stack>

          </Box>

          <Box>
          

            
              <Typography align="center" color="#003300" variant="h4" sx={{mb:2}}>Info</Typography>
              <Stack direction="column" alignItems="center">
                <Button sx={{ textTransform: 'none'}} href="index"><Typography variant="h6" color="text.primary">Home</Typography></Button>
                <Button sx={{ textTransform: 'none'}} href="aboutUs"><Typography variant="h6" color="text.primary">About Us</Typography></Button>
              </Stack>
            
          </Box>

          <Box>
          
                <Typography align="center" variant="h4" color="#003300" sx={{mb:2}}>Connect</Typography>
                <Stack direction="column" alignItems="center">
                  <Button sx={{ textTransform: 'none'}} variant="h6" href="https://www.instagram.com/source_verse/"><Typography variant="h6" color="text.primary">Instagram</Typography></Button>
                  <Button sx={{ textTransform: 'none'}} variant="h6" href="https://github.com/pero020/source-verse"><Typography variant="h6" color="text.primary">GitHub</Typography></Button>
                </Stack>
          </Box>

          </Stack>
          
          <Stack direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{mt:5}}>
              <Typography variant="body2" sx={{color:"background.contrastColor", mt:1}}>
                Copyright © 2022 Team Vision All rights reserved.
              </Typography>
          </Stack>
      
    
    
   
        </Container>
      {/* <Stack direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{mt:2, mb: 2}}>
        <Typography variant="body2" sx={{color:"background.contrastColor", mt:1}}>
          Copyright © 2022 Team Vision All rights reserved.
        </Typography>
      </Stack> */}


  </>
}