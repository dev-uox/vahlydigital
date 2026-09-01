import React from 'react';
import { ArrowRight, Sparkles, Award } from 'lucide-react';

export default function BrandStatement({ onOpenContact }) {
  const metrics = [
    { number: '$45M+', label: 'Client Revenue Generated', sub: 'Across 120+ verified campaigns' },
    { number: '4.8x', label: 'Average Verified ROAS', sub: 'On multi-channel paid ads' },
    { number: '180+', label: 'Brands Scaled Globally', sub: 'From startups to enterprise' },
    { number: '99.4%', label: 'Client Retention Rate', sub: 'Senior specialist execution' }
  ];

  return (
    <section className="aleric-statement-section">
      <div className="container">
        
        <div className="aleric-statement-wrapper">
          
          <div className="statement-quote-badge">
            <span className="quote-watermark">❝</span>
          </div>

          <h2 className="aleric-statement-quote">
            "We engineer magnetic brand identities, high-converting digital architectures, and aggressive performance marketing that scale modern businesses."
          </h2>

          <div className="aleric-metrics-grid">
            {metrics.map((item, idx) => (
              <div key={idx} className="aleric-metric-card">
                <span className="aleric-metric-number">{item.number}</span>
                <span className="aleric-metric-label">{item.label}</span>
                <span className="aleric-metric-sub">{item.sub}</span>
              </div>
            ))}
          </div>

          <div className="aleric-statement-cta-wrap">
            <button 
              className="aleric-statement-btn"
              onClick={() => onOpenContact('Growth Roadmap Consultation')}
            >
              <span>Request a Custom Growth Roadmap</span>
              <ArrowRight size={16} strokeWidth={2.5} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
