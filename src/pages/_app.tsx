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
import '../styles/global.scss';

const emotionCache = createEmotionCache();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={customTheme}>
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <GoogleOAuthProvider clientId="591469968022-1nqcpb9svpv49jdm1tbttak5s8shndtp.apps.googleusercontent.com">
              <VTAlert />
              <Component {...pageProps} />
            </GoogleOAuthProvider>
          </LocalizationProvider>
        </ThemeProvider>
      </CacheProvider>
    </Provider>
  );
}

export default MyApp;
