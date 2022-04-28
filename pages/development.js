import { Typography } from "@mui/material"
import ColorsTimeline from "../components/timeline"
import { Container } from "@mui/material";

export default function Learn() {


  return <>
  <Container maxWidth="xl" sx={{mt: 2, px:2, py:3, bgcolor: 'background.container', borderRadius: 2}} >
    <Typography align="center" variant="h5">This is a timeline that shows our development progress</Typography>
    <ColorsTimeline></ColorsTimeline>
  </Container>
  </>
};