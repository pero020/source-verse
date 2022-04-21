import {forwardRef, useEffect, useState } from "react"

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import Stack from '@mui/material/Grid';
import Container from "@mui/material/Container"


import DeleteConfirmDialog from "./DeleteConfirmDialog"

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const [open, setOpen] = useState(false);
  const [usersData, setUsersData] = useState(null)

  const handleClickOpen =() => {
    
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getUserData = async () => {
    const res = await fetch("/api/admin/getAllUsers");
    if (!res.ok) {
      console.log(res)
      return 1
    }
    const data = await res.json();
    setUsersData(data);
    
  }

  useEffect(()=> {
    getUserData()
  }, [])

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} sx={{mt: 1}}>
        List of Users by Reports
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
      <AppBar sx={{ position: 'relative' }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close" >
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            All Users
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" sx={{mt:2, px:1}} >
        {usersData && 
          <List>
            {usersData.map((user) => (
              <div key={user._id}>
                <ListItem >
                  <Stack container alignItems="center" justifyContent="space-between">
                    <ListItemText 
                      primary={user.email}
                      secondary={user.role} />
                    <Typography 
                      color={user.reportStatus < 5 ? "secondary" : "error"}
                      >{user.reportStatus}</Typography>
                    <DeleteConfirmDialog getUserData={getUserData} email={user.email}></DeleteConfirmDialog>
                  </Stack>
                </ListItem>
                <Divider />
              </div>
            ))}  
          </List>}
        </Container>
      </Dialog>
    </div>
  );
}