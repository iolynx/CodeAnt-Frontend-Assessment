import { Paper, Box, Stack, Typography, Divider } from "@mui/material"
import CodeAntSmall from '../assets/CodeAntSmall.svg?react'

export default function TopStat() {
  return (
    <Paper
      elevation={3}
      sx={{
        borderRadius: 3,
        p: 3,
        mb: 2,
        width: '116%',
        mx: 2,
        textAlign: 'center',
      }}
    >
      <Stack direction="row" sx={{}} spacing={1}>
        <CodeAntSmall />
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
          AI to Detect & Autofix Bad Code
        </Typography>
      </Stack>
      <Divider sx={{ my: 2 }} />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 3,
        }}
      >
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
            30+
          </Typography>
          <Typography>Language Support</Typography>
        </Box>
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
            10K+
          </Typography>
          <Typography>Developers</Typography>
        </Box>
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
            100K+
          </Typography>
          <Typography>Hours Saved</Typography>
        </Box>
      </Box>
    </Paper>
  )
}
