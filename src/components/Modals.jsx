import React, { useState } from 'react';
import { 
  X, 
  CheckCircle, 
  Send, 
  Search, 
  ArrowRight, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Check, 
  Sparkles,
  Camera,
  Cpu,
  Layers,
  Code
} from 'lucide-react';

import heroDeskImg from '../assets/hero-desk.png';
import serviceSocialImg from '../assets/service-social-video.jpg';
import blogAiImg from '../assets/blog-ai-automation.png';
import blogWebImg from '../assets/blog-web-engineering.jpg';

export default function Modals({
  activeModal,
  onClose,
  initialService,
  onNavigate,
  onOpenContact
}) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    service: initialService || 'Brand Launch Studio',
    timeline: 'Immediate Strategy Sprint (1-2 Weeks)',
    message: ''
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  React.useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = 'hidden';
      if (window.lenis) window.lenis.stop();
    } else {
      document.body.style.overflow = '';
      if (window.lenis) window.lenis.start();
    }
    return () => {
      document.body.style.overflow = '';
      if (window.lenis) window.lenis.start();
    };
  }, [activeModal]);

  if (!activeModal) return null;

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
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
            subject: `New Digital Strategy Request: ${formData.name || 'Valued Partner'}`,
            from_name: 'Vahlay Digital Strategy Portal',
            name: formData.name,
            phone: formData.phone,
            email: formData.email || 'Not specified',
            company: formData.company || 'Not specified',
            service: formData.service || 'Brand Launch Studio',
            timeline: formData.timeline,
            message: formData.message || 'Strategy consultation requested via website modal'
          })
        });
      }
      // Backup lead to browser storage
      try {
        const stored = JSON.parse(localStorage.getItem('vahlay_leads') || '[]');
        stored.push({ ...formData, timestamp: new Date().toISOString() });
        localStorage.setItem('vahlay_leads', JSON.stringify(stored));
      } catch (err) {
        // ignore localStorage errors
      }
    } catch (err) {
      console.error('Submission error:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 3500);
    }
  };

  const agencyServicesList = [
    { title: 'Brand Launch Studio (Complete Turnkey Suite)', category: 'Brand & Creative', link: '#services' },
    { title: 'Social Media Growth Engine & Reels', category: 'Social & Content', link: '#services' },
    { title: 'Reels & Video Production (4K & Motion)', category: 'Video Studio', link: '#services' },
    { title: 'Performance Marketing (Meta & Google Ads)', category: 'Paid Growth', link: '#services' },
    { title: 'Website Experience Design & E-Commerce', category: 'Web Engineering', link: '#services' },
    { title: 'Search & Local Growth (SEO & Map Packs)', category: 'SEO & Maps', link: '#services' },
    { title: 'Creative Campaign Studio & Launch Posters', category: 'Creative Campaigns', link: '#services' },
    { title: 'AI-Powered Content & Digital Avatars', category: 'AI Studio', link: '#services' },
    { title: 'Personal Brand Development (Founders & Creators)', category: 'Executive Branding', link: '#services' },
    { title: 'Digital Transformation & WhatsApp Automation', category: 'Automation & CRM', link: '#services' },
    { title: 'Software & Android Mobile App Development', category: 'Software & Apps', link: '#services' },
    { title: '3D Motion & Professional Micro-Animations', category: '3D & Motion', link: '#services' },
    { title: 'Latest Strategy Playbooks & Articles', category: 'Insights', link: '#blog' },
    { title: 'About Vahlay Digital & Framework', category: 'About Us', link: '#about' }
  ];

  const filteredSearch = agencyServicesList.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="modal-backdrop animate-fadeIn" onClick={onClose}>
      <div 
        className={`modal-container ${activeModal}-modal-container`} 
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Close Button */}
        <button className="modal-close-icon-btn" onClick={onClose} aria-label="Close Modal">
          <X size={18} />
        </button>

        {/* 1. CONSULTATION / STRATEGY MODAL */}
        {activeModal === 'contact' && (
          <div className="modal-content contact-modal">
            {submitted ? (
              <div className="modal-success-screen">
                <div className="success-icon-wrap">
                  <CheckCircle size={54} color="#00d2eb" />
                </div>
                <h3>Digital Strategy Request Received!</h3>
                <p>
                  Thank you, <strong>{formData.name || 'Valued Partner'}</strong>. Our Senior Growth Strategist will connect with you at <strong>{formData.phone || '(079) 4921-7538'}</strong> within 2 business hours.
                </p>
                <div className="success-badges">
                  <span>✓ NDA Protected</span>
                  <span>✓ 30-Min Discovery Session</span>
                  <span>✓ Zero Obligation</span>
                </div>
              </div>
            ) : (
              <>
                <div className="modal-header">
                  <span className="modal-category-badge">Priority Consultation</span>
                  <h3 className="modal-heading">Request a Digital Strategy</h3>
                  <p className="modal-sub">
                    Get an in-depth breakdown and tailored growth blueprint architected for your brand.
                  </p>
                </div>

                <form className="modal-form-grid" onSubmit={handleFormSubmit}>
                  <div className="modal-input-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="modal-input-group">
                    <label>Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="(079) 4921-7538"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="modal-input-group">
                    <label>Work Email</label>
                    <input
                      type="email"
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="modal-input-group">
                    <label>Company / Brand Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Acme Luxury Co."
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>

                  <div className="modal-input-group full-span">
                    <label>Primary Service Area</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                      <option value="Brand Launch Studio">Brand Launch Studio (Complete Turnkey Suite)</option>
                      <option value="Performance Marketing & Ads">Performance Marketing (Meta & Google Ads)</option>
                      <option value="Full-Stack Web Engineering">Full-Stack Web Engineering (React / Next.js)</option>
                      <option value="Reels & 4K Video Production">Reels & 4K Video Production</option>
                      <option value="AI Automation & WhatsApp Agents">AI Automation & WhatsApp Agents</option>
                      <option value="Full Digital Transformation">Full Digital Transformation & Scaling</option>
                    </select>
                  </div>

                  <div className="modal-submit-row full-span">
                    <button type="submit" className="modal-primary-btn" disabled={isSubmitting}>
                      <Send size={18} />
                      <span>{isSubmitting ? 'Sending Request...' : 'Request a Digital Strategy'}</span>
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        )}

        {/* 2. STUDIO GALLERY MODAL */}
        {activeModal === 'gallery' && (
          <div className="modal-content gallery-modal">
            <div className="modal-header">
              <span className="modal-category-badge">Studio Production & Tech</span>
              <h3 className="modal-heading">Vahlay Digital Production Suite</h3>
              <p className="modal-sub">
                A glimpse inside our specialized media, 3D animation, and growth engineering laboratories.
              </p>
            </div>

            <div className="gallery-showcase-grid">
              
              {/* Primary Command Station Card */}
              <div className="gallery-card-large">
                <div className="gallery-img-wrap">
                  <img src={heroDeskImg} alt="Vahlay Command Station" className="gallery-img" />
                  <div className="gallery-badge-pill">Analytics & Command</div>
                </div>
                <div className="gallery-overlay">
                  <h4>Command Station & Telemetry Array</h4>
                  <p>Real-time ROAS monitoring, multi-touch attribution dashboards, and algorithmic distribution engines.</p>
                </div>
              </div>

              {/* Side Cards */}
              <div className="gallery-side-column">
                
                <div className="gallery-card-item">
                  <div className="gallery-img-wrap small">
                    <img src={serviceSocialImg} alt="4K Cinema Studio" className="gallery-img" />
                  </div>
                  <div className="gallery-card-text">
                    <div className="gallery-mini-badge">4K Film & Video</div>
                    <h4>Cinema Camera & Motion Suite</h4>
                    <p>Cinema cameras, professional lighting arrays, and 120fps high-retention video capture.</p>
                  </div>
                </div>

                <div className="gallery-card-item">
                  <div className="gallery-img-wrap small">
                    <img src={blogAiImg} alt="AI Automation Lab" className="gallery-img" />
                  </div>
                  <div className="gallery-card-text">
                    <div className="gallery-mini-badge">AI Automation</div>
                    <h4>Speed-to-Lead WhatsApp Agents</h4>
                    <p>Direct API webhooks, 24/7 autonomous qualification, and sub-60s booking workflows.</p>
                  </div>
                </div>

                <div className="gallery-card-item">
                  <div className="gallery-img-wrap small">
                    <img src={blogWebImg} alt="Full-Stack Web Engineering" className="gallery-img" />
                  </div>
                  <div className="gallery-card-text">
                    <div className="gallery-mini-badge">Web Engineering</div>
                    <h4>Sub-Second Headless UI Systems</h4>
                    <p>React/Next.js hydration, GPU micro-animations, and friction-free mobile checkouts.</p>
                  </div>
                </div>

              </div>
            </div>

            <div className="gallery-modal-footer">
              <button 
                className="gallery-cta-btn"
                onClick={() => {
                  onClose();
                  if (onOpenContact) onOpenContact('Studio Production Consultation');
                }}
              >
                <span>Book a Studio Production Consultation</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* 3. SEARCH OVERLAY */}
        {activeModal === 'search' && (
          <div className="modal-content search-modal">
            <div className="modal-header">
              <span className="modal-category-badge">Instant Discovery</span>
              <h3 className="modal-heading">Search Vahlay Capabilities</h3>
            </div>

            <div className="search-bar-wrap">
              <Search size={20} className="search-input-icon" />
              <input
                type="text"
                autoFocus
                placeholder="Type to search capabilities, playbooks, or services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-main-input"
              />
              {searchQuery && (
                <button className="clear-search-btn" onClick={() => setSearchQuery('')} aria-label="Clear search">
                  <X size={16} />
                </button>
              )}
            </div>

            <div className="search-results-list">
              <div className="search-results-header">
                <span className="search-results-label">Available Capabilities ({filteredSearch.length})</span>
              </div>
              <div className="search-items-scroll">
                {filteredSearch.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.link}
                    className="search-item"
                    onClick={(e) => {
                      e.preventDefault();
                      onClose();
                      const targetId = item.link.replace('#', '');
                      if (onNavigate) onNavigate(targetId);
                    }}
                  >
                    <div className="search-item-info">
                      <h5 className="search-item-title">{item.title}</h5>
                      <span className="search-item-cat">{item.category}</span>
                    </div>
                    <ArrowRight size={16} className="search-item-arrow" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
