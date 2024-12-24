import Statistics from './Statistics'
import { Stack, Box } from "@mui/material";

export default function Content() {
  return (
    <Box sx={{ flex: 1 }}>
      <Stack direction="column" sx={{ pt: 25, px: 14, width: '100%' }} >
        <Statistics />
      </Stack>
    </Box>
  )
}
