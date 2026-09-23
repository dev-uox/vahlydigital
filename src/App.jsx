import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import ServiceDetailPage from './components/ServiceDetailPage';
import AboutUs from './components/AboutUs';
import ExecutionProcess from './components/ExecutionProcess';
import BrandStatement from './components/BrandStatement';
import PartnersClients from './components/PartnersClients';
import Testimonials from './components/Testimonials';
import BlogSection from './components/BlogSection';
import FloatingDock from './components/FloatingDock';
import Modals from './components/Modals';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  const [activeModal, setActiveModal] = useState(null); // 'contact' | 'gallery' | 'search' | null
  const [initialService, setInitialService] = useState('Brand Launch Studio');
  const [activeView, setActiveView] = useState('home'); // 'home' | 'service-detail'
  const [selectedServiceId, setSelectedServiceId] = useState('brand-launch');

  // 1. Initialize Rubbery Smooth Momentum Physics (Lenis)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.05,
      touchMultiplier: 2.0,
      infinite: false,
    });

    window.lenis = lenis;

    let animationFrameId;
    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

  // 2. Handle Browser URL Routing (Hash & Popstate)
  useEffect(() => {
    const serviceTitles = {
      'brand-launch': 'Branding Design & Brand Launch Studio | Vahlay Digital',
      'social-video': 'Viral 4K Reels & Social Media Growth | Vahlay Digital',
      'performance-marketing': 'Performance Marketing, Meta & Google Ads | Vahlay Digital',
      'web-engineering': 'Full-Stack Web & Mobile App Engineering | Vahlay Digital',
      'ai-automation': 'AI Automation & Speed-to-Lead Systems | Vahlay Digital'
    };

    const handleLocationChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#service/')) {
        const serviceId = hash.replace('#service/', '');
        setSelectedServiceId(serviceId);
        setActiveView('service-detail');
        if (serviceTitles[serviceId]) {
          document.title = `${serviceTitles[serviceId]}`;
        }
        if (window.lenis) {
          window.lenis.scrollTo(0, { immediate: true });
        }
        window.scrollTo(0, 0);
      } else {
        setActiveView('home');
        document.title = 'Vahlay Digital — Top Digital Strategy, SEO & Growth Marketing Agency';
      }
    };

    handleLocationChange();
    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const handleOpenContact = (serviceName = 'Brand Launch Studio') => {
    setInitialService(serviceName);
    setActiveModal('contact');
  };

  const handleOpenServiceDetail = (serviceId = 'brand-launch') => {
    setSelectedServiceId(serviceId);
    setActiveView('service-detail');
    window.location.hash = `#service/${serviceId}`;
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    }
    window.scrollTo(0, 0);
  };

  const handleBackToHome = () => {
    setActiveView('home');
    window.location.hash = '';
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    }
    window.scrollTo(0, 0);
  };

  const handleRequestStrategy = (formData) => {
    setInitialService(formData.service || 'Brand Launch Studio');
    setActiveModal('contact');
  };

  const handlePrintPage = () => {
    window.print();
  };

  const handleNavigate = (targetId) => {
    if (activeView !== 'home') {
      setActiveView('home');
      setTimeout(() => {
        if (targetId === 'top' || !targetId) {
          if (window.lenis) window.lenis.scrollTo(0, { duration: 1.2 });
          else window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const el = document.getElementById(targetId);
          if (el) {
            if (window.lenis) window.lenis.scrollTo(el, { offset: -70, duration: 1.2 });
            else el.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 120);
    } else {
      if (targetId === 'top' || !targetId) {
        if (window.lenis) window.lenis.scrollTo(0, { duration: 1.2 });
        else window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.getElementById(targetId);
        if (el) {
          if (window.lenis) window.lenis.scrollTo(el, { offset: -70, duration: 1.2 });
          else el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <div className="app-root">
      {/* 1. Header & Navigation */}
      <Navbar 
        onOpenModal={(modalType) => setActiveModal(modalType)}
        onOpenContact={(source) => handleOpenContact(source)}
        onNavigate={handleNavigate}
      />

      <main>
        {activeView === 'service-detail' ? (
          <ServiceDetailPage 
            serviceId={selectedServiceId}
            onBack={handleBackToHome}
            onOpenContact={handleOpenContact}
          />
        ) : (
          <>
            {/* 2. Hero Section */}
            <Hero 
              onRequestStrategy={handleRequestStrategy}
              onSelectService={(serviceId) => {
                if (serviceId === 'analytics') handleOpenServiceDetail('performance-marketing');
                if (serviceId === 'uiux') handleOpenServiceDetail('web-engineering');
                if (serviceId === 'media') handleOpenServiceDetail('social-video');
              }}
            />

            {/* 3. Core Solutions & Stacking Services Feed */}
            <ServicesSection 
              onOpenServiceDetail={handleOpenServiceDetail}
            />

            {/* 4. About Us Section (Bento Grid Architecture) */}
            <AboutUs onOpenContact={handleOpenContact} />

            {/* 5. 4-Step Execution Framework */}
            <ExecutionProcess onOpenContact={handleOpenContact} />

            {/* 6. Minimalist Brand Statement & Commitments */}
            <BrandStatement onOpenContact={handleOpenContact} />

            {/* 7. Our Partners & We are Featured In Badges */}
            <PartnersClients onOpenContact={handleOpenContact} />

            {/* 8. Client Testimonials & Stats Rings */}
            <Testimonials onOpenContact={handleOpenContact} />

            {/* 9. Articles & Growth Playbooks */}
            <BlogSection onOpenContact={handleOpenContact} />
          </>
        )}
      </main>

      {/* 9. Right Floating Action Dock */}
      <FloatingDock 
        onOpenGallery={() => setActiveModal('gallery')}
        onOpenGrid={() => handleNavigate('services')}
        onOpenSearch={() => setActiveModal('search')}
        onPrintPage={handlePrintPage}
        onOpenContact={() => handleOpenContact()}
      />

      {/* 10. Modals & Drawers */}
      <Modals 
        activeModal={activeModal}
        onClose={() => setActiveModal(null)}
        initialService={initialService}
        onNavigate={handleNavigate}
        onOpenContact={handleOpenContact}
      />

      {/* 11. Comprehensive Footer */}
      <Footer 
        onOpenContact={(source) => handleOpenContact(source)} 
        onNavigate={handleNavigate}
      />
    </div>
  );
}
