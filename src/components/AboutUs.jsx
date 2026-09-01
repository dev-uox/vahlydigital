import React from 'react';
import { 
  Zap, 
  Target, 
  Cpu, 
  Check
} from 'lucide-react';

import heroDeskImg from '../assets/hero-desk.png';

export default function AboutUs() {
  const pillars = [
    {
      num: '01.',
      icon: Zap,
      title: 'High-Velocity Sprints',
      desc: 'We architect, test, and deploy entire brand ecosystems in 14-day rapid execution sprints without corporate lag.'
    },
    {
      num: '02.',
      icon: Target,
      title: 'Deterministic ROI Scaling',
      desc: 'Backed by server-side CAPI telemetry to ensure every dollar spent drives profitable, predictable revenue.'
    },
    {
      num: '03.',
      icon: Cpu,
      title: 'AI & Sub-Second Tech',
      desc: 'Sub-second React web architectures, 4K cinema visuals, and sub-60s WhatsApp AI automation.'
    }
  ];

  const commitments = [
    'Server-Side CAPI First-Party Telemetry',
    'Sub-Second React & Next.js Builds',
    '4K Cinematic Reels & Motion Graphics',
    'Speed-to-Lead WhatsApp AI Agents',
    'Dedicated Senior Growth Architects',
    'NDA-Protected Transparent Sprint Logs'
  ];

  return (
    <section id="about" className="aleric-about-section">
      <div className="container">
        
        {/* Top Split Row: Story & Clean Team Visual */}
        <div className="aleric-about-top-grid">
          
          {/* Left Content Col */}
          <div className="aleric-about-content">
            
            <div className="aleric-about-eyebrow">
              <span className="about-pill-dot">●</span>
              <span className="about-pill-text">WHO WE ARE</span>
            </div>

            <h2 className="aleric-about-heading">
              Architecting The Future of Digital Dominance.
            </h2>

            <p className="aleric-about-lead">
              A next-generation digital agency uniting magnetic visual storytelling, high-speed engineering, and aggressive growth marketing to scale ambitious brands worldwide.
            </p>

            <p className="aleric-about-subtext">
              We bridge creative vision, sub-second React web engineering, and ROI-obsessed paid advertising to transform innovative businesses into market leaders.
            </p>

            {/* Capability Checklist */}
            <div className="aleric-about-checklist">
              {commitments.map((item, idx) => (
                <div key={idx} className="about-check-item">
                  <div className="about-check-icon">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <span className="about-check-text">{item}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Visual Col */}
          <div className="aleric-about-visual-wrap">
            <div className="aleric-about-image-card">
              <img 
                src={heroDeskImg} 
                alt="Vahlay Digital Team" 
                className="aleric-about-main-img" 
              />
            </div>
          </div>

        </div>

        {/* Bottom 3 Pillars Grid */}
        <div className="aleric-about-pillars-grid">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="aleric-pillar-box">
                <div className="pillar-top-num-row">
                  <span className="pillar-index-num">{item.num}</span>
                  <div className="pillar-icon-circle">
                    <Icon size={20} />
                  </div>
                </div>

                <h3 className="pillar-box-title">{item.title}</h3>
                <p className="pillar-box-desc">{item.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
