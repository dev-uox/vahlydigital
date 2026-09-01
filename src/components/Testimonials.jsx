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
      quote: "Vahlay Digital engineered our complete brand launch, website, and ad strategy from the ground up. In just 90 days, our inbound pipeline grew by 240%. Highly recommended for any ambitious brand!",
      author: "Elena Rostova",
      role: "Founder & CEO, Horizon Luxe",
      avatar: avatar1
    },
    {
      id: 2,
      quote: "Their performance marketing and automated WhatsApp CRM transformed our lead qualification. We went from manual email follow-ups to instant automated sales bookings within 60 seconds.",
      author: "Marcus Vance",
      role: "Head of Growth, Apex SaaS",
      avatar: avatar2
    },
    {
      id: 3,
      quote: "He’s a phenomenal designer! Their UX insights & pixel-perfect UI work helped us increase our user engagement by 30%. Highly recommended for any product team!",
      author: "John Doe",
      role: "CEO, Themepure",
      avatar: avatar3
    },
    {
      id: 4,
      quote: "The 4K Reels and 3D motion graphics they produced generated over 1.8M organic views in our first month alone. Truly broadcast-level visual storytelling that drives real brand authority.",
      author: "Sophia Bennett",
      role: "Creative Director, Aura Studio",
      avatar: avatar4
    },
    {
      id: 5,
      quote: "From discovery to turnkey launch, the Vahlay team delivered our high-velocity web platform 2 weeks ahead of schedule with flawless Core Web Vitals. Unmatched execution speed.",
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
