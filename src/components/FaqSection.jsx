import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight, Sparkles } from 'lucide-react';

export default function FaqSection({ onOpenContact }) {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'How does Vahlay Digital help our website rank #1 on Google search results?',
      a: 'We implement a comprehensive 4-pillar SEO ranking engine: 1) Advanced Technical SEO with sub-second page load times and 95+ Core Web Vitals, 2) Comprehensive JSON-LD semantic schema markup (Organization, LocalBusiness, FAQPage, BreadcrumbList), 3) High-intent keyword topic clusters targeting commercial search queries, and 4) Local search dominance via Google Business Profile optimization and high-authority backlink development.',
      tags: ['Technical SEO', 'Keyword Strategy', 'Google Search Console']
    },
    {
      q: 'What full-service digital marketing solutions does Vahlay Digital provide?',
      a: 'Vahlay Digital operates as a full-funnel digital growth powerhouse. Our capabilities include bespoke Brand Launch & Identity Design, 4K Viral Instagram Reels & Video Production, High-ROAS Performance Marketing across Meta & Google Ads, Custom Sub-Second React/Next.js Web & Mobile App Engineering, and 24/7 Conversational WhatsApp AI Lead Automation.',
      tags: ['Digital Strategy', 'Full-Funnel Growth', 'Web Engineering']
    },
    {
      q: 'How fast can Vahlay Digital launch our digital marketing campaign or website?',
      a: 'We operate on agile 14-day execution sprints. Rather than months of bureaucratic delays, our dedicated senior architects design, develop, test, and deploy entire brand ecosystems, ad funnels, or high-performance websites in rapid, transparent 2-week launch cycles.',
      tags: ['14-Day Sprints', 'Speed-to-Market', 'Agile Delivery']
    },
    {
      q: 'What is Server-Side Conversions API (CAPI) and why does it boost ROAS?',
      a: 'Standard browser tracking pixels lose between 25% and 40% of conversion signals due to modern browser ad-blockers and iOS privacy frameworks. By establishing direct server-to-server CAPI telemetry, we send 100% of purchase and lead data directly to Meta and Google ad algorithms, restoring accurate targeting and boosting campaign ROAS by up to 340%.',
      tags: ['First-Party CAPI', 'Attribution', 'Ad Optimization']
    },
    {
      q: 'How do 24/7 conversational AI agents improve our business conversion rate?',
      a: 'Research proves that responding to inbound leads in under 60 seconds increases conversion probability by 391%. Our conversational AI assistants connect directly to your WhatsApp Business API and CRM to qualify inbound prospects, answer questions contextually, and automatically book discovery calls into your calendar 24/7/365.',
      tags: ['WhatsApp AI', 'Speed-to-Lead', 'CRM Automation']
    },
    {
      q: 'How do I start working with Vahlay Digital?',
      a: 'Getting started is effortless. You can submit a quick strategy request via our website inquiry bar, schedule a free 30-minute growth roadmap consultation, or contact our team directly at (079) 4921-7538 or info@vahlaydigital.com. We deliver a tailored growth proposal within 24 hours.',
      tags: ['Free Strategy Call', 'Fast Onboarding', 'Ahmedabad HQ']
    }
  ];

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="aleric-home-faq-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="aleric-section-header-centered">
          <div className="aleric-eyebrow-pill">
            <span className="pill-dot">●</span>
            <span>KNOWLEDGE &amp; SEO FAQ</span>
          </div>

          <h2 className="aleric-section-heading">
            Frequently Asked Questions
          </h2>

          <p className="aleric-section-subtext">
            Everything you need to know about our digital strategy, SEO dominance, web engineering, and performance marketing framework.
          </p>
        </div>

        {/* Accordion List */}
        <div className="home-faq-accordion-wrap">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`home-faq-item ${isOpen ? 'active' : ''}`}
              >
                <button
                  className="home-faq-trigger"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                >
                  <div className="faq-question-col">
                    <span className="faq-index-number">0{idx + 1}.</span>
                    <span className="faq-question-text">{faq.q}</span>
                  </div>

                  <div className={`faq-chevron-circle ${isOpen ? 'rotate' : ''}`}>
                    <ChevronDown size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div className="home-faq-body animate-fadeIn">
                    <p className="home-faq-answer-text">{faq.a}</p>

                    <div className="home-faq-tags-row">
                      {faq.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="home-faq-tag">
                          <Sparkles size={11} />
                          <span>{tag}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Callout Banner */}
        <div className="faq-bottom-banner">
          <div className="banner-text-wrap">
            <h4 className="banner-title">Have a specific digital strategy question?</h4>
            <p className="banner-desc">Speak directly with our senior growth architects for a custom roadmap tailored to your brand.</p>
          </div>
          <button 
            className="banner-cta-btn"
            onClick={() => onOpenContact && onOpenContact('FAQ Section Inquiry')}
          >
            <span>Book Free Strategy Call</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}
