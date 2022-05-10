import Link from "next/link"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'


export default function Custom404() {

  return <>
        <Box sx={{mb:5}} maxWidth={{xs:'70%', md:'25%'}}>
          <Typography color="background.contrastColor">404 - Page Not Found</Typography>
        </Box>
  </>

  
}