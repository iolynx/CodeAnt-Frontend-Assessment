import Stack from '@mui/material/Stack'
import Content from './Content'
import SignInCard from './SignInCard'
import AppTheme from '../theme/AppTheme'
import { CssBaseline, Box, Divider } from '@mui/material'
import CodeAntLarge from '../assets/CodeAntLarge.svg?react'
import ColorModeIconDropdown from '../theme/ColorModeIconDropdown.jsx'
//TODO: add auto-selecting light mode here 

export default function SignIn() {
  return (
    <AppTheme>
      <CssBaseline enableColorScheme />
      <Stack
        direction="column"
        component="main"
        sx={{
          justifyContent: 'space-around',
          // height: 'calc((1 - var(--template-frame-height, 0)) * 100%)',
          // marginTop: 'max(40px - var(--template-frame-height, 0px), 0px)',
          minHeight: '100%',
          // transform: 'translateY(-50%)',
          // pt: 12
          pt: 0
        }}
      >
        <Stack
          direction={{ xs: 'column-reverse', md: 'row' }}
          sx={{
            justifyContent: 'space-around',
            gap: { xs: 6, sm: 12 },
          }}
        >
          <Content />
          <Divider orientation="vertical" sx={{ height: '100vh' }} />
          <SignInCard />
        </Stack>
      </Stack>
      <Box
        sx={{
          position: 'fixed',
          bottom: 0, // Align to the bottom of the screen
          left: 0,   // Align to the left of the screen
          padding: 0, // Add some spacing from the edges
          display: { xs: 'none', md: 'flex' },
          scale: '0.8'
        }}
      >
        <CodeAntLarge />
      </Box>
    </AppTheme>
  )
}
