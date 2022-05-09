import Link from "next/link"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import { ButtonBase } from "@mui/material";


export default function Forum() {

  return <>
        <Box sx={{mb:5}} maxWidth={{xs:'70%', md:'25%'}}>
          <Lottie options={{loop: true, autoplay: true, rendererSettings: {preserveAspectRatio: 'xMidYMid meet'}, animationData: trophy,}}/>
        </Box>
  </>

  
}