import { createTheme } from '@mui/material/styles';
import { themePalette } from './themePalette';
import colors from '../_themes-vars.module.scss';

const customTheme = (customization?: any) => {
  const fontFamily = ['Poppins', 'sans-serif'].join(',');

  const themeOption = {
    mode: 'light',
    colors: colors,
    heading: colors.grey900,
    paper: colors.paper,
    backgroundDefault: colors.paper,
    background: colors.primaryLight,
    darkTextPrimary: colors.grey700,
    darkTextSecondary: colors.grey500,
    textDark: colors.grey900,
    menuSelected: colors.secondaryDark,
    menuSelectedBack: colors.secondaryLight,
    divider: colors.grey200,
    customization: customization,
  };

  return createTheme({
    palette: themePalette(themeOption),
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
};

export default customTheme;
