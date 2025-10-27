import Head from 'next/head';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import NewsletterArchiveContent from '@/components/newsletter/newsletterArchiveContent';

export default function NewsletterArchive() {
  return (
    <main className="relative">
      <Head>
        <title>Runopt Newsletter Archive — Past Issues</title>
        <meta name="description" content="Browse past Runopt newsletter issues." />
      </Head>
      <Navbar />

      <div className="newsletter-archive-container">
        <NewsletterArchiveContent />
      </div>

      <Footer />
    </main>
  );
}
