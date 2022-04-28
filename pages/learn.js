import Demo from "/components/indexDemo/Demo"
import { Container } from "@mui/material";

export default function Learn() {


  return <>
  <Container maxWidth="xl" sx={{mt: 2, px:2, py:3, bgcolor: 'background.container', borderRadius: 2}} >
    <Demo></Demo>
  </Container>
  </>
};