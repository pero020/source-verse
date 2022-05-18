import * as React from 'react';
import Router from 'next/router'

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';

export default function DeletePostDialog(props) {
  const [open, setOpen] = React.useState(false);
  const postId = props.postId;
  const getAllPosts = props.getAllPosts;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteItem = async () => {
    const res = await fetch("/api/posts/deletePost/" + postId);
    if (res.ok) {
      handleClose()
      Router.push('/q&a/public/')
    } else {
      return 1
    }
  }

  return (
    <div>
      <IconButton onClick={handleClickOpen} aria-label="delete">
        <DeleteIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this item?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="white1" onClick={handleClose} autoFocus>Cancle</Button>
          <Button color="error" onClick={deleteItem}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}