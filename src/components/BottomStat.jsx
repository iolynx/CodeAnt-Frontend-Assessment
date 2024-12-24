import { Paper, Box, Stack, Typography } from "@mui/material";
import PieIcon from '../assets/PieIcon.svg?react'

export default function BottomStat() {
  return (
    <Paper
      elevation={3}
      direction="row"
      sx={{
        borderRadius: 3,
        pl: 3,
        pr: 3,
        pt: 1.5,
        pb: 0,
        display: 'flex',
        alignItems: 'center',
        maxWidth: 250,
        mx: 'auto',
        position: 'relative',
        top: '-30px',
        left: '155px'
      }}
    >
      <Stack direction="column" sx={{ mt: -3 }}>
        <Box
          sx={{
            width: 50,
            height: 50,
            borderRadius: '50%',
            backgroundColor: '#c8b9f5',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {/* Icon Placeholder */}
          <PieIcon />
        </Box>
        <Box>
          <Typography variant="body2" color="text.secondary">
            Issues Fixed
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
            500K+
          </Typography>
        </Box>
      </Stack>
      <Box sx={{ ml: 5, mb: 10 }}>
        <Typography sx={{ color: '#0f9d58', fontWeight: 'bold', mr: 0.5 }}>
          ↑ 14%
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This week
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
        </Box>
      </Box>
    </Paper>
  );
}
