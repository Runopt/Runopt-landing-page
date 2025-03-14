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
          <div className="info">
            <p>Real Estate Package</p>
            <span>soon 🥳</span>
          </div>
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
            href="https://forms.gle/vtNmkbT1BV5kayz68"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button id="join-waitlist">Join the waitlist</button>
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
          <CalendlyPopup />
        </div>
        {/* <div className="cta-wrapper">
          <input type="email" name="" placeholder="Enter your email" id="" />
          <button>Join the waitlist
            <img src="../images/icons/arrow-right.svg" alt="" />
          </button>
        </div> */}
      </div>

      <div className="desktop-img">
        {/* <img src="../images/hero-img.png" alt="" /> */}
        <VideoPopup
          videoId="TuGwacoYt7Q"
          thumbnail="../images/demo-thumbnail.png"
        />
      </div>

      {/* <div className="mobile-img">
        <img src="../images/hero-img-mobile.png" alt="" />
      </div> */}
    </div>
  );
};

export default Hero;
