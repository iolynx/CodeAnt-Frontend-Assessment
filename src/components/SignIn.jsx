import Stack from '@mui/material/Stack'
import Content from './Content'
import SignInCard from './SignInCard'
import AppTheme from '../theme/AppTheme'
import { CssBaseline, Box, Divider } from '@mui/material'
import CodeAntLarge from '../assets/CodeAntLarge.svg?react'

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
          minWidth: '320px',
          // transform: 'translateY(-50%)',
          // pt: 12
          pt: 0
        }}
      >
        <Stack
          direction={{ xs: 'column-reverse', md: 'row' }}
          sx={{
            gap: { xs: 6, sm: 12 },
          }}
        >
          <Content />
          <Divider orientation="vertical" sx={{ height: '100vh', display: { xs: 'none', md: 'flex' } }} />
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
          scale: '0.8',
          m: -2
        }}
      >
        <CodeAntLarge />
      </Box>
    </AppTheme>
  )
}
