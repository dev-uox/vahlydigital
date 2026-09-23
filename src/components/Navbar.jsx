import React, { useState } from 'react';
import logoImg from '../assets/VahlayDigital.png';
import footerLogoImg from '../assets/VahlayDigital-icon.png';
import { Phone, ChevronDown, Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar({ onOpenModal, onOpenContact, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleLinkClick = (e, targetId, action, title) => {
    e.preventDefault();
    setActiveDropdown(null);
    setMobileMenuOpen(false);

    if (action === 'contact') {
      if (onOpenContact) onOpenContact(title || 'Header Navigation');
      return;
    }

    if (onNavigate) {
      onNavigate(targetId);
    } else {
      const el = document.getElementById(targetId);
      if (el) {
        if (window.lenis) window.lenis.scrollTo(el, { offset: -70, duration: 1.2 });
        else el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    {
      name: 'HOME',
      href: '#',
      targetId: 'top',
      hasDropdown: true,
      items: [
        { title: 'Digital Agency Standard', desc: 'Full-funnel digital strategy & creative', targetId: 'services' },
        { title: 'Performance Marketing', desc: 'High ROI PPC & conversion funnels', targetId: 'services' },
        { title: 'Brand & Studio Showcase', desc: 'Creative media, 3D & photo/video production', targetId: 'services' },
      ]
    },
    {
      name: 'ABOUT',
      href: '#about',
      targetId: 'about',
      hasDropdown: true,
      items: [
        { title: 'About Vahlay Digital', desc: 'Our journey, mission and expert team', targetId: 'about' },
        { title: 'Our Partners & Featured Badges', desc: 'Enterprise ecosystem & certified accreditations', targetId: 'partners' },
        { title: 'Execution Framework', desc: '4-step high velocity launch system', targetId: 'process' },
        { title: 'Client Transformations', desc: 'Verified client reviews & performance stats', targetId: 'testimonials' },
      ]
    },
    {
      name: 'SERVICES',
      href: '#services',
      targetId: 'services',
      hasDropdown: true,
      items: [
        { title: 'Brand Launch Studio', desc: 'Luxury identities & design systems', targetId: 'services' },
        { title: 'Performance Marketing & Ads', desc: 'High-intent Meta & Google ROAS engines', targetId: 'services' },
        { title: 'Full-Stack Web Engineering', desc: 'Sub-second React & Next.js architectures', targetId: 'services' },
        { title: 'AI Automation & Speed-to-Lead', desc: '24/7 conversational lead qualification', targetId: 'services' },
        { title: 'Viral 4K Video Production', desc: 'Cinematic short-form reels & studio media', targetId: 'services' },
      ]
    },
    {
      name: 'BLOG',
      href: '#blog',
      targetId: 'blog',
      hasDropdown: true,
      items: [
        { title: 'Growth Playbooks 2026', desc: 'Actionable execution blueprints', targetId: 'blog' },
        { title: 'Speed-to-Lead AI Teardown', desc: 'Conversational agent architecture', targetId: 'blog' },
        { title: 'High-Converting Web Systems', desc: 'Sub-second mobile conversion fidelity', targetId: 'blog' },
      ]
    },
    {
      name: 'CONTACT',
      href: '#contact',
      targetId: 'contact',
      hasDropdown: true,
      items: [
        { title: 'Book Free Strategy Call', desc: '30-minute growth roadmap session', action: 'contact' },
        { title: 'Get Instant Project Estimate', desc: 'Custom tailored proposal in 24h', action: 'contact' },
        { title: 'Global Offices & Support', desc: 'Dev Aurum Commercial Complex, Ahmedabad', targetId: 'contact' },
      ]
    }
  ];

  return (
    <header className="header-wrapper">
      <div className="navbar-container">
        
        {/* Left Angular Dark Badge with VahlayDigital Logo */}
        <div className="logo-polygon-badge">
          <a 
            href="#" 
            className="logo-link"
            onClick={(e) => handleLinkClick(e, 'top')}
            title="Vahlay Digital - Return to Top"
          >
            <img src={logoImg} alt="Vahlay Digital" className="navbar-logo-img desktop-logo-img" />
            <img src={footerLogoImg} alt="Vahlay Digital" className="navbar-logo-img mobile-logo-img" />
          </a>
        </div>

        {/* Center Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navLinks.map((link, idx) => (
              <li 
                key={idx} 
                className="nav-item"
                onMouseEnter={() => setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a 
                  href={link.href} 
                  className="nav-link"
                  onClick={(e) => handleLinkClick(e, link.targetId)}
                >
                  <span>{link.name}</span>
                  {link.hasDropdown && <ChevronDown className="dropdown-chevron" size={14} />}
                </a>

                {/* Dropdown Menu */}
                {link.hasDropdown && activeDropdown === link.name && (
                  <div className="nav-dropdown-menu">
                    <div className="dropdown-glow-bar"></div>
                    {link.items.map((item, i) => (
                      <div 
                        key={i} 
                        className="dropdown-item"
                        onClick={(e) => handleLinkClick(e, item.targetId, item.action, item.title)}
                      >
                        <div className="dropdown-item-content">
                          <span className="dropdown-item-title">{item.title}</span>
                          {item.desc && <span className="dropdown-item-desc">{item.desc}</span>}
                          {item.date && <span className="dropdown-item-date">{item.date}</span>}
                        </div>
                        <ArrowRight size={14} className="dropdown-item-arrow" />
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Section: Need Help & Phone + Hamburger */}
        <div className="nav-right-section">
          <a href="tel:+917949217538" className="need-help-box">
            <div className="phone-icon-circle">
              <Phone size={18} className="phone-icon" />
            </div>
            <div className="need-help-info">
              <span className="need-help-label">NEED HELP</span>
              <span className="phone-number">(079) 4921-7538</span>
            </div>
          </a>

          {/* Dark Hamburger Menu Trigger */}
          <button 
            className="hamburger-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={22} color="#ffffff" /> : <Menu size={22} color="#ffffff" />}
          </button>
        </div>
      </div>

      {/* Mobile / Full Screen Navigation Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-menu-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-menu-header">
              <span className="mobile-brand-title">VAHLAY DIGITAL</span>
              <button 
                className="mobile-close-btn" 
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <div className="mobile-links-container">
              {navLinks.map((link, idx) => (
                <div key={idx} className="mobile-link-group">
                  <a 
                    href={link.href}
                    className="mobile-group-title-link"
                    onClick={(e) => handleLinkClick(e, link.targetId)}
                  >
                    <span>{link.name}</span>
                    <ArrowRight size={14} />
                  </a>

                  <div className="mobile-group-items">
                    {link.items.map((item, itemIdx) => (
                      <a 
                        key={itemIdx} 
                        href={`#${item.targetId || 'contact'}`} 
                        className="mobile-item-link"
                        onClick={(e) => handleLinkClick(e, item.targetId, item.action, item.title)}
                      >
                        <span>{item.title}</span>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mobile-menu-footer">
              <div className="mobile-help-cta">
                <div className="phone-icon-circle">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="need-help-label">CALL DIRECTLY</div>
                  <a href="tel:+917949217538" className="phone-number">(079) 4921-7538</a>
                </div>
              </div>
              
              <button 
                className="mobile-strategy-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact('Mobile Menu');
                }}
              >
                Request a Digital Strategy
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
