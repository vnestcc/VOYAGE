// WhoAreWe.jsx
import React, { useEffect, useRef, useState } from 'react';
import './WhoAreWe.css';

const WhoAreWe = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of the component is visible
        rootMargin: '-50px 0px', // Start animation 50px before entering viewport
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isVisible]);


  return (
    <section ref={sectionRef} className={`who-are-we whoarewe-container ${isVisible ? 'animate' : ''}`} id="about">
      <div className="container">
        {/* Section Title */}
        <h1 className="section-title">
          About VOYAGE
        </h1>

        {/* Main Content */}
        <div className="main-content">
          {/* Left Content */}
          <div className="content-left">
            <h2 className="main-heading1">
              Fostering Global Education through International Collaborations
            </h2>
            <p className="subtext">
              At EduVentures, we specialize in facilitating international collaborations and fostering global education initiatives. Our mission is to connect institutions, universities, and students with unparalleled opportunities for growth, knowledge exchange, and .....
            </p>
            <button className="know-more-btn">KNOW MORE</button>
          </div>

          {/* Right Content with Image and Stats */}
          <div className="content-right">
            <div className="image-container">
              <img
                src="https://web.archive.org/web/20240627165030im_/https://eduventures.net.in/wp-content/uploads/2023/09/closeup-shot-two-domed-towers-old-royal-naval-college-greenwich-london-2048x1138.webp"
                alt="University Building"
                loading="lazy"
              />
              <div className="green-overlay"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhoAreWe;