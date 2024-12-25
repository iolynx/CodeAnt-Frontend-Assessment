import { Stack, Typography, Button, TextField, InputAdornment, AppBar } from "@mui/material"
import RefreshIcon from '../assets/iconsvg/refresh.svg?react'
import AddIcon from '../assets/iconsvg/add.svg?react'
import SearchIcon from '../assets/iconsvg/search.svg?react'
import { styled } from "@mui/system"


const StyledButton = styled(Button)(() => ({
  '&:hover': {
    backgroundColor: '#5a98ef',
    borderColor: '#5a98ef', // Optional if there's a border
  },
}))

export default function Header() {
  return (
    <Stack direction="column" sx={{ justifyContent: 'space-between', mt: '16px', mx: '16px' }}>
      <Stack direction={{ md: "row", xs: "column" }} gap={2} sx={{ justifyContent: 'space-between' }}>
        <div>
          <Typography variant='h5'> Repositories </Typography>
          <Typography variant='caption'> 33 total repositories </Typography>
        </div>
        <Stack direction="row" spacing={2}>
          <Button variant='outlined' startIcon={<RefreshIcon />}>
            Refresh All
          </Button>
          <StyledButton variant='outlined' startIcon={<AddIcon />} sx={{ color: '#ffffff', backgroundColor: '#1570ef' }}>

            Add Repository
          </StyledButton>
        </Stack>
      </Stack>
      <TextField variant='outlined' placeholder='Search Repositories'
        sx={{
          mb: 2, mt: 2, width: { xs: '100%', md: '265px' }
        }}
        slotProps={{
          input: {
            startAdornment: <InputAdornment position='start'> <SearchIcon /> </InputAdornment>
          }
        }} />
    </Stack>
  );
}
