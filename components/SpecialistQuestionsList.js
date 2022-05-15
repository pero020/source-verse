import { Avatar } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const style = {
  width: '100%',
  maxWidth: "md",
  bgcolor: 'background.paper',
  borderRadius: '8px',
  px: 3
};

export default function questionsList(props) {
  const questions = props.questions
  console.log(questions)

  function detectMob() {
    return ( ( window.innerWidth <= 800 ) && ( window.innerHeight <= 1000 ) );
  }
  const isMobile = detectMob()

  function formatDate(date) {
    let formatedDate = date.split("T")[0]
    return(formatedDate)
  }
  function setLength(text) {
    let newText
    if (isMobile) {

      newText = text.slice(0, window.innerWidth/10)
    } else {
      newText = text.slice(0, window.innerWidth/10)
    }
    if (newText.length < text.length ) {
      newText = newText + "...";
    }
    return newText
  }

  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
    {questions.length === 0 && <Typography>No results</Typography>}
      {questions.map((question) => (
        <div key={question._id}>
        <ListItem sx={{px: 0}}>
          <Grid container alignItems={"center"} >

            <Grid item xs={12}>
              <Link underline={"none"} href={"/q&a/private/question/" + question._id}>
                <Stack direction="row" spacing={1} justifyContent="space-between">
                    <ListItemText nowrap={"true"} primary={setLength(question.title )} />
                </Stack>
              </Link>
                
              <Stack direction="row" spacing={1} justifyContent="right" alignItems="center">
                <Chip
                size="small"
                label={question.author.name}
                variant="outlined"
                />
                <Chip
                size="small"
                label={question.specialist.name}
                variant="contained"
                />
                <Chip size="small" label={formatDate(question.creationDate)} color="secondary" />
              </Stack>
          </Grid>

          </Grid>
          
        </ListItem>
        <Divider light/>
        </div>
      ))} 
    </List>
  );
}