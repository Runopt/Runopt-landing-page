'use client';

import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import CalendlyPopup from '../calendly';
// import Logo from '@/components/assets/logo.svg'
const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 2) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className={`navbar-container ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner-wrapper">
          <div className="logo-wrapper">
            <Link href="/">
              <img src="/images/logo.svg" alt="Runopt logo" decoding="async" fetchPriority="high" />
            </Link>
          </div>

          <div className="menu-list-wrapper">
            <ul>
              <Link href="/#home">
                <li className={router.pathname === '/' ? 'active' : ''}>
                  Home
                </li>
              </Link>
              <Link href="/#features">
                <li className={router.pathname === '#features' ? 'active' : ''}>
                  Features
                </li>
              </Link>
              <Link href="/#faqs">
                <li className={router.pathname === '/faqs' ? 'active' : ''}>
                  FAQs
                </li>
              </Link>
              <Link href="/about-us">
                <li className={router.pathname === '/about-us' ? 'active' : ''}>
                  About
                </li>
              </Link>
              <Link href="/newsletter-archive">
                <li className={router.pathname === '/newsletter-archive' ? 'active' : ''}>
                  Newsletter
                </li>
              </Link>
            </ul>
          </div>
          <div className="cta-btn-wrapper">
            {/* <a href="">Contact us</a> */}
            {/* <button>
              <p>Contact us</p>
            </button> */}
            <CalendlyPopup />
          </div>
        </div>
      </div>
      <div className="mobile-navbar-container">
        <div className={`heading-wrapper ${scrolled ? 'scrolled' : ''}`}>
          <div className="logo-wrapper">
            <Image
              src="/images/logo-mobile.png"
              alt="Logo"
              width="106"
              height="56"
              unoptimized
            />
          </div>
          <div className="hamburger-icon" onClick={showSidebar}>
            <img
              src={
                sidebar
                  ? '/images/icons/close.svg'
                  : '/images/icons/hamburger.svg'
              }
              alt="Menu"
            />
          </div>
        </div>
        <div className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul>
            <Link href="/">
              <li className={router.pathname === '/' ? 'active' : ''}>Home</li>
            </Link>
            <Link href="/#features">
              <li className={router.pathname === '/#features' ? 'active' : ''}>
                Features
              </li>
            </Link>

            <Link href="/#faqs">
              <li className={router.pathname === '/#faqs' ? 'active' : ''}>
                FAQs
              </li>
            </Link>
            <Link href="/about-us">
              <li className={router.pathname === '/about-us' ? 'active' : ''}>
                About
              </li>
            </Link>
          </ul>
          <div className="cta-btn-wrapper">
            {/* <Link href="/login">
              <div className="login">Login</div>
            </Link> */}
            {/* <CalendlyPopup /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
