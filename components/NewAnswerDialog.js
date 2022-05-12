import * as React from 'react';
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
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';

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

  const postId = props.postId;

  const [formData, setFormData] = useState({
    description: "",
    url: ""
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

  const handleSubmit = async () => {
    if (formData.description.replace(/\s/g,"") === "" || formData.url.replace(/\s/g,"") === "") {
      console.log("no data")
      return "please fill all the fields"
    }
    if (formData.url.slice(0, 4) != "http" || !formData.url.includes("//")) {
      console.log("url not valid")
      return "pls provide a full and valid URL, including 'https://'"
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
            />        

          </DialogContentText>
        </DialogContent>
        

        <DialogActions>

          
          <Button variant="outlined" onClick={handleClose} startIcon={<DeleteIcon />}>
            Discard
          </Button>
          <Button color="secondary" variant="contained" endIcon={<SendIcon />} onClick={handleSubmit}>
            Add
          </Button>
          
        </DialogActions>
      </Dialog>
    </div>
  );
}
