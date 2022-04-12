import Link from "next/link"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


export default function Forum() {

  return <>
  <Grid container columnSpacing={8} rowSpacing={6} >

    <Grid item xs={12} md={6}>
      <Box textAlign='center'>
        <Link href="/q&a/public">
          <Button variant="contained" sx={{
            backgroundColor: 'secondary.main',
            px: 6,
            py: 6,
            borderRadius: 5,
            mt: {
              xs: 4,
              md: 28
            },
            "&:hover": {
              backgroundColor: 'secondary.dark',
            },
            
          }}>
            <Typography variant="h2" align="center">Public Q&A</Typography>
          </Button>
        </Link>
      </Box>
    </Grid>

    <Grid item xs={12} md={6}>
      <Box textAlign='center'>
        <Link href="/q&a/private">
          <Button variant="contained" sx={{
            backgroundColor: 'primary.main',
            px: 6,
            py: 6,
            borderRadius: 5,
            mt: {
              xs: 0,
              md: 28
            }
          }}>
            <Typography variant="h2" color="#ffffff" align="center">Private Q&A</Typography>
          </Button>
        </Link>
      </Box>
    </Grid>
  </Grid>
  </>
}