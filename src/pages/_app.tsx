import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import customTheme from 'src/styles/theme/createTheme';
import createEmotionCache from 'src/utils/createEmotionCache';
import '../styles/global.scss';

const emotionCache = createEmotionCache();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={customTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
