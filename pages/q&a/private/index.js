import { useSession } from "next-auth/react"
import { useState, useEffect } from "react"
import { Grid } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import Chip from '@mui/material/Chip';
import { Container } from "@mui/material";

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
    <Container maxWidth="xl" sx={{mt: 2, px:2, py:3, bgcolor: 'background.container', borderRadius: 2}} >
      <Stack justifyContent="space-between" alignItems="center" direction="row">
        
      </Stack>
      <Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justifyContent="center"
  
>

<Typography variant="h5">Specialists</Typography>
      {specialistsData ? <SpecialistsList  getAllSpecialists={getAllSpecialists} specialists={specialistsData}/> : <CircularProgress sx={{color: "secondary.main"}} /> }
   
   </Grid>
   
   
    </Container>
  </>
}