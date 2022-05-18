import * as React from 'react';
import { useState } from "react"
import { useSession } from "next-auth/react"
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
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
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

export default function NewAnswerDialog(props) {
  const { data: session } = useSession()
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [snackbarMissOpen, setSnackbarMissOpen] = React.useState(false);
  const [snackbarUrlOpen, setSnackbarUrlOpen] = React.useState(false);
  const postId = props.postId;

  const [formData, setFormData] = useState({
    description: "",
    url: ""
  });

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleClickOpen = () => {
    if (session) {
      setOpen(true);
    } else {
      return 1
    }
    
  };

  const handleClose = () => {
    setFormData({
      description: "",
      url: ""
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
  const handleSnackbarUrlClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbarUrlOpen(false);
  };

  const handleSubmit = async () => {
    if (formData.description.replace(/\s/g,"") === "" || formData.url.replace(/\s/g,"") === "") {
      setSnackbarMissOpen(true);
      return 1;
    }
    if (formData.url.slice(0, 4) != "http" || !formData.url.includes("//")) {
      setSnackbarUrlOpen(true);
      return 1;
    }
    const res = await fetch("/api/posts/answers/newAnswer/" + postId, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    if (!res.ok) {
      return 1
    } else {
      props.getPost();
      handleClose();
    }
  }

  return (
    <div>
      <Fab color="secondary" aria-label="add" onClick={handleClickOpen}>
        <AddIcon />
      </Fab>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle gutterBottom={false}>
          Add Your Answer:
        </DialogTitle>
        <DialogContent>
          <DialogContentText>

          <TextField
              id="description-input"
              name="description"
              label="Answer text"
              multiline
              fullWidth
              required
              maxRows={8}
              minRows={4}
              sx={{width: {md: 500}, mt: 1}}
              value={formData.description}
              onChange={handleChange}
              color="secondary"
            />

            <TextField 
              required
              sx={{width: {md: 500}, mt: 2}} 
              fullWidth 
              label="Source url"
              id="url-input"
              name="url"
              value={formData.url}
              onChange={handleChange}
              color="secondary"
            />        

          </DialogContentText>
        </DialogContent>
        

        <DialogActions>

          
          <Button color="white1" variant="outlined" onClick={handleClose} startIcon={<DeleteIcon />}>
            Discard
          </Button>
          <Button color="secondary" variant="contained" endIcon={<SendIcon />} onClick={handleSubmit}>
            Add
          </Button>
          
        </DialogActions>
      </Dialog>

      <Snackbar open={snackbarMissOpen} autoHideDuration={6000} onClose={handleSnackbarMissClose}>
        <Alert onClose={handleSnackbarMissClose} severity="warning" sx={{ width: '100%', backgroundColor: 'error.main' }}>
          Please provide all of the required informaion
        </Alert>
      </Snackbar>
      <Snackbar open={snackbarUrlOpen} autoHideDuration={6000} onClose={handleSnackbarUrlClose}>
        <Alert onClose={handleSnackbarUrlClose} severity="warning" sx={{ width: '100%', backgroundColor: 'error.main' }}>
        Please provide a full URL, including "https://"
        </Alert>
      </Snackbar>
    </div>
  );
}
