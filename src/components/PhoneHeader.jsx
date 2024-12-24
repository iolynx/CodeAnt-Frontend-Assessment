import { AppBar, Stack, IconButton, styled } from "@mui/material";
import MuiDrawer, { drawerClasses } from '@mui/material/Drawer'
import CodeAntLogo from '../assets/CodeAnt.svg?react'
import MenuIcon from '../assets/iconsvg/menu.svg?react'
import PhoneMenu from './PhoneMenu.jsx'
import { useState } from 'react'

const drawerWidth = 'fullWidth';

const Drawer = styled(MuiDrawer)({
  width: drawerWidth,
  padding: "10px",
  flexShrink: 0,
  boxSizing: 'border-box',
  mt: 10,
  textAlign: 'left',
  [`& .${drawerClasses.paper}`]: {
    width: drawerWidth,
    boxSizing: 'border-box',
  },
});

export default function PhoneHeader() {
  const [open, setOpen] = useState(false)

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen)
  }



  return (
    <AppBar position='static'
      sx={{
        display: { md: 'none', xs: 'flex' },
        backgroundColor: '#ffffff',
        height: '60px',
        width: '90%',
        boxShadow: 'none',
        borderBottom: '1px solid var(--template-palette-divider)',
        mt: 2,
        mx: 2,
      }}
    >
      <Stack direction='row' sx={{ justifyContent: 'space-between' }}>
        <CodeAntLogo />
        <IconButton outline='none' onClick={toggleDrawer(true)}> <MenuIcon /> </IconButton>
        <Drawer open={open} onClose={toggleDrawer(false)} anchor='top'>
          <PhoneMenu toggleDrawer={toggleDrawer} />
        </Drawer>
      </Stack>
    </AppBar>
  );
}
