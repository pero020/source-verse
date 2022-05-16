import { Typography } from "@mui/material";
import { Stack } from "@mui/material";
import { Box } from "@mui/material";

export default function Footer () {
  return <>
    <Box style={{height: "40px", width: '100%', backgroundColor:'background.default'}}>
      <Stack direction="row"
      justifyContent="center"
      alignItems="flex-end"
      sx={{mt:5, mb: 2}}>
        <Typography variant="body2" sx={{color:"background.contrastColor", mt:1}}>
          Copyright © 2022 Team Vision All rights reserved.
        </Typography>
      </Stack>
    </Box>
  </>
}