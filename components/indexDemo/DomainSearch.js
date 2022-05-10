import { useState, useEffect } from "react"
import TextField from '@mui/material/TextField';

import { Typography } from '@mui/material';
import { Stack } from '@mui/material';
import { Box } from '@mui/material';
import { Divider } from '@mui/material';
import Fab from '@mui/material/Fab';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';


export default function DomainSearch() {
  const [domainData, setDomainData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [loadingStatus, setLoadingStatus] = useState(null)

  const handleChange = (e) => {
    const { value } = e.target
    setSearchTerm(value)
  }
  async function handleSubmit() {
    if (searchTerm === null) {
      return 1;
    }
    setLoadingStatus(null)
    setDomainData(null)
    const res = await fetch("/api/domainReviews/getDomainData/" + searchTerm)
    if (res.status === 500) {
      console.log(res)
      return 1;
    }
    if (res.status === 404) {
      setLoadingStatus(404)
      return 1;
    }
    const data = await res.json();
    setDomainData(data);
  }

  return <>
    <Stack direction="row" alignItems="baseline" spacing={5} justifyContent="center">
      <TextField 
      id="domainSearch" 
      name="searchTerm" 
      value={searchTerm} 
      label="Domain Search" 
      variant="standard"
      onChange={handleChange}
      />
      <Fab color="primary" aria-label="filter" onClick={handleSubmit} size="small">
        <ManageSearchIcon></ManageSearchIcon>
      </Fab>
    </Stack>
    

    {loadingStatus === 404 && 
      <Typography>Domain data not found</Typography>
    }


    {domainData && domainData.reviews.length !== 0 && 
    <>
    <Typography sx={{mb:5}}>Total score: {domainData.score}</Typography>
    {domainData.reviews.map(review => (
      <div key={review._id}>
      <Typography>{review.description}</Typography>
      <Typography>{review.score}</Typography>
      <Typography>{review.author.name}</Typography>
      <Divider/>
      </div>
    ))}
    </>
    }
  </>
}