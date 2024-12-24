import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { Stack, Typography, IconButton } from '@mui/material'
import HomeIcon from '../assets/iconsvg/home.svg?react'
import CodeIcon from '../assets/iconsvg/code.svg?react'
import CloudIcon from '../assets/iconsvg/cloud.svg?react'
import BookIcon from '../assets/iconsvg/book.svg?react'
import GearIcon from '../assets/iconsvg/gear.svg?react'
import PhoneIcon from '../assets/iconsvg/phone.svg?react'
import SignOutIcon from '../assets/iconsvg/sign-out.svg?react'
import CodeAntLogo from '../assets/CodeAnt.svg?react'
import CloseIcon from '../assets/iconsvg/close.svg?react'
import UserSelect from './UserSelect'

const mainListItems = [
  { text: 'Repositories', icon: <HomeIcon /> },
  { text: 'AI Code Review', icon: <CodeIcon /> },
  { text: 'Cloud Security', icon: <CloudIcon /> },
  { text: 'How to use', icon: <BookIcon /> },
  { text: 'Settings', icon: <GearIcon /> },
  { text: 'Support', icon: <PhoneIcon /> },
  { text: 'Logout', icon: <SignOutIcon /> },
];

// eslint-disable-next-line react/prop-types
export default function PhoneMenu({ toggleDrawer }) {
  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
      <Stack direction='row' sx={{ justifyContent: 'space-between' }}>
        <CodeAntLogo />
        <IconButton onClick={toggleDrawer(false)}> <CloseIcon /> </IconButton>
      </Stack>

      <UserSelect />

      <List dense sx={{ mt: 2 }}>
        {mainListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block', mb: 0.8 }}>
            <ListItemButton selected={index === 0}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText
                primary={
                  <Typography sx={{ fontWeight: '600 !important' }}> {item.text} </Typography>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  )
}
