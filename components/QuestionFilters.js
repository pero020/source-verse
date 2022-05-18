import { useState } from "react"

import { Stack } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import CancelIcon from '@mui/icons-material/Cancel';
import Accordion from '@mui/material/Accordion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

export default function QuestionFilters(props) {
  const [formData, setFormData] = useState({
    category: "",
    searchTerm: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  async function handleSubmit() {
    props.getFilteredPosts(formData.category, formData.searchTerm)
  }




  return <>


  <Accordion sx={{boxShadow: "none", mt: 6, mb: 1, borderRadius: '6px', maxWidth:'md', width:"100%"}}>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
      
    >
      <Typography>Filters</Typography>
    </AccordionSummary>
    <AccordionDetails>
        <Stack direction="row" spacing={2}> 
        <Autocomplete
          autoHighlight
          required
          id="category-input"
          name="category"
          options={categories}
          sx={{minWidth: {xs: 250}, maxWidth: {md: 500}}}
          onChange={(event, value) => {
            if (!value) {
              setFormData({
            ...formData,
            "category": ""
            })
            } else {
            setFormData({
            ...formData,
            "category": value.label
            })
            }
          }}
          renderInput={(params) => <TextField {...params} label="Category" color="secondary" value={formData.title} variant="standard" />}
        />
        
      </Stack>

      <Stack direction="row" spacing={2}> 
        <TextField 
        id="searchTerm" 
        name="searchTerm" 
        label="Search for key words" 
        variant="standard" 
        color="secondary"
        sx={{minWidth: {xs: 250}, maxWidth: {md: 500}, mt: 1}}
        value={formData.title}
        onChange={handleChange}
         />
      </Stack>

      <Stack direction="row" spacing={2} alignItems="flex-end" sx={{mt:3}}>
        <Fab color="primary" aria-label="filter" onClick={handleSubmit} size="small">
          <ManageSearchIcon></ManageSearchIcon>
        </Fab>
        <Fab size="small" color="error" aria-label="add" onClick={props.getAllPosts}>
          <CancelIcon />
        </Fab>
      </Stack>
      
    </AccordionDetails>
  </Accordion>


  
  </>
}

const categories = [
  {label: "General"},
  {label: "Hobbies"},
  {label: "Art"},
  {label: "Animals"},
  {label: "Business"},
  {label: "Design"},
  {label: "Ecology"},
  {label: "Economics"},
  {label: "Math"},
  {label: "Natural Sciences"},
  {label: "Social Sciences"},
  {label: "Music"},
  {label: "Travel"},
  {label: "Self Improvement"},
  {label: "Photography and Video"},
  {label: "Relationships"},
  {label: "Fitness"},
  {label: "Sports"},
  {label: "IT"},
  {label: "Psychology"},
  {label: "History"},
  {label: "Politics"},
  {label: "Marketing"},
  {label: "Languages"},
  {label: "Food"},
  {label: "Education"},
  {label: "Entertainment"},
  {label: "Beauty"},
]