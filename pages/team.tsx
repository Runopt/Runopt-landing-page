import React from 'react';
import Navbar from '@/components/navbar';
import TeamHero from '@/components/team-hero';
import Team from '@/components/team';
import Footer from '@/components/footer';
const team = () => {
  return (
    <div>
      <Navbar />

      <TeamHero />

      <Team />
      <Footer />
    </div>
  );
};

export default team;
