import React from 'react';
import Head from 'next/head';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import PrivacyHero from '@/components/policy-hero';
import Policy from '@/components/policy';
const PrivacyPolicy = () => {
  return (
    <div>
      <Head>
        <title>Privacy Policy — Runopt</title>
        <meta name="description" content="Read Runopt’s privacy policy detailing data collection, use, encryption, and user controls." />
        <meta name="og:title" content="Privacy Policy — Runopt" />
        <meta property="og:description" content="Read Runopt’s privacy policy detailing data collection, use, encryption, and user controls." />
        <meta name="twitter:title" content="Privacy Policy — Runopt" />
        <meta name="twitter:description" content="Read Runopt’s privacy policy detailing data collection, use, encryption, and user controls." />
      </Head>
      <Navbar />

      <PrivacyHero />
      <Policy />
    </div>
  );
};

export default PrivacyPolicy;
