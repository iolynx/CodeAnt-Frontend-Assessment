import { Stack, Box, Typography } from "@mui/material";
import { List, ListItem } from "@mui/material";
import { styled } from "@mui/system";
import DatabaseIcon from '../assets/iconsvg/database.svg?react'
import BlueDot from '../assets/iconsvg/bluedot.svg?react'


const StyledBox = styled(Box)(() => ({
  backgroundColor: '#eff8ff',   // Light blue background
  border: '1px solid #b2ddff',  // Darker blue border
  borderRadius: '16px',         // Curved corners
  paddingLeft: '5px',
  paddingRight: '5px',
  margin: '5px',
  display: 'inline-block',
  height: '23px'
}));

const StyledListItem = styled(ListItem)(() => ({
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '202.5%',
    height: '1px',
    backgroundColor: 'var(--template-palette-divider)',
    transform: 'translateX(-50%)',
  }
}))

const repositoryList = [
  { name: 'design-system', type: 'Public', tech: 'React', size: '7320KB', lastUpdate: '1 day' },
  { name: 'codeant-ci-app', type: 'Private', tech: 'Javascript', size: '5871KB', lastUpdate: '2 days' },
  { name: 'analytics-dashboard', type: 'Private', tech: 'Python', size: '4521KB', lastUpdate: '5 days' },
  { name: 'mobile-app', type: 'Public', tech: 'Swift', size: '3096KB', lastUpdate: '3 days' },
  { name: 'e-commerce-platform', type: 'Private', tech: 'Java', size: '6210KB', lastUpdate: '6 days' },
  { name: 'blog-website', type: 'Public', tech: 'HTML/CSS', size: '1876KB', lastUpdate: '4 days' },
  { name: 'social-network', type: 'Private', tech: 'PHP', size: '5432KB', lastUpdate: '7 days' }
];

export default function RepoList() {
  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'left' }}>
      <List dense>
        {repositoryList.map((item, index) => (
          <StyledListItem key={index} disablePadding sx={{
            display: 'block', p: '6px',
          }}>
            <Stack>
              <div>
                <Typography variant='repoHeading'>{item.name}</Typography>
                <StyledBox>
                  <Typography variant='repoType'> {item.type} </Typography>
                </StyledBox>
              </div>
              <Stack direction='row' gap={6}>
                <div>
                  <Typography variant='caption'> {item.tech} </Typography>
                  <BlueDot />
                </div>
                <div>
                  <DatabaseIcon />
                  <Typography variant='caption'> {item.size} </Typography>
                </div>
                <Typography variant='caption'> Updated {item.lastUpdate} ago </Typography>
              </Stack>
            </Stack>
          </StyledListItem>
        ))}
      </List>
    </Stack>
  )
}
