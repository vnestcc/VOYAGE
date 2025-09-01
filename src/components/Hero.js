import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Polyfill for smooth scrolling in older browsers
  const smoothScrollPolyfill = () => {
    if (!('scrollBehavior' in document.documentElement.style)) {
      console.log('Adding smooth scroll polyfill');
      const originalScrollTo = window.scrollTo;
      window.scrollTo = function(options) {
        if (options && options.behavior === 'smooth') {
          const start = window.pageYOffset;
          const target = options.top;
          const distance = target - start;
          const duration = 500;
          let startTime = null;
          
          function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, start, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
          }
          
          function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
          }
          
          requestAnimationFrame(animation);
        } else {
          originalScrollTo.call(this, options);
        }
      };
    }
  };

  useEffect(() => {
    // Trigger animations on component mount
    setTimeout(() => setIsLoaded(true), 100);
    // Add smooth scroll polyfill
    smoothScrollPolyfill();
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Simplified and reliable scroll function with special handling for agenda
  const scrollToSection = (sectionClass) => {
    console.log(`Attempting to scroll to ${sectionClass}`);
    
    // Remove the dot if it exists for querySelector
    const cleanSelector = sectionClass.startsWith('.') ? sectionClass : `.${sectionClass}`;
    
    const scrollToElement = (element) => {
      if (!element) return false;
      
      try {
        // Calculate the position accounting for navbar height
        const navHeight = document.querySelector('.navbar')?.offsetHeight || 60;
        let elementTop = element.offsetTop - navHeight;
        
        // Special handling for agenda - add extra offset if needed
        if (sectionClass.includes('agenda')) {
          elementTop = element.offsetTop - navHeight - 20; // Extra 20px padding
        }
        
        // Use window.scrollTo for more reliable scrolling
        window.scrollTo({
          top: Math.max(0, elementTop),
          behavior: 'smooth'
        });
        
        console.log(`Successfully scrolled to ${sectionClass} at position ${elementTop}`);
        return true;
      } catch (error) {
        console.error('Scroll error:', error);
        return false;
      }
    };
    
    // Special selectors for agenda section
    const getAgendaSelectors = () => {
      return [
        '.agenda-section',
        '.agenda-container',
        '.agenda',
        '#agenda',
        '[class*="agenda"]',
        '.schedule-container',
        '.schedule',
        '#schedule',
        '[data-section="agenda"]'
      ];
    };
    
    // Try to find and scroll to the element
    const findAndScrollWithRetry = (retryCount = 0) => {
      let element = document.querySelector(cleanSelector);
      
      // Special handling for agenda - try multiple selectors
      if (!element && sectionClass.includes('agenda')) {
        const agendaSelectors = getAgendaSelectors();
        for (const selector of agendaSelectors) {
          element = document.querySelector(selector);
          if (element) {
            console.log(`Found agenda element with selector: ${selector}`);
            break;
          }
        }
      }
      
      if (element) {
        const success = scrollToElement(element);
        if (success) return;
      }
      
      // If not found and we haven't exceeded retry limit
      if (retryCount < 5) { // Increased retries for agenda
        console.log(`Retry ${retryCount + 1} for ${sectionClass}`);
        setTimeout(() => findAndScrollWithRetry(retryCount + 1), 150);
      } else {
        console.warn(`Failed to scroll to ${sectionClass} after ${retryCount} retries`);
        
        // Final fallback: try alternative selectors
        const fallbackSelectors = [
          sectionClass.replace('-container', ''),
          sectionClass.replace('.', '#'),
          `[class*="${sectionClass.replace('.', '').replace('-container', '')}"]`,
          `[id*="${sectionClass.replace('.', '').replace('-container', '')}"]`
        ];
        
        // Add agenda-specific fallbacks
        if (sectionClass.includes('agenda')) {
          fallbackSelectors.push(...getAgendaSelectors());
        }
        
        for (const fallbackSelector of fallbackSelectors) {
          const fallbackElement = document.querySelector(fallbackSelector);
          if (fallbackElement && scrollToElement(fallbackElement)) {
            console.log(`Success with fallback selector: ${fallbackSelector}`);
            return;
          }
        }
        
        console.error(`All attempts failed to scroll to ${sectionClass}`);
      }
    };
    
    // Start the scroll attempt
    findAndScrollWithRetry();
  };

  // Make navigation function globally available
  useEffect(() => {
    window.scrollToSection = scrollToSection;
    return () => {
      delete window.scrollToSection;
    };
  }, []);

  // Navigation handler with preventDefault to avoid any default link behavior
  const handleNavClick = (e, sectionClass) => {
    e.preventDefault();
    e.stopPropagation();
    scrollToSection(sectionClass);
  };

  return (
    <div className="hero-container">
      <nav className="navbar">
        <div className="logo">
          <img
            src="./vit-logo.svg"
            alt="VIT Chennai Logo"
            className="vit-logo"
            loading="lazy"
          />
        </div>
        
        <ul className="nav-links">
          <li><button onClick={(e) => handleNavClick(e, '.hero-container')}>Home</button></li>
          <li><button onClick={(e) => handleNavClick(e, '.whoarewe-container')}>About</button></li>
          <li><button onClick={(e) => handleNavClick(e, '.agenda-section')}>Agenda</button></li>
          <li><button onClick={(e) => handleNavClick(e, '.speakers-container')}>Speakers</button></li>
          <li><button onClick={(e) => handleNavClick(e, '.sponsors-container')}>Sponsors</button></li>
          <li><a href="https://hackathon.voyage-esummit.com" target="_blank" rel="noopener noreferrer">Hackathon</a></li>
          <li><a href="https://register.voyage-esummit.com" target="_blank" rel="noopener noreferrer">Registrations</a></li>
          <li><button onClick={(e) => { e.preventDefault(); window.showFooter && window.showFooter(); }}>Contact Us</button></li>
        </ul>
        
        <div className="desktop-vnest">
          <img
            src="5c759bc3-e9de-42fa-aeaf-d6f44d6e1c85_removalai_preview.webp"
            alt="V-NEST Logo"
            className="vnest-logo"
            loading="lazy"
          />
        </div>
        
        <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={closeMobileMenu}>
          <span>&times;</span>
        </button>
        <ul className="mobile-menu-list">
          <li><button onClick={(e) => { handleNavClick(e, '.hero-container'); closeMobileMenu(); }}>Home</button></li>
          <li><button onClick={(e) => { handleNavClick(e, '.whoarewe-container'); closeMobileMenu(); }}>About</button></li>
          <li><button onClick={(e) => { handleNavClick(e, '.agenda-section'); closeMobileMenu(); }}>Agenda</button></li>
          <li><button onClick={(e) => { handleNavClick(e, '.speakers-container'); closeMobileMenu(); }}>Speakers</button></li>
          <li><button onClick={(e) => { handleNavClick(e, '.sponsors-container'); closeMobileMenu(); }}>Sponsors</button></li>
          <li><a href="https://hackathon.voyage-esummit.com" target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>Hackathon</a></li>
          <li><a href="https://register.voyage-esummit.com" target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>Registrations</a></li>
          <li><button onClick={(e) => { e.preventDefault(); window.showFooter && window.showFooter(); closeMobileMenu(); }}>Contact Us</button></li>
        </ul>
      </div>
      
      <main className={`hero-content ${isLoaded ? 'loaded' : ''}`}>
        <div className={`voyage-logo-container ${isLoaded ? 'loaded' : ''}`}>
          <img 
            src="/WhatsApp_Image_2025-08-29_at_22.14.29_92f17f5c-removebg-preview.webp" 
            alt="VOYAGE Logo" 
            className="voyage-logo"
            loading="lazy"
          />
        </div>
        
        <p className={`subtitle ${isLoaded ? 'loaded' : ''}`}>An Expedition to Entrepreneurship</p>
        
        <div className={`date ${isLoaded ? 'loaded' : ''}`}>
          12<span className="date-sup">th</span>-14<span className="date-sup">th</span> AUGUST, 2025
        </div>
        
        <div className={`cta-buttons ${isLoaded ? 'loaded' : ''}`}>
          <a href="https://hackathon.voyage-esummit.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View the Hackathon</a>
          <button onClick={(e) => handleNavClick(e, '.agenda-section')} className="btn">View the Conclave</button>
        </div>
      </main>
    </div>
  );
};

export default Hero;