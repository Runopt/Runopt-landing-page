import '@/styles/globals.scss';
import '@/styles/main.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        

        {/* SEO Meta Tags */}
        <meta property="og:title" content="Runopt" />
        <meta property="og:description" content="AI tools for zoning insights, feasibility analysis, and civil engineering." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://runopt.co" />
        <meta property="og:image" content="https://runopt.co/images/logo-seo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Runopt" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Runopt" />
        <meta name="twitter:description" content="AI tools for zoning insights, feasibility analysis, and civil engineering." />
        <meta name="twitter:image" content="https://runopt.co/images/logo-seo.png" />

        {/* Additional SEO Meta Tags */}
        <meta name="keywords" content="real estate, feasibility analysis, civil engineering, design platform, construction, development" />
        <meta name="author" content="Runopt" />
        <meta name="robots" content="index, follow" />
    
      </Head>
      <Component {...pageProps} />
    </>
  );
}
