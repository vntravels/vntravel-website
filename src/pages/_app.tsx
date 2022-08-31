import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { store } from 'src/common/redux/store';
import VTAlert from 'src/components/Alert';
import customTheme from 'src/styles/theme/createTheme';
import createEmotionCache from 'src/utils/createEmotionCache';
import config from 'src/utils/config';
import '../styles/global.scss';

const emotionCache = createEmotionCache();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <Provider store={store}>
        <ThemeProvider theme={customTheme()}>
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <GoogleOAuthProvider clientId={config.GOOGLE_CLIENT_ID}>
              <VTAlert />
              <Component {...pageProps} />
            </GoogleOAuthProvider>
          </LocalizationProvider>
        </ThemeProvider>
      </Provider>
    </CacheProvider>
  );
}

export default MyApp;
