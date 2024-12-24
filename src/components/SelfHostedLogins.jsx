import { Button, Stack } from "@mui/material"
import KeyIcon from '../assets/KeyIcon.svg?react'
import GitLabIcon from '../assets/GitLabs.svg?react'
import { useNavigate } from "react-router-dom"

export default function SelfHostedLogins() {
  const navigate = useNavigate()

  return (
    <Stack direction="column" gap={2} justifyContent='center' alignItems='center' >
      <Button
        variant="outlined"
        sx={{ width: '70%' }}
        onClick={() => navigate('/repos')}
        startIcon={<GitLabIcon />}
      >
        Self Hosted GitLab
      </Button>
      <Button
        variant="outlined"
        sx={{ width: '70%' }}
        onClick={() => navigate('/repos')}
        startIcon={<KeyIcon />}
      >
        Sign in with SSO
      </Button>
    </Stack>
  )
}
