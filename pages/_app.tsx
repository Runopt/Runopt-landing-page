import '@/styles/globals.scss';
import '@/styles/main.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Runopt</title>
        <meta name="description" content="Runopt website" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
