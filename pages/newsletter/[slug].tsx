import Head from 'next/head';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import NewsletterContent from '@/components/newsletter/newsletterContent';
import { useRouter } from 'next/router';

export default function NewsletterSlug() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <main className="relative">
      <Head>
        <title>Runopt Newsletter — Data Center Development Insights</title>
        <meta name="description" content="Get insights on DOE policies, county regulations, and local power grids for data center development." />
      </Head>
      <Navbar />

      <div className="newsletter-container">
        <NewsletterContent />
      </div>

      <Footer />
    </main>
  );
}
