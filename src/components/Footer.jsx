import React from 'react';
import { ArrowUp, MapPin } from 'lucide-react';
import footerLogo from '../assets/VahlayDigitftjal.png';

export default function Footer({ onOpenContact, onNavigate }) {
  const scrollToTop = (e) => {
    if (e) e.preventDefault();
    if (onNavigate) {
      onNavigate('top');
    } else {
      if (window.lenis) {
        window.lenis.scrollTo(0, { duration: 1.2 });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(targetId);
    } else {
      const el = document.getElementById(targetId);
      if (el) {
        if (window.lenis) {
          window.lenis.scrollTo(el, { offset: -70, duration: 1.2 });
        } else {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <footer id="contact" className="aleric-hero-footer">

      {/* Decorative Dark Side Silhouette Accents */}
      <div className="footer-side-silhouette silhouette-left" aria-hidden="true"></div>
      <div className="footer-side-silhouette silhouette-right" aria-hidden="true"></div>

      <div className="container">

        {/* Top Centered Section: Eyebrow + Giant Title */}
        <div className="footer-hero-center">
          <p className="footer-lime-eyebrow">READY TO SCALE YOUR BRAND?</p>

          <h2
            className="footer-giant-heading"
            onClick={() => onOpenContact && onOpenContact("Footer Let's Work Together")}
            title="Click to start a project"
          >
            LET’S WORK<br />TOGETHER.
          </h2>

          {/* Social Capsule Badges Row */}
          <div className="footer-social-capsules-row">
            <a 
              href="https://www.instagram.com/vahlaydigital/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-social-capsule"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
              <span>INSTAGRAM</span>
            </a>
          </div>

          {/* Small Glowing Orange Dot Accent */}
          <div className="footer-orange-dot-wrap">
            <span className="footer-orange-dot"></span>
          </div>
        </div>

        {/* Bottom 3-Column Navigation Grid */}
        <div className="footer-bottom-nav-grid">

          {/* Column 1: Brand Logo & Established */}
          <div className="footer-nav-col brand-col">
            <div className="footer-logo-brand" onClick={scrollToTop} title="Vahlay Digital - Return to Top">
              <img src={footerLogo} alt="Vahlay Digital" className="footer-logo-img" />
            </div>
            <p className="footer-since-tag">Since . 2022</p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-nav-col links-col">
            <h4 className="footer-col-header">Quick Links</h4>
            <ul className="footer-quick-links-list">
              <li>
                <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, 'services')}>
                  Our Services
                </a>
              </li>
              <li>
                <a href="#process" onClick={(e) => handleNavClick(e, 'process')}>
                  Our Framework
                </a>
              </li>
              <li>
                <a href="#testimonials" onClick={(e) => handleNavClick(e, 'testimonials')}>
                  Client Results
                </a>
              </li>
              <li>
                <a href="#blog" onClick={(e) => handleNavClick(e, 'blog')}>
                  Growth Playbooks
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); if (onOpenContact) onOpenContact('Footer Quick Link'); }}>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Location & Clickable Contact Pills */}
          <div className="footer-nav-col contact-col">
            <div className="footer-location-tag">
              <MapPin size={16} className="location-globe-icon" />
              <span>B 706, Dev Aurum Commercial Complex, Prahlad Nagar, Ahmedabad, Gujarat 380015</span>
            </div>

            <div className="footer-contact-pills-row">
              <a
                href="mailto:info@vahlaydigital.com"
                className="footer-contact-pill-btn"
              >
                <span>info@vahlaydigital.com</span>
              </a>

              <a
                href="tel:+917949217538"
                className="footer-contact-pill-btn"
              >
                <span>(079) 4921-7538</span>
              </a>

              <a
                href="tel:+917935452942"
                className="footer-contact-pill-btn"
              >
                <span>(079) 3545-2942</span>
              </a>
            </div>
          </div>

        </div>

        {/* Centered Copyright Line */}
        <div className="footer-copyright-row">
          <p>©Copyright 2026 <strong>Vahlay Digital</strong>. All Right Reserves.</p>
        </div>

      </div>

      {/* Floating Orange Scroll-To-Top Button */}
      <button
        className="footer-floating-scroll-btn"
        onClick={scrollToTop}
        aria-label="Scroll back to top"
      >
        <ArrowUp size={22} strokeWidth={3} />
      </button>

    </footer>
  );
}
