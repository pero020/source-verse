import { useState, forwardRef } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from 'next/router'

import { TextField } from "@mui/material"
import Slider from '@mui/material/Slider';
import { Stack, Button } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

export default function NewDomainReviewForm() {
  const { data: session } = useSession()
  const [formData, setFormData] = useState({
    url: "",
    description: "",
    score: 3
  })
  const [snackbarMissOpen, setSnackbarMissOpen] = useState(false);
  const [snackbarUrlOpen, setSnackbarUrlOpen] = useState(false);
  const [snackbarHaveOpen, setSnackbarHaveOpen] = useState(false);
  const router = useRouter()

  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSnackbarMissClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbarMissOpen(false);
  };
  const handleSnackbarHaveClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbarHaveOpen(false);
  };
  const handleSnackbarUrlClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbarUrlOpen(false);
  };

  const checkDataValidity = () => {
    if (!formData.url || !formData.description || !formData.score) {
      setSnackbarMissOpen(true)
      return 1
    }
    if (formData.url.includes("/")) {
      setSnackbarUrlOpen(true)
      return 1
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
    if (res.status === 405) {
      setSnackbarHaveOpen(true)
      return 1
    }
    else if (!res.ok) {
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
  label="Domain URL"
  id="url"
  name="url"
  value={formData.url}
  onChange={handleChange}
  color="secondary"
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
  color="secondary"
  />
  <Slider
  sx={{width: 250}}
  name="score"
  aria-label="Always visible"
  defaultValue={3}
  min={1}
  max={5}
  step={0.1}
  color="white1"
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
  <Button sx={{py: 1.2, px: 3, borderRadius: 8}} color="secondary" variant="contained" endIcon={<SendIcon />} onClick={handleSubmit}>
    Post
  </Button>
  </Stack>

  <Snackbar open={snackbarMissOpen} autoHideDuration={6000} onClose={handleSnackbarMissClose} anchorOrigin={{vertical: "bottom", horizontal: "center"}} sx={{ minWidth: "50%" }}>
    <Alert onClose={handleSnackbarMissClose} severity="warning" sx={{ width: '100%', backgroundColor: 'error.main' }}>
      Please provide all of the required informaion
    </Alert>
  </Snackbar>
  <Snackbar open={snackbarHaveOpen} autoHideDuration={6000} onClose={handleSnackbarHaveClose} anchorOrigin={{vertical: "bottom", horizontal: "center"}} sx={{ minWidth: "50%" }}>
    <Alert onClose={handleSnackbarHaveClose} severity="warning" sx={{ width: '100%', backgroundColor: 'error.main' }}>
      Already submitted a review for this domain!
    </Alert>
  </Snackbar>
  <Snackbar open={snackbarUrlOpen} autoHideDuration={6000} onClose={handleSnackbarUrlClose} anchorOrigin={{vertical: "bottom", horizontal: "center"}} sx={{ minWidth: "50%" }}>
    <Alert onClose={handleSnackbarUrlClose} severity="warning" sx={{ width: '100%', backgroundColor: 'error.main' }}>
    Please only provide the top level domain name, example: "facebook.com"
    </Alert>
  </Snackbar>
  </>)
  

}