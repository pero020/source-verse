import { useRouter } from 'next/router'
import { useState, useEffect } from "react"
import Typography from '@mui/material/Typography';
import { LinearProgress, Container } from "@mui/material"
import { Avatar } from '@mui/material';
import { Rating } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import { Stack } from '@mui/material';
import ReviewsList from "/components/ReviewsList"
import AskSpecialistDialog from "/components/AskSpecialistDialog"


export default function Specialist (props) {
  const [specialistData, setSpecialistData] = useState(null)
 
  const specialists = props.specialists
  const [value, setValue] = React.useState(2);

  const router = useRouter()
  const { id } = router.query;

  async function getSpecialist() {
    try {
      const res = await fetch("/api/specialists/getSpecialist/" + id)
      const data = await res.json()

      setSpecialistData(data);
    } catch (e) {
      console.log(e);
    }
    
  }

  useEffect(()=> {
    getSpecialist()
  }, [])

  return ( <>
    
    
      {specialistData ?
      <>

      <Container maxWidth="xl" sx={{mt: 1, px:2, py:3, bgcolor:"primary.main", borderRadius: 2}} >
    <Stack
direction={{xs:'column', md:'row'}}
justifyContent="space-evenly"
alignItems={{xs:'center', md:'center'}}
sx={{my:{xs: 10, md:20}, mx: {xs: 2, md: 30}}}
spacing={10}
>

      <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={3}
      >

          <Box>
            <Avatar alt="" src={specialistData.image} sx={{ width: 175, height: 175 }}/>
          </Box>
          <Box>
            <Typography variant="h4" sx={{color:"background.contrastColor"}}>{specialistData.name}</Typography>
          </Box>

          <Box sx={{mt: 2}}>
          <Rating color="background.contrastColor" name="half-read-only" precision={0.2} value={specialistData.reviewsScore} readOnly />
        </Box>

          <AskSpecialistDialog specialistData={specialistData}/>

      </Stack>

      <Stack
      direction="column"
      alignItems="flex-start"
      spacing={5}
      >

          <Box>
            <Typography variant="h4" sx={{color:"background.contrastColor", textDecoration:'underline', textDecorationColor:"#52d17b", mb: 2}}>Expert in: </Typography>
            <Typography variant="h4" sx={{color:"background.contrastColor"}}>{specialistData.category}</Typography>
          </Box>
          <Box>
            <Typography variant="h4" sx={{color:"background.contrastColor", textDecoration:'underline', textDecorationColor:"#52d17b", mb: 2}}>Domain Reviews: </Typography>
            {specialistData.domainReviews.length === 0 ? <Typography sx={{mt: 2}} variant="h6">No reviews yet!</Typography> : <ReviewsList reviews={specialistData.domainReviews}></ReviewsList>}
          </Box>

      </Stack>


</Stack>
    </Container>
    </>
    :
    <LinearProgress color="secondary"></LinearProgress>
      }
      
      </>)
}
