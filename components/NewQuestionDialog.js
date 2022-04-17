import * as React from 'react';
import { useState } from "react"
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

export default function NewQuestionDialog(props) {
  
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const [formData, setFormData] = useState({
    category: "General",
    title: "",
    description: ""

  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setFormData({
      category: "General",
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

  const handleSubmit = async () => {
    if (formData.title === "" || formData.description === "") {
      console.log("no data")
      return "please fill all the fields"
    }
    const res = await fetch("/api/posts/newPost", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    if (!res.ok) {
      return 1
    } else {
      props.getAllPosts();
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
          Add a New Question:
        </DialogTitle>
        <DialogContent>
          <DialogContentText>

            <Autocomplete
              autoHighlight
              disableClearable
              fullWidth
              required
              id="category-input"
              name="category"
              options={categories}
              sx={{width: {md: 500}, mt: 1}}
              onChange={(event, value) => {
                setFormData({
                ...formData,
                "category": value.label
                })
              }}
              renderInput={(params) => <TextField {...params} label="Category" value={formData.title} />}
            />
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
            Add
          </Button>
          
        </DialogActions>
      </Dialog>
    </div>
  );
}

const categories = [
  {label: "General"},
  {label: "History"},
  {label: "IT"},
  {label: "Psychology"}
]