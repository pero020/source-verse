import { useState } from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';


const style = {
  width: '100%',
  maxWidth: "md",
  bgcolor: 'background.paper',
  borderRadius: '8px',
  px: 3
};

export default function specialistsList(props) {
  const specialists = props.specialists

  function detectMob() {
    return ( ( window.innerWidth <= 800 ) && ( window.innerHeight <= 1000 ) );
  }
  const isMobile = detectMob()

  function formatDate(date) {
    let formatedDate = date.split("T")[0]
    return(formatedDate)
  }
  function setLength(text) {
    let newText
    if (isMobile) {

      newText = text.slice(0, window.innerWidth/10)
    } else {
      newText = text.slice(0, window.innerWidth/10)
    }
    if (newText.length < text.length ) {
      newText = newText + "...";
    }
    return newText
  }

  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
    {specialists.length === 0 && <Typography>No results</Typography>}
      {specialists.map((specialist) => (
        <div key={specialist._id}>
        <ListItem sx={{px: 0}}>
          <Grid container alignItems={"center"} >

            <Grid item xs={12}>
              <Link underline={"none"} href={"/q&a/private/specialist/" + specialist._id}>
                <Stack direction="row" spacing={1} justifyContent="space-between">
                  <ListItemText nowrap={"true"} primary={specialist.title} secondary={specialist.category} />
                </Stack>
              </Link>
                
                <Stack direction="row" spacing={1} justifyContent="right">
                  <Chip
                    size="small"
                    label={specialist.name}
                    variant="outlined"
                  />
                  
                  <Chip size="small" label={specialist.answerCost === 1 ? specialist.answerCost + " Coin" : specialist.answerCost + " Coins"} />
                  <Box sx={{ mt: 2 }}>
                    <Rating name="half-read-only" precision={0.2} value={specialist.reviewsScore} readOnly />
                  </Box>
                  <Chip size="small" label={specialist.reviewsScore} color="secondary"/>
                    
                </Stack>
            </Grid>

          </Grid>
          
        </ListItem>
        <Divider light/>
        </div>
      ))} 
    </List>
  );
}