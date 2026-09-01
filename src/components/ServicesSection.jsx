import React from 'react';
import { 
  ChevronRight, 
  Rocket,
  Share2,
  Flame,
  Globe,
  Bot
} from 'lucide-react';

import doodleBrandImg from '../assets/service-doodle-brand.jpg';
import doodleSocialImg from '../assets/service-doodle-social.jpg';
import doodleAdsImg from '../assets/service-doodle-ads.jpg';
import doodleWebImg from '../assets/service-doodle-web.jpg';
import doodleAiImg from '../assets/service-doodle-ai.jpg';

export default function ServicesSection({ onOpenServiceDetail }) {

  const servicePillars = [
    {
      num: '01.',
      id: 'brand-launch',
      icon: Rocket,
      title: 'BRAND LAUNCH & CREATIVE',
      leadSubtitle: 'Whether you need iconic brand identity, magnetic visual storytelling, or high-impact creative campaigns, our team of experts is here to turn your vision into reality.',
      ctaText: 'SEE OUR SERVICES',
      image: doodleBrandImg,
      tags: ['Brand Identity', 'Logo & Guidelines', 'Creative Campaigns', 'Personal Branding']
    },
    {
      num: '02.',
      id: 'social-video',
      icon: Share2,
      title: 'SOCIAL MEDIA & REELS ENGINE',
      leadSubtitle: 'Dominate short-form attention with viral 4K Instagram Reels, dynamic motion graphics, and full-service community growth strategies engineered for organic reach.',
      ctaText: 'SEE OUR SERVICES',
      image: doodleSocialImg,
      tags: ['Content Strategy', '4K Reels', 'Motion Graphics', 'Community Growth']
    },
    {
      num: '03.',
      id: 'performance-marketing',
      icon: Flame,
      title: 'PERFORMANCE MARKETING & ADS',
      leadSubtitle: 'Turn traffic into qualified pipeline with precision Meta Ads, Google Performance Max campaigns, first-party CAPI telemetry, and local search dominance.',
      ctaText: 'SEE OUR SERVICES',
      image: doodleAdsImg,
      tags: ['Meta Ads', 'Google Ads (PMax)', 'Conversion Tracking', 'Local SEO & Maps']
    },
    {
      num: '04.',
      id: 'web-engineering',
      icon: Globe,
      title: 'WEBSITE & APP ENGINEERING',
      leadSubtitle: 'Architect sub-second digital storefronts, custom Next.js web applications, and native mobile apps designed with silky micro-animations and maximum conversion fidelity.',
      ctaText: 'SEE OUR SERVICES',
      image: doodleWebImg,
      tags: ['React & Next.js', 'Mobile Apps', 'UI/UX Prototypes', 'Core Web Vitals']
    },
    {
      num: '05.',
      id: 'ai-automation',
      icon: Bot,
      title: 'AI CONTENT & AUTOMATION',
      leadSubtitle: 'Unlock speed-to-lead with conversational WhatsApp AI bots, custom CRM automations, and high-volume synthetic digital avatar content engines.',
      ctaText: 'SEE OUR SERVICES',
      image: doodleAiImg,
      tags: ['WhatsApp AI CRM', 'AI Digital Avatars', 'Workflow Automation', 'Lead Qualification']
    }
  ];

  return (
    <section id="services" className="aleric-services-feed-section">
      
      {/* Full-Width Stacking Services Feed */}
      <div className="aleric-services-list">
        {servicePillars.map((pillar, index) => {
          return (
            <div 
              key={pillar.id}
              id={`service-item-${index}`}
              className="aleric-service-row-item"
              style={{
                '--stack-idx': index,
                zIndex: index + 1
              }}
            >
              <div className="aleric-service-row-grid">
                
                {/* 1. Left Number Col */}
                <div className="aleric-num-col">
                  <span className="aleric-num-text">{pillar.num}</span>
                </div>

                {/* 2. Center Content Col */}
                <div className="aleric-content-col">
                  <h2 className="aleric-service-title">{pillar.title}</h2>

                  <p className="aleric-service-desc">
                    {pillar.leadSubtitle}
                  </p>

                  <div className="aleric-cta-row">
                    <button 
                      className="aleric-pill-btn"
                      onClick={() => onOpenServiceDetail(pillar.id)}
                    >
                      <span className="aleric-btn-arrow">→</span>
                      <span>{pillar.ctaText}</span>
                    </button>
                  </div>

                  <div className="aleric-tags-row">
                    {pillar.tags.map((tag, tIdx) => (
                      <button 
                        key={tIdx} 
                        className="aleric-tag-pill"
                        onClick={() => onOpenServiceDetail(pillar.id)}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Right Visual Image Col */}
                <div className="aleric-visual-col" onClick={() => onOpenServiceDetail(pillar.id)}>
                  <div className="aleric-image-container">
                    <img 
                      src={pillar.image} 
                      alt={pillar.title} 
                      className="aleric-visual-image" 
                    />
                    <div className="aleric-image-hover-tag">
                      <span>Explore Details</span>
                      <ChevronRight size={14} />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
