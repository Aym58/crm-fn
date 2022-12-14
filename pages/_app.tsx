import React from 'react';
import type { AppProps } from 'next/app';

import { ThemeProvider } from '@mui/material';

import { GlobalStyle } from 'src/theme/global-style';
import { LayoutApp } from 'src/common/layout-app';
import { theme } from 'src/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <LayoutApp>
          <Component {...pageProps} />
        </LayoutApp>
      </ThemeProvider>
    </React.Fragment>
  );
}
