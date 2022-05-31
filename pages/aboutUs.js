import Image from "next/image";
import { Typography } from "@mui/material";
import React from 'react';
import { Container } from "@mui/material";
import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import ColorsTimeline from "../components/timeline"
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';



export default function Learn() {


  return <>
<Container maxWidth="xl" sx={{mt: 1, px:2, py:3, bgcolor: "primary.main", borderRadius: 2}} >
    <Stack
    direction={{md:'row', xs:'column'}}
    justifyContent={{md:'flex-start', xs:'center'}}
    alignItems="center"
    sx={{mt:{xs: 5, md: 10}}}
    mx={{xs:2,md:15}}
    >
      <Box>
        <Typography variant="h2" sx={{color:'background.contrastColor', textDecoration:'underline', textDecorationColor:"#52d17b", display:'inline'}}>Who? Why? When? Where?</Typography>
      </Box>
      
    </Stack>

    <Stack
    direction={{xs:'column', md:'row'}}
    justifyContent={{md:'flex-start', xs:'center'}}
    alignItems="center"
    sx={{mt:{xs: 5, md: 15}}}
    mx={{xs:2,md:15}}
    >
      <Box>
        <Typography variant="h5" maxWidth={{md:1300}} sx={{color:"text.softWhite"}}>A team of 3 software engineering students based in <Typography  variant="h5" color="#52D17B" borderRadius={2} sx={{maxWidth:'210px', display:'inline'}}>Zagreb, Croatia. </Typography></Typography>
        <Typography variant="h5" mt={{md:5, xs:5}} maxWidth={{md:1300}} sx={{color:"text.softWhite"}}> Everything started back in <Typography  variant="h5" color="#52D17B" borderRadius={2} sx={{maxWidth:'210px', display:'inline'}}>March, 2022</Typography>  when we entered the "<Typography  variant="h5" color="#52D17B" borderRadius={2} sx={{maxWidth:'210px', display:'inline'}}>TVZ Mc2</Typography>", Croatia's biggest Mobile, Web and IoT solutions competition.</Typography>
        <Typography variant="h5" mt={{md:5, xs:5}} maxWidth={{md:1300}} sx={{color:"text.softWhite"}}>Little did we know it would be a start of a great partnership and an even greater friendship.</Typography>
        
      </Box>
      
    </Stack>

    <Stack
    direction={{md:'row', xs:'column'}}
    justifyContent={{md:'flex-start', xs:'center'}}
    alignItems="center"
    mx={{xs:2,md:15}}
    mt={{xs:5, md:30}}
    >
      <Box>
      <Typography variant="h2" sx={{color:'background.contrastColor', textDecoration:'underline', textDecorationColor:"#52d17b", display:'inline'}}>Team Vision</Typography>
      </Box>
      
    </Stack>

    


    <Stack
    direction={{md:'row', xs:'column'}}
    justifyContent={{md:'space-between', xs:'center'}}
    alignItems="center"
    mx={{xs:2,md:18}}
    mt={{xs:5, md:8}}
    >
    <Stack direction={{xs: "column", md: "row"}} alignItems={"center"}>
      <Box>
      <Image src="/images/pp.png" width="200" height="200" minWidth="100" minHeight="100" title="Welcome to Community!"></Image>
      </Box>
      
      <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="center">

            <Box>
            <Typography variant="h4" mt={{md:-2, xs:5}} ml={{md:10, xs:5}} sx={{color:"background.contrastColor"}}>Petar Pržić</Typography>
            <Typography variant="h5" mt={{md:3, xs:5}} ml={{md:10}} sx={{color:"text.softWhite"}}>Full-Stack Development</Typography>
            </Box>

      </Stack>
      </Stack>

      <Stack
      direction="row"
      justifyContent="flex-end"
      alignItems="baseline"
      spacing={3}
      ml={2}
      mt={{md:1,xs:5}}>

      <Box>
        <a href="https://www.linkedin.com/in/petar-przic-1b682817a/"><LinkedInIcon color="white1"></LinkedInIcon></a>
      </Box>
      <Box>
        <a href="https://github.com/pero020"><GitHubIcon color="white1"></GitHubIcon></a>
      </Box>
      <Box>
      <a href="https://www.instagram.com/source_verse/"><InstagramIcon color="white1"></InstagramIcon></a>
      </Box>

      </Stack>

    </Stack>


    <Stack
    direction={{md:'row', xs:'column'}}
    justifyContent={{md:'space-between', xs:'center'}}
    alignItems="center"
    mx={{xs:2,md:18}}
    ml={2}
    mt={{xs:5, md:8}}
    >
      <Box>
      <Stack direction={{xs: "column", md: "row"}} alignItems={"center"}>
      <Box>
      <Image src="/images/rr.png" width="200" height="200" title="Welcome to Community!"></Image>
      </Box>
      
      <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="center">

        <Box>
        <Typography variant="h4" mt={{md:-2, xs:5}} ml={{md:10, xs:5}} sx={{color:"background.contrastColor"}}>Renato Rak</Typography>
        <Typography variant="h5" mt={{md:3, xs:5}} ml={{md:10}} sx={{color:"text.softWhite"}}>Front-End Development</Typography>
        </Box>

      </Stack>
      </Stack>
      </Box>

      <Stack
      direction="row"
      justifyContent="flex-end"
      alignItems="baseline"
      spacing={3}
      ml={2}
      mt={{md:1,xs:5}}>

      <Box>
        <a href="https://www.linkedin.com/in/renato-rak-bb8895237/"><LinkedInIcon color="white1"></LinkedInIcon></a>
      </Box>
      <Box>
        <a href="https://github.com/RennSter20"><GitHubIcon color="white1"></GitHubIcon></a>
      </Box>
      <Box>
        <a href="https://www.instagram.com/source_verse/"><InstagramIcon color="white1"></InstagramIcon></a>
      </Box>

      </Stack>

    </Stack>

    <Stack
    direction={{md:'row', xs:'column'}}
    justifyContent={{md:'space-between', xs:'center'}}
    alignItems="center"
    mx={{xs:2,md:18}}
    mt={{xs:5, md:8}}
    >
    <Stack direction={{xs: "column", md: "row"}} alignItems={"center"}>
      <Box>
      <Image src="/images/ik.png" width="200" height="200" title="Welcome to Community!"></Image>
      </Box>
      
      <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="center">

            <Box>
            <Typography variant="h4" mt={{md:-2, xs:5}} ml={{md:10, xs:9}} sx={{color:"background.contrastColor"}}>Ivan Kulić</Typography>
            <Typography variant="h5" mt={{md:3, xs:5}} ml={{md:10}} sx={{color:"text.softWhite"}}>Design, Marketing, UI & UX</Typography>
            </Box>

      </Stack>
      </Stack>

      <Stack
      direction="row"
      justifyContent="flex-end"
      alignItems="baseline"
      spacing={3}
      ml={2}
      mt={{md:1,xs:5}}>

      <Box>
        <a href="https://www.linkedin.com/in/ivan-kuli%C4%87-37b27a22a/"><LinkedInIcon color="white1"></LinkedInIcon></a>
      </Box>
      <Box>
        <a href="https://github.com/1vankulic"><GitHubIcon color="white1"></GitHubIcon></a>
      </Box>
      <Box>
      <a href="https://www.instagram.com/source_verse/"><InstagramIcon color="white1"></InstagramIcon></a>
      </Box>

      </Stack>

    </Stack>

    <Typography align="center" variant="h4" color="background.contrastColor" sx={{mt: 10, mb:5,textDecoration:'underline', textDecorationColor:'#52D17B',textUnderlineOffset:'5px'}}>Development Timeline</Typography>
    <ColorsTimeline></ColorsTimeline>
    </Container>
  </>
};