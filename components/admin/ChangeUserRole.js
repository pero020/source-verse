import { useState } from "react"

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function FormDialog() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    role: ""
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setFormData({
      email: "",
      role: ""
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

    if (!formData.email || !formData.role) {return 1}

    try {
      const res = await fetch("/api/admin/changeUserRole", {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (!res.ok) {
        console.log(res)
        return "Res not okay"
      }

      const data = await res.json()
      if (data.modifiedCount < 1) {
        console.log("User role not modified")
        return 1
      } else if (data.modifiedCount > 1) {
        console.log("Something is not right, I can feel it...")
        return "1"
      }
      
    } catch (e) {
      console.log(e)
    } 

    handleClose()
  }

  return (
    <div>
      <Button color="white1" variant="outlined" onClick={handleClickOpen}>
        Change User Role
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <DialogContentText>
            Change an existing users role:
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            name="email"
            color="secondary"
            value={formData.email}
            onChange={handleChange}
            sx={{mb:2}}
          />
          <InputLabel id="demo-simple-select-label">Role</InputLabel>
          
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            variant="standard"
            name="role"
            value={formData.role}
            label="role"
            onChange={handleChange}
            sx={{minWidth: 100}}
            color="secondary"
          >
            <MenuItem value="user">User</MenuItem>
            <MenuItem value="specialist">Specialist</MenuItem>
            <MenuItem value="admin">Admin</MenuItem>
          </Select>
        </DialogContent>
        <DialogActions>
          <Button color="white1" onClick={handleClose}>Cancel</Button>
          <Button color="error" onClick={handleSubmit}>Change</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}