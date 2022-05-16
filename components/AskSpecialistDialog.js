import * as React from 'react';
import { useRouter } from 'next/router'
import { useState } from "react"
import { useSession } from "next-auth/react"
import UploadImage from './InputImage';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { Grid, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

export default function NewQuestionDialog(props) {
  
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [snackbarMissOpen, setSnackbarMissOpen] = React.useState(false);
  const [snackbarCoinsOpen, setSnackbarCoinsOpen] = React.useState(false);
  const { data: session } = useSession()

  const router = useRouter()

  const [formData, setFormData] = useState({
    title: "",
    description: ""

  });

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });


  const handleClickOpen = () => {
    if (!session) {
      router.push("/signIn")
      return 1
    }
    setOpen(true);
  };

  const handleClose = () => {
    setFormData({
      title: "",
      description: ""
    })
    setOpen(false);
  };

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

  const handleSnackbarCoinsClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbarCoinsOpen(false);
  };

  const handleSubmit = async () => {
    if (formData.title.replace(/\s/g,"") === "" || formData.description.replace(/\s/g,"") === "") {
      setSnackbarMissOpen(true);
      return 1
    }
    const postData = {formData, specialistEmail: props.specialistData.email}

    const res = await fetch("/api/specialists/ask", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    })
    if (res.status === 405) {
      setSnackbarCoinsOpen(true)
      handleClose();
      return 1
    }
    if (!res.ok) {
      console.log(res)
      return 1
    } else {
      router.push("/profile")
      handleClose();
      return 0
    }
  }

  return (
    <div>
      <Button onClick={handleClickOpen} variant="contained" color="secondary" size="large" sx={{color:"background.contrastColor"}}>
        Ask me!
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle gutterBottom={false}>
          Ask {props.specialistData.name} a question
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography variant="h6">Cost: {props.specialistData.answerCost} {props.specialistData.answerCost === 1 ? "Coin" : "Coins" }</Typography>
            <TextField 
              required
              sx={{width: {md: 500}, mt: 2}} 
              fullWidth label="Question title"
              id="title-input"
              name="title"
              value={formData.title}
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
            {/* <UploadImage sx={{mt: 2}}></UploadImage> */}
            

          </DialogContentText>
        </DialogContent>
        

        <DialogActions>

          
          <Button variant="outlined" onClick={handleClose} startIcon={<DeleteIcon />}>
            Discard
          </Button>
          <Button color="secondary" variant="contained" endIcon={<SendIcon />} onClick={handleSubmit}>
            Ask
          </Button>
          
        </DialogActions>
      </Dialog>

      <Snackbar open={snackbarMissOpen} autoHideDuration={6000} onClose={handleSnackbarMissClose}>
        <Alert onClose={handleSnackbarMissClose} severity="warning" sx={{ width: '100%', backgroundColor: 'error.main' }}>
          Please provide all of the required informaion
        </Alert>
      </Snackbar>
      <Snackbar open={snackbarCoinsOpen} autoHideDuration={6000} onClose={handleSnackbarMissClose}>
        <Alert onClose={handleSnackbarCoinsClose} severity="error" sx={{ width: '100%', backgroundColor: 'error.main' }}>
          Not enough Coins
        </Alert>
      </Snackbar>
    </div>
  );
}