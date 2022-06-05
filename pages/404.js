import Link from "next/link"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import { Stack } from "@mui/material";
import Lottie from 'react-lottie'
import er from '/public/lotties/404';

export default function Custom404() {

  return <>
  <Stack direction="row" justifyContent="center">
        <Box sx={{mt:5}} maxWidth={{xs:'100%', md:'85%'}}>
        <Lottie isClickToPauseDisabled={true} options={{loop: true, autoplay: true, rendererSettings: {preserveAspectRatio: 'xMidYMid meet'}, animationData: er}}/>
        </Box>
  </Stack>
  </>

  
}