import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Building2, 
  Stethoscope, 
  Gem, 
  Cpu, 
  Gamepad2, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck,
  Sparkles
} from 'lucide-react';

export default function IndustriesSection({ onOpenContact }) {
  const [activeTab, setActiveTab] = useState(0);

  const industries = [
    {
      id: 'ecommerce',
      icon: ShoppingBag,
      title: 'E-Commerce & D2C Brands',
      badge: '4.8x Avg ROAS',
      headline: 'Scaling Direct-to-Consumer Digital Storefronts to 8-Figure Revenue',
      description: 'We engineer sub-second headless e-commerce architectures, high-converting Meta & Google Performance Max funnels, and first-party CAPI telemetry that eliminate cart abandonment and multiply customer lifetime value.',
      keyCapabilities: [
        'Sub-second Next.js & Shopify Plus storefront engineering',
        'Dynamic Catalog Ads (DPA) & multi-variant creative testing',
        'Automated WhatsApp cart abandonment recovery funnels',
        'Server-side Conversion API tracking to recover lost iOS data'
      ],
      metric: { val: '+340%', label: 'Average ROAS Growth in 90 Days' }
    },
    {
      id: 'real-estate',
      icon: Building2,
      title: 'Real Estate & Developers',
      badge: 'High-Ticket Inbound',
      headline: 'Dominating Local Search & Booking Qualified High-Ticket Buyers',
      description: 'Capture affluent property investors with localized Google Ads, top 3 Google Maps pack rankings, 4K cinematic architectural walk-through reels, and automated WhatsApp AI scheduling.',
      keyCapabilities: [
        'Top rank local search & Google Business Profile optimization',
        'Cinematic 4K drone videography & high-retention social reels',
        'Sub-60s automated lead qualification for site visit bookings',
        'Interactive property floor plan web viewers & lead magnets'
      ],
      metric: { val: '12x', label: 'Faster Speed-to-Lead Response' }
    },
    {
      id: 'tech-saas',
      icon: Cpu,
      title: 'Tech Startups & SaaS',
      badge: 'Product-Led Growth',
      headline: 'High-Velocity Product Launches & Scalable Inbound Acquisition',
      description: 'We position software platforms and deep-tech ventures as category leaders with magnetic brand design systems, technical SEO topic clusters, and conversion-optimized interactive demo funnels.',
      keyCapabilities: [
        'Interactive Figma UI/UX prototypes and design token libraries',
        'High-ranking technical SEO playbooks & product comparison hubs',
        'Custom React & Next.js web platforms with sub-0.4s load times',
        'Full-funnel HubSpot & Zoho CRM pipeline synchronization'
      ],
      metric: { val: '95+', label: 'Google Core Web Vitals Score' }
    },
    {
      id: 'luxury-jewelry',
      icon: Gem,
      title: 'Fine Jewelry & Luxury Brands',
      badge: 'Prestige Authority',
      headline: 'Engineering Luxury Digital Presence That Eliminates Price Resistance',
      description: 'From bespoke foil-embossed packaging guidelines to photorealistic 3D product motion graphics, we create digital and visual ecosystems that command premium market valuations.',
      keyCapabilities: [
        'Luxury visual branding, typography tokens, and packaging design',
        '3D photorealistic macro jewelry motion graphics & reveals',
        'High-net-worth VIP audience targeting across Meta & Google',
        'Silk-smooth mobile lookbooks with interactive zoom fidelity'
      ],
      metric: { val: '5.2x', label: 'Average Customer Lifetime Value' }
    },
    {
      id: 'healthcare',
      icon: Stethoscope,
      title: 'Healthcare & Wellness Clinics',
      badge: 'Patient Trust',
      headline: 'Attracting High-Value Consultations with Ethical Local SEO Dominance',
      description: 'Build unshakeable patient trust with HIPAA/privacy-compliant digital funnels, top ranking Google Maps SEO, verified video testimonials, and frictionless 1-click appointment booking.',
      keyCapabilities: [
        'Local SEO ranking for high-intent medical & wellness searches',
        'Automated patient appointment scheduling & SMS reminders',
        'Physician founder personal branding & educational video series',
        'Google review reputation automation & sentiment management'
      ],
      metric: { val: '+180%', label: 'Qualified Inbound Inquiries' }
    },
    {
      id: 'gaming-hospitality',
      icon: Gamepad2,
      title: 'Hospitality, Gaming & Venues',
      badge: 'Viral Community',
      headline: 'Driving Foot Traffic & Massive Organic Engagement with Short-Form Video',
      description: 'Fill tables, gaming lounges, and entertainment venues by engineering viral short-form Instagram Reels, localized event promotion campaigns, and instant WhatsApp reservation bots.',
      keyCapabilities: [
        'Viral 4K short-form video production capturing millions of views',
        'Hyper-local radius advertising across Instagram & Google Maps',
        'Interactive digital menus & instant table reservation chatbots',
        'Influencer activation campaigns & high-energy event coverage'
      ],
      metric: { val: '10M+', label: 'Organic Short-Form Video Views' }
    }
  ];

  const current = industries[activeTab];
  const IconComponent = current.icon;

  return (
    <section id="industries" className="aleric-industries-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="aleric-section-header-centered">
          <div className="aleric-eyebrow-pill">
            <span className="pill-dot">●</span>
            <span>INDUSTRIES WE DOMINATE</span>
          </div>

          <h2 className="aleric-section-heading">
            Tailored Digital Strategies For High-Growth Sectors
          </h2>

          <p className="aleric-section-subtext">
            Every market requires a bespoke digital playbook. Explore how Vahlay Digital engineers search dominance, viral social reach, and deterministic ROI across diverse commercial verticals.
          </p>
        </div>

        {/* Industry Tabs Row */}
        <div className="industries-tabs-grid">
          {industries.map((ind, idx) => {
            const TabIcon = ind.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={ind.id}
                className={`industry-tab-btn ${isActive ? 'active' : ''}`}
                onClick={() => setActiveTab(idx)}
              >
                <div className="tab-icon-wrap">
                  <TabIcon size={18} />
                </div>
                <span className="tab-title-text">{ind.title}</span>
                {isActive && <div className="tab-active-indicator"></div>}
              </button>
            );
          })}
        </div>

        {/* Active Industry Showcase Card */}
        <div className="industry-showcase-panel animate-fadeIn">
          <div className="showcase-grid-content">
            
            {/* Left Column: Story & Capabilities */}
            <div className="showcase-left-col">
              <div className="showcase-badge-row">
                <span className="showcase-category-badge">
                  <IconComponent size={14} />
                  <span>{current.title}</span>
                </span>
                <span className="showcase-pill-highlight">
                  <Sparkles size={12} />
                  <span>{current.badge}</span>
                </span>
              </div>

              <h3 className="showcase-main-headline">{current.headline}</h3>
              <p className="showcase-body-desc">{current.description}</p>

              <div className="showcase-capabilities-box">
                <h4 className="capabilities-header">Core Digital Capabilities:</h4>
                <div className="capabilities-list">
                  {current.keyCapabilities.map((cap, cIdx) => (
                    <div key={cIdx} className="capability-item">
                      <CheckCircle2 size={16} className="cap-check-icon" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="showcase-action-row">
                <button
                  className="industry-cta-btn"
                  onClick={() => onOpenContact && onOpenContact(`Industry Strategy: ${current.title}`)}
                >
                  <span>Request {current.title.split(' ')[0]} Growth Plan</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Right Column: Metric Callout & Value Highlights */}
            <div className="showcase-right-col">
              <div className="industry-stat-card">
                <div className="stat-glow-circle"></div>
                <span className="industry-stat-number">{current.metric.val}</span>
                <span className="industry-stat-label">{current.metric.label}</span>
                
                <div className="stat-card-divider"></div>

                <div className="stat-perks-list">
                  <div className="perk-item">
                    <TrendingUp size={16} className="perk-icon" />
                    <span>Proven Multi-Channel Scale Architecture</span>
                  </div>
                  <div className="perk-item">
                    <ShieldCheck size={16} className="perk-icon" />
                    <span>Dedicated Senior Growth Architect Oversight</span>
                  </div>
                  <div className="perk-item">
                    <Sparkles size={16} className="perk-icon" />
                    <span>Rapid 14-Day High Velocity Sprint Delivery</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
