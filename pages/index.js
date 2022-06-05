import { useSession } from "next-auth/react"
import { Typography } from "@mui/material";
import React from 'react';
import { Container } from "@mui/material";
import Lottie from 'react-lottie'
import exampleAnimationData from '/public/lotties/animacija';
import specialist from '/public/lotties/specialist';
import bronze from '/public/lotties/bronze';
import information from '/public/lotties/information';
import newranking from '/public/lotties/newranking';
import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { Avatar } from "@mui/material";
import silver from '/public/lotties/silver';
import gold from '/public/lotties/gold';
import { Link, animateScroll as scroll } from "react-scroll";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Welcome from "../components/Welcome";
import search from '/public/lotties/search';
import check from '/public/lotties/check';
import web from '/public/lotties/web';
import ListItem from '@mui/material/ListItem';



export default function Home() {
  const { data: session } = useSession()
  

    return <>
  
  <Container maxWidth="xl" disableGutters={true} sx={{p:0}}>
      <Stack
      direction={{md:'row', xs:'column'}}
      justifyContent="space-evenly"
      alignItems="center"
      sx={{mt:{xs: 5, md: 15}}}
      mx={{xs:2}}
      >
        <Box sx={{mb:{md:60}}}>
          <Typography variant="h2" sx={{color: "background.contrastColor"}}>Platform made for <br/>  community <br/>  <Typography variant="h2" sx={{color:'background.contrastColor', textDecoration:'underline', textDecorationColor:"#52d17b", display:'inline', textUnderlineOffset:{xs: "6px", md: "10px"}}}>information validation</Typography>.</Typography>
          <Button sx={{mt: 5, py:1.2, px:3, borderRadius:8}} variant="contained" color="secondary" size="large" href="q&a/public">
            Browse
          </Button>   
        </Box>
        
        <Box maxWidth={{md:'60%', xs:'100%'}} sx={{mt:{xs: 5, md: -20}, ml:{xs:-5}}}>
          <Lottie isClickToPauseDisabled={true} options={{loop: true, autoplay: true, rendererSettings: {preserveAspectRatio: 'xMidYMid meet'}, animationData: exampleAnimationData,}}/>
        </Box>
        
      </Stack>
      
      

      <Container sx={{mt:{md:10, xs:25},opacity:0.9, px:2, py:3, bgcolor: "#52D17B", borderRadius: 2,}} maxWidth="xl" width="100%">
      <Stack
      direction="center"
      justifyContent="center"
      alignItems="center">

       <Typography align="center" variant="h4">We provide <Typography variant="h4" sx={{color:"#003B00"}} display="inline">educational</Typography> and <Typography display="inline" variant="h4" sx={{color:"#003B00"}}>consulting-based </Typography>reliable, 
       <br/>reputable and researched information.</Typography>      
      </Stack>
    </Container>

    <Stack
      direction={{xs:'column', md:'row'}}
      justifyContent="space-evenly"
      alignItems="center"
      sx={{my:{xs: 0, md: 10}, mt: {xs:15, md:35}}}
      mx={{xs:2}}
      spacing={10}
      >
        <Box sx={{mb:{md:20}}}>
        <Typography variant="h2" sx={{color:"background.contrastColor", textDecoration:'underline', textDecorationColor:'#52D17B', textUnderlineOffset:{xs: "7px", md: "10px"}, mb:{xs: 5, md: 10}}}>Improve Your digital literacy</Typography>
          <Typography variant="h3" color="text.secondary" sx={{ maxWidth:'400px'}} display="inline">Learn how to </Typography>
          <Typography variant="h3" color="text.secondary" sx={{ maxWidth:'400px'}} display="inline"><Typography  variant="h3" color="#52D17B" borderRadius={2} sx={{maxWidth:'210px', display:'inline'}}>find trustworthy information </Typography> in the evermore growing pile of questionable data.</Typography><br/>
          <Button sx={{mt: 5, py:1.2, px:3, borderRadius:8}} variant="contained" color="secondary" size="large" href="/learn">
            Learn
          </Button>
        </Box>

        <Box minWidth={{xs:'30%', md:'45%'}} >
          <Lottie isClickToPauseDisabled={true} options={{loop: true, autoplay: true, rendererSettings: {preserveAspectRatio: 'xMidYMid meet'}, animationData: search}}/>
          </Box>
        
      </Stack>
    


      <Stack
      direction={{md:'row', xs:'column'}}
      justifyContent="space-between"
      alignItems="center"
      sx={{mt: {xs: 15, md: 15}}}
      mx={{xs:2}}
      >
        <Stack
      direction={{md:'column', xs:'column'}}
      justifyContent="flex-start"
      alignItems="flex-start"
       sx={{mb:{md:50}, mt:{xs:10}}} spacing={2}>
          <Typography variant="h2" sx={{mb:{xs: 2, md:8}, color:"background.contrastColor", textDecoration:'underline', textDecorationColor:'#52D17B', textUnderlineOffset:{xs: "7px", md: "10px"}}}>How to</Typography>
          <Typography variant="h3" color="#F8FFF8" sx={{maxWidth:720}}>1. <Typography variant="h4" color="#F8FFF8" sx={{maxWidth:720, display:"inline"}}>Choose a topic of </Typography><Typography variant="h4" color="#52D17B" sx={{maxWidth:720, display:"inline"}}>interest </Typography><Typography variant="h4" color="#F8FFF8" sx={{maxWidth:720, display:"inline"}}>or </Typography><Typography variant="h4" color="#52D17B" sx={{maxWidth:720, display:"inline"}}>expertise.</Typography></Typography>
          <Typography variant="h3" color="#F8FFF8" sx={{maxWidth:720}}>2. <Typography variant="h4" color="#F8FFF8" sx={{maxWidth:720, display:"inline"}}>Submit a </Typography><Typography variant="h4" color="#52D17B" sx={{maxWidth:720, display:"inline"}}>source-backed </Typography><Typography variant="h4" color="#F8FFF8" sx={{maxWidth:720, display:"inline"}}>answer. </Typography></Typography>
          <Typography variant="h3" color="#F8FFF8" sx={{maxWidth:720}}>3. <Typography variant="h4" color="#F8FFF8" sx={{maxWidth:720, display:"inline"}}>Ask </Typography><Typography variant="h4" color="#52D17B" sx={{maxWidth:720, display:"inline"}}>Users </Typography><Typography variant="h4" color="#F8FFF8" sx={{maxWidth:720, display:"inline"}}>or </Typography><Typography variant="h4" color="#52D17B" sx={{maxWidth:720, display:"inline"}}>Specialists.</Typography></Typography>
          <Typography variant="h3" color="#F8FFF8" sx={{maxWidth:720}}>4. <Typography variant="h4" color="#52D17B" sx={{maxWidth:720, display:"inline"}}>Get rewarded </Typography><Typography variant="h4" color="#F8FFF8" sx={{maxWidth:720, display:"inline"}}>for Your effort. </Typography></Typography>
        </Stack>
        <Box minWidth={{md:'40%', xs:'100%'}} sx={{mb:{md:40}}}>
        <Lottie isClickToPauseDisabled={true} options={{loop: true, autoplay: true, rendererSettings: {preserveAspectRatio: 'xMidYMid meet'}, animationData: newranking}}/>
        </Box>

        
      </Stack>

      <Container sx={{mt:{md:-20, xs:10}, opacity:0.9, px:2, py:3, bgcolor: "#52D17B", borderRadius: 2}} maxWidth="xl">
        <Container maxWidth="lg">
          <Stack
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          spacing={2}>

          <ListItem sx={{ display: 'list-item' }}><Typography display="inline" variant="h4" sx={{color:"Background.contrastColor"}}><Typography variant="h4" sx={{color:"#003300"}} display="inline"> Community generated</Typography><Typography variant="h4" sx={{color:"Background.contrastColor"}} display="inline"> questions and answers on requested topics</Typography></Typography></ListItem>
          <ListItem sx={{ display: 'list-item' }}><Typography variant="h4" sx={{color:"Background.contrastColor"}} display="inline"><Typography variant="h4" sx={{color:"#003300"}} display="inline">Personally evaluated</Typography><Typography variant="h4" sx={{color:"Background.contrastColor"}} display="inline"> questions and information</Typography></Typography>  </ListItem>
          <ListItem sx={{ display: 'list-item' }}><Typography variant="h4" sx={{color:"Background.contrastColor"}} display="inline"><Typography variant="h4" sx={{color:"Background.contrastColor"}} display="inline"> Detailed </Typography><Typography variant="h4" sx={{color:"#003300"}} display="inline">reviews of internet domains</Typography></Typography></ListItem>
          <ListItem sx={{ display: 'list-item' }}><Typography variant="h4" sx={{color:"Background.contrastColor"}} display="inline"><Typography variant="h4" sx={{color:"#003300"}} display="inline">Digital literacy </Typography><Typography variant="h4" sx={{color:"Background.contrastColor"}} display="inline"> education</Typography></Typography>   </ListItem>
          <ListItem sx={{ display: 'list-item' }}><Typography variant="h4" sx={{color:"Background.contrastColor"}} display="inline"><Typography variant="h4" sx={{color:"Background.contrastColor"}} display="inline"><Typography variant="h4" sx={{color:"#003300"}} display="inline"></Typography> Chrome Extension for </Typography><Typography variant="h4" sx={{color:"#003300"}} display="inline">browsing approved information</Typography></Typography></ListItem>
            
          </Stack>
      </Container>
    </Container>

    <Stack
      direction={{xs:'column', md:'row'}}
      justifyContent="space-evenly"
      alignItems="center"
      sx={{my:{xs: 0, md: 10}, mt: {xs:15, md:35}}}
      mx={{xs:2}}
      spacing={10}
      >
        {/*Ask answer achieve*/}
        <Box sx={{mb:{md:20}}} maxWidth={{md:1000}}>
        <Typography variant="h2" sx={{color:"background.contrastColor", textDecoration:'underline', textDecorationColor:'#52D17B', textUnderlineOffset:{xs: "7px", md: "10px"}, mb:{xs: 5, md: 10}}}>Carefree browsing with our Extension</Typography>
          <Typography variant="h3" color="text.secondary" sx={{ maxWidth:'400px'}} display="inline"><Typography  variant="h3" color="#52D17B" borderRadius={2} sx={{maxWidth:'210px', display:'inline'}}>Enjoy the </Typography> functionality of SourceVerse<br/>in <Typography  variant="h3" color="#52D17B" borderRadius={2} sx={{maxWidth:'210px', display:'inline'}}>Your browser</Typography>.</Typography><br/>
          <Button sx={{mt: 5, py:1.2, px:3, borderRadius:8}} variant="contained" color="secondary" size="large" href="https://github.com/pero020/source-verse-extension">
            Installation guide
          </Button>
        </Box>

        <Box maxWidth={{md:'30%', xs:'100%'}} sx={{mt:{xs: 5, md: -20}, ml:{xs:-5}}}>
          <Lottie isClickToPauseDisabled={true} options={{loop: true, autoplay: true, rendererSettings: {preserveAspectRatio: 'xMidYMid meet'}, animationData: web}}/>
        </Box>
      </Stack>

      <Stack
      direction={{xs:'column', md:'column'}}
      justifyContent="space-evenly"
      alignItems="center"
      sx={{my:{xs: 0, md: 10}, mt: {xs:15, md:25}}}
      mx={{xs:2}}
      >
        {/*Ask answer achieve*/}
        <Box sx={{mb:{md:10}, mr:{md:70}, maxWidth:1200}}>
        <Typography variant="h2" sx={{color:"background.contrastColor", textDecoration:'underline', textDecorationColor:'#52D17B', textUnderlineOffset:{xs: "7px", md: "10px"}, mb:{xs: 5, md: 10}}}>Ask, Answer, Achieve!</Typography>
          <Typography variant="h3" color="text.secondary" sx={{ maxWidth:'400px'}} display="inline">Earn </Typography>
          <Typography variant="h3" color="text.secondary" sx={{ maxWidth:'400px'}} display="inline"><Typography  variant="h3" color="#52D17B" borderRadius={2} sx={{maxWidth:'210px', display:'inline'}}>Badges</Typography> and display them on Your profile.</Typography><br/>

        </Box>

        <Container maxWidth="md" sx={{mt: 1, px:2, py:3, bgcolor: "primary.main", borderRadius: 2, mt:{xs:3}}} >
        <Stack
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
      spacing={1}
      sx={{mt:{xs:1}}}
      >

          <Box minWidth={{xs:'30%', md:'25%'}}>
          <Lottie isClickToPauseDisabled={true} options={{loop: true, autoplay: true, rendererSettings: {preserveAspectRatio: 'xMidYMid meet'}, animationData: bronze}}/>
          </Box>
          <Box minWidth={{xs:'30%', md:'25%'}}>
          <Lottie isClickToPauseDisabled={true} options={{loop: true, autoplay: true, rendererSettings: {preserveAspectRatio: 'xMidYMid meet'}, animationData: silver}}/>
          </Box>
          <Box minWidth={{xs:'30%', md:'25%'}}>
          <Lottie isClickToPauseDisabled={true} options={{loop: true, autoplay: true, rendererSettings: {preserveAspectRatio: 'xMidYMid meet'}, animationData: gold}}/>
          </Box>
          </Stack>
          </Container>
      </Stack>
  
      
      <Stack
      direction={{xs:'column', md:'row'}}
      justifyContent="space-evenly"
      alignItems="center"
      sx={{my:{xs: 0, md: 10}, mt: {xs:15, md:35}}}
      mx={{xs:2}}
      spacing={10}
      >
        <Box sx={{mb:{md:20}, maxWidth:800}}>
        <Typography variant="h2" sx={{ color:"background.contrastColor", textDecoration:'underline', textDecorationColor:'#52D17B', textUnderlineOffset:{xs: "7px", md: "10px"}, mb:{xs: 5, md: 10}}}>Ask our Specialists directly</Typography>
          <Typography variant="h3" color="text.secondary" sx={{ maxWidth:'400px'}} display="inline">Connect with Musicians, Lawyers, Athleets, Engineers...<br/><br/></Typography>
          <Typography variant="h3" color="#52D17B" sx={{ maxWidth:'400px'}} display="inline">Choose </Typography>
          <Typography variant="h3" color="text.secondary" sx={{ maxWidth:'400px'}} display="inline"> a field of study and <Typography variant="h3" color="#52D17B" sx={{ maxWidth:'400px'}} display="inline">get feedback</Typography> from </Typography><Typography variant="h3" color="#52D17B" sx={{ maxWidth:'400px'}} display="inline">experts.</Typography><br/>
          <Button sx={{mt: 5, py:1.2, px:3, borderRadius:8}} variant="contained" color="secondary" size="large" href="/q&a/private">
            Find a Specialist
          </Button>
        </Box>

        <Box minWidth={{xs:'30%', md:'40%'}} >
          <Lottie isClickToPauseDisabled={true} options={{loop: true, autoplay: true, rendererSettings: {preserveAspectRatio: 'xMidYMid meet'}, animationData: specialist}}/>
          </Box>
        
      </Stack>

      <Stack
      direction={{xs:'column', md:'row'}}
      justifyContent="space-evenly"
      alignItems="center"
      sx={{my:{xs: 0, md: 10}, mt: {xs:15, md:15}}}
      mx={{xs:2}}
      spacing={10}
      >
        <Box sx={{mb:{md:20}, maxWidth:800}}>
        <Typography variant="h2" sx={{ color:"background.contrastColor", textDecoration:'underline', textDecorationColor:'#52D17B', textUnderlineOffset:{xs: "7px", md: "10px"}, mb:{xs: 5, md: 10}}}>Review Internet Domains</Typography>
          <Typography variant="h3" color="#52D17B" sx={{ maxWidth:'400px'}} display="inline">Enter the Domain </Typography>
          <Typography variant="h3" color="text.secondary" sx={{ maxWidth:'400px'}} display="inline"> You are concerned with and let our <Typography variant="h3" color="#52D17B" sx={{ maxWidth:'400px'}} display="inline">Specialists</Typography> do the work for You. </Typography>
          <br/>
          <Button sx={{mt: 5, py:1.2, px:3, borderRadius:8}} variant="contained" color="secondary" size="large" href="../learn">
            Domain reviews
          </Button>
        </Box>

        <Box minWidth={{xs:'30%', md:'20%'}} maxWidth="70%" >
          <Lottie isClickToPauseDisabled={true} options={{loop: true, autoplay: true, rendererSettings: {preserveAspectRatio: 'xMidYMid meet'}, animationData: check}}/>
          </Box>
        
      </Stack>
      

      
      
  <Stack
  direction="row"
  justifyContent={{xs:'center', md:'flex-start'}}
  alignItems="flex-start"s
  sx={{mt: {md:20, xs:25}, ml:{xs:0, md:2.5}}}
  >
    <Typography variant="h2" sx={{color:"background.contrastColor", textDecoration:'underline', textDecorationColor:'#52D17B', textUnderlineOffset: {xs: "7px", md: "10px"}}}>Frequently Asked Questions</Typography>
  </Stack>

  


  <Stack
  direction="column"
  justifyContent="flex-start"
  alignItems="flex-start"
  spacing={3}
  sx={{mt:5, ml:{xs:0, md:2}}}
  >

    <Accordion sx={{maxWidth:"xl", width: "100%"}}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="h5" >1. Why are we here?</Typography>
      </AccordionSummary>
      <AccordionDetails>
      <Typography variant="h6" color="text.secondary">Learn to find trustworthy information in the evermore growing pile of questionable data.</Typography>
      </AccordionDetails>
    </Accordion>


    <Accordion sx={{maxWidth:"xl", width: "100%"}}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="h5" >2. Where should I start?</Typography>
      </AccordionSummary>
      <AccordionDetails>
      <Typography variant="h6" color="text.secondary">Start by Logging in and checking your <Link href="/profile"><a style={{color: "#52d17b", textDecoration: "none"}} >Profile page</a></Link>. After that feel free to browse <Link href="/q&a/public"><a style={{color: "#52d17b", textDecoration: "none"}} >Public Q&A</a></Link>, <Link href="/q&a/private"><a style={{color: "#52d17b", textDecoration: "none"}} >Private Q&A</a></Link> and <Link href="/learn"><a style={{color: "#52d17b", textDecoration: "none"}}>Learn</a></Link> sections.</Typography>
      </AccordionDetails>
    </Accordion>


    <Accordion sx={{maxWidth:"xl", width: "100%"}}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="h5" >3. What Google data are you using?</Typography>
      </AccordionSummary>
      <AccordionDetails>
      <Typography variant="h6" color="text.secondary">We only use your name, email and profile image. Feel free to change your username on the <Link href="/profile"><a style={{color: "#52d17b", textDecoration: "none"}}>Profile page</a></Link> ( it will not effect your Google name )</Typography>
      </AccordionDetails>
    </Accordion>


    <Accordion sx={{maxWidth:"xl", width: "100%"}}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="h5">4. How do I rank up?</Typography>
      </AccordionSummary>
      <AccordionDetails>
      <Typography variant="h6" color="text.secondary">You Rank up by providing quality answers in the <Link href="/q&a/public"><a style={{color: "#52d17b", textDecoration: "none"}} >Public Q&A</a></Link> section.</Typography>
      </AccordionDetails>
    </Accordion>
    
    
    
    <Accordion sx={{maxWidth:"xl", width: "100%"}}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="h5">5. Want to become a Specialist?</Typography>
      </AccordionSummary>
      <AccordionDetails>
      <Typography variant="h6" color="text.secondary">Contact us at <em style={{color: "#52d17b"}}>sourceverse@gmail.com</em></Typography>
      </AccordionDetails>
    </Accordion>
  </Stack>
  </Container>
  

  </>
  }

 


