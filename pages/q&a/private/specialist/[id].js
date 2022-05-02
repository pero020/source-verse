import Router from 'next/router'
import { useRouter } from 'next/router'
import { useState, useEffect } from "react"

import Typography from '@mui/material/Typography';
import { Container } from "@mui/material";
import { CircularProgress } from "@mui/material"

export default function Specialist () {
  const [specialistData, setSpecialistData] = useState(null)

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
        <Typography>{specialistData.name}</Typography>
        <Typography>{specialistData.category}</Typography>
      </>
      :
      <CircularProgress sx={{color: "secondary.main"}}></CircularProgress>
      }
    </Container>
  </>)

}