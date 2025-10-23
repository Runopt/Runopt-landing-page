import Head from 'next/head';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import NewsletterContent from '@/components/newsletter/newsletterContent';

export default function Newsletter() {
  return (
    <main className="relative">
      <Head>
        <title>Runopt Newsletter — Data Center Development Insights</title>
        <meta name="description" content="Get insights on DOE policies, county regulations, and local power grids for data center development." />
        <meta name="og:title" content="Runopt Newsletter — Data Center Development Insights" />
        <meta property="og:description" content="Get insights on DOE policies, county regulations, and local power grids for data center development." />
        <meta name="twitter:title" content="Runopt Newsletter — Data Center Development Insights" />
        <meta name="twitter:description" content="Get insights on DOE policies, county regulations, and local power grids for data center development." />
      </Head>
      <Navbar />

      <div className="newsletter-container">
        <NewsletterContent />
      </div>

      <Footer />
    </main>
  );
}
