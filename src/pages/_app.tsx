import { CacheProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import createEmotionCache from 'src/utils/createEmotionCache';
import '../styles/global.scss';

const emotionCache = createEmotionCache();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <Component {...pageProps} />
    </CacheProvider>
  );
}

export default MyApp;
