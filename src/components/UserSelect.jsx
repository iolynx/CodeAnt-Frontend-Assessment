import { FormControl, InputLabel, Select, MenuItem, Box } from "@mui/material";
import { useState } from "react";

export default function UserSelect() {
  const [user, setUser] = useState('UtkarshDhairyaPanwar');

  const handleChange = (event) => {
    setUser(event.target.value)
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          variant='outlined'
          sx={{ boxShadow: 'none', mx: 1, mt: 2 }}
          defaultValue={'UtkarshDhairyaPanwar'}
          value={user}
          label="Agelabel"
          onChange={handleChange}
        >
          <MenuItem value={'UtkarshDhairyaPanwar'}>UtkarshDhairyaPanwar</MenuItem>
          <MenuItem value={'Vishal R'}>Vishal R</MenuItem>
          <MenuItem value={'Test User'}>Test User</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
