import DemoProgressBar from "/components/indexDemo/DemoProgressBar"
import { Box } from "@mui/system"
import { Grid } from "@mui/material";


export default function IndexDemo () {
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
          <DemoProgressBar></DemoProgressBar>
        </Grid>
      </Grid>
    </Box>
  </>
}