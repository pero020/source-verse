import { useState, forwardRef } from "react"

import { Container } from "@mui/material";
import Box from '@mui/material/Box';
import { Typography, Button } from "@mui/material"
import { Stack } from "@mui/material"
import Slider from '@mui/material/Slider';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const marks = [
  {
    value: 1,
    label: '0.8$',
  },
  {
    value: 20,
    label: '0.7$',
  },
  {
    value: 50,
    label: '0.6$',
  }
];

function valuetext(value) {
  return `${value}°C`;
}

export default function getCoins() {
  const [coinsNum, setCoinsNum] = useState(5)
  const [coinCost, setCoinCost] = useState(0.8)
  const [snackbarAddedOpen, setSnackbarAddedOpen] = useState(false)

  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleSnackbarAddedClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbarAddedOpen(false);
  };

  function handleSliderChange(event) {
    setCoinsNum(event.target.value)
    if (event.target.value < 25) {
      setCoinCost(0.8)
    } else if (event.target.value < 50) {
      setCoinCost(0.7)
    } else if (event.target.value >= 50) {
      setCoinCost(0.6)
    }
  }

  async function handleSubmit() {
    const res = await fetch("/api/coins/addCoins", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      coinsNum: coinsNum,
    })
    })

    if (!res.ok) {
      console.log(e)
      return 1
    }
    setSnackbarAddedOpen(true)
    return 0
  }



  return(<>
    <Container maxWidth="xl" sx={{mt: 2, px:2, py:3, bgcolor: 'background.container', borderRadius: 2}} >
    <Stack alignItems="center">
      <Typography align="center" variant="h6">The more coins you get, lower the price per coin</Typography>
      <Slider
        min={1}
        max={100}
        aria-label="Restricted values"
        defaultValue={5}
        getAriaValueText={valuetext}
        step={1}
        valueLabelDisplay="auto"
        marks={marks}
        sx={{maxWidth: 600, mt: 2}}
        onChange={handleSliderChange}
      />
      <Typography sx={{mt:2}} align="center" variant="h6">Price: {coinsNum} * {coinCost}$ = {(coinsNum * coinCost).toFixed(1)}$</Typography>
      <Button sx={{borderRadius: 2, mt:2}} variant="contained" size="large" onClick={handleSubmit}>Buy Coins</Button>
    </Stack>

    <Snackbar open={snackbarAddedOpen} autoHideDuration={6000} onClose={handleSnackbarAddedClose}>
      <Alert onClose={handleSnackbarAddedClose} severity="success" sx={{ width: '100%', backgroundColor: 'secondary.main' }}>
        {coinsNum === 1 ? `Added ${coinsNum} coin to your account`: `Added ${coinsNum} coins to your account` }
      </Alert>
    </Snackbar>

    </Container>
  </>)
}