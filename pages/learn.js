import BasicTabs from "../components/DemoProgressBar"
import { Grid } from "@mui/material"
import { Box } from "@mui/system"

export default function Forum() {


  return <>
<Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
          flexDirection:'row',
          alignContent: 'center'
        }}
      >
    <Grid container direction="column" item xs={40} align="center">
  <Grid
    item
    display="flex"
    justify="center" //in MUI v5 this prop is renamed justifyContent
  >
 <BasicTabs></BasicTabs>
      
      </Grid>
      </Grid>
      </Box>
  </>
};