import React, { useState, useRef } from 'react';
import { 
  Clock, 
  Calendar, 
  X, 
  ArrowRight, 
  BookOpen, 
  ChevronRight,
  ChevronLeft,
  Zap, 
  Share2, 
  Bookmark, 
  MoreHorizontal, 
  ThumbsUp, 
  ThumbsDown, 
  Check, 
  Sparkles,
  TrendingUp,
  ShieldCheck,
  Play
} from 'lucide-react';

import blogAiImg from '../assets/blog-ai-automation.png';
import blogBrandImg from '../assets/blog-brand-launch.jpg';
import blogWebImg from '../assets/blog-web-engineering.jpg';
import blogAdsImg from '../assets/service-performance-ads.jpg';
import blogSocialImg from '../assets/service-social-video.jpg';
import blogDoodleAds from '../assets/service-doodle-ads.jpg';

export default function BlogSection({ onOpenContact }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [readingArticle, setReadingArticle] = useState(null);
  const [helpfulVote, setHelpfulVote] = useState(null);
  const [isSaved, setIsSaved] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [mobileIndex, setMobileIndex] = useState(0);
  const carouselRef = useRef(null);

  React.useEffect(() => {
    if (readingArticle) {
      document.body.style.overflow = 'hidden';
      if (window.lenis) window.lenis.stop();
      // Reset interaction states per article open
      setHelpfulVote(null);
      setIsSaved(false);
      setIsCopied(false);
      setShowMoreMenu(false);
    } else {
      document.body.style.overflow = '';
      if (window.lenis) window.lenis.start();
    }
    return () => {
      document.body.style.overflow = '';
      if (window.lenis) window.lenis.start();
    };
  }, [readingArticle]);

  const handleShare = (e) => {
    e.stopPropagation();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2500);
    }
    setShowMoreMenu(false);
  };

  const articles = [
    {
      id: 1,
      articleNumber: 'Article 01',
      featured: true,
      category: 'branding',
      categoryLabel: 'Brand & Creative',
      title: 'Architecting Magnetic Luxury Brand Identities That Command 5x Valuations',
      headline: 'The 3 Pillars of Irresistible Visual Authority',
      leadIntro: 'A generic logo and corporate color palette no longer move the needle. In today’s hyper-competitive digital ecosystem, brand identity is an entire sensory universe—from bespoke typography weight scales and packaging architecture to micro-interactions and digital storefronts.',
      excerpt: 'How modern category leaders combine embossed stationery tokens, dark-mode design systems, and high-converting launch websites to build unbeatable market authority.',
      date: 'Aug 30, 2026',
      readTime: '6 min read',
      author: 'Aarav Sharma',
      authorRole: 'Head of Creative Strategy',
      image: blogBrandImg,
      callout: {
        title: 'Why visual polish matters',
        desc: 'High-ticket buyers evaluate brand authority in milliseconds—visual polish directly dictates perceived market value and pricing power.'
      },
      sections: [
        {
          num: '01',
          title: 'Cohesive Visual Tokens & Typography Hierarchy',
          text: 'High-ticket buyers evaluate brand polish in milliseconds. Utilizing curated serif headlines paired with crisp geometric sans-serif body copy creates an immediate aura of luxury and trustworthiness that eliminates price resistance.'
        },
        {
          num: '02',
          title: 'Physical & Digital Touchpoint Harmony',
          text: 'When business cards, unboxing packaging, and digital interfaces share the exact same foil accents, metallic gradients, and dark slate motifs, client perceived value increases exponentially.'
        },
        {
          num: '03',
          title: 'High-Velocity Turnkey Launch Orchestration',
          text: 'Coordinating the simultaneous rollout of your visual identity, 4K social assets, and sub-second launch website ensures maximum algorithmic momentum across Google and social channels on day one.'
        }
      ],
      ctaText: 'Book a Brand Strategy Session'
    },
    {
      id: 2,
      articleNumber: 'Article 02',
      featured: false,
      category: 'performance',
      categoryLabel: 'Performance & Ads',
      title: 'Scaling Meta & Google Performance Max to +340% ROAS with First-Party CAPI',
      headline: 'The Mathematics of Predictable Pipeline Scaling',
      leadIntro: 'Ad performance without rigorous telemetry is pure guesswork. Learn how high-velocity brands achieve 3.4x return on ad spend through deterministic data architectures, creative angle testing, and server-side signal pipelines.',
      excerpt: 'A mathematical blueprint for conquering ad fatigue, building high-intent lookalikes, and implementing server-side tracking that captures 100% of attribution data.',
      date: 'Aug 26, 2026',
      readTime: '7 min read',
      author: 'Priya Mehta',
      authorRole: 'Performance Marketing Director',
      image: blogAdsImg,
      callout: {
        title: 'Why attribution telemetry matters',
        desc: 'First-party Conversion API integration recovers 28% of lost iOS attribution signals and trains ad network AI algorithms with pristine conversion data.'
      },
      sections: [
        {
          num: '01',
          title: 'Server-Side Conversions API (CAPI) Integration',
          text: 'Browser-based pixels miss up to 35% of conversion events due to ad blockers and privacy frameworks. Bypassing the browser via cloud webhooks feeds Meta and Google machine learning models clean signal data.'
        },
        {
          num: '02',
          title: 'Creative Diversity & Dynamic Angle Testing',
          text: 'Rather than changing button colors, high-performing media buyers rotate 5 distinct psychological angles weekly: Founder Story, Proof Breakdown, Contrarian Take, Feature Teardown, and FOMO Offer.'
        },
        {
          num: '03',
          title: 'Automated Bid Rule & Margin Orchestration',
          text: 'Eliminate budget waste with automated rules that cut underperforming ad sets after 1.5x target CPA while automatically scaling winning cohorts by 20% daily.'
        }
      ],
      ctaText: 'Book a Performance Audit'
    },
    {
      id: 3,
      articleNumber: 'Article 03',
      featured: false,
      category: 'tech',
      categoryLabel: 'Web & UI/UX',
      title: 'Sub-Second Next.js Architecture: Why Speed Directly Boosts Checkout Rates by 42%',
      headline: 'The Architecture of Frictionless Web Performance',
      leadIntro: 'In an era where 78% of agency and e-commerce traffic originates on mobile devices, performance is not an engineering vanity metric—it is the single largest lever for profitability and conversion velocity.',
      excerpt: 'A technical teardown of Core Web Vitals, headless React hydration, and GPU micro-animations engineered for maximum mobile conversion fidelity.',
      date: 'Aug 22, 2026',
      readTime: '5 min read',
      author: 'Rohan Verma',
      authorRole: 'Lead Full-Stack Architect',
      image: blogWebImg,
      callout: {
        title: 'Why speed matters',
        desc: 'Every 100ms decrease in page load speed translates into a 4.8% lift in checkout conversion across enterprise and consumer traffic.'
      },
      sections: [
        {
          num: '01',
          title: 'Instant First Contentful Paint (FCP < 0.4s)',
          text: 'By leveraging Next.js server components, intelligent image optimization, and aggressive asset caching, page assets render before the user’s thumb finishes its scroll gesture.'
        },
        {
          num: '02',
          title: 'Silky GPU-Accelerated Micro-Animations',
          text: 'Subtle physics-driven feedback cues guide user eyes toward primary value propositions and conversion buttons without dropping a single frame on 120Hz displays.'
        },
        {
          num: '03',
          title: 'Sticky Mobile Checkout & Lead Drawer Flow',
          text: 'Touch-optimized drawer forms and streamlined 1-click booking reduce form abandonment rates by more than 40% compared to traditional multi-page redirect funnels.'
        }
      ],
      ctaText: 'Book a Web Architecture Audit'
    },
    {
      id: 4,
      articleNumber: 'Article 03',
      featured: false,
      category: 'ai',
      categoryLabel: 'AI Automation',
      title: 'Zero Latency Speed-to-Lead: Deploying 24/7 WhatsApp AI Agents to Close Leads in 60s',
      headline: 'The Speed-to-Lead Revolution',
      leadIntro: 'The traditional ‘We will contact you in 24 hours’ contact form is dead. Modern high-growth brands automate the first critical minute of user interaction with conversational AI.',
      excerpt: 'How leading enterprise service firms integrate generative AI agents into WhatsApp and CRM workflows to qualify prospects and book sales calls 3x faster.',
      date: 'Aug 18, 2026',
      readTime: '6 min read',
      author: 'Vikram Singhania',
      authorRole: 'Head of AI Automation',
      image: blogAiImg,
      callout: {
        title: 'Why speed matters',
        desc: 'Every delayed response reduces the chance of converting a high-intent lead.'
      },
      sections: [
        {
          num: '01',
          title: 'Real-Time WhatsApp Business API Integration',
          text: 'Custom AI agents connect directly to WhatsApp to deliver contextual, natural conversations within three seconds of a prospect reaching out.'
        },
        {
          num: '02',
          title: 'Intent Recognition & Smart Qualification',
          text: 'The AI agent smoothly collects budget, timeline, and exact service requirements in an engaging chat dialogue, filtering out unqualified inquiries before they reach your sales team.'
        },
        {
          num: '03',
          title: 'Instant Google Calendar & Zoom Scheduling',
          text: 'Once qualified, the prospect receives a frictionless interactive calendar link with pre-filled details, securing high-ticket discovery calls automatically.'
        }
      ],
      ctaText: 'Book an AI Strategy Call'
    },
    {
      id: 5,
      articleNumber: 'Article 05',
      featured: false,
      category: 'social',
      categoryLabel: 'Social & Video',
      title: 'Viral 4K Short-Form Playbook: Engineering Reels That Capture 10M+ Organic Views',
      headline: 'Cracking the Short-Form Attention Economy',
      leadIntro: 'Short-form video is the #1 organic acquisition engine for modern brands. Master the technical mechanics of 4K cinematic storytelling that converts casual viewers into passionate brand advocates.',
      excerpt: 'The narrative frameworks, hook pacing, and cinema-grade lighting setups top creators and challenger brands use to dominate Instagram and YouTube algorithms.',
      date: 'Aug 14, 2026',
      readTime: '5 min read',
      author: 'Ananya Roy',
      authorRole: 'Creative Director of Motion',
      image: blogSocialImg,
      callout: {
        title: 'Why retention matters',
        desc: 'The first 1.8 seconds of short-form video determine 80% of viewer retention and subsequent viral algorithmic distribution.'
      },
      sections: [
        {
          num: '01',
          title: 'The 1.8-Second Visual Pattern Interrupt',
          text: 'Stop the endless scroll with dynamic camera zooms, tactile SFX, bold animated subtitles, and contrasting color grading applied within the opening 2 seconds.'
        },
        {
          num: '02',
          title: 'The 3-Beat Narrative Arc Framework',
          text: 'Every high-converting reel follows a proven cadence: The Uncomfortable Truth (Hook) -> The Strategic Breakthrough (Value) -> The Actionable Next Step (Call-to-Action).'
        },
        {
          num: '03',
          title: '4K HDR Color Grading & Crisp Sound Design',
          text: 'Studio-grade lighting, crispy lavalier audio, and punchy sound design elevate brand perception from generic UGC to prestigious industry leadership.'
        }
      ],
      ctaText: 'Book a Video Strategy Session'
    },
    {
      id: 6,
      articleNumber: 'Article 06',
      featured: false,
      category: 'performance',
      categoryLabel: 'Performance & Ads',
      title: 'Funnel Optimization Psychology: 7 High-Converting Triggers That Double LTV',
      headline: 'Converting Cold Traffic with Behavioral Science',
      leadIntro: 'Direct sales pitches often trigger skepticism in modern consumers. Guiding prospects through an interactive diagnostic journey builds instant trust and dramatically lowers customer acquisition costs.',
      excerpt: 'Behavioral economics, interactive calculators, and micro-commitment strategies that turn casual website visitors into lifelong brand advocates.',
      date: 'Aug 10, 2026',
      readTime: '6 min read',
      author: 'Priya Mehta',
      authorRole: 'Performance Marketing Director',
      image: blogDoodleAds,
      callout: {
        title: 'Why micro-commitments work',
        desc: 'Interactive diagnostic scorecards convert cold traffic at 2.4x the rate of traditional static landing pages.'
      },
      sections: [
        {
          num: '01',
          title: 'Interactive Growth Scorecards & Calculators',
          text: 'Allowing prospective clients to assess their current digital bottlenecks through an interactive quiz creates instant self-realization of their service need.'
        },
        {
          num: '02',
          title: 'Contrast Anchoring & Tiered Value Bundles',
          text: 'Positioning your core growth tier against premium enterprise offerings makes your primary solution an obvious, high-value investment.'
        },
        {
          num: '03',
          title: 'Verified Proof Micro-Badges & Social Proof',
          text: 'Displaying live ROAS metrics, client verification stamps, and real video testimonials directly alongside CTA buttons eliminates last-second checkout hesitation.'
        }
      ],
      ctaText: 'Book a Funnel Strategy Call'
    }
  ];

  const filteredArticles = activeCategory === 'all'
    ? articles
    : articles.filter(a => a.category === activeCategory);

  return (
    <section id="blog" className="aleric-blog-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="aleric-section-header-centered">
          <div className="aleric-eyebrow-pill">
            <span className="pill-dot">●</span>
            <span>GROWTH PLAYBOOKS</span>
          </div>

          <h2 className="aleric-blog-heading">Latest Strategy Playbooks</h2>

          <p className="aleric-blog-subtext">
            Actionable execution blueprints, technical breakdowns, and proprietary growth systems from the Vahlay Digital strategy room.
          </p>

          {/* Category Filter Tabs */}
          <div className="aleric-filter-pills-row">
            <button 
              className={`aleric-filter-pill ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              All Playbooks ({articles.length})
            </button>
            <button 
              className={`aleric-filter-pill ${activeCategory === 'branding' ? 'active' : ''}`}
              onClick={() => setActiveCategory('branding')}
            >
              Brand & Creative
            </button>
            <button 
              className={`aleric-filter-pill ${activeCategory === 'performance' ? 'active' : ''}`}
              onClick={() => setActiveCategory('performance')}
            >
              Performance & Ads
            </button>
            <button 
              className={`aleric-filter-pill ${activeCategory === 'tech' ? 'active' : ''}`}
              onClick={() => setActiveCategory('tech')}
            >
              Web & UI/UX
            </button>
            <button 
              className={`aleric-filter-pill ${activeCategory === 'ai' ? 'active' : ''}`}
              onClick={() => setActiveCategory('ai')}
            >
              AI Automation
            </button>
            <button 
              className={`aleric-filter-pill ${activeCategory === 'social' ? 'active' : ''}`}
              onClick={() => setActiveCategory('social')}
            >
              Social & Video
            </button>
          </div>
        </div>

        {/* Playbooks Grid (Grid on Desktop, Swipeable Snap Carousel on Mobile) */}
        <div 
          ref={carouselRef}
          onScroll={() => {
            if (carouselRef.current) {
              const scrollLeft = carouselRef.current.scrollLeft;
              const cardWidth = carouselRef.current.offsetWidth * 0.85;
              const newIndex = Math.round(scrollLeft / cardWidth);
              if (newIndex >= 0 && newIndex < filteredArticles.length) {
                setMobileIndex(newIndex);
              }
            }
          }}
          className="aleric-blog-grid aleric-blog-carousel-mobile"
        >
          {filteredArticles.map((article, idx) => (
            <article 
              key={article.id} 
              className={`aleric-blog-card group ${mobileIndex === idx ? 'active-mobile-slide' : ''}`}
              onClick={() => setReadingArticle(article)}
            >
              <div className="aleric-blog-image-wrap">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="aleric-blog-img" 
                  loading="lazy"
                />
                <div className="aleric-blog-badge-tag">
                  <span>{article.categoryLabel}</span>
                </div>
                <div className="blog-img-glass-overlay">
                  <span className="glass-read-text"><BookOpen size={14} /> Open Playbook</span>
                </div>
              </div>

              <div className="aleric-blog-card-content">
                <div className="aleric-blog-meta">
                  <span className="meta-date">{article.date}</span>
                  <span className="meta-sep">•</span>
                  <span className="meta-read"><Clock size={12} /> {article.readTime}</span>
                </div>

                <h3 className="aleric-blog-title">{article.title}</h3>

                <div className="aleric-blog-footer">
                  <span className="aleric-playbook-tag">Growth Playbook #{article.id}</span>

                  <div className="aleric-readmore-link">
                    <span>Read</span>
                    <ChevronRight size={14} />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile Carousel Navigation Controls */}
        <div className="blog-mobile-carousel-controls">
          <button 
            className="blog-carousel-arrow-btn" 
            onClick={() => {
              const nextIdx = mobileIndex > 0 ? mobileIndex - 1 : filteredArticles.length - 1;
              if (carouselRef.current && carouselRef.current.children[nextIdx]) {
                carouselRef.current.children[nextIdx].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
              }
              setMobileIndex(nextIdx);
            }}
            aria-label="Previous Playbook"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="blog-carousel-dots">
            {filteredArticles.map((_, idx) => (
              <button
                key={idx}
                className={`blog-carousel-dot ${mobileIndex === idx ? 'active' : ''}`}
                onClick={() => {
                  if (carouselRef.current && carouselRef.current.children[idx]) {
                    carouselRef.current.children[idx].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
                  }
                  setMobileIndex(idx);
                }}
                aria-label={`Go to playbook ${idx + 1}`}
              />
            ))}
          </div>

          <button 
            className="blog-carousel-arrow-btn" 
            onClick={() => {
              const nextIdx = mobileIndex < filteredArticles.length - 1 ? mobileIndex + 1 : 0;
              if (carouselRef.current && carouselRef.current.children[nextIdx]) {
                carouselRef.current.children[nextIdx].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
              }
              setMobileIndex(nextIdx);
            }}
            aria-label="Next Playbook"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Article Reader Modal matching the exact Split UI Design */}
      {readingArticle && (
        <div 
          className="modal-backdrop gp-reader-backdrop" 
          onClick={() => setReadingArticle(null)}
          data-lenis-prevent="true"
        >
          <div 
            className="gp-reader-modal" 
              onClick={(e) => e.stopPropagation()}
              data-lenis-prevent="true"
            >
              {/* Cyan Gradient Progress Accent Line */}
              <div className="gp-top-accent-line"></div>

              {/* Left Column: Dark Graphic & Meta Sidebar */}
              <div className="gp-sidebar-panel">
                {/* Cover Artwork Image with subtle gradient fade */}
                <div className="gp-sidebar-cover-wrap">
                  <img 
                    src={readingArticle.image} 
                    alt={readingArticle.title} 
                    className="gp-sidebar-cover-img" 
                  />
                  <div className="gp-cover-gradient-overlay"></div>
                </div>

                {/* Sidebar Middle Body */}
                <div className="gp-sidebar-content">
                  <div className="gp-sidebar-meta-row">
                    <span className="gp-category-pill">{readingArticle.categoryLabel}</span>
                    <span className="gp-meta-tag">
                      <Clock size={12} />
                      <span>{readingArticle.readTime}</span>
                    </span>
                    <span className="gp-meta-tag">
                      <Calendar size={12} />
                      <span>{readingArticle.date}</span>
                    </span>
                  </div>

                  <h3 className="gp-sidebar-title">{readingArticle.title}</h3>

                  <div className="gp-sidebar-spacer"></div>

                  {/* Clean Publication Credit (No personal names/photos) */}
                  <div className="gp-sidebar-brand-credit">
                    <span className="gp-credit-label">Published by</span>
                    <span className="gp-credit-brand">Vahlay Digital Strategy Lab</span>
                  </div>
                </div>

                {/* Sidebar Bottom Action Buttons */}
                <div className="gp-sidebar-actions">
                  <button 
                    className={`gp-action-pill-btn ${isCopied ? 'active' : ''}`}
                    onClick={handleShare}
                    title="Share Playbook"
                  >
                    {isCopied ? <Check size={14} className="text-emerald-400" /> : <Share2 size={14} />}
                    <span>{isCopied ? 'Link Copied!' : 'Share'}</span>
                  </button>

                  <button 
                    className={`gp-action-pill-btn ${isSaved ? 'active' : ''}`}
                    onClick={() => setIsSaved(!isSaved)}
                    title="Save to reading list"
                  >
                    <Bookmark size={14} className={isSaved ? 'fill-current text-sky-400' : ''} />
                    <span>{isSaved ? 'Saved' : 'Save'}</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Editorial White Reader */}
              <div className="gp-reader-main">
                
                {/* Header Bar */}
                <div className="gp-reader-header">
                  <div className="gp-breadcrumb-row">
                    <span className="gp-breadcrumb-lead">Insights</span>
                    <span className="gp-breadcrumb-sep">/</span>
                    <span className="gp-breadcrumb-cat">{readingArticle.categoryLabel}</span>
                  </div>

                  <div className="gp-header-actions-row">
                    <span className="gp-article-index">{readingArticle.articleNumber}</span>
                    <span className="gp-header-sep">|</span>
                    
                    <div className="gp-more-wrap">
                      <button 
                        className="gp-icon-circle-btn" 
                        onClick={() => setShowMoreMenu(!showMoreMenu)}
                        aria-label="More options"
                      >
                        <MoreHorizontal size={16} />
                      </button>
                      {showMoreMenu && (
                        <div className="gp-more-dropdown">
                          <button onClick={handleShare}>Copy Article Link</button>
                          <button onClick={() => { window.print(); setShowMoreMenu(false); }}>Print Playbook</button>
                        </div>
                      )}
                    </div>

                    <button 
                      className="gp-icon-circle-btn gp-close-circle" 
                      onClick={() => setReadingArticle(null)}
                      aria-label="Close"
                    >
                      <X size={16} />
                    </button>
                  </div>
                </div>

                {/* Scrollable Reader Content */}
                <div className="gp-reader-body" data-lenis-prevent="true">
                  
                  {/* Main Article Headline (Playfair Editorial Serif) */}
                  <h1 className="gp-article-headline">{readingArticle.headline}</h1>

                  {/* Lead Excerpt Paragraph */}
                  <p className="gp-lead-paragraph">{readingArticle.leadIntro}</p>

                  {/* Callout Card */}
                  {readingArticle.callout && (
                    <div className="gp-callout-card">
                      <div className="gp-callout-icon-circle">
                        <Zap size={20} className="gp-zap-icon" />
                      </div>
                      <div className="gp-callout-text-wrap">
                        <h4 className="gp-callout-heading">{readingArticle.callout.title}</h4>
                        <p className="gp-callout-desc">{readingArticle.callout.desc}</p>
                      </div>
                    </div>
                  )}

                  {/* Numbered Framework Points */}
                  <div className="gp-framework-sections">
                    {readingArticle.sections.map((section, idx) => (
                      <div key={idx} className="gp-framework-item">
                        <div className="gp-framework-head">
                          <span className="gp-framework-num">{section.num}</span>
                          <h3 className="gp-framework-title">{section.title}</h3>
                        </div>
                        <p className="gp-framework-body">{section.text}</p>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Bottom Reader Footer */}
                <div className="gp-reader-footer">
                  <div className="gp-feedback-wrap">
                    <span className="gp-feedback-text">Was this article helpful?</span>
                    <div className="gp-feedback-btns">
                      <button 
                        className={`gp-thumb-pill ${helpfulVote === 'yes' ? 'voted' : ''}`}
                        onClick={() => setHelpfulVote(helpfulVote === 'yes' ? null : 'yes')}
                        aria-label="Helpful"
                      >
                        <ThumbsUp size={14} />
                      </button>
                      <button 
                        className={`gp-thumb-pill ${helpfulVote === 'no' ? 'voted' : ''}`}
                        onClick={() => setHelpfulVote(helpfulVote === 'no' ? null : 'no')}
                        aria-label="Not Helpful"
                      >
                        <ThumbsDown size={14} />
                      </button>
                    </div>
                  </div>

                  <button 
                    className="gp-cta-action-btn"
                    onClick={() => {
                      const articleTitle = readingArticle.title;
                      const cta = readingArticle.ctaText || 'Book Strategy Call';
                      setReadingArticle(null);
                      onOpenContact(`${cta}: ${articleTitle}`);
                    }}
                  >
                    <span>{readingArticle.ctaText || 'Book an AI Strategy Call'}</span>
                    <ArrowRight size={15} />
                  </button>
                </div>

              </div>

            </div>
          </div>
        )}

    </section>
  );
}
