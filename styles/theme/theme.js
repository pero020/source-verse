import { createTheme } from '@mui/material/styles';
import React from 'react';

const theme = createTheme({

  
  palette: {
    primary: {
      main: '#333333',
    },
    secondary: {
      main: '#52d17b',
    },
    success: {
      main: "#00ED64",
    },
    upvote:{
      main: "#0288d1"
    },
    downvote:{
      main:"#d32f2f"
    },
    }
  },
);


export default theme;