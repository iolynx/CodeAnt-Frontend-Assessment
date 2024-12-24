import { Box, styled } from '@mui/material';
import MuiDrawer, { drawerClasses } from '@mui/material/Drawer'
import MenuContent from './MenuContent'
import CodeAntLogo from '../assets/CodeAntLogo.svg?react'
import UserSelect from './UserSelect'


const drawerWidth = 230;

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

export default function SideMenu() {
  return (
    <Drawer
      variant='permanent'
      sx={{
        display: { xs: 'none', md: 'block' },
      }}
    >
      <Box sx={{ mt: 3, ml: 2 }}>
        <CodeAntLogo />
      </Box>
      <UserSelect />
      <MenuContent />
    </Drawer >
  )
}
