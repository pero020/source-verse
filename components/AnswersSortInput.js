import { useState } from "react"

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectAutoWidth(props) {
  // const [param, setParam] = useState('votes');

  const handleChange = (event) => {
    props.setSortParam(event.target.value)
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={props.sortParam}
          onChange={handleChange}
          autoWidth
          label="Sort"
          variant="standard"
          sx={{color: "white"}}
          color="secondary"
        >
          <MenuItem value={"date"}>New</MenuItem>
          <MenuItem value={"votes"}>Best</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}