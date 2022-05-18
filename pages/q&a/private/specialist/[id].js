import Router from 'next/router'
import { useRouter } from 'next/router'
import { useState, useEffect } from "react"
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import { Container } from "@mui/material";
import { Grid } from '@mui/material';
import { LinearProgress } from "@mui/material"
import { Avatar } from '@mui/material';
import { Rating } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import { Stack } from '@mui/material';
import { Button } from '@mui/material';
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


    <Stack
direction={{xs:'column', md:'row'}}
justifyContent="space-evenly"
alignItems={{xs:'center', md:'flex-start'}}
sx={{mt:{xs: 10, md:25}, mx: {xs: 2, md: 30}}}
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
            <Typography variant="h4" sx={{color:"background.contrastColor", textDecoration:'underline', textDecorationColor:"#52d17b", mb: 2}}>Specialist in: </Typography>
            <Typography variant="h4" sx={{color:"background.contrastColor"}}>{specialistData.category}</Typography>
          </Box>
          <Box>
            <Typography variant="h4" sx={{color:"background.contrastColor", textDecoration:'underline', textDecorationColor:"#52d17b", mb: 2}}>Domain Reviews: </Typography>
            {specialistData.domainReviews.length === 0 ? <Typography>Empty</Typography> : <ReviewsList reviews={specialistData.domainReviews}></ReviewsList>}
          </Box>

      </Stack>


</Stack>

    </>
    :
    <LinearProgress color="secondary"></LinearProgress>
      }
      
      </>)
}
