import { createTheme } from '@mui/material/styles';

const customTheme = createTheme({
  palette: {
    mode: 'light',
  },
  typography: {
    body1: {
      fontWeight: 500,
    },
  },
});

export default customTheme;
