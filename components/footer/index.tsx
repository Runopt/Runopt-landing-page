import React from 'react';
import Link from 'next/link';
const Footer = () => {
  return (
    <section className="footer">
      <div className="cta-container">
        <h3>
          Ready to try
          <br />
          our AI-powered solutions?
        </h3>

        <div className="cta-wrapper">
          <input type="email" name="" placeholder="Enter your email" id="" />
          <button>
            Join the waitlist
            <img src="../images/icons/arrow-right.svg" alt="Arrow right icon" />
          </button>
        </div>
      </div>
      <div className="footer__container">
        <div className="footer__brand">
          <img
            src="../images/logo-mobile.png"
            alt="fxbud logo"
            className="footer__logo"
          />
          <p className="footer__description">
            Become the global leader in digital land development solutions
          </p>
        </div>
        <div className="footer__links">
          <div className="footer__column">
            <h3 className="footer__title">Navigations</h3>
            <ul className="footer__list">
              <li>
                <a href="/#features">Features</a>
              </li>
              <li>
                <a href="/#faqs">FAQs</a>
              </li>
              <li>
                <a href="/about-us">About us</a>
              </li>
              <li>
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <h3 className="footer__title">Social Media</h3>
            <div>
              <ul className="footer__list">
                <li>
                  <Link href="https://x.com/runopt78921?s=21" target="_blank">
                    X / Twitter
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/runopt.co/profilecard/?igsh=MW9hcWtnYWR3Ync1Zg=="
                    target="_blank"
                  >
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/company/runopt/"
                    target="_blank"
                  >
                    Linkedin
                  </Link>
                </li>
                <li>
                  <Link href="https://youtube.com/@Runopt" target="_blank">
                    Youtube
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <small>Runopt Copyright © 2024. All Rights Reserved.</small>
        {/* <div className="footer__socials">
          <a href="www.google.com" className="footer__social-link">
            <img src="../images/icons/Youtube.svg" alt="YouTube icon" />
          </a>
          <a href="www.google.com" className="footer__social-link">
            <img src="../images/icons/Instagram.svg" alt="Instagram icon" />
          </a>
          <a href="www.google.com" className="footer__social-link">
            <img src="../images/icons/Twitter.svg" alt="Twitter/X icon" />
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Footer;
