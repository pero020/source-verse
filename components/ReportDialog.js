import * as React from 'react';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import ReportIcon from '@mui/icons-material/Report';
import Button from '@mui/material/Button';

export default function DeletePostDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  async function reportUser() {
    const res = await fetch("/api/posts/answers/reportAnswer", {
      method: "POST",
      body: JSON.stringify({
        reportEmail: props.reportEmail
      }),
      headers: {
        'Content-type': 'application/json',
      },
    })
    if (res.status === 405) {
      console.log("User already reported");
    } else if(!res.ok) {
      console.log(res)
    }
    handleClose()
    return
  }

  return (
    <div>
      <IconButton onClick={handleClickOpen} aria-label="report" size="small">
        <ReportIcon color="error" />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to report this user?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>Cancel</Button>
          <Button onClick={reportUser}>
            Report
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}