import Image from 'next/image';
import Head from 'next/head';
import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import Features from '@/components/features';
import WhyUs from '@/components/why-us';
import MeetTeam from '@/components/meet-team';
import Faq from '@/components/faq';

import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="relative">
      <Head>
        <title>Runopt — AI Zoning Maps, Chatbot, and Site CSV Analysis</title>
        <meta name="description" content="Get AI-powered zoning insights, analyze site CSVs, and explore feasibility faster with Runopt." />
        <meta name="og:title" content="Runopt — AI Zoning Maps, Chatbot, and Site CSV Analysis" />
        <meta property="og:description" content="Get AI-powered zoning insights, analyze site CSVs, and explore feasibility faster with Runopt." />
        <meta name="twitter:title" content="Runopt — AI Zoning Maps, Chatbot, and Site CSV Analysis" />
        <meta name="twitter:description" content="Get AI-powered zoning insights, analyze site CSVs, and explore feasibility faster with Runopt." />
      </Head>
      <Navbar />

      <Hero />

      <Features />
      <WhyUs />
      <MeetTeam />
      <Faq />

      <Footer />
    </main>
  );
}
