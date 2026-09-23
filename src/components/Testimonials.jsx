import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import rkChokshiLogo from '../assets/rk-chokshi-chess.jpg';
import downtownGamingLogo from '../assets/downtown-gaming-cafe.png';
import anukulYogaLogo from '../assets/anukul-yoga-studio.png';
import fusionDriveLogo from '../assets/fusion-drive.png';
import radheGoldLogo from '../assets/radhe-gold-buyer.png';
import vedanshiJewellersLogo from '../assets/vedanshi-jewellers.png';
import kushBankerLogo from '../assets/kush-banker-dance.png';

export default function Testimonials({ onOpenContact }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "Vahlay Digital revolutionized our student enrollment process. Their hyper-targeted local campaigns and social media positioning doubled our weekend academy registrations across Ahmedabad within 60 days. Truly a results-driven team.",
      author: "RK Chokshi School of Chess",
      role: "Founder & Head Coach • Sports & Chess Academy, Ahmedabad",
      avatar: rkChokshiLogo
    },
    {
      id: 2,
      quote: "The buzz Vahlay Digital created for our esports tournaments and gaming lounge was incredible. Their high-energy reels and youth-targeted ad creatives drove a massive influx of gamers and weekend footfall to our cafe.",
      author: "Downtown Gaming Cafe",
      role: "Management Team • Gaming Lounge & Esports Arena, Gurukul",
      avatar: downtownGamingLogo
    },
    {
      id: 3,
      quote: "Vahlay Digital brought an extraordinary level of luxury and elegance to our fine jewelry showcases. Their festive social campaigns and digital cataloguing significantly boosted walk-ins and high-ticket customer inquiries.",
      author: "Vedanshi Jewellers",
      role: "Director • Luxury Fine Jewelry, Gota, Ahmedabad",
      avatar: vedanshiJewellersLogo
    },
    {
      id: 4,
      quote: "From promoting our feature movie '21 Divas' to filling our dance workshops at Himalaya Mall, Vahlay Digital's creative direction and digital reach are phenomenal. They truly understand visual storytelling and entertainment marketing.",
      author: "Kush Banker Dance Studio",
      role: "Founder & Choreographer • The Red Flag Entertainment, Ahmedabad",
      avatar: kushBankerLogo
    },
    {
      id: 5,
      quote: "Their dedicated social media community growth and geo-targeted ads for our Hatha & Aerial Yoga classes helped us expand to full batch capacity across both our Science City and Bopal studios.",
      author: "Anukul Yoga Studio",
      role: "Founder • Yoga & Holistic Fitness, Science City & Bopal",
      avatar: anukulYogaLogo
    },
    {
      id: 6,
      quote: "Our lead generation funnels for instant payouts and gold release services achieved an all-time high ROAS with Vahlay Digital. Transparent reporting and continuous ad optimization have made them an indispensable growth partner.",
      author: "Shree Radhe Gold Buyer",
      role: "Managing Partner • FinTech & Gold Trading, Gujarat",
      avatar: radheGoldLogo
    },
    {
      id: 7,
      quote: "Vahlay Digital helped us package and market our commercial video production and creator reels across Gujarat. Their digital positioning and website craft brought us top-tier commercial brand contracts.",
      author: "Fusion Drive",
      role: "Creative Producer • Commercial Video Production & Motion, Ahmedabad",
      avatar: fusionDriveLogo
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="testimonials-showcase-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="aleric-section-header-centered">
          <div className="aleric-eyebrow-pill">
            <span className="pill-dot">●</span>
            <span>CLIENT STORIES</span>
          </div>
          <h2 className="testimonials-title-clean">Testimonials</h2>
        </div>

        {/* Featured Testimonial Slider */}
        <div className="testimonial-slider-box">
          
          <p className="testimonial-main-quote">
            “{current.quote}”
          </p>

          {/* Author Row with Quote Badge */}
          <div className="testimonial-author-container">
            <div className="testimonial-quote-badge">
              <span className="quote-marks-symbol">❝</span>
            </div>
            
            <img 
              src={current.avatar} 
              alt={current.author} 
              className="testimonial-author-avatar" 
            />

            <div className="testimonial-author-meta">
              <h4 className="testimonial-author-name">{current.author}</h4>
              <p className="testimonial-author-role">{current.role}</p>
            </div>
          </div>

          {/* Slider Progress Bar / Number Track */}
          <div className="testimonial-progress-track-row">
            <button className="slider-nav-arrow" onClick={handlePrev} aria-label="Previous">
              <ChevronLeft size={16} />
            </button>

            <span className="track-number">0{currentIndex + 1}</span>

            <div className="track-line-wrapper">
              <div 
                className="track-line-progress" 
                style={{ width: `${((currentIndex + 1) / testimonials.length) * 100}%` }}
              ></div>
            </div>

            <span className="track-number">0{testimonials.length}</span>

            <button className="slider-nav-arrow" onClick={handleNext} aria-label="Next">
              <ChevronRight size={16} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
