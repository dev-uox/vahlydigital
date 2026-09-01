import React, { useState, useRef, useEffect } from 'react';
import heroDeskImg from '../assets/hero-desk.png';
import { User, Phone, ChevronDown, CheckCircle2, Check, Sparkles } from 'lucide-react';

export default function Hero({ onRequestStrategy }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const servicesList = [
    'Brand Launch Studio',
    'Social Media Growth',
    'Reels & Video Production',
    'Performance Marketing',
    'Website & Web Apps',
    'Search & Local SEO',
    'Creative Campaigns',
    'AI Content Studio',
    'Personal Branding',
    'Digital Automation',
    'App Development',
    '3D Motion & Visuals'
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectService = (srv) => {
    setFormData((prev) => ({ ...prev, service: srv }));
    setDropdownOpen(false);
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const partnerData = {
      name: formData.name || 'Quick Inquiry Partner',
      phone: formData.phone || 'Phone requested via Hero',
      service: formData.service || 'Brand Launch Studio'
    };

    try {
      const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || 'info@vahlaydigital.com';
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

      if (accessKey) {
        await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            access_key: accessKey,
            subject: `Hero Quick Strategy Request - ${partnerData.name}`,
            from_name: 'Vahlay Digital Hero Form',
            name: partnerData.name,
            phone: partnerData.phone,
            service: partnerData.service,
            message: 'Quick Strategy Inquiry submitted from the Hero Section bar on Vahlay Digital'
          })
        });
      } else if (contactEmail) {
        await fetch(`https://formsubmit.co/ajax/${contactEmail}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            _subject: `Hero Quick Strategy Request - ${partnerData.name}`,
            _template: 'table',
            _captcha: 'false',
            name: partnerData.name,
            phone: partnerData.phone,
            service: partnerData.service,
            message: 'Quick Strategy Inquiry submitted from the Hero Section bar on Vahlay Digital'
          })
        });
      }
      // Backup to browser storage
      try {
        const stored = JSON.parse(localStorage.getItem('vahlay_leads') || '[]');
        stored.push({ ...partnerData, timestamp: new Date().toISOString() });
        localStorage.setItem('vahlay_leads', JSON.stringify(stored));
      } catch (err) {
        // ignore localStorage errors
      }
    } catch (err) {
      console.error('Hero lead submit error:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
      if (onRequestStrategy) {
        onRequestStrategy(formData.name || formData.phone ? formData : partnerData);
      }
      setTimeout(() => setSubmitted(false), 4500);
    }
  };

  return (
    <section className="hero-section">
      
      {/* Giant Watermark Background Typography "Home" */}
      <div className="hero-watermark-text" aria-hidden="true">
        Home
      </div>

      {/* Painterly Gray Brush Strokes */}
      <div className="brush-stroke-decor brush-top-right" aria-hidden="true">
        <svg viewBox="0 0 280 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 35 C 70 5, 140 70, 260 20" stroke="#cbd5e1" strokeWidth="18" strokeLinecap="round" strokeOpacity="0.45" />
          <path d="M30 65 C 100 40, 180 85, 270 50" stroke="#cbd5e1" strokeWidth="12" strokeLinecap="round" strokeOpacity="0.3" />
        </svg>
      </div>

      <div className="brush-stroke-decor brush-right-zigzag" aria-hidden="true">
        <svg viewBox="0 0 180 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M160 10 L 80 70 L 140 120 L 70 180" stroke="#cbd5e1" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" />
        </svg>
      </div>

      <div className="hero-inner-container">

        {/* Main Serif Headline on Single Line */}
        <h1 className="hero-main-heading">
          We’re Top Experts In Digital Strategy
        </h1>

        {/* Floating Quick Inquiry Capsule Bar */}
        <form className="hero-inquiry-bar" onSubmit={handleSubmit}>
          
          {/* Input: Your Name */}
          <div className="inquiry-input-field">
            <input
              type="text"
              id="hero-name-input"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="inquiry-input"
            />
            <User className="inquiry-field-icon" size={17} />
          </div>

          {/* Input: Your Number */}
          <div className="inquiry-input-field">
            <input
              type="tel"
              id="hero-phone-input"
              placeholder="Your Number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="inquiry-input"
            />
            <Phone className="inquiry-field-icon" size={17} />
          </div>

          {/* Custom Dropdown: Select Services */}
          <div 
            className={`inquiry-input-field custom-dropdown-container ${dropdownOpen ? 'open' : ''}`}
            ref={dropdownRef}
          >
            <div 
              className="custom-dropdown-trigger"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              role="button"
              tabIndex={0}
            >
              <span className={`dropdown-display-text ${formData.service ? 'selected' : ''}`}>
                {formData.service || 'Select Services'}
              </span>
              <ChevronDown 
                className={`inquiry-chevron-icon ${dropdownOpen ? 'rotate-180' : ''}`} 
                size={16} 
              />
            </div>

            {/* Floating Dropdown Menu */}
            {dropdownOpen && (
              <div className="custom-dropdown-menu custom-dropdown-menu-scroll animate-dropdown">
                <div className="dropdown-menu-header">Select Capabilities ({servicesList.length})</div>
                <div className="dropdown-options-scrollable">
                  {servicesList.map((srv, idx) => {
                    const isSelected = formData.service === srv;
                    return (
                      <div
                        key={idx}
                        className={`custom-dropdown-option ${isSelected ? 'active' : ''}`}
                        onClick={() => handleSelectService(srv)}
                      >
                        <span className="option-title">{srv}</span>
                        {isSelected && <Check size={14} className="option-check" />}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Submit Button with Gold Trim */}
          <button type="submit" id="request-strategy-btn" className="inquiry-submit-btn" disabled={isSubmitting}>
            <span>{isSubmitting ? 'Sending...' : 'Request a Digital Strategy'}</span>
          </button>
        </form>

        {submitted && (
          <div className="inquiry-success-toast animate-fadeIn">
            <CheckCircle2 size={18} color="#00d2eb" />
            <span>Inquiry received! Our senior strategist will contact you shortly.</span>
          </div>
        )}

        {/* Central Clean Showcase Desk Setup */}
        <div className="hero-showcase-wrapper">
          <img 
            src={heroDeskImg} 
            alt="Vahlay Digital Agency Workspace" 
            className="hero-desk-image"
          />
        </div>

      </div>
    </section>
  );
}
