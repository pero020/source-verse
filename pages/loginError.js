import Link from "next/link"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'


export default function LoginError() {

  return <>
    <Box sx={{mb:5}} maxWidth={{xs:'70%', md:'25%'}}>
      <Typography color="background.contrastColor">Sign in not allowed</Typography>
    </Box>
  </>

  
}