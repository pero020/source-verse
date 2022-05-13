import { createTheme } from '@mui/material/styles';
import { alpha } from "@mui/material";

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
    error: {
      main: "#DC143C",
    },
    background: {
      container: alpha("#fff", 0.9),
      default: "#2b2b2b",
      contrastColor:"#ffffff"
    }
  },
});


export default theme;