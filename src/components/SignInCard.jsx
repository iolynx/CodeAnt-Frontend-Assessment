import { useState } from 'react'
import { Stack, ToggleButtonGroup, Card, Box, Typography } from "@mui/material"
import MuiToggleButton from '@mui/material/ToggleButton'
import CodeAntIcon from '../assets/CodeAnt.svg?react'
import SAASLogins from './SAASLogins';
import SelfHostedLogins from './SelfHostedLogins';
import { styled } from '@mui/material';


const ToggleButton = styled(MuiToggleButton)({
  "&.Mui-selected, &.Mui-selected:hover": {
    color: "white",
    backgroundColor: '#1570ef'
  }
});

export default function SignInCard() {
  const [selected, setSelected] = useState('SAAS');

  const handleSelection = (event, newSelection) => {
    if (newSelection != null) {
      setSelected(newSelection)
    }
  }

  return (
    <Stack direction="column" gap={2} sx={{ flex: 1, pt: 16, p: 17 }}>
      <Card variant="outlined" sx={{ alignItems: 'center', alignContent: 'center' }}>
        <Box
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
            display: { xs: 'flex', md: 'flex' },
            pb: '20px',
          }}
        >
          <CodeAntIcon />
        </Box>
        <Typography component='h2' variant='h4' sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}>
          Welcome to CodeAnt AI
        </Typography>
        <Box sx={{ p: '10px', width: '500px' }}>
          <ToggleButtonGroup
            value={selected}
            fullWidth
            exclusive
            onChange={handleSelection}
            aria-label="button selection"
          >
            <ToggleButton value="SAAS" aria-label="SAAS Login" fullWidth>
              SAAS
            </ToggleButton>
            <ToggleButton value="Self Hosted" aria-label="Self Hosted Login" fullWidth>
              Self Hosted
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
        <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 2, height: '208px' }}>
          {selected === 'SAAS' && <SAASLogins />}
          {selected === 'Self Hosted' && <SelfHostedLogins />}
        </Box>
      </Card>
      <Typography>
        By signing up you agree to the <strong>Privacy Policy.</strong>
      </Typography>
    </Stack>
  )
}
