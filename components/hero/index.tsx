import Link from 'next/link';
import React from 'react';
import VideoPopup from '../video-demo';
import CalendlyPopup from '../calendly';
const Hero = () => {
  return (
    <div className="hero-container" id="home">
      <div className="heading-wrapper">
        <div className="glowing-info-container">
          <div className="info-glow"></div>
          <Link
            href="https://core.runopt.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="info"
          >
            <p>Learn about our Developer Package</p>
            {/* <span>soon 🥳</span> */}
          </Link>
        </div>

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
