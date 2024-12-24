import { AppBar } from "@mui/material";
import CodeAntLogo from '../assets/CodeAnt.svg?react'

export default function PhoneHeader() {
  return (
    <AppBar position='static'
      sx={{
        display: { md: 'none', xs: 'flex' },
        backgroundColor: '#ffffff',
        height: '60px',
        boxShadow: 'none',
        borderBottom: '1px solid var(--template-palette-divider)',
        mt: 2,
        mx: 2,
        justifyContent: 'space-between'
      }}
    >
      <CodeAntLogo />
    </AppBar>
  );
}
