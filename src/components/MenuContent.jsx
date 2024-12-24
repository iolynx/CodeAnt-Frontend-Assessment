import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import HomeIcon from '../assets/iconsvg/home.svg?react'
import CodeIcon from '../assets/iconsvg/code.svg?react'
import CloudIcon from '../assets/iconsvg/cloud.svg?react'
import BookIcon from '../assets/iconsvg/book.svg?react'
import GearIcon from '../assets/iconsvg/gear.svg?react'
import PhoneIcon from '../assets/iconsvg/phone.svg?react'
import SignOutIcon from '../assets/iconsvg/sign-out.svg?react'
import { Typography } from '@mui/material';

const mainListItems = [
  { text: 'Repositories', icon: <HomeIcon /> },
  { text: 'AI Code Review', icon: <CodeIcon /> },
  { text: 'Cloud Security', icon: <CloudIcon /> },
  { text: 'How to use', icon: <BookIcon /> },
  { text: 'Settings', icon: <GearIcon /> },
];

const secondaryListItems = [
  { text: 'Support', icon: <PhoneIcon /> },
  { text: 'Logout', icon: <SignOutIcon /> },
];

export default function MenuContent() {
  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
      <List dense>
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

      <List dense>
        {secondaryListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <ListItemButton>
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
  );
}

