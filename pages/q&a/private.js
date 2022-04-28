import Typography from '@mui/material/Typography';
import { Container } from "@mui/material";

export default function Private() {


  return <>
    <Container maxWidth="xl" sx={{mt: 2, px:2, py:3, bgcolor: 'background.container', borderRadius: 2}} >
      <Typography variant="h2">
        Private Q&A
      </Typography>
    </Container>
  </>
}