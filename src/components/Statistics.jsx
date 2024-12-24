import React from 'react';
import Box from '@mui/material/Box';
import { Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import PieIcon from '../assets/PieIcon.svg?react'
import CodeAntSmall from '../assets/CodeAntSmall.svg?react'


const Statistics = () => {
  return (
    <Box sx={{ p: 4 }}>
      {/* Top Section */}
      <Paper
        elevation={3}
        sx={{
          borderRadius: 4,
          p: 3,
          mb: 2,
          maxWidth: 600,
          mx: 'auto',
          textAlign: 'center',
        }}
      >
        <Stack direction="row" sx={{ width: '100%' }} spacing={1}>
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

      {/* Bottom Section */}
      <Paper
        elevation={3}
        direction="row"
        sx={{
          borderRadius: 4,
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
          left: '90px'
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
    </Box>
  );
};

export default Statistics;
