import { Button, Stack } from "@mui/material"
import { GitHub } from "@mui/icons-material"
import BitBucketIcon from '../assets/BitBucket.svg?react'
import AzureIcon from '../assets/Azure.svg?react'
import GitLabIcon from '../assets/GitLabs.svg?react'
import { Navigate, useNavigate } from 'react-router-dom'

export default function SAASLogins() {
  const navigate = useNavigate()

  return (
    <Stack direction="column" gap={2} justifyContent='center' alignItems='center' >
      <Button
        variant="outlined"
        sx={{ width: '70%' }}
        onClick={() => navigate('/repos')}
        startIcon={<GitHub />}
      >
        Sign in with GitHub
      </Button>
      <Button
        variant="outlined"
        sx={{ width: '70%' }}
        onClick={() => navigate('/repos')}
        startIcon={<BitBucketIcon />}
      >
        Sign in with BitBucket
      </Button>
      <Button
        variant="outlined"
        sx={{ width: '70%' }}
        onClick={() => navigate('/repos')}
        startIcon={<AzureIcon />}
      >
        Sign in with Azure Devops
      </Button>
      <Button
        variant="outlined"

        sx={{ width: '70%' }}
        onClick={() => navigate('/repos')}
        startIcon={<GitLabIcon />}
      >
        Sign in with GitLab
      </Button>
    </Stack >
  )
}
