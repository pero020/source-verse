import * as React from 'react';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import IconButton from '@mui/material/IconButton';
import ReportIcon from '@mui/icons-material/Report';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

export default function DeletePostDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [snackbarSuccOpen, setSnackbarSuccOpen] = React.useState(false);


  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbarOpen(false);
  };

  const handleSnackbarSuccClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbarSuccOpen(false);
  };

  async function reportUser() {
    const res = await fetch("/api/reportUser", {
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
      setSnackbarOpen(true)
    } else if(!res.ok) {
      console.log(res)
    } else {
      setSnackbarSuccOpen(true)
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
          <Button color="white1" onClick={handleClose} autoFocus>Cancel</Button>
          <Button color="error" onClick={reportUser}>
            Report
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity="info" sx={{ width: '100%' }}>
          User already reported!
        </Alert>
      </Snackbar>
      <Snackbar open={snackbarSuccOpen} autoHideDuration={3000} onClose={handleSnackbarSuccClose}>
        <Alert onClose={handleSnackbarSuccClose} severity="success" sx={{ width: '100%' }}>
          User Successfully reported!
        </Alert>
      </Snackbar>
    </div>
  );
}