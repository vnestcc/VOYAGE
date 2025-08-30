// import React, { useState } from 'react';
// import './Agenda.css';

// const Agenda = () => {
//   const agendaData = [
//     {
//       day: "12",
//       dayName: "Monday",
//       time: "10:00 AM",
//       title: "Inaugural Ceremony",
//       description: "Inaugural ceremony, officially launching the event with speeches, performances, and the unveiling of the event's theme and objectives.",
//       imageLeft: true
//     },
//     {
//       day: "13",
//       dayName: "Tuesday",
//       time: "10:00 AM",
//       title: "Club Events",
//       description: "Events, where attendees can participate in a variety of activities organized by different student clubs and organizations.",
//       imageLeft: false
//     },
//     {
//       day: "14",
//       dayName: "Wednesday",
//       time: "10:00 AM",
//       title: "Startup Conclave",
//       description: "Features panel discussions, pitch competitions, and mentoring sessions, allowing aspiring entrepreneurs to connect with industry experts, investors, and potential partners",
//       imageLeft: true
//     }
//   ];

//   return (
//     <section className="agenda-section" id="agenda">
//       <div className="agenda-container">
//         <div className="agenda-header">
//           <h2 className="agenda-title">Agenda</h2>
//           <p className="agenda-subtitle">August 2024</p>
//         </div>

//         <div className="agenda-content">
//           {agendaData.map((item, index) => (
//             <div key={index} className="agenda-row">
//               {/* Column 1: Date and Day */}
//               <div className="date-column">
//                 <div className="day-number">{item.day}</div>
//                 <div className="day-name">{item.dayName}</div>
//               </div>
              
//               {/* Column 2: Event Name and Time */}
//               <div className="event-info-column">
//                 <h3 className="event-title">{item.title}</h3>
//                 <div className="event-time">{item.time}</div>
//               </div>
              
//               {/* Columns 3 & 4: Image and Description (alternating) */}
//               {item.imageLeft ? (
//                 <>
//                   <div className="image-column">
//                     <div className="event-image-placeholder"></div>
//                   </div>
//                   <div className="description-column">
//                     <p className="event-description">{item.description}</p>
//                   </div>
//                 </>
//               ) : (
//                 <>
//                   <div className="description-column">
//                     <p className="event-description">{item.description}</p>
//                   </div>
//                   <div className="image-column">
//                     <div className="event-image-placeholder"></div>
//                   </div>
//                 </>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Agenda;












import React, { useEffect, useRef, useState } from 'react';
import './Agenda.css';

const Agenda = () => {
  const [isVisible, setIsVisible] = useState(false);
  const agendaRef = useRef(null);

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

    if (agendaRef.current) {
      observer.observe(agendaRef.current);
    }

    return () => {
      if (agendaRef.current) {
        observer.unobserve(agendaRef.current);
      }
    };
  }, []);

  const agendaData = [
    {
      day: "12",
      dayName: "Monday",
      time: "10:00 AM",
      title: "Inaugural Ceremony",
      description: "Inaugural ceremony, officially launching the event with speeches, performances, and the unveiling of the event's theme and objectives.",
      imageLeft: true
    },
    {
      day: "13",
      dayName: "Tuesday",
      time: "10:00 AM",
      title: "Club Events",
      description: "Events, where attendees can participate in a variety of activities organized by different student clubs and organizations.",
      imageLeft: false
    },
    {
      day: "14",
      dayName: "Wednesday",
      time: "10:00 AM",
      title: "Startup Conclave",
      description: "Features panel discussions, pitch competitions, and mentoring sessions, allowing aspiring entrepreneurs to connect with industry experts, investors, and potential partners",
      imageLeft: true
    }
  ];

  return (
    <section className={`agenda-section ${isVisible ? 'slide-in' : ''}`} id="agenda" ref={agendaRef}>
      <div className="agenda-container">
        <div className="agenda-header">
          <h2 className="agenda-title">Agenda</h2>
          <p className="agenda-subtitle">August 2025</p>
        </div>

        <div className="agenda-content">
          {agendaData.map((item, index) => (
            <div key={index} className="agenda-row">
              {/* Column 1: Date and Day */}
              <div className="date-column">
                <div className="day-number">{item.day}</div>
                <div className="day-name">{item.dayName}</div>
              </div>
              
              {/* Column 2: Event Name and Time */}
              <div className="event-info-column">
                <h3 className="event-title">{item.title}</h3>
                <div className="event-time">{item.time}</div>
              </div>
              
              {/* Columns 3 & 4: Image and Description (alternating) */}
              {item.imageLeft ? (
                <>
                  <div className="image-column">
                    <div className="event-image-placeholder"></div>
                  </div>
                  <div className="description-column">
                    <p className="event-description">{item.description}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="description-column">
                    <p className="event-description">{item.description}</p>
                  </div>
                  <div className="image-column">
                    <div className="event-image-placeholder"></div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Agenda;