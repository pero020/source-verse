import { useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from 'next/router'

import { TextField } from "@mui/material"
import Slider from '@mui/material/Slider';
import { Stack, Button } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';

export default function NewDomainReviewForm() {
  const { data: session } = useSession()
  const [formData, setFormData] = useState({
    url: "",
    description: "",
    score: 3
  })
  const router = useRouter()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const checkDataValidity = () => {
    if (!formData.url || !formData.description || !formData.score) {
      return "Please provide all required information"
    }
    return 0;
  }

  const handleSubmit = async () => {
    const dataValidity = checkDataValidity()
    if (dataValidity !== 0) {
      console.log(dataValidity)
      return 1
    }
    const res = await fetch("/api/domainReviews/newReview", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
   });
   if (!res.ok) {
     console.log(res);
     return 1;
   }
   console.log("Success");
   router.push("/profile")
   return 0;
  }


  return( <>
  <Stack direcion="column" alignItems="center">

  <TextField 
  required
  sx={{width: {md: 500}, mt: 2}} 
  fullWidth 
  label="Domain url"
  id="url"
  name="url"
  value={formData.url}
  onChange={handleChange}
  />
  <TextField
  id="outlined-multiline-flexible"
  name="description"
  label="Description"
  multiline
  fullWidth
  required
  maxRows={8}
  minRows={4}
  sx={{width: {md: 500}, mt: 2}}
  value={formData.description}
  onChange={handleChange}
  />
  <Slider
  sx={{width: 250}}
  name="score"
  aria-label="Always visible"
  defaultValue={3}
  min={1}
  max={5}
  step={0.1}
  marks={[
    {
      value: 1,
      label: "Terrible"
    },
    {
      value: 5,
      label: "Amazing"
    }
  ]}
  valueLabelDisplay="on"
  onChange={handleChange}
  />
  <Button color="secondary" variant="contained" endIcon={<SendIcon />} onClick={handleSubmit}>
    Post
  </Button>
  </Stack>
  </>)
  

}