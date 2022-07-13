import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import customTheme from 'src/styles/theme/createTheme';
import createEmotionCache from 'src/utils/createEmotionCache';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import '../styles/global.scss';

const emotionCache = createEmotionCache();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={customTheme}>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <Component {...pageProps} />
        </LocalizationProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
