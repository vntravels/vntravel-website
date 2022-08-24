import { createTheme } from '@mui/material/styles';

const fontFamily = ['Poppins', 'sans-serif'].join(',');

const customTheme = createTheme({
  palette: {
    mode: 'light',
  },
  typography: {
    fontFamily,
    fontWeightMedium: 400, // although Material UI's default value is 500, the text styles on the Figma design use 400
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
      fontSize: '24px',
    },
    h3: {
      fontWeight: 700,
      fontSize: '22px',
    },
    h4: {
      fontWeight: 400,
    },
    h5: {},
    h6: {},
    subtitle1: {},
    subtitle2: {
      fontSize: '14px',
      fontWeight: 400,
    },
    body1: {
      fontWeight: 500,
    },
    body2: {
      lineHeight: '20px',
    },
    button: {
      boxShadow: 'none',
    },
  },
});

export default customTheme;
