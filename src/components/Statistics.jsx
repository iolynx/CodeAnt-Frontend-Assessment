import Box from '@mui/material/Box';
import BottomStat from './BottomStat';
import TopStat from './TopStat';

const Statistics = () => {
  return (
    <Box sx={{ p: 4 }}>
      {/* Top Section */}
      <TopStat />

      {/* Bottom Section */}
      <BottomStat />
    </Box>
  );
};

export default Statistics;
