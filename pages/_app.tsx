import React from 'react';
import type { AppProps } from 'next/app';

import { ThemeProvider } from '@mui/material';

import { GlobalStyle } from 'src/theme/global-style';
import { LayoutApp } from 'src/common/layout-app';
import { theme } from 'src/theme';
import { Header } from 'src/epic/header';
import { LayoutPage } from 'src/common/layout-page';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <LayoutApp>
          <Header menu />
          <LayoutPage>
            <Component {...pageProps} />
          </LayoutPage>
        </LayoutApp>
      </ThemeProvider>
    </React.Fragment>
  );
}
