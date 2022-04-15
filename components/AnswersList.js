import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Image from 'next/image';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';



const style = {
  width: '100%',
  maxWidth: "md",
  bgcolor: 'background.paper',
};

export default function PostsList(props) {


  const answers = props.answers

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

      newText = text.slice(0, window.innerWidth/12)
    } else {
      newText = text.slice(0, window.innerWidth/12)
    }
    if (newText.length < text.length ) {
      newText = newText + "...";
    }
    return newText
  }

  function countVotes(votes) {
    let sum = 0;
    votes.forEach(vote => {
      sum = sum + vote.vote;
    })
    return sum;
  }



  return (
    


    <List sx={style} component="nav" aria-label="mailbox folders">
      
      {answers.map((answer) => (
        <div key={answer._id}>
        <ListItem sx={{px: 0}}>
          
          <Grid container alignItems={"center"} >
            <Grid item xs={1} sx={{mr:{xs:1, md:0}}}>
              <Grid>
                <Grid item xs={12} container justifyContent={"center"}>
               
                <Button>
                  <ArrowCircleUpIcon color="secondary" fontSize="large" />
                </Button>
                  
                  
                </Grid>
                <Grid item xs={12} container justifyContent={"center"} >
                  <Typography variant="body1">{countVotes(answer.votes)}</Typography>
                </Grid>
                <Grid item xs={12} container justifyContent={"center"}>
              <Button>
                <ArrowCircleUpIcon color="secondary" fontSize="large" style={{ transform: 'rotate(180deg)' }}/>
              </Button>
                

                </Grid>
              </Grid>
            </Grid>

            <Divider orientation={"vertical"}></Divider>

            <Grid item xs={10}>
                <ListItemText primary={answer.description} secondary={answer.author.name + ", " + formatDate(answer.creationDate)} />
                
            </Grid>

            <Grid item xs={1} sx={{mr:{xs:1, md:0}}}>

            </Grid>

            <Grid item xs={8} justifyContent={"right"}>
              <Typography variant="caption">Source: <Link href={answer.url}>{answer.url}</Link></Typography>
            </Grid>

          </Grid>
          
        </ListItem>
        <Divider />
        </div>
      ))} 
    </List>



  );
}