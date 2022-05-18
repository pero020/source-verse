import { useSession } from "next-auth/react"
import { useState, useEffect } from "react"
import { Grid } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import Chip from '@mui/material/Chip';
import { Container } from "@mui/material";
import { Button } from "@mui/material";

import SpecialistsList from "/components/SpecialistsList"


export default function Public() {
  const { data: session } = useSession()
  const [isLoading, setIsLoading] = useState(true)
  const [specialistsData, setSpecialistsData] = useState(null)

  async function getAllSpecialists() {
    const res = await fetch("/api/specialists/getAllSpecialists");
    const data = await res.json();
    console.log(data)
    setSpecialistsData(data)
    setIsLoading(false)
  }

  useEffect(()=> {
    getAllSpecialists()
  }, [])

  return <>
    <Container maxWidth="xl" sx={{mt: 1, px:2, py:3, bgcolor: 'primary.main', borderRadius: 2}} >

    
      <Stack direction="column" >
        <Stack direction="row" justifyContent="space-evenly" alignItems="center" sx={{mb: 2}}>
          <Typography variant="h5">Specialists</Typography>
          {session && <Button href="/getCoins" color="secondary" sx={{borderRadius: 2}} variant="contained" size="large">Buy Coins</Button> }
        </Stack>
        <Stack direction="row" justifyContent="space-evenly" alignItems="center" sx={{mb: 2}}>
          {specialistsData ? <SpecialistsList  getAllSpecialists={getAllSpecialists} specialists={specialistsData}/> : <CircularProgress sx={{color: "secondary.main"}} /> }
        </Stack>
      </Stack>

      
    </Container>
  </>
}