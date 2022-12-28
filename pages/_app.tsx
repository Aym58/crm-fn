import React from 'react';
import type { AppProps } from 'next/app';

import { ThemeProvider } from '@mui/material';
import { EmotionCache } from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

import createEmotionCache from 'src/lib/emotion-cache';
import { GlobalStyle } from 'src/theme/global-style';
import { LayoutApp } from 'src/common/layout-app';
import { theme } from 'src/theme';
import { Header } from 'src/epic/header';
import { LayoutPage } from 'src/common/layout-page';

const clientEmotionCache = createEmotionCache();

interface CustomAppProps extends AppProps {
  emotionCache: EmotionCache;
}

export default function App({
  Component,
  emotionCache = clientEmotionCache,
  pageProps,
}: CustomAppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <LayoutApp>
          <Header />
          <LayoutPage>
            <Component {...pageProps} />
          </LayoutPage>
        </LayoutApp>
      </ThemeProvider>
    </CacheProvider>
  );
}
