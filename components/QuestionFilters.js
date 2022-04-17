import { useState } from "react"

import { Stack } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import CancelIcon from '@mui/icons-material/Cancel';

export default function QuestionFilters (props) {
  const [formData, setFormData] = useState({
    category: "General",
  });

  async function handleSubmit() {
    props.getFilteredPosts(formData.category)
  }


  return <>
  <Stack direction="row" spacing={2} alignItems="flex-end">
    <Autocomplete
      autoHighlight
      disableClearable
      required
      id="category-input"
      name="category"
      options={categories}
      sx={{minWidth: {xs: 200}, maxWidth: {md: 500}, mt: 1}}
      onChange={(event, value) => {
        setFormData({
        ...formData,
        "category": value.label
        })
      }}  
      renderInput={(params) => <TextField {...params} label="Category" value={formData.title} variant="standard" />}
    />
    <Fab color="primary" aria-label="filter" onClick={handleSubmit} size="small">
        <ManageSearchIcon></ManageSearchIcon>
    </Fab>
    <Fab size="small" color="error" aria-label="add" onClick={props.getAllPosts}>
      <CancelIcon />
    </Fab>
    

  </Stack>
  </>
}

const categories = [
  {label: "General"},
  {label: "History"},
  {label: "IT"},
  {label: "Psychology"}
]