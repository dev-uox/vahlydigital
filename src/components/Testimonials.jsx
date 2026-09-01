import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import avatar1 from '../assets/avatar-1.jpg';
import avatar2 from '../assets/avatar-2.jpg';
import avatar3 from '../assets/avatar-3.jpg';
import avatar4 from '../assets/avatar-4.jpg';
import avatar5 from '../assets/avatar-5.jpg';

export default function Testimonials({ onOpenContact }) {
  const [currentIndex, setCurrentIndex] = useState(2); // Start with quote 03

  const testimonials = [
    {
      id: 1,
      quote: "Vahlay Digital engineered our complete brand identity, luxury e-commerce platform, and ad strategy from the ground up. In just 90 days, our qualified inbound pipeline grew by 240% with a 4.2x verified ROAS. Truly an elite strategic partner.",
      author: "Elena Rostova",
      role: "Founder & CEO, Horizon Luxe",
      avatar: avatar1
    },
    {
      id: 2,
      quote: "Their performance marketing infrastructure and speed-to-lead WhatsApp AI transformed our sales operations. We transitioned from manual follow-ups to instant autonomous calendar bookings within 45 seconds of ad clicks.",
      author: "Marcus Vance",
      role: "Head of Growth, Apex SaaS",
      avatar: avatar2
    },
    {
      id: 3,
      quote: "Vahlay Digital delivered a masterclass in UI/UX and sub-second React architecture. Their bespoke web build boosted our visitor-to-lead conversion rate by 185% while securing perfect 99+ Core Web Vitals on mobile.",
      author: "David Sterling",
      role: "Managing Director, Sterling FinTech",
      avatar: avatar3
    },
    {
      id: 4,
      quote: "The 4K cinematic Reels and 3D motion graphics they produced generated over 2.4M organic views in our launch month. Unmatched visual storytelling that instantly established our brand authority.",
      author: "Sophia Bennett",
      role: "Creative Director, Aura Studio",
      avatar: avatar4
    },
    {
      id: 5,
      quote: "From initial market discovery to turnkey global launch, the Vahlay team delivered our high-velocity enterprise platform 2 weeks ahead of schedule. Their deterministic approach to growth is unlike any agency we've worked with.",
      author: "Jordan Smith",
      role: "Managing Partner, Velocity Capital",
      avatar: avatar5
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
