import Image from 'next/image';
import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import Features from '@/components/features';
import WhyUs from '@/components/why-us';
import MeetTeam from '@/components/meet-team';
import Faq from '@/components/faq';

import Footer from '@/components/footer';

export default function Home() {
  return (
    <main>
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
