import { Typography } from "@mui/material";
import { Stack } from "@mui/material";
import { Box } from "@mui/material";
import { Container } from "@mui/material";
import Lottie from 'react-lottie'
import Link from "react-scroll/modules/components/Link";

export default function Footer () {
  return <>
    
    <Box style={{height: "40px", width: '100%', backgroundColor:'background.default'}}>
    
    <Container maxWidth="xl" sx={{mt: 1, px:2, py:3, bgcolor: "green.main", borderRadius: 2, mt:{xs:3}}} >
        <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={20}
      sx={{mt:{xs:1},ml:{md:0, xs:5}}}
      >

          <Box minWidth={{xs:'30%', md:'10%'}}>
          
                <Typography color="#003300" variant="h4">Platform</Typography>
                <Typography sx={{mt:3}} variant="h5"><Link style={{textDecoration:'none', color:'white'}}  href="/pages/q&a/index">Q&A</Link></Typography>
                <Typography variant="h5">Learn</Typography>
                <Typography variant="h5">Domain Reviews</Typography>
                <Typography variant="h5">Browser Extension</Typography>
            
          </Box>

          <Box minWidth={{xs:'30%', md:'10%'}}>
          

            
              <Typography color="#003300" variant="h4" sx={{mb:10}}>Info</Typography>
              <Typography variant="h5">About Us</Typography>
              <Typography variant="h5">FAQ</Typography>
            

            
          </Box>

          <Box minWidth={{xs:'30%', md:'10%'}}>
          
                <Typography variant="h4" color="#003300" sx={{mb:10}}>Connect with us</Typography>
                <Typography variant="h5">Instagram</Typography>
                <Typography variant="h5">GitHub</Typography>
              
          </Box>

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



    </Box>
  </>
}