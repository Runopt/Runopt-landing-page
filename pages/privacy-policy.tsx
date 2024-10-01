import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import PrivacyHero from '@/components/policy-hero';
import Policy from '@/components/policy';
const PrivacyPolicy = () => {
  return (
    <div>
      <Navbar />

      <PrivacyHero />
      <Policy />
    </div>
  );
};

export default PrivacyPolicy;
