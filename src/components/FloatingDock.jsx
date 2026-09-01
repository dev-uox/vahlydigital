import React from 'react';
import { Image as ImageIcon, LayoutGrid, Search, Printer, Send } from 'lucide-react';

export default function FloatingDock({ onOpenGallery, onOpenGrid, onOpenSearch, onPrintPage, onOpenContact }) {
  return (
    <aside className="floating-dock-wrapper" aria-label="Quick Actions Dock">
      <div className="floating-dock-container">
        
        {/* 1. Gallery Icon */}
        <button 
          className="dock-item-btn" 
          onClick={onOpenGallery}
          title="Studio Showcase"
          aria-label="Studio Showcase"
        >
          <ImageIcon size={18} className="dock-icon" />
          <span className="dock-tooltip">Media Showcase</span>
        </button>

        {/* 2. Grid Icon */}
        <button 
          className="dock-item-btn" 
          onClick={onOpenGrid}
          title="All Capabilities"
          aria-label="All Capabilities"
        >
          <LayoutGrid size={18} className="dock-icon" />
          <span className="dock-tooltip">Capabilities</span>
        </button>

        {/* 3. Search Icon */}
        <button 
          className="dock-item-btn" 
          onClick={onOpenSearch}
          title="Quick Search"
          aria-label="Quick Search"
        >
          <Search size={18} className="dock-icon" />
          <span className="dock-tooltip">Quick Search</span>
        </button>

        {/* 4. Print / PDF Icon */}
        <button 
          className="dock-item-btn" 
          onClick={onPrintPage}
          title="Print Strategy Sheet"
          aria-label="Print Strategy Sheet"
        >
          <Printer size={18} className="dock-icon" />
          <span className="dock-tooltip">Print Overview</span>
        </button>

        {/* 5. Request Strategy Action */}
        <button 
          className="dock-item-btn dock-highlight-btn" 
          onClick={onOpenContact}
          title="Request Strategy"
          aria-label="Request Strategy"
        >
          <Send size={18} className="dock-icon text-cyan" />
          <span className="dock-tooltip">Request Strategy</span>
        </button>

      </div>
    </aside>
  );
}
