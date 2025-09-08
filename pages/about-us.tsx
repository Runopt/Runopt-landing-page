import React from 'react';
import Head from 'next/head';
import Navbar from '@/components/navbar';
import TeamHero from '@/components/team-hero';
import Team from '@/components/team';
import Values from '@/components/values';
import Footer from '@/components/footer';
const team = () => {
  return (
    <div>
      <Head>
        <title>About Runopt — Mission, Team, and Values</title>
        <meta name="description" content="Meet Runopt’s team and mission to transform land development with AI-driven, sustainable design tools." />
        <meta name="og:title" content="About Runopt — Mission, Team, and Values" />
        <meta property="og:description" content="Meet Runopt’s team and mission to transform land development with AI-driven, sustainable design tools." />
        <meta name="twitter:title" content="About Runopt — Mission, Team, and Values" />
        <meta name="twitter:description" content="Meet Runopt’s team and mission to transform land development with AI-driven, sustainable design tools." />
      </Head>
      <Navbar />

      <TeamHero />

      <Values />
      <Team />
      <Footer />
    </div>
  );
};

export default team;
