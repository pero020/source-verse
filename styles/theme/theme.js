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
    background: {
      container: alpha("#fff", 0.85)
    }
  },
});


export default theme;