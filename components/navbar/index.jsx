import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
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
              <img src="/images/logo.svg" alt="Logo" />
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
              <Link href="/team">
                <li className={router.pathname === '/team' ? 'active' : ''}>
                  Team
                </li>
              </Link>
              <Link href="#faqs">
                <li className={router.pathname === '/faqs' ? 'active' : ''}>
                  FAQs
                </li>
              </Link>
            </ul>
          </div>
          <div className="cta-btn-wrapper">

            <a href="">Login</a>
            <button>
              <p>Sign up</p>
            </button>
          </div>
        </div>
      </div>
      <div className="mobile-navbar-container">
        <div className={`heading-wrapper ${scrolled ? 'scrolled' : ''}`}>
          <div className="logo-wrapper">
            <Image
              src="../images/logo-mobile.png"
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
            <Link href="/features">
              <li className={router.pathname === '/features' ? 'active' : ''}>
                Features
              </li>
            </Link>
            <Link href="/pricing">
              <li className={router.pathname === '/pricing' ? 'active' : ''}>
                Pricing
              </li>
            </Link>
            <Link href="/faqs">
              <li className={router.pathname === '/faqs' ? 'active' : ''}>
                FAQs
              </li>
            </Link>
          </ul>
          <div className="cta-btn-wrapper">
            <Link href="/login">
              <div className="login">Login</div>
            </Link>
            <Link href="/signup">
              <div className="sign-up">
                <p>Sign Up</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;