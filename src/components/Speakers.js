// import React from 'react';
// import './Speakers.css';

// const Speakers = () => {
//   const speakers = [
//     {
//       id: 1,
//       name: "ANKUR WARIKOO",
//       title: "PERSONAL FINANCE ADVISOR | WRITER",
//       image: "https://web.archive.org/web/20240627165030im_/https://eduventures.net.in/wp-content/uploads/2023/09/enjoying-the-campus-life.jpg" // Using image from public folder
//     },
//     {
//       id: 2,
//       name: "CK KUMARAVEL",
//       title: "CEO OF NATURALS SALON",
//       image: "https://web.archive.org/web/20240627165030im_/https://eduventures.net.in/wp-content/uploads/2023/09/enjoying-the-campus-life.jpg" // Using image from public folder
//     },
//     {
//       id: 3,
//       name: "JAY KAPOOR",
//       title: "CEO OF KALESHWARI GROUP",
//       image: "https://web.archive.org/web/20240627165030im_/https://eduventures.net.in/wp-content/uploads/2023/09/enjoying-the-campus-life.jpg" // Using image from public folder
//     }
//   ];

//   // Duplicate the speakers array to show 6 speakers as in the image
//   const allSpeakers = [...speakers, ...speakers];

//   return (
//     <div className="speakers-container">
//       <h1 className="speakers-title">SPEAKERS</h1>
//       <div className="speakers-grid">
//         {allSpeakers.map((speaker, index) => (
//           <div key={`${speaker.id}-${index}`} className="speaker-card">
//             {/* Background shape only shows on desktop and tablet */}
//             <div className="background-shape"></div>
//             <div className="speaker-content">
//               <div className="speaker-image">
//                 <img 
//                   src={speaker.image} 
//                   alt={speaker.name}
//                 />
//               </div>
//               <div className="speaker-details">
//                 <h3 className="speaker-name">{speaker.name}</h3>
//                 <p className="speaker-title">{speaker.title}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Speakers;






import React, { useState, useEffect, useRef } from 'react';
import './Speakers.css';

const Speakers = () => {
  const [isVisible, setIsVisible] = useState(false);
  const speakersRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of component is visible
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before fully visible
      }
    );

    if (speakersRef.current) {
      observer.observe(speakersRef.current);
    }

    return () => {
      if (speakersRef.current) {
        observer.unobserve(speakersRef.current);
      }
    };
  }, []);

  const speakers = [
    {
      id: 1,
      name: "ANKUR WARIKOO",
      title: "PERSONAL FINANCE ADVISOR | WRITER",
      image: "https://web.archive.org/web/20240627165030im_/https://eduventures.net.in/wp-content/uploads/2023/09/enjoying-the-campus-life.jpg" // Using image from public folder
    },
    {
      id: 2,
      name: "CK KUMARAVEL",
      title: "CEO OF NATURALS SALON",
      image: "https://web.archive.org/web/20240627165030im_/https://eduventures.net.in/wp-content/uploads/2023/09/enjoying-the-campus-life.jpg" // Using image from public folder
    },
    {
      id: 3,
      name: "JAY KAPOOR",
      title: "CEO OF KALESHWARI GROUP",
      image: "https://web.archive.org/web/20240627165030im_/https://eduventures.net.in/wp-content/uploads/2023/09/enjoying-the-campus-life.jpg" // Using image from public folder
    }
  ];

  // Duplicate the speakers array to show 6 speakers as in the image
  const allSpeakers = [...speakers, ...speakers];

  return (
    <div className={`speakers-container ${isVisible ? 'slide-in' : ''}`} ref={speakersRef}>
      <h1 className="speakers-title">SPEAKERS</h1>
      <div className="speakers-grid">
        {allSpeakers.map((speaker, index) => (
          <div key={`${speaker.id}-${index}`} className="speaker-card">
            {/* Background shape only shows on desktop and tablet */}
            <div className="background-shape"></div>
            <div className="speaker-content">
              <div className="speaker-image">
                <img 
                  src={speaker.image} 
                  alt={speaker.name}
                />
              </div>
              <div className="speaker-details">
                <h3 className="speaker-name">{speaker.name}</h3>
                <p className="speaker-title">{speaker.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Speakers;