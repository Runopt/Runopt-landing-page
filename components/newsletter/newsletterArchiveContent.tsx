import Link from 'next/link';

const newsletters = [
  {
    id: '10-22-2025',
    title: ' California Update',
    date: '22 OCT 2025',
    description: 'Relevant DOE policies affecting data center development, county-specific regulations or incentives, and an overview of the local power grid, including key utilities and government programs',
    author: 'The Runopt Team',
    image: '/images/newsletterImage.png',
    tag: 'Newsletter'
  },
];

export default function NewsletterArchiveContent() {
  return (
    <div className="newsletter-archive-content">
      <div className="archive-header">
        <h1 className="archive-title">Newsletter Archive</h1>
        <p className="archive-description">
          Browse past issues of the Runopt newsletter for development insights, 
          regulatory updates, and industry news.
        </p>
      </div>

      <div className="newsletters-grid">
        {newsletters.map((newsletter) => (
          <Link 
            key={newsletter.id} 
            href={`/newsletter/${newsletter.id}`}
            className="newsletter-card"
          >
            <div className="card-image">
              <img src={newsletter.image} alt={newsletter.title} />
            </div>
            <div className="card-content">
              <div className="card-date">{newsletter.date}</div>
              <h2 className="card-title">{newsletter.title}</h2>
              <p className="card-description">{newsletter.description}</p>
              <div className="card-footer">
                <span className="card-tag">{newsletter.tag}</span>
                <span className="card-author">{newsletter.author}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
