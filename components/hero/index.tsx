import Link from 'next/link';
import React from 'react';
import VideoPopup from '../video-demo';
import CalendlyPopup from '../calendly';
const Hero = () => {
  return (
    <div className="hero-container" id="home">
      <div className="heading-wrapper">
        {/* Awareness Banner with Glow Effect */}
        <div className="glowing-banner-container">
          <div className="banner-glow"></div>
          <div className="awareness-banner">
            <div className="banner-content">
              <div className="banner-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 20L3 17V4L9 7M9 20L15 17M9 20V7M15 17L21 20V7L15 4M15 17V4M9 7L15 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="banner-text">
                <span className="banner-text-maps">Zoning Maps</span>
                <span className="banner-text-plus"> + </span>
                <div className="banner-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="9" cy="10" r="1" fill="currentColor"/>
                    <circle cx="13" cy="10" r="1" fill="currentColor"/>
                    <circle cx="17" cy="10" r="1" fill="currentColor"/>
                  </svg>
                </div>
                <span className="banner-text-chatbot">
                  <span className="desktop-text">chatbot</span>
                  <span className="mobile-text">chatbot</span>
                </span>
                <span className="banner-text-colon">: </span>
                <div className="banner-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="banner-text-smarter">Smarter Insights Together</span>
              </div>
            </div>
          </div>
        </div>

        {/* Developer Package container */}
        {/* <div className="glowing-info-container">
          <div className="info-glow"></div>
          <Link
            href="https://core.runopt.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="info"
          >
            <p>Learn about our Developer Package</p> */}
            {/* <span>soon 🥳</span> */}
          {/* </Link>
        </div> */}

        <div className="title">
          AI-powered <br />
          <span>
            <div> software for land development</div>
          </span>
        </div>
        <div className="desc">
          Runopt is transforming land development with an integrated design
          optimization tool, delivering cost-effective, sustainable designs in
          minutes.
        </div>

        <div className="hero-cta">
          <Link
            // href="https://forms.gle/vtNmkbT1BV5kayz68"
            href="https://core.runopt.co/zoning-map"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button 
              id="join-waitlist"
              data-gtm-track="zoning_insights_click"
              data-gtm-category="cta"
              data-gtm-action="click"
              data-gtm-label="hero_zoning_insights"
            >
              Get Zoning Insights
            </button>
          </Link>

          {/* <Link
            href="https://forms.gle/vtNmkbT1BV5kayz68"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button id="try-zonewise">
              Contact us
              <img src="../images/icons/ai.svg" alt="" />
            </button>
          </Link> */}
          {/* <CalendlyPopup /> */}
          <Link
            href="https://core.runopt.co/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              id="analyze-site-csv"
              title="Analyze Site CSV (beta)"
            >
              Analyze Site CSV (Beta)
            </button>
          </Link>
        </div>
        {/* <div className="cta-wrapper">
          <input type="email" name="" placeholder="Enter your email" id="" />
          <button>Join the waitlist
            <img src="../images/icons/arrow-right.svg" alt="" />
          </button>
        </div> */}
      </div>

      <div className="demo-container">
        <iframe
          src="https://app.supademo.com/embed/cmbh50syr5gonsn1r8hcc4ecc?embed_v=2"
          loading="lazy"
          title="Runopt Demo"
          allow="clipboard-write"
          allowFullScreen
          style={{
            border: 'none',
            outline: 'none',
            boxShadow: 'none',
            margin: '0',
            padding: '0',
          }}
        ></iframe>
      </div>
    </div>
  );
};

export default Hero;
{
  /* <div style="position: relative; box-sizing: content-box; max-height: 80vh; max-height: 80svh; width: 100%; aspect-ratio: 2.078643578643579; padding: 40px 0 40px 0;">
  <iframe
    src="https://app.supademo.com/embed/cmbh50syr5gonsn1r8hcc4ecc?embed_v=2"
    loading="lazy"
    title="Runopt Demo"
    allow="clipboard-write"
    frameborder="0"
    webkitallowfullscreen="true"
    mozallowfullscreen="true"
    allowfullscreen
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
  ></iframe>
</div>; */
}
