import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { LayoutApp } from '../src/common/layout-app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LayoutApp>
      <Component {...pageProps} />
    </LayoutApp>
  );
}
