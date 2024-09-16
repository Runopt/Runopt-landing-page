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
            Runopt is the #1 AI Powered Solutions Platform for Civil Engineers
            and Builders. Our Runopt enables fully integrated design
            optimization tool, delivering faster, cost-effective
          </p>
        </div>
        <div className="footer__links">
          <div className="footer__column">
            <h3 className="footer__title">Company</h3>
            <ul className="footer__list">
              <li>
                <a href="www.google.com">Features</a>
              </li>
              <li>
                <a href="www.google.com">About us</a>
              </li>
              <li>
                <a href="www.google.com">Legals</a>
              </li>
            </ul>
          </div>
          <div className="footer__column">
            <h3 className="footer__title">Social Media</h3>
            <ul className="footer__list">
              <li>
                <a href="www.google.com">X / Twitter</a>
              </li>
              <li>
                <a href="www.google.com">Instagram</a>
              </li>
              <li>
                <a href="www.google.com">Youtube</a>
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
