import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { alpha } from "@mui/material";

let theme = createTheme({

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
    error: {
      main: "#DC143C",
    },
    background: {
      container: alpha("#fff", 0.9),
      default: "#2b2b2b",
      contrastColor:"#ffffff"
    },
    text: {
      softWhite: alpha("#fff", 0.9)
    },
    green:{
      main:"#52D17B",
    }
  },
});

theme = responsiveFontSizes(theme);


export default theme;