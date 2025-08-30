import React from 'react';

const FooterContent = () => {
  const scrollToSection = (selector) => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-container">
          
          {/* Left Section */}
          <div className="footer-left">
            <div className="footer-section">
              <h2>Voyage E-Summit</h2>
              <div className="footer-label">Convenor</div>
              <div className="footer-info">Dr. Sasikumar M (Director - VNEST)</div>
            </div>
            
            <div className="footer-section">
              <div className="footer-label">Faculty Coordinators</div>
              <div className="footer-info">Dr Karthiyaini S</div>
              <div className="footer-info">Dr Noel Jeygar Robert</div>
              <div className="footer-info">Dr Kaviya Elakkiya M</div>
            </div>
            
            <div className="footer-section">
              <div className="footer-label">Student Coordinator</div>
              <div className="footer-info">Aran Agarwal</div>
            </div>
          </div>
          
          {/* Center Section - Logo */}
          <div className="footer-center">
            <div className="footer-logo">
              {/* Replace with your actual logo */}
              <img 
                src="/WhatsApp_Image_2025-08-29_at_22.14.29_92f17f5c-removebg-preview.png" 
                alt="VOYAGE Logo" 
                className="voyage-footer-logo"
              />
            </div>
          </div>
          
          {/* Right Section */}
          <div className="footer-right">
            <h3>Quick Links</h3>
            <div className="footer-links">
              <a href="#" onClick={() => scrollToSection('.hero-container')} className="footer-link">Home</a>
              <a href="#" onClick={() => scrollToSection('.whoarewe-container')} className="footer-link">About</a>
              <a href="#" onClick={() => scrollToSection('.agenda-container')} className="footer-link">Agenda</a>
              <a href="#" onClick={() => scrollToSection('.speakers-container')} className="footer-link">Speakers</a>
              <a href="#" onClick={() => scrollToSection('.sponsors-container')} className="footer-link">Sponsors</a>
              <a href="https://hackathon.voyage-esummit.com" target="_blank" rel="noopener noreferrer" className="footer-link">Hackathon</a>
              <a href="https://register.voyage-esummit.com" target="_blank" rel="noopener noreferrer" className="footer-link">Registrations</a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="footer-copyright">
          © 2025 Voyage E-Summit. All rights reserved.
        </div>
        
        <div className="footer-social">
          <a href="https://www.instagram.com/voyage_esummit" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/company/voyage-esummit" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.facebook.com/voyage.esummit" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="mailto:contact@voyage-esummit.com" className="social-icon email">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterContent;