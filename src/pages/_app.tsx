import React from 'react';
import type { AppProps } from 'next/app';

import GlobalStyle from '@/styles/global';

import { JobProvider } from '@/context/jobContext';

function MyApp({ Component, pageProps }: AppProps): React.ReactNode {
  return (
    <>
      <JobProvider>
        <Component {...pageProps} />
      </JobProvider>
      <GlobalStyle />
    </>
  );
}
export default MyApp;
