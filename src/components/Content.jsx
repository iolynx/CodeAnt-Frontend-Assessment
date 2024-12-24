import Statistics from './Statistics'
import { Stack, Box } from "@mui/material";

export default function Content() {
  return (
    <Box sx={{ flex: 3 }}>
      <Stack direction="column" sx={{ pt: 25, pl: 15, pr: 15 }} >
        <Statistics />
      </Stack>
    </Box>
  )
}
