import { useState } from "react"
import TextField from '@mui/material/TextField';

import { Typography } from '@mui/material';
import { Stack } from '@mui/material';
import Fab from '@mui/material/Fab';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

import ReviewsList from "./ReviewsList"


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
    <Stack sx={{mb: 1}} direction="row" alignItems="baseline" spacing={5} justifyContent="center">
      <TextField 
      id="domainSearch" 
      name="searchTerm" 
      value={searchTerm} 
      label="Domain Search" 
      variant="standard"
      onChange={handleChange}
      sx={{minWidth:"50%"}}
      color="secondary"
      />
      <Fab color="secondary" aria-label="filter" onClick={handleSubmit} size="small">
        <ManageSearchIcon></ManageSearchIcon>
      </Fab>
    </Stack>
    

    {loadingStatus === 404 && 
      <Typography align="center">No data found for this domain</Typography>
    }


    {domainData && domainData.reviews.length !== 0 && 
    <>
    <Typography align="center"  sx={{my:2}} >Total score: {domainData.score > 3 ? <strong style={{color:"#52d17b"}}>{domainData.score}</strong> : <strong style={{color:"red"}}>{domainData.score}</strong>} Points</Typography>
    {domainData.communityVotes && <Typography sx={{mb:5}} align="center" variant="body1"><strong>{domainData.communityVotes.length}</strong> community {domainData.communityVotes.length === 1 ? "approve" : "approves"}</Typography>}
    <ReviewsList reviews={domainData.reviews}></ReviewsList>
    </>
    }
  </>
}