import Router from 'next/router'
import { useRouter } from 'next/router'
import { useState, useEffect } from "react"
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import { Container } from "@mui/material";
import { Grid } from '@mui/material';
import { CircularProgress } from "@mui/material"
import { Avatar } from '@mui/material';
import { Rating } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';

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
    <Container maxWidth="xl" sx={{mt: 2, px:2, py:3, bgcolor: 'background.container', borderRadius: 2}} >
      {specialistData ?
      <>
<Container maxWidth="xl" sx={{mt: 2, px:2, py:3, bgcolor: 'background.container', borderRadius: 2}} >
    <Grid container spacing={4} alignItems="center" justifyContent="center">
      <Grid 
      container item xs={12} md={6} alignItems="center" direction="column">

        <Avatar src={specialistData.image} sx={{ width: 175, height: 175 }}></Avatar>
        <Typography variant="h5">{specialistData.name}</Typography>
        <Typography>{specialistData.category}</Typography>
        <Box sx={{mt: 2}}>
          <Rating name="half-read-only" precision={0.2} value={specialistData.reviewsScore} readOnly />
        </Box>
      </Grid>
      </Grid>
      </Container>


     
      </>
      :
      <CircularProgress sx={{color: "secondary.main"}}></CircularProgress>
      }
    </Container>
  </>)

}
