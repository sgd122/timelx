import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import Head from 'next/head';

import GlobalStyles from '@/components/GlobalStyles';
import ReactQueryProvider from '@/components/providers/ReactQuery';
import Seo from '@/components/Seo';

const ExternalScript = dynamic(() => import('@/components/ExternalScript'), {
  ssr: false,
});

const App = ({ Component, pageProps }: AppProps) => {
  const { seo, dehydratedState } = pageProps;
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0,user-scalable=no,maximum-scale=1,minimum-scale=1,width=device-width,viewport-fit=cover"
        />
      </Head>
      <ExternalScript />
      <Seo seo={seo} />
      <ReactQueryProvider dehydratedState={dehydratedState}>
        <GlobalStyles>
          <Component {...pageProps} />
        </GlobalStyles>
      </ReactQueryProvider>
    </>
  );
};

export default App;
