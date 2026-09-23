import React from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';
import rkChokshiLogo from '../assets/rk-chokshi-chess.jpg';
import downtownGamingLogo from '../assets/downtown-gaming-cafe.png';
import anukulYogaLogo from '../assets/anukul-yoga-studio.png';
import fusionDriveLogo from '../assets/fusion-drive.png';
import radheGoldLogo from '../assets/radhe-gold-buyer.png';
import vedanshiJewellersLogo from '../assets/vedanshi-jewellers.png';
import kushBankerLogo from '../assets/kush-banker-dance.png';

export default function PartnersClients({ onOpenContact }) {
  // Real Valued Client Roster
  const featuredClients = [
    {
      id: 'rk-chokshi-chess',
      name: 'RK Chokshi School of Chess',
      category: 'Sports & Chess Academy',
      location: 'Ahmedabad, Gujarat',
      salesRep: 'Tannishtha',
      desc: 'Premier Chess Academy & State Tournament Training (Think. Learn. Play. Win.)',
      customRender: (
        <div className="client-logo-frame">
          <img 
            src={rkChokshiLogo} 
            alt="RK Chokshi School of Chess" 
            className="client-logo-img logo-scale-chess" 
          />
        </div>
      )
    },
    {
      id: 'downtown-gaming-cafe',
      name: 'Downtown Gaming Cafe',
      category: 'Gaming Lounge & Cafe',
      location: 'Gurukul, Ahmedabad',
      salesRep: 'Tannishtha',
      desc: 'Esports Gaming Arena, Snooker Lounge & Youth Hangout Hub',
      customRender: (
        <div className="client-logo-frame">
          <img 
            src={downtownGamingLogo} 
            alt="Downtown Gaming Cafe" 
            className="client-logo-img logo-scale-downtown" 
          />
        </div>
      )
    },
    {
      id: 'fusion-drive',
      name: 'Fusion Drive',
      category: 'Video Reels & Media',
      location: 'Ahmedabad, India',
      salesRep: 'Mehul',
      desc: 'Personal Creator Reels, Commercial Video Production & Dynamic Motion',
      customRender: (
        <div className="client-logo-frame">
          <div className="fusion-badge-wrap">
            <img 
              src={fusionDriveLogo} 
              alt="Fusion Drive" 
              className="client-logo-img logo-scale-fusion" 
            />
          </div>
        </div>
      )
    },
    {
      id: 'anukul-yoga-studio',
      name: 'Anukul Yoga Studio',
      category: 'Yoga & Holistic Fitness',
      location: 'Science City & Bopal, Ahmedabad',
      salesRep: 'Vansh',
      desc: 'Hatha, Ashtanga, Power & Aerial Yoga Class Promotion and Digital Community Growth',
      customRender: (
        <div className="client-logo-frame">
          <img 
            src={anukulYogaLogo} 
            alt="Anukul Yoga Studio" 
            className="client-logo-img logo-scale-anukul" 
          />
        </div>
      )
    },
    {
      id: 'kush-banker-dance',
      name: 'Kush Banker Dance Studio / The Red Flag Entertainment',
      category: 'Dance Studio, Cinema & Events',
      location: 'Himalaya Mall, Ahmedabad',
      salesRep: 'Tannishtha',
      desc: 'Film Production, 21 Divas Gujarati Feature Movie, Sangeet & Corporate Event Choreography',
      customRender: (
        <div className="client-logo-frame">
          <img 
            src={kushBankerLogo} 
            alt="Kush Banker Dance Studio & Red Flag Ent." 
            className="client-logo-img logo-scale-kush" 
          />
        </div>
      )
    },
    {
      id: 'vedanshi-jewellers',
      name: 'Vedanshi Jewellers',
      category: 'Luxury Fine Jewelry',
      location: 'Royal Heights, Gota',
      salesRep: 'Sir',
      desc: 'Bridal Gold & Silver Showcase, Festive Social Campaigns & Cataloguing',
      customRender: (
        <div className="client-logo-frame">
          <img 
            src={vedanshiJewellersLogo} 
            alt="Vedanshi Jewellers" 
            className="client-logo-img logo-scale-vedanshi" 
          />
        </div>
      )
    },
    {
      id: 'shree-radhe-gold',
      name: 'Shree Radhe Gold Buyer',
      category: 'FinTech & Gold Trading',
      location: 'Gujarat, India',
      salesRep: 'Tannishtha',
      desc: 'Performance Lead Funnels, Pledged Gold Release & Instant Payouts Ads',
      customRender: (
        <div className="client-logo-frame">
          <img 
            src={radheGoldLogo} 
            alt="Shree Radhe Gold Buyer" 
            className="client-logo-img logo-scale-radhe" 
          />
        </div>
      )
    },
    {
      id: 'food-culinary',
      name: 'Food & Culinary Craft',
      category: 'Restaurant & Dining',
      location: 'Ahmedabad, India',
      salesRep: 'Tannishtha',
      desc: 'Menu Digitalization, Food Influencer Outreach & Geo-Targeted Ads',
      customRender: (
        <div className="client-logo-frame">
          <div className="food-brand-harmonized">
            <svg viewBox="0 0 190 52" className="food-svg-harmonized" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g transform="translate(6, 6)">
                {/* Modern Gourmet Cloche & Leaf Icon */}
                <path d="M4 26 C4 14, 14 6, 26 6 C38 6, 48 14, 48 26 Z" fill="#10B981" />
                <path d="M22 6 C22 2, 30 2, 30 6" stroke="#047857" strokeWidth="3" strokeLinecap="round" />
                <rect x="0" y="27" width="52" height="5" rx="2.5" fill="#047857" />
                <circle cx="26" cy="18" r="4" fill="#FFFFFF" />
              </g>
              <text x="64" y="24" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="16" fontWeight="900" fill="#064E3B" letterSpacing="0.04em">FOOD CRAFT</text>
              <text x="64" y="38" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="10" fontWeight="700" fill="#059669" letterSpacing="0.12em">GOURMET & DINE</text>
            </svg>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="partners-clients-section" id="partners">
      <div className="container">

        {/* We are Featured in / Trusted Client Roster Section */}
        <div className="featured-in-block-wrap">
          
          <div className="featured-header-center">
            <div className="partners-kicker">
              <Sparkles size={15} className="kicker-icon" />
              <span>PROVEN TRACK RECORD & CLIENT DELIVERABLES</span>
            </div>
            <h2 className="featured-main-title">
              We are Featured in & Trusted by
            </h2>
            <p className="featured-sub-description">
              Collaborating with ambitious brands, local business leaders, entertainment enterprises, and retail innovators across Gujarat.
            </p>
          </div>

          {/* Real Client Showcase Grid */}
          <div className="featured-clients-brand-showcase">
            <div className="partners-logos-grid featured-client-grid">
              {featuredClients.map((item) => (
                <div key={item.id} className="partner-logo-item-wrapper">
                  <div className="partner-logo-card client-brand-featured-card">
                    {item.customRender}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Banner Callout */}
          <div className="featured-trust-banner">
            <div className="trust-banner-left">
              <div className="trust-banner-text">
                <strong>Looking to elevate your brand presence?</strong> Let's build a customized growth strategy for your business.
              </div>
            </div>
            
            <div className="trust-banner-right">
              <button 
                className="trust-action-btn"
                onClick={() => onOpenContact && onOpenContact('Client Strategy Inquiry')}
              >
                <span>Partner With Vahlay Digital</span>
                <ExternalLink size={15} />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
