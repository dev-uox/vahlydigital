import React from 'react';
import { Compass, Palette, Rocket, TrendingUp } from 'lucide-react';

export default function ExecutionProcess() {
  return (
    <section id="process" className="doodle-journey-section">
      <div className="container">

        {/* Floating Doodle Confetti & Stars Background Elements */}
        <div className="doodle-stars-layer" aria-hidden="true">
          <span className="doodle-star star-1">★</span>
          <span className="doodle-star star-2">✦</span>
          <span className="doodle-star star-3">✦</span>
          <span className="doodle-star star-4">★</span>
          <span className="doodle-star star-5">✦</span>
          <span className="doodle-dot dot-1"></span>
          <span className="doodle-dot dot-2"></span>
          <span className="doodle-dot dot-3"></span>
          <span className="doodle-dot dot-4"></span>
          <span className="doodle-cross cross-1">+</span>
          <span className="doodle-cross cross-2">+</span>
          <span className="doodle-cross cross-3">+</span>
        </div>

        {/* Section Header */}
        <div className="doodle-header-centered">
          <div className="doodle-eyebrow-row">
            <span className="doodle-arrow-left">»—</span>
            <span className="doodle-eyebrow-text">OUR PROVEN PROCESS</span>
            <span className="doodle-arrow-right">—«</span>
          </div>

          <h2 className="doodle-main-title">
            <span className="title-sparkle-left">ˏˋ</span>
            Our Proven Execution Framework
            <span className="title-sparkle-right">ˎˊ</span>
          </h2>

          <p className="doodle-subtext">
            A focused four-step journey from discovery to continuous growth.
          </p>
        </div>

        {/* Interactive Doodle Winding Road Canvas (Balanced Spacing) */}
        <div className="doodle-canvas-wrapper">

          {/* SVG Hand-Drawn Winding Road & Connectors */}
          <svg
            className="doodle-svg-map"
            viewBox="0 0 1200 680"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* 1. Road Outer Dark Cartoon Outline */}
            <path
              d="M 180 560 C 260 560, 280 530, 380 520 C 540 500, 700 490, 770 440 C 840 380, 660 320, 460 290 C 310 270, 360 180, 540 160 C 640 150, 780 150, 940 120"
              stroke="#0f172a"
              strokeWidth="56"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* 2. Road Mint / Seafoam Green Body */}
            <path
              d="M 180 560 C 260 560, 280 530, 380 520 C 540 500, 700 490, 770 440 C 840 380, 660 320, 460 290 C 310 270, 360 180, 540 160 C 640 150, 780 150, 940 120"
              stroke="#99f6e4"
              strokeWidth="46"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* 3. Hand-drawn Inner Line Accent */}
            <path
              d="M 180 555 C 260 555, 280 525, 380 515 C 540 495, 700 485, 770 435 C 840 375, 660 315, 460 285 C 310 265, 360 175, 540 155 C 640 145, 780 145, 940 115"
              stroke="#5eead4"
              strokeWidth="4"
              strokeLinecap="round"
            />

            {/* 4. Center Dashed Orange / Gold Road Track */}
            <path
              className="doodle-dashed-line"
              d="M 180 560 C 260 560, 280 530, 380 520 C 540 500, 700 490, 770 440 C 840 380, 660 320, 460 290 C 310 270, 360 180, 540 160 C 640 150, 780 150, 940 120"
              stroke="#f59e0b"
              strokeWidth="4"
              strokeDasharray="8 10"
              strokeLinecap="round"
            />

            {/* 5. Start Pin Ring (Bottom-Left) */}
            <circle cx="180" cy="560" r="16" fill="#14b8a6" stroke="#0f172a" strokeWidth="4" />
            <circle cx="180" cy="560" r="8" fill="#ccfbf1" stroke="#0f172a" strokeWidth="2.5" />

            {/* 6. Hand-Drawn Smooth S-Curve Connectors with Pin Dots */}
            {/* Branch 01 (Left Card to Badge 01) */}
            <g>
              <circle cx="280" cy="520" r="6" fill="#ffffff" stroke="#0f172a" strokeWidth="2.5" />
              <path
                d="M 286 520 C 305 510, 318 530, 338 520"
                stroke="#ffffff"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M 286 520 C 305 510, 318 530, 338 520"
                stroke="#0f172a"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <circle cx="338" cy="520" r="5" fill="#ffffff" stroke="#0f172a" strokeWidth="2" />
            </g>

            {/* Branch 02 (Badge 02 to Right Card) */}
            <g>
              <circle cx="810" cy="440" r="5" fill="#ffffff" stroke="#0f172a" strokeWidth="2" />
              <path
                d="M 815 440 C 832 450, 845 430, 862 440"
                stroke="#ffffff"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M 815 440 C 832 450, 845 430, 862 440"
                stroke="#0f172a"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <circle cx="862" cy="440" r="6" fill="#ffffff" stroke="#0f172a" strokeWidth="2.5" />
            </g>

            {/* Branch 03 (Left Card to Badge 03) */}
            <g>
              <circle cx="360" cy="290" r="6" fill="#ffffff" stroke="#0f172a" strokeWidth="2.5" />
              <path
                d="M 366 290 C 385 278, 398 302, 418 290"
                stroke="#ffffff"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M 366 290 C 385 278, 398 302, 418 290"
                stroke="#0f172a"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <circle cx="418" cy="290" r="5" fill="#ffffff" stroke="#0f172a" strokeWidth="2" />
            </g>

            {/* Branch 04 (Badge 04 to Right Card) */}
            <g>
              <circle cx="738" cy="160" r="5" fill="#ffffff" stroke="#0f172a" strokeWidth="2" />
              <path
                d="M 743 160 C 760 170, 772 150, 788 160"
                stroke="#ffffff"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M 743 160 C 760 170, 772 150, 788 160"
                stroke="#0f172a"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <circle cx="788" cy="160" r="6" fill="#ffffff" stroke="#0f172a" strokeWidth="2.5" />
            </g>

            {/* 7. Checkered Finish Racing Flag (Top-Right) */}
            <g transform="translate(935, 55)">
              <line x1="8" y1="10" x2="8" y2="65" stroke="#0f172a" strokeWidth="4" strokeLinecap="round" />
              <line x1="8" y1="10" x2="8" y2="65" stroke="#e2e8f0" strokeWidth="2" strokeLinecap="round" />
              <ellipse cx="8" cy="65" rx="10" ry="5" fill="#14b8a6" stroke="#0f172a" strokeWidth="3" />

              <g transform="translate(8, 10)">
                <rect x="0" y="0" width="38" height="24" rx="2" fill="#ffffff" stroke="#0f172a" strokeWidth="2.5" />
                <rect x="0" y="0" width="9.5" height="6" fill="#0f172a" />
                <rect x="19" y="0" width="9.5" height="6" fill="#0f172a" />
                <rect x="9.5" y="6" width="9.5" height="6" fill="#0f172a" />
                <rect x="28.5" y="6" width="9.5" height="6" fill="#0f172a" />
                <rect x="0" y="12" width="9.5" height="6" fill="#0f172a" />
                <rect x="19" y="12" width="9.5" height="6" fill="#0f172a" />
                <rect x="9.5" y="18" width="9.5" height="6" fill="#0f172a" />
                <rect x="28.5" y="18" width="9.5" height="6" fill="#0f172a" />
              </g>
            </g>
          </svg>

          {/* HTML Overlay: 4 Colorful Badges & Cream Doodle Cards */}
          <div className="doodle-nodes-overlay">

            {/* --- STEP 01 (TURQUOISE / BLUE) --- */}
            <div className="doodle-node-group node-01">
              <div className="doodle-badge-wrapper">
                <span className="badge-rays rays-cyan">ˏˋ ˎˊ</span>
                <div className="doodle-badge-circle badge-cyan">
                  <span className="doodle-badge-num">01</span>
                  <Compass size={22} strokeWidth={2.5} className="doodle-badge-icon" />
                </div>
              </div>

              <div className="doodle-info-card card-left">
                <div className="doodle-card-header">
                  <h4 className="doodle-card-title">Discovery & Market Audit</h4>
                </div>
                <span className="doodle-card-sub subtitle-cyan">IN-DEPTH RESEARCH</span>
                <p className="doodle-card-desc">
                  Audience research, technical audit and competitor gaps.
                </p>
              </div>
            </div>

            {/* --- STEP 02 (GOLDEN ORANGE) --- */}
            <div className="doodle-node-group node-02">
              <div className="doodle-badge-wrapper">
                <span className="badge-rays rays-orange">ˏˋ ˎˊ</span>
                <div className="doodle-badge-circle badge-orange">
                  <span className="doodle-badge-num">02</span>
                  <Palette size={22} strokeWidth={2.5} className="doodle-badge-icon" />
                </div>
              </div>

              <div className="doodle-info-card card-right">
                <div className="doodle-card-header">
                  <h4 className="doodle-card-title">Creative & Strategy Blueprint</h4>
                </div>
                <span className="doodle-card-sub subtitle-orange">DESIGN & DIRECTION</span>
                <p className="doodle-card-desc">
                  Brand direction, wireframes and campaign strategy.
                </p>
              </div>
            </div>

            {/* --- STEP 03 (CORAL RED / WATERMELON) --- */}
            <div className="doodle-node-group node-03">
              <div className="doodle-badge-wrapper">
                <div className="doodle-badge-circle badge-coral">
                  <span className="doodle-badge-num">03</span>
                  <Rocket size={22} strokeWidth={2.5} className="doodle-badge-icon" />
                </div>
              </div>

              <div className="doodle-info-card card-left">
                <div className="doodle-card-header">
                  <h4 className="doodle-card-title">Rapid Engineering & Launch</h4>
                </div>
                <span className="doodle-card-sub subtitle-coral">PRODUCTION & ROLLOUT</span>
                <p className="doodle-card-desc">
                  High-speed web builds, tracking and multi-channel launch.
                </p>
              </div>
            </div>

            {/* --- STEP 04 (MINT GREEN) --- */}
            <div className="doodle-node-group node-04">
              <div className="doodle-badge-wrapper">
                <div className="doodle-badge-circle badge-green">
                  <span className="doodle-badge-num">04</span>
                  <TrendingUp size={22} strokeWidth={2.5} className="doodle-badge-icon" />
                </div>
              </div>

              <div className="doodle-info-card card-right">
                <div className="doodle-card-header">
                  <h4 className="doodle-card-title">Performance Scaling & AI Tuning</h4>
                </div>
                <span className="doodle-card-sub subtitle-green">CONTINUOUS GROWTH</span>
                <p className="doodle-card-desc">
                  ROAS optimization, funnel testing and automation.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
