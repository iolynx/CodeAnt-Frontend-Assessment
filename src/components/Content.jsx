import Statistics from './Statistics'
import { Stack, Box } from "@mui/material";

export default function Content() {
  return (
    <Stack direction="column" sx={{ pt: 25, px: 14, minWidth: '10%', maxWidth: '110%' }} >
      <Statistics />
    </Stack>
  )
}
