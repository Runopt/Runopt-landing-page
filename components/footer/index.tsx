import React from 'react';

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
            <img src="../images/icons/arrow-right.svg" alt="" />
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
            Become the global leader in digital civil engineering solutions
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
                <a href="/#faq">FAQs</a>
              </li>
              <li>
                <a href="/about-ua">About us</a>
              </li>
              <li>
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <h3 className="footer__title">Social Media</h3>
            <ul className="footer__list">
              <li>
                <a href="https://x.com/runopt78921?s=21">X / Twitter</a>
              </li>
              <li>
                <a href="https://www.instagram.com/runopt.co/profilecard/?igsh=MW9hcWtnYWR3Ync1Zg==">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/runopt/">Linkedin</a>
              </li>
              <li>
                <a href="https://youtube.com/@Runopt">Youtube</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <small>Runopt Copyright © 2024. All Rights Reserved.</small>
        {/* <div className="footer__socials">
          <a href="www.google.com" className="footer__social-link">
            <img src="../images/icons/Youtube.svg" alt="Instagram" />
          </a>
          <a href="www.google.com" className="footer__social-link">
            <img src="../images/icons/Instagram.svg" alt="Twitter" />
          </a>
          <a href="www.google.com" className="footer__social-link">
            <img src="../images/icons/Twitter.svg" alt="LinkedIn" />
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Footer;
