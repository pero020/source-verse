import { useSession } from "next-auth/react"
import { useState, useEffect } from "react"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Rating } from '@mui/material';
import { Avatar } from '@mui/material';

import DeleteAnswerDialog from "/components/DeleteAnswerDialog"
import ReportDialog from "/components/ReportDialog"

const style = {
  width: '100%',
  maxWidth: "xl",
  bgcolor: 'background.paper',
  borderRadius: '15px',
  p:1
};

export default function PostsList(props) {
  const { data: session } = useSession()
  const [totalVotes, setTotalVotes] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [votedList, setVotedList] = useState([])
  const [answers, setAnswers] = useState(props.answers)

  const { postId } = props

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

  function setInitVotedList () {
    let list = []
    let userVote = 0
    answers.map((answer, index) => {
      userVote = 0
      answer.votes.forEach((vote) => {
        if (session) {
          if (vote.email === session.user.email) {
            userVote = vote.status;
          }
        }
      })
      list.push(userVote)
    })
    setVotedList(list)
  }
  

  function countVotes() {
    let sumsArray = []
    let sum = 0;
    answers.map((answer, index) => {
      sum = 0
      answer.votes.forEach(vote => {
        if (session) {
          if (vote.email != session.user.email) {
            sum = sum + vote.status;
          }
        } else {
          sum = sum + vote.status;
        }
        
      })
      sum = sum + votedList[index]
      sumsArray.push(sum)
    })
    setTotalVotes(sumsArray)
  }

  function handleUpVote(answerId, index, databaseIndex) {
    if (!session) {
      return 1
    }
    if (votedList[index] != 1) {
      updateVoteDatabase(answerId, 1, databaseIndex, votedList[index])
      votedList[index] = 1
      countVotes(answers)
    } else if ( votedList[index] === 1) {
      deleteVoteDatabase(databaseIndex, -1)
      votedList[index] = 0
      countVotes(answers)
    }
    
  }

  function handleDownVote(answerId, index, databaseIndex) {
    if (!session) {
      return 1
    }
    if (votedList[index] != -1) {
      updateVoteDatabase(answerId, -1, databaseIndex, votedList[index])
      votedList[index] = -1
    
      countVotes(answers)
    } else if ( votedList[index] === -1) {
      deleteVoteDatabase(databaseIndex, 1)
      votedList[index] = 0
      countVotes(answers)
    }
    
  }

  async function updateVoteDatabase(answerId, voteChange, databaseIndex, prevVote) {
    const res = await fetch("/api/posts/answers/votes/updateVote/" + postId, {
      method: 'PATCH',
      body: JSON.stringify({
        answerId: answerId,
        voteChange: voteChange,
        index: databaseIndex,
        prevVote: prevVote
      }),
      headers: {
        'Content-type': 'application/json',
      },
    })
    if (res.ok) {
      return("db updated")
    }
    
  }

  async function deleteVoteDatabase(databaseIndex, voteChange) {
    const res = await fetch("/api/posts/answers/votes/deleteOne/" + postId, {
      method: 'PATCH',
      body: JSON.stringify({
        index: databaseIndex,
        voteChange: voteChange
      }),
      headers: {
        'Content-type': 'application/json',
      },
    })
    if (res.ok) {
      return("db updated")
    }
  }

  useEffect(() => {
    setVotedList([])
    setAnswers(props.answers)
  }, [props.answers])

  useEffect(() => {
    setInitVotedList()
  }, [answers])

  useEffect(() => {
    countVotes()
    setIsLoading(false)
  }, [votedList])
  
  if (isNaN(totalVotes[answers.length-1])) {
    return <></>
  }


  return (

    <List sx={style} component="nav" aria-label="mailbox folders">
      {answers.map((answer, index) => (
        <div key={answer._id}>
        <ListItem sx={{px: 0}}>
          
          <Grid container >
            <Grid item xs={1} sx={{mr: {xs:2, md:0 }}} alignItems="top" >
              <Grid>
                <Grid item xs={12} container justifyContent={"center"}>
                <Button onClick={() => handleUpVote(answer._id, index, answer.databaseIndex)}>
                    <ArrowCircleUpIcon color={votedList[index]===1 ? "secondary" : "white1"} fontSize="large" />
                </Button>
                  
                  
                </Grid>
                <Grid item xs={12} container justifyContent={"center"} >
                  <Typography variant="body1">{totalVotes[index]}</Typography>
                </Grid>
                <Grid item xs={12} container justifyContent={"center"}>
              <Button onClick={() => handleDownVote(answer._id, index, answer.databaseIndex)}>
                <ArrowCircleUpIcon color={votedList[index]===-1 ? "error" : "white1"} fontSize="large" style={{ transform: 'rotate(180deg)' }}/>
              </Button>
                

                </Grid>
              </Grid>
            </Grid>

            <Divider orientation={"vertical"}></Divider>

            <Grid item xs={10} sx={{overflow: "hidden"}}>
              <ListItemText primary={answer.description} />
              <Stack direction={{xs: "column", md: "row"}} spacing={1} alignItems="flex-start">
              <Typography color="text.secondary" variant="caption">Source: <Link href={answer.url}><a style={{color:"#ffffffaa"}}>{answer.url}</a></Link></Typography>
              {answer.sourceScore ? 
              <Rating name="half-read-only" precision={0.2} value={answer.sourceScore} size="small" readOnly /> : 
              <Rating name="half-read-only" precision={0.2} value={0} size="small" readOnly />}
              </Stack>
              
              {isMobile ? 
              <Stack direction="row" spacing={1} alignItems="center" sx={{mt:1}}>
                <Chip
                  avatar={<Avatar alt={props.authorsData.find(author => author.email === answer.author.email).name} src={"/badges/" + props.authorsData.find(author => author.email === answer.author.email).rank.badge + ".svg"} />}
                  size="medium"
                  label={answer.author.name}
                  variant="contained"
                />
                <Chip size="medium" label={formatDate(answer.creationDate)} color="secondary" />
                {session && session.user.email === answer.author.email && 
                  <DeleteAnswerDialog getPost={props.getPost} answerId={answer._id} postId={props.postId}></DeleteAnswerDialog>}
                  {session && session.user.email !== answer.author.email && 
                  <ReportDialog reportEmail={answer.author.email}></ReportDialog> }
              </Stack>
              :
              <Stack direction="row" spacing={1} justifyContent="right" alignItems="center" sx={{mt:1}}>
                <Chip
                  avatar={<Avatar alt={props.authorsData.find(author => author.email === answer.author.email).name} src={"/badges/" + props.authorsData.find(author => author.email === answer.author.email).rank.badge + ".svg"} />}
                  size="medium"
                  label={answer.author.name}
                  variant="contained"
                />
                <Chip size="medium" label={formatDate(answer.creationDate)} color="secondary" />
                {(session && session.user.email === answer.author.email) && 
                  <DeleteAnswerDialog getPost={props.getPost} answerId={answer._id} postId={props.postId}></DeleteAnswerDialog>}
                {session && session.user.email !== answer.author.email && 
                  <ReportDialog reportEmail={answer.author.email}></ReportDialog> }
              </Stack>
              }
              
            </Grid>

          </Grid>
          
        </ListItem>
        <Divider />
        </div>
      ))} 
    </List>



  );
}