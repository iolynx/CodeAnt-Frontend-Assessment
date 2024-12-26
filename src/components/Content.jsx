import Statistics from './Statistics'
import { Stack } from "@mui/material";

export default function Content() {
  return (
    <Stack direction="column" sx={{ pt: 25, px: 14, minWidth: '10%', maxWidth: '110%', display: { xs: 'none', sm: 'none', md: 'flex' } }} >
      <Statistics />
    </Stack>
  )
}
