import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { alpha } from "@mui/material";

let theme = createTheme({

  palette: {
    mode: 'dark',
    primary: {
      main: '#353C42',
    },
    secondary: {
      main: '#52d17b',
    },
    success: {
      main: "#00ED64",
    },
    error: {
      main: "#DC143C",
    },
    background: {
      container: alpha("#fff", 0.9),
      default: "#2b2b2b",
      paper: "#363636",
      contrastColor:"#ffffff"
    },
    text: {
      softWhite: alpha("#fff", 0.9)
    },
    green:{
      main:"#52D17B",
    },
    white1:{
      main:"#ffffff",
    }
  },
});

theme = responsiveFontSizes(theme);


export default theme;