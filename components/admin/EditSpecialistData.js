import { useState } from "react"

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Slider from '@mui/material/Slider';

export default function EditSpecialistData() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    category: "",
    answerCost: ""
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

    if (!formData.email || !formData.category) {return 1}

    try {
      const res = await fetch("/api/admin/updateSpecialistData", {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (res.status === 405) {
        console.log("not a specialist")
        return 1
      }
      else if (!res.ok) {
        console.log(res)
        return 1
      }

      const data = await res.json()
      if (data.modifiedCount < 1) {
        console.log("User role not modified")
        return 1
      } else if (data.modifiedCount > 1) {
        console.log("Something is not right, I can feel it...")
        return 1
      }
      
    } catch (e) {
      console.log(e)
    } 

    handleClose()
  }

  return (
    <div>
      <Button sx={{mt: 1}} color="white1" variant="outlined" onClick={handleClickOpen}>
        Edit specialist data
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <DialogContentText>
            Edit the data
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
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Category"
            type="category"
            fullWidth
            variant="standard"
            name="category"
            color="secondary"
            value={formData.category}
            onChange={handleChange}
            sx={{mb:2}}
          />
          <InputLabel id="demo-simple-select-label">Answer Cost</InputLabel>
          
          <Slider
          value={formData.answerCost}
          min={1}
          max={100}
          onChange={handleChange}
          valueLabelDisplay="auto"
          aria-labelledby="non-linear-slider"
          name="answerCost"
          color="white1"
        />
        </DialogContent>
        <DialogActions>
          <Button color="white1" onClick={handleClose}>Cancel</Button>
          <Button color="error" onClick={handleSubmit}>Change</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}