import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <div className="hero-container" id="home">
      <div className="heading-wrapper">
        <div className="glowing-info-container">
          <div className="info-glow"></div>
          <div className="info">
            <p>zonewise launching</p>
            <span>soon 🥳</span>
          </div>
        </div>

        <div className="title">
          AI-powered <br />
          <span>
            <div> software for civil site</div> design
          </span>
        </div>
        <div className="desc">
          Runopt is transforming civil engineering with an integrated design
          optimization tool, delivering cost-effective, sustainable designs in
          minutes.
        </div>

        <div className="hero-cta">
          <Link
            href="https://forms.gle/vtNmkbT1BV5kayz68"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button id="join-waitlist">Join the waitlist</button>
          </Link>

          <Link
            href="https://forms.gle/vtNmkbT1BV5kayz68"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button id="try-zonewise">
              Try Zonewise
              <img src="../images/icons/ai.svg" alt="" />
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

      <div className="desktop-img">
        <img src="../images/hero-img.png" alt="" />
      </div>

      <div className="mobile-img">
        <img src="../images/hero-img-mobile.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
