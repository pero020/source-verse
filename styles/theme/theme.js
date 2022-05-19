import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { alpha } from "@mui/material";

let theme = createTheme({

  palette: {
    mode: 'dark',
    primary: {
      main: '#353C42',
    },
    secondary: {
      main: '#50eb82',
    },
    success: {
      main: "#00ED64",
    },
    background: {
      container: alpha("#fff", 0.9),
      default: "#2b2b2b",
      paper: "#434c54",
      contrastColor:"#ffffff"
    },
    text: {
      softWhite: alpha("#fff", 0.9),
      secondary: alpha("#fff", 0.85)
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