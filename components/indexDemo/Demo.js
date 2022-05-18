import DemoProgressBar from "/components/indexDemo/DemoProgressBar"
import Container from "@mui/material/Container"


export default function IndexDemo () {
  return <>
  <Container maxWidth="xl" sx={{mt: 1, px:2, py:3, bgcolor: 'primary.main', borderRadius: 2}} >
    <DemoProgressBar></DemoProgressBar>
  </Container>
  </>
}