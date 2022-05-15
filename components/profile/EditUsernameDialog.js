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
  const [username, setUsername] = React.useState("")

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setUsername(event.target.value)
  };

  const handleSubmit = async () => {
    const res = await fetch("/api/profile/updateUsername/" + username)
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
        <DialogTitle>Change Username to:</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="username"
            label="Username"
            name="username"
            fullWidth
            variant="standard"
            value={username}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
