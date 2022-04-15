import { useSession } from "next-auth/react"

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleUp';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import DeleteAnswerDialog from "/components/DeleteAnswerDialog"


const style = {
  width: '100%',
  maxWidth: "md",
  bgcolor: 'background.paper',
};

export default function PostsList(props) {
  const { data: session } = useSession()

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
        {console.log(answer._id)}
        <ListItem sx={{px: 0}}>
          
          <Grid container alignItems={"top"} >
            <Grid item xs={1} sx={{mr: {xs:2, md:0 }}} alignItems="top" >
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
              <ListItemText primary={answer.description} />
              <Typography variant="caption">Source: <Link href={answer.url}>{answer.url}</Link></Typography>

              {isMobile ? 
              <Stack direction="row" spacing={1} alignItems="center" sx={{mt:1}}>
                <Chip
                  size="medium"
                  label={answer.author.name}
                  variant="outlined"
                />
                <Chip size="medium" label={formatDate(answer.creationDate)} color="secondary" />
                {session && session.user.email === answer.author.email && 
                  <DeleteAnswerDialog getPost={props.getPost} answerId={answer._id} postId={props.postId}></DeleteAnswerDialog>}
              </Stack>
              :
              <Stack direction="row" spacing={1} justifyContent="right" alignItems="center" sx={{mt:1}}>
                <Chip
                  size="medium"
                  label={answer.author.name}
                  variant="outlined"
                />
                <Chip size="medium" label={formatDate(answer.creationDate)} color="secondary" />
                {session && session.user.email === answer.author.email && 
                  <DeleteAnswerDialog getPost={props.getPost} answerId={answer._id} postId={props.postId}></DeleteAnswerDialog>}
              </Stack>
              }
              
            </Grid>

            {/* <Grid item xs={1} sx={{mr:{xs:2, md:0}}}>

            </Grid>

            <Grid item xs={8} justifyContent={"right"}>
              <Stack direction="row" spacing={1} justifyContent="space-between" alignItems="center">
                <Typography variant="caption">Source: <Link href={answer.url}>{answer.url}</Link></Typography>
              </Stack>
            </Grid> */}

          </Grid>
          
        </ListItem>
        <Divider />
        </div>
      ))} 
    </List>



  );
}