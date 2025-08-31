// import React from 'react';
// import './Sponsors.css';

// const Sponsors = () => {
//   // Sample sponsor data
//   const sponsors = [
//     {
//       id: 1,
//       name: "ICICI Bank",
//       // Using placeholder logo - replace with actual logo paths
//       logo: "https://cdn.brandfetch.io/idJHpX8apR/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1667566291432"
//     },
//     {
//       id: 2,
//       name: "StartupTN",
//       logo: "https://cdn.brandfetch.io/idU1-K3LFq/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1754045703600"
//     },
//     {
//       id: 3,
//       name: "Beeceptor",
//       logo: "https://cdn.brandfetch.io/idGTOik88q/w/899/h/236/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX&t=1686724314482"
//     }
//   ];

//   // Duplicate the sponsors array to show 6 sponsors as in the image
//   const allSponsors = [...sponsors, ...sponsors];

//   return (
//     <div className="sponsors-container">
//       <h1 className="sponsors-title">SPONSORS</h1>
      
//       {/* Sponsors Grid */}
//       <div className="sponsors-grid">
//         {allSponsors.map((sponsor, index) => (
//           <div key={`${sponsor.id}-${index}`} className="sponsor-card">
//             <img 
//               src={sponsor.logo} 
//               alt={sponsor.name}
//               className="sponsor-logo"
//             />
//           </div>
//         ))}
//       </div>
      
//       {/* Become a Sponsor Section */}
//       <div className="become-sponsor">
//         <h2 className="become-sponsor-title">Become A Sponsor</h2>
//         <p className="become-sponsor-text">
//           Join us in fostering innovation and entrepreneurship.
//           Connect with talented minds and showcase your brand
//         </p>
//         <button className="opportunities-button">
//           <span>Opportunities</span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Sponsors;










import React, { useState, useEffect, useRef } from 'react';
import './Sponsors.css';

const Sponsors = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sponsorsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2, // Trigger when 30% of component is visible
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before fully visible
      }
    );

    const currentRef = sponsorsRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Sample sponsor data
  const sponsors = [
    {
      id: 1,
      name: "ICICI Bank",
      // Using placeholder logo - replace with actual logo paths
      logo: "https://cdn.brandfetch.io/idJHpX8apR/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1667566291432"
    },
    {
      id: 2,
      name: "StartupTN",
      logo: "https://cdn.brandfetch.io/idU1-K3LFq/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1754045703600"
    },
    {
      id: 3,
      name: "Beeceptor",
      logo: "https://cdn.brandfetch.io/idGTOik88q/w/899/h/236/theme/dark/logo.png?c=1bxid64Mup7aczewSAYMX&t=1686724314482"
    }
  ];

  // Duplicate the sponsors array to show 6 sponsors as in the image
  const allSponsors = [...sponsors, ...sponsors];

  return (
    <div className={`sponsors-container ${isVisible ? 'slide-in' : ''}`} ref={sponsorsRef}>
      <h1 className="sponsors-title">SPONSORS</h1>
      
      {/* Sponsors Grid */}
      <div className="sponsors-grid">
        {allSponsors.map((sponsor, index) => (
          <div key={`${sponsor.id}-${index}`} className="sponsor-card">
            <img 
              src={sponsor.logo} 
              alt={sponsor.name}
              className="sponsor-logo"
            />
          </div>
        ))}
      </div>
      
      {/* Become a Sponsor Section */}
      <div className="become-sponsor">
        <h2 className="become-sponsor-title">Become A Sponsor</h2>
        <p className="become-sponsor-text">
          Join us in fostering innovation and entrepreneurship.
          Connect with talented minds and showcase your brand
        </p>
        <button className="opportunities-button">
          <span>Opportunities</span>
        </button>
      </div>
    </div>
  );
};

export default Sponsors;