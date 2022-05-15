import {useState, useEffect} from "react"
import { useSession } from "next-auth/react"
import { useRouter } from 'next/router'

import { Avatar, ListItemSecondaryAction, Typography } from '@mui/material'
import { Grid } from '@mui/material'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Button } from "@mui/material";
import { Container, Divider } from "@mui/material";
import { Box } from "@mui/system";
import { LinearProgress} from "@mui/material"

import AnswerSpecialistQuestionDialog from "/components/AnswerSpecialistQuestionDialog"

export default function SpecialistQuestion() {
  const { data: session } = useSession()

  const router = useRouter()
  const { id } = router.query

  const [questionData, setQuestionData] = useState(null)

  async function getQuestionData() {
    try {
      const res = await fetch("/api/specialists/getQuestion/" + id) 
      if (!res.ok) {
        console.log(res)
        router.push("/profile")
      }
      const data = await res.json()
      setQuestionData(data)
    } catch (e) {
      console.log(e)
      router.push("/profile")
    }
    
    
  }

  useEffect(() => {
    getQuestionData()
  }, [])

  function formatDate(date) {
    let formatedDate = date.split("T")[0]
    return(formatedDate)
  }


  if (!questionData) {
    return <>
      <LinearProgress></LinearProgress>
    </>
  }

  return <>
    {console.log(questionData)}
    <Container maxWidth="xl" sx={{mt: 2, px:2, py:3, bgcolor: 'background.container', borderRadius: 2}} >
    <Stack direction="row" spacing={1} justifyContent="space-between">  
    </Stack>
    <Typography variant="h4">{questionData.title}</Typography>
    <br/>
    <Stack direction="row" spacing={1} justifyContent="left" alignItems="center">
      <div>
      <Chip
        label={questionData.author.name}
        variant="outlined"
        sx={{mr:1, bgcolor: 'background.paper'}}
      />

      <Chip
        label={questionData.specialist.name}
        variant="outlined"
        sx={{mr:1, bgcolor: 'background.paper'}}
      />

      <Chip label={formatDate(questionData.creationDate)} color="secondary" />
      
      </div>
    </Stack>
    <Typography variant="body1" sx={{mt: 2}}>{questionData.description}</Typography>
    <br/>
    

    {questionData.answered && 
    <>
    <Divider></Divider>
    <Typography sx={{mb: 2}} variant="h4">Answer:</Typography>
    <Typography variant="h6">{questionData.answer.title}</Typography>
    <Typography variant="body1">{questionData.answer.description}</Typography>
    </>
    }

    {!questionData.answered && questionData.specialist.email === session.user.email && 
    <>
    <AnswerSpecialistQuestionDialog id={id} getQuestionData={getQuestionData}></AnswerSpecialistQuestionDialog>
    </>
    }

    </Container>

  </>
    
}