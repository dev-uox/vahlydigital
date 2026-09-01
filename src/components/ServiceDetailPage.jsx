import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  ArrowUp,
  Check, 
  Compass,
  Palette,
  Layers,
  Share2,
  Sparkles,
  TrendingUp,
  Layout,
  Code2,
  Cpu,
  Smartphone,
  Bot,
  Zap,
  Target,
  BarChart3,
  Video,
  ShieldCheck
} from 'lucide-react';

import doodleBrandImg from '../assets/service-doodle-brand.jpg';
import doodleSocialImg from '../assets/service-doodle-social.jpg';
import doodleAdsImg from '../assets/service-doodle-ads.jpg';
import doodleWebImg from '../assets/service-doodle-web.jpg';
import doodleAiImg from '../assets/service-doodle-ai.jpg';

import detailBrandBanner from '../assets/detail-brand-banner.jpg';
import detailSocialBanner from '../assets/detail-social-banner.jpg';
import detailAdsBanner from '../assets/detail-ads-banner.jpg';
import detailWebBanner from '../assets/detail-web-banner.jpg';
import detailAiBanner from '../assets/detail-ai-banner.jpg';

export const serviceDetailsData = {
  'brand-launch': {
    id: 'brand-launch',
    title: 'Branding Design',
    category: 'Brand & Creative',
    heroDescription: "We create brands that stand out, connect, and leave a lasting impression. Whether you're launching a new venture or revitalizing an established company, we engineer visually compelling, strategically driven brand identities that capture market dominance.",
    bannerImage: detailBrandBanner,
    doodleArtwork: doodleBrandImg,
    overviewP1: "Branding design is the strategic foundation of every high-growth business. It bridges the gap between how your company operates and how the world perceives its value, establishing immediate authority and consumer trust across every digital and physical touchpoint.",
    overviewP2: "Our brand launch studio goes far beyond basic logo design. We develop complete visual identity systems, bespoke typography tokens, evocative color palettes, packaging architecture, and comprehensive brand guideline playbooks built for long-term scalability.",
    approach: [
      { step: 'Brand Discovery & Archetype Audit', desc: 'Analyzing your market positioning, competitor white spaces, and target audience psychology.' },
      { step: 'Identity System & Concept Development', desc: 'Crafting bespoke typography tokens, vector logo marks, and cohesive design elements.' },
      { step: 'Multi-Channel Usability Testing', desc: 'Validating brand recognition across mobile UI, print collateral, packaging, and digital ads.' },
      { step: 'Master Guidelines & Asset Delivery', desc: 'Deploying cloud vector asset repositories and comprehensive style guide documentation.' }
    ],
    offerings: [
      {
        icon: Compass,
        title: 'Brand Strategy & Positioning',
        items: [
          'Brand Narrative & Core Values',
          'Tone of Voice & Messaging Guide',
          'Competitor White-Space Analysis',
          'Audience Persona Mapping'
        ]
      },
      {
        icon: Palette,
        title: 'Logo & Visual Identity System',
        items: [
          'Custom Vector Logo Suite (AI/SVG)',
          'Typography & Hierarchy Scale',
          'Color Palette & Dark Mode Tokens',
          'Iconography & Visual Assets'
        ]
      },
      {
        icon: Layers,
        title: 'Rebranding & Brand Collateral',
        items: [
          'Comprehensive Brand Guideline Book',
          'Stationery & Packaging Design',
          'Social Media Launch Template Pack',
          'Investor & Keynote Deck Templates'
        ]
      }
    ],
    faqs: [
      {
        q: 'What is branding design, and why is it essential for my business?',
        a: 'Branding is the complete emotional and visual perception of your company. A strategically designed brand identity builds instant trust, allows premium price positioning, and creates lasting customer loyalty.',
        points: ['1. Premium Market Positioning', '2. Consistent Customer Recognition', '3. Cohesive Multi-Platform Experience']
      },
      {
        q: 'What exact deliverables will I receive in the brand package?',
        a: 'You receive all vector source files (AI, EPS, SVG), export formats (PNG, WebP, PDF), typography license files, color palette HEX/RGB/CMYK codes, and an interactive digital style guide.',
        points: []
      },
      {
        q: 'How long does the complete branding process take?',
        a: 'Our comprehensive brand identity sprint typically takes 2 to 4 weeks from initial discovery to final asset handoff.',
        points: []
      },
      {
        q: 'Do you provide print and packaging design alongside digital branding?',
        a: 'Yes, we provide print-ready vector files with bleed marks for business cards, luxury stationery, product boxes, shipping mailers, and billboard advertising.',
        points: []
      },
      {
        q: 'Can you help rebrand an existing business without losing customer recognition?',
        a: 'Yes, our brand refresh service modernizes your visual language while preserving the core heritage elements that your existing audience trusts.',
        points: []
      }
    ],
    process: [
      { num: '01', title: 'Brand Discovery', desc: 'Uncover your core value proposition and market advantages.' },
      { num: '02', title: 'Concept Creation', desc: 'Explore typography, logo marks, and visual aesthetics.' },
      { num: '03', title: 'Asset Refinement', desc: 'Perfect vectors, contrast ratios, and responsive scales.' },
      { num: '04', title: 'Launch Delivery', desc: 'Deploy complete cloud guidelines and launch templates.' }
    ]
  },

  'social-video': {
    id: 'social-video',
    title: 'Social Media & Reels',
    category: 'Content & Video',
    heroDescription: "We engineer viral 4K Instagram Reels, broadcast-grade motion graphics, and full-service community growth strategies engineered to dominate short-form attention and drive massive organic reach.",
    bannerImage: detailSocialBanner,
    doodleArtwork: doodleSocialImg,
    overviewP1: "Short-form video is the single most powerful organic growth channel in the modern digital landscape. Brands that master 3-second hook retention, cinematic visual pacing, and trending audio capture disproportionate attention across Instagram, YouTube, and LinkedIn.",
    overviewP2: "Our in-house production studio handles every phase of content creation: from viral concept research and hook scripting to 4K cinematic editing, dynamic kinetic typography, sound design, and scheduled algorithmic deployment.",
    approach: [
      { step: 'Trend & Algorithmic Discovery', desc: 'Auditing viral formats, trending audio curves, and high-retention hook structures in your niche.' },
      { step: 'Scripting & Hook Storyboarding', desc: 'Writing high-converting 3-second hooks and engaging retention loops.' },
      { step: '4K Cinema Editing & Motion Design', desc: 'Color grading, beat-synced sound effects, and animated kinetic subtitles.' },
      { step: 'Scheduled Distribution & Growth Telemetry', desc: 'Publishing during peak follower activity and tracking engagement analytics.' }
    ],
    offerings: [
      {
        icon: Video,
        title: '4K Viral Reels Production',
        items: [
          'High-Retention Scripting & Storyboards',
          '4K Multi-Cam Cinematic Video Editing',
          'Dynamic Kinetic Subtitles & Typography',
          'Custom Sound Design & Beat Sync'
        ]
      },
      {
        icon: Sparkles,
        title: '3D Motion Graphics & Visual FX',
        items: [
          '3D Photorealistic Product Reveals',
          'Animated Logo Intros & Outros',
          'Micro-Interactions & Lottie Animations',
          'Broadcast Commercial Motion Graphics'
        ]
      },
      {
        icon: Share2,
        title: 'Full Social Media Engine',
        items: [
          'Monthly Content Production Calendars',
          'High-Engagement Carousel Design',
          'Community Management & Inbound DMs',
          'Monthly KPI & Growth Telemetry Reports'
        ]
      }
    ],
    faqs: [
      {
        q: 'Why is short-form video crucial for our brand growth?',
        a: 'Instagram Reels and YouTube Shorts receive up to 300% more algorithmic distribution than static posts, allowing new brands to acquire rapid organic visibility and founder authority.',
        points: ['1. Maximum Algorithmic Reach', '2. Rapid Founder Trust & Authority', '3. High Viewer Conversion Rates']
      },
      {
        q: 'Do you handle the scripts and creative ideas or do we need to provide them?',
        a: 'We handle everything turnkey! Our creative team writes the hooks, scripts the entire dialogue, and provides filming shot lists for your team.',
        points: []
      },
      {
        q: 'How many video assets do we receive each month?',
        a: 'Our standard growth plans deliver batches of 12 to 20 polished, broadcast-grade 4K reels per month alongside supporting carousel posts.',
        points: []
      },
      {
        q: 'What video formats and aspect ratios do you deliver?',
        a: 'All content is delivered in 9:16 vertical (Instagram Reels, TikTok, YouTube Shorts), 1:1 square, and 16:9 landscape master cuts for YouTube and websites.',
        points: []
      }
    ],
    process: [
      { num: '01', title: 'Content Blueprint', desc: 'Identify high-performing hook frameworks in your sector.' },
      { num: '02', title: 'Script & Shoot', desc: 'Produce footage with tailored shot lists and scripts.' },
      { num: '03', title: 'Motion Editing', desc: 'Infuse animated text, sound design, and color grading.' },
      { num: '04', title: 'Publish & Scale', desc: 'Deploy scheduled posts and analyze engagement trends.' }
    ]
  },

  'performance-marketing': {
    id: 'performance-marketing',
    title: 'Performance Marketing',
    category: 'Growth & Ads',
    heroDescription: "We engineer high-ROI Meta Ads and Google Performance Max campaigns powered by first-party server telemetry, conversion rate optimization, and localized search dominance to scale revenue predictably.",
    bannerImage: detailAdsBanner,
    doodleArtwork: doodleAdsImg,
    overviewP1: "Performance marketing is an exact science of customer acquisition cost (CAC) and customer lifetime value (LTV). We build resilient multi-stage advertising funnels that convert cold prospects into high-margin repeat customers.",
    overviewP2: "From server-side Conversions API (CAPI) infrastructure to relentless creative sprint testing, our performance team continually optimizes bidding algorithms, ad creative CTRs, and landing page conversion friction.",
    approach: [
      { step: 'Attribution & Server CAPI Setup', desc: 'Deploying first-party Server-Side Conversions API to eliminate tracking signal loss.' },
      { step: 'Creative Matrix Testing', desc: 'Testing multiple video hooks, static carousels, and benefit headlines simultaneously.' },
      { step: 'Audience Scaling & AI Bidding', desc: 'Leveraging broad targeting and cost-cap bidding strategies for profitable scale.' },
      { step: 'Funnel & CRO Optimization', desc: 'Continuous landing page A/B testing to increase checkout completion rates.' }
    ],
    offerings: [
      {
        icon: TrendingUp,
        title: 'Meta & Instagram Paid Ads',
        items: [
          'High-CTR Ad Creative Sprint Design',
          'Broad & Lookalike Audience Modeling',
          'Server-Side CAPI First-Party Tracking',
          'Daily CPA, ROAS & Bid Management'
        ]
      },
      {
        icon: Target,
        title: 'Google & Search Growth',
        items: [
          'High-Intent Google Search Ads',
          'Performance Max (PMax) Campaigns',
          'Negative Keyword Sculpting',
          'Google Maps & Local Search SEO Pack'
        ]
      },
      {
        icon: BarChart3,
        title: 'Conversion Rate Optimization',
        items: [
          'Landing Page A/B Split Testing',
          'User Heatmap & Session Telemetry',
          'Checkout Friction Elimination',
          'Sub-Second Page Load Optimization'
        ]
      }
    ],
    faqs: [
      {
        q: 'How do you guarantee a high Return on Ad Spend (ROAS)?',
        a: 'We combine broadcast-level creative ad design with server-side first-party attribution and conversion-optimized landing pages to maximize every dollar spent.',
        points: ['1. Server-Side Data Accuracy', '2. Rapid Creative Iteration', '3. High-Converting Landing Funnels']
      },
      {
        q: 'What is Server-Side Conversions API (CAPI) and why is it needed?',
        a: 'Browser ad blockers and iOS privacy restrictions block up to 40% of standard tracking pixels. CAPI sends conversion data directly from the server to Meta and Google, restoring 100% accurate AI targeting.',
        points: []
      },
      {
        q: 'What minimum ad budget should we start with?',
        a: 'We recommend a starting monthly media spend sufficient to generate at least 50 conversions per week, giving Meta and Google AI algorithms the data needed to optimize efficiently.',
        points: []
      },
      {
        q: 'Do you provide the ad creative graphics and video scripts?',
        a: 'Yes, our team creates all ad copy, static banners, video cuts, and landing pages included in our performance management.',
        points: []
      }
    ],
    process: [
      { num: '01', title: 'Pixel & CAPI Audit', desc: 'Implement pristine server-side attribution telemetry.' },
      { num: '02', title: 'Creative Production', desc: 'Design high-converting ad angles and video hooks.' },
      { num: '03', title: 'Campaign Launch', desc: 'Deploy structured testing cohorts across Meta & Google.' },
      { num: '04', title: 'Scale & Profit', desc: 'Allocate budget to winning ads and scale ROAS.' }
    ]
  },

  'web-engineering': {
    id: 'web-engineering',
    title: 'Website & App Design',
    category: 'Engineering & UI/UX',
    heroDescription: "We engineer lightning-fast digital storefronts, custom React / Next.js web platforms, and native mobile apps designed with silky micro-animations, seamless UI/UX, and maximum conversion fidelity.",
    bannerImage: detailWebBanner,
    doodleArtwork: doodleWebImg,
    overviewP1: "Your digital experience is your 24/7 flagship storefront. We architect sub-second web platforms that blend stunning aesthetic refinement with high-performance modern engineering.",
    overviewP2: "Our full-stack engineering team builds responsive web apps, custom headless stores, bespoke mobile applications, and scalable cloud backends optimized for 95+ Core Web Vitals and top SEO rankings.",
    approach: [
      { step: 'UX Strategy & User Journey Mapping', desc: 'Mapping intuitive navigation paths, checkout flows, and wireframe prototypes.' },
      { step: 'Design System & UI Component Library', desc: 'Creating reusable Figma components with dark & light modes and silky animations.' },
      { step: 'Modern Code Architecture', desc: 'Building modular React, Next.js, and TypeScript frontends with cloud APIs.' },
      { step: 'QA & Sub-Second CDN Deployment', desc: 'Cross-device testing, SEO structured data audits, and global CDN delivery.' }
    ],
    offerings: [
      {
        icon: Layout,
        title: 'Custom Website Engineering',
        items: [
          'Sub-Second React & Next.js Builds',
          '100% Mobile Fluid & Responsive Layouts',
          'E-Commerce & Custom Payment Gateways',
          'Core Web Vitals 95+ Performance Score'
        ]
      },
      {
        icon: Code2,
        title: 'UI/UX Interface Design',
        items: [
          'Interactive Figma Prototypes',
          'Design System & Component Token Libraries',
          'Silky WebGL & CSS Micro-Animations',
          'Accessibility & Clean Semantic HTML5'
        ]
      },
      {
        icon: Smartphone,
        title: 'Mobile & Cloud Applications',
        items: [
          'Native Android & Cross-Platform Apps',
          'Custom SaaS & Cloud Admin Dashboards',
          'Secure REST & GraphQL API Integration',
          'Automated CI/CD Deployment Pipelines'
        ]
      }
    ],
    faqs: [
      {
        q: 'What technology stack do you use for web development?',
        a: 'We build with modern, industry-leading technologies including React, Next.js, TypeScript, Vite, Tailwind/Vanilla CSS, and serverless cloud architectures.',
        points: ['1. Sub-Second Load Speeds', '2. Native Mobile Fluidity', '3. Built-In Technical SEO']
      },
      {
        q: 'Will our website achieve top speed and 100% mobile responsiveness?',
        a: 'Yes. Every project undergoes rigorous testing across iOS, Android, tablets, and ultra-wide desktop monitors to guarantee 95+ Google PageSpeed scores.',
        points: []
      },
      {
        q: 'Can we easily update text and images after launch?',
        a: 'Yes, we integrate user-friendly headless CMS solutions or admin dashboards so your team can publish blogs and edit content effortlessly without touching code.',
        points: []
      },
      {
        q: 'Do you handle domain setup, hosting, and SSL certificates?',
        a: 'Yes, we handle complete turnkey deployment including domain DNS configuration, SSL security certificates, and global CDN setup.',
        points: []
      }
    ],
    process: [
      { num: '01', title: 'UX Architecture', desc: 'Wireframe user journeys and high-conversion paths.' },
      { num: '02', title: 'Figma UI Design', desc: 'Craft aesthetic interfaces with bespoke component systems.' },
      { num: '03', title: 'Full-Stack Code', desc: 'Develop clean, modular, sub-second React code.' },
      { num: '04', title: 'Deploy & Optimize', desc: 'Launch on global CDN with full SEO indexing.' }
    ]
  },

  'ai-automation': {
    id: 'ai-automation',
    title: 'AI Content & Automation',
    category: 'AI & Automation',
    heroDescription: "We deploy speed-to-lead conversational WhatsApp AI bots, custom CRM automations, and synthetic digital avatar video engines that streamline business operations and qualify leads instantly.",
    bannerImage: detailAiBanner,
    doodleArtwork: doodleAiImg,
    overviewP1: "Modern consumers demand instant responses. Our AI automation solutions connect directly to your marketing channels, responding to inbound leads in under 60 seconds, answering questions, and booking calendar calls automatically 24/7.",
    overviewP2: "We build custom WhatsApp AI assistants, automated multi-channel CRM workflows, and multi-language AI video avatars to reduce manual overhead and boost sales conversion rates.",
    approach: [
      { step: 'Workflow Discovery & Friction Audit', desc: 'Pinpointing manual bottlenecks across your sales, lead qualification, and customer support.' },
      { step: 'Custom AI Knowledge Base Tuning', desc: 'Training LLM models on your exact product documentation, pricing, and brand tone.' },
      { step: 'API & CRM Integration', desc: 'Connecting official WhatsApp Business API, HubSpot, Zoho, and SMS pipelines.' },
      { step: 'Live Testing & Telemetry Scaling', desc: 'Benchmarking response accuracy and automated sales conversion tracking.' }
    ],
    offerings: [
      {
        icon: Bot,
        title: 'Conversational WhatsApp AI',
        items: [
          'Sub-10s Automated Lead Qualification',
          'Calendar Meeting Scheduling in Chat',
          'Multi-Language Conversational Intelligence',
          'Seamless Human Agent Takeover Fallback'
        ]
      },
      {
        icon: Zap,
        title: 'AI Digital Avatars & Voice',
        items: [
          'Photorealistic Synthetic Video Presenters',
          'Voice Cloning in 20+ Regional Languages',
          'High-Volume Video Content Generation',
          'Automated Product Video Rendering'
        ]
      },
      {
        icon: Layers,
        title: 'CRM & Pipeline Automation',
        items: [
          'Automated Lead Routing & SMS Alerts',
          'HubSpot / Zoho CRM Pipeline Sync',
          'Automated Client Onboarding Sequences',
          'Real-Time Revenue & Conversion Dashboards'
        ]
      }
    ],
    faqs: [
      {
        q: 'How fast does the WhatsApp AI bot respond to new leads?',
        a: 'The bot responds in under 5 seconds, answers product inquiries, collects qualifying information, and books sales calls directly into your team’s Google or Outlook calendar.',
        points: ['1. 24/7 Instant Response Time', '2. Automated Meeting Booking', '3. Direct CRM Lead Enrichment']
      },
      {
        q: 'What happens when a lead asks a question the AI does not know?',
        a: 'The system includes intelligent guardrails. If a query is outside its knowledge base, it politely informs the customer and instantly notifies a human agent via SMS or Slack.',
        points: []
      },
      {
        q: 'Can the AI bot integrate with our existing CRM and spreadsheets?',
        a: 'Yes, we integrate with HubSpot, Zoho, Salesforce, Notion, Google Sheets, and custom database webhooks.',
        points: []
      },
      {
        q: 'Is the WhatsApp integration official and compliant with Meta policies?',
        a: 'Yes, we use the official WhatsApp Cloud API, ensuring high delivery rates, zero risk of phone number bans, and verified green checkmark badge support.',
        points: []
      }
    ],
    process: [
      { num: '01', title: 'Audit & Blueprint', desc: 'Analyze lead touchpoints and bottleneck areas.' },
      { num: '02', title: 'Knowledge Base Setup', desc: 'Train the AI model on your exact product documentation.' },
      { num: '03', title: 'API Integration', desc: 'Connect WhatsApp API, CRM, and calendar webhooks.' },
      { num: '04', title: 'Deploy & Automate', desc: 'Monitor response accuracy and scale lead volume.' }
    ]
  }
};

export default function ServiceDetailPage({ serviceId = 'brand-launch', onBack, onOpenContact }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const data = serviceDetailsData[serviceId] || serviceDetailsData['brand-launch'];

  // Scroll to top immediately when service page opens
  useEffect(() => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [serviceId]);

  // Track scroll position to show/hide scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? -1 : index);
  };

  return (
    <div className="service-detail-page-wrapper">
      
      {/* 1. Header Hero Banner */}
      <section className="sd-header-section">
        <div className="container">
          
          <div className="sd-header-top-row">
            
            {/* Left Title with Asterisk Watermark */}
            <div className="sd-title-wrap">
              <div className="sd-asterisk-watermark">✱</div>
              <h1 className="sd-main-title">{data.title}</h1>
            </div>

            {/* Right Overview Paragraph */}
            <div className="sd-header-desc-wrap">
              <p className="sd-header-lead-text">
                {data.heroDescription}
              </p>
            </div>

          </div>

          {/* Breadcrumbs Row */}
          <div className="sd-breadcrumb-row">
            <button className="sd-breadcrumb-link" onClick={onBack}>
              Home
            </button>
            <span className="sd-breadcrumb-dot">●</span>
            <span className="sd-breadcrumb-current">{data.title}</span>
          </div>

          {/* Full-Width Showcase Banner Image */}
          <div className="sd-banner-image-wrap">
            <img 
              src={data.bannerImage} 
              alt={data.title} 
              className="sd-banner-img" 
            />
          </div>

        </div>
      </section>

      {/* 2. Service Overview & Approach */}
      <section className="sd-overview-section">
        <div className="container">
          <div className="sd-overview-grid">
            
            {/* Left Column: Detailed Story */}
            <div className="sd-overview-left">
              <h2 className="sd-section-title">Service Overview</h2>
              <div className="sd-divider-line"></div>
              
              <p className="sd-body-text">{data.overviewP1}</p>
              <p className="sd-body-text">{data.overviewP2}</p>
            </div>

            {/* Right Column: Our Approach */}
            <div className="sd-approach-right">
              <h3 className="sd-approach-heading">Our Approach to {data.title.split(' ')[0]}</h3>
              
              <div className="sd-approach-list">
                {data.approach.map((item, idx) => (
                  <div key={idx} className="sd-approach-item">
                    <div className="sd-check-circle">
                      <Check size={14} />
                    </div>
                    <div className="sd-approach-item-content">
                      <strong className="sd-approach-step-name">{item.step}</strong>
                      <span className="sd-approach-step-desc"> – {item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. What We Offer (3-Column Feature Cards) */}
      <section className="sd-offerings-section">
        <div className="container">
          
          <h2 className="sd-section-title sd-offerings-title">What We Offer</h2>

          <div className="sd-offerings-grid">
            {data.offerings.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <div key={idx} className="sd-offering-card">
                  
                  {/* Icon Box */}
                  <div className="sd-card-icon-box">
                    <IconComp size={26} strokeWidth={1.8} />
                  </div>

                  {/* Card Title */}
                  <h3 className="sd-card-title">{card.title}</h3>

                  <div className="sd-card-separator"></div>

                  {/* Deliverables List */}
                  <ul className="sd-card-deliverables">
                    {card.items.map((item, iIdx) => (
                      <li key={iIdx}>
                        <span className="sd-plus-symbol">+</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. Ask & Question (FAQ Accordion) */}
      <section className="sd-faq-section">
        <div className="container">
          
          <div className="sd-faq-header-centered">
            <span className="sd-eyebrow-pill">
              <span className="pill-dot">●</span> General Questions
            </span>
            <h2 className="sd-faq-main-title">Ask & Question</h2>
          </div>

          <div className="sd-faq-accordion-wrap">
            {data.faqs.map((faq, fIdx) => {
              const isOpen = openFaqIndex === fIdx;
              return (
                <div 
                  key={fIdx} 
                  className={`sd-accordion-item ${isOpen ? 'active' : ''}`}
                >
                  <button 
                    className="sd-accordion-trigger"
                    onClick={() => toggleFaq(fIdx)}
                    aria-expanded={isOpen}
                  >
                    <span className="sd-accordion-question">{faq.q}</span>
                    <span className="sd-accordion-arrow">
                      {isOpen ? '▲' : '▼'}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="sd-accordion-body animate-fadeIn">
                      <p className="sd-faq-answer-text">{faq.a}</p>
                      
                      {faq.points && faq.points.length > 0 && (
                        <div className="sd-faq-numbered-points">
                          {faq.points.map((p, pIdx) => (
                            <div key={pIdx} className="sd-faq-point-item">
                              <strong>{p}</strong>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. Our Design Process (Dark Grid Section) */}
      <section className="sd-process-dark-section">
        <div className="container">
          
          <div className="sd-process-header-centered">
            <span className="sd-process-pill">
              <span className="process-pill-dot">●</span> Working Process
            </span>
            <h2 className="sd-process-main-title">
              Our Design Process<br />
              What’s We Do
            </h2>
          </div>

          {/* 4-Step Flow */}
          <div className="sd-process-steps-row">
            {data.process.map((step, sIdx) => (
              <div key={sIdx} className="sd-process-step-col">
                
                <div className="sd-step-num-badge">
                  <span>{step.num}</span>
                </div>

                <h4 className="sd-step-title">{step.title}</h4>
                <p className="sd-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Bottom Dark CTA */}
          <div className="sd-process-bottom-cta-wrap">
            <button 
              className="sd-process-cta-capsule"
              onClick={() => onOpenContact(`Strategy Consultation: ${data.title}`)}
            >
              <span>Don't hesitate collaborate with expertise-</span>
              <span className="sd-cta-readmore">→ REQUEST STRATEGY</span>
            </button>
          </div>

        </div>
      </section>

      {/* Floating Scroll to Top Button */}
      {showScrollTop && (
        <button 
          className="sd-scroll-top-btn animate-fadeIn" 
          onClick={scrollToTop} 
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}

    </div>
  );
}
