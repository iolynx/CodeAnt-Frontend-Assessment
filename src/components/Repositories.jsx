import { CssBaseline, Box, Divider } from "@mui/material"
import { styled } from "@mui/material"
import AppTheme from "../theme/AppTheme"
import SideMenu from './SideMenu'
import Header from './Header'
import RepoList from './RepoList'
import PhoneHeader from './PhoneHeader'

const StyledBox = styled(Box)(() => ({
  border: '1px solid var(--template-palette-divider)',
  borderRadius: '10px',         // Rounded corners
  maxWidth: '1200px',           // Optional: maximum width
  margin: 'auto',               // Optional: center the box
}));

export default function Repositories() {
  return (
    <AppTheme>
      <CssBaseline enableColorScheme />
      <PhoneHeader />
      <Box sx={{ display: 'flex' }}>
        <SideMenu />
        <StyledBox
          component="main"
          sx={{
            flexGrow: 1,
            overflow: 'auto',
            m: {
              sx: 0,
              md: 2
            },
            alignItems: 'left',
            textAlign: 'left',
          }}
        >

          <Header />
          <Divider sx={{ width: '100%' }} />
          <RepoList />
        </StyledBox>

      </Box>
    </AppTheme>
  )
}
