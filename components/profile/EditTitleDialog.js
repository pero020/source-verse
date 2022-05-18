import * as React from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button, IconButton } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("")

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setTitle(event.target.value)
  };

  const handleSubmit = async () => {
    const res = await fetch("/api/profile/updateTitle/" + title)
    if (!res.ok) {
      console.log(res)
      return 1
    }
    props.getProfileData()
    handleClose()
    return 0
  };

  return (
    <div>
      <IconButton fontSize="small" onClick={handleClickOpen} sx={{display: "inline"}} color="secondary" aria-label="upload picture" component="span">
        <EditIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Change Title to:</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            name="title"
            fullWidth
            variant="standard"
            value={title}
            onChange={handleChange}
            color="secondary"
          />
        </DialogContent>
        <DialogActions>
          <Button color="white1" onClick={handleClose}>Cancel</Button>
          <Button color="error" onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
