import React from 'react';
import type { AppProps } from 'next/app';

import Layout from '@/components/Layout';

import GlobalStyle from '@/styles/global';

function MyApp({ Component, pageProps }: AppProps): React.ReactNode {
  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
