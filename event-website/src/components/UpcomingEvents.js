// import React, { useEffect, useState, useRef, useCallback } from 'react';
// import styled from 'styled-components';
// import { getUpcomingEvents } from '../services/api';
// import { LocationPin } from '@styled-icons/entypo/LocationPin';
// //import {DividerShort as Divider} from '@styled-icons/fluentui-system-filled/DividerShort'
// import { ArrowRightShort as Rightarrow } from "@styled-icons/bootstrap/ArrowRightShort";

// const UpcomingEvents = () => {
//   const [events, setEvents] = useState([]);
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const observer = useRef();

//   const lastEventElementRef = useCallback(node => {
//     if (loading) return;
//     if (observer.current) observer.current.disconnect();
//     observer.current = new IntersectionObserver(entries => {
//       if (entries[0].isIntersecting) {
//         setPage(prevPage => prevPage + 1);
//       }
//     });
//     if (node) observer.current.observe(node);
//   }, [loading]);

//   useEffect(() => {
//     setLoading(true);
//     getUpcomingEvents(page)
//       .then(response => {
//         setEvents(prevEvents => [...prevEvents, ...response.data.events]);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error('Error fetching upcoming events:', error);
//         setLoading(false);
//       });
//   }, [page]);

//   return (
//     <Container>
//       <Heading>Upcoming Events<Rightarrow style={{ width: '50px', height: '30px' }} /></Heading>
//       <EventList>
//         {events.map((event, index) => {
//           const { imgUrl, cityName, eventName, weather, date, distanceKm } = event;
//           const fileIdMatch = imgUrl.match(/\/file\/d\/([^/]+)/);
//           const fileId = fileIdMatch ? fileIdMatch[1] : null;
//           const directImageUrl = fileId ? `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000` : null;

//           if (events.length === index + 1) {
//             return (
//               <EventCard ref={lastEventElementRef} key={event.eventName}>
//                 {directImageUrl && (
//                   <img src={directImageUrl} alt={eventName} />
//                 )}
//                 <EventDate>{new Date(date).toLocaleDateString()}</EventDate>
//                 <EventDetails>
//                   <div style={{ display: "flex", flexDirection: "column", backgroundColor: "rgba(255, 255, 255, 0.5)", padding: "1rem" }}>
//                     <div style={{ display: "flex", flexDirection: "row", marginBottom: "0.5rem" }}>
//                       <EventName>{eventName}</EventName>
//                       <EventDate>{new Date(date).toLocaleDateString()}</EventDate>
//                     </div>
//                     <div style={{ display: "flex", flexDirection: "row" }}>
//                       <EventLocation>
//                         <LocationPinIcon /> {cityName}
//                       </EventLocation>
//                       <EventWeather>🌤 {weather}</EventWeather>
//                       {/* <Divider>|</Divider> */}
//                       <EventDistance>{typeof distanceKm === 'number' ? distanceKm.toFixed(2) : distanceKm} km</EventDistance>
//                     </div>
//                   </div>

//                 </EventDetails>
//               </EventCard>
//             );
//           } else {
//             return (
//               <EventCard key={event.eventName}>
//                 {directImageUrl && (
//                   <img src={directImageUrl} alt={eventName} />
//                 )}
//                 <EventDetails>
//                   <div style={{ display: "flex", flexDirection: "column", backgroundColor: "rgba(255, 255, 255, 0.5)", padding: "1rem" }}>
//                     <div style={{ display: "flex", flexDirection: "row", marginBottom: "0.5rem" }}>
//                       <EventName>{eventName}</EventName>
//                       <EventDate>{new Date(date).toLocaleDateString()}</EventDate>
//                     </div>
//                     <div style={{ display: "flex", flexDirection: "row" }}>
//                       <EventCity>
//                         <LocationPinIcon /> {cityName}
//                       </EventCity>
//                       <EventWeather>🌤 {weather}</EventWeather>
//                       {/* <Divider style={{width:"20px", height:'20px'}}>|</Divider> */}

//                       <EventDistance>{typeof distanceKm === 'number' ? distanceKm.toFixed(2) : distanceKm} km</EventDistance>
//                     </div>
//                   </div>
//                   {/* <EventName>{eventName}</EventName>
//                   <EventCity>{cityName}</EventCity>
//                   <EventDate>{new Date(date).toLocaleDateString()}</EventDate>
//                   <EventWeather>{weather}</EventWeather>
//                   <EventDistance>{distanceKm} km away</EventDistance> */}
//                 </EventDetails>
//               </EventCard>
//             );
//           }
//         })}
//       </EventList>
//       {loading && <LoadingSpinner>Loading...</LoadingSpinner>}
//     </Container>
//   );
// };

// const Container = styled.div`
//   padding: 1rem;
// `;

// const Heading = styled.h2`
//   color: #1E2022;
//   font-family: 'Inter', sans-serif;
// `;

// const EventList = styled.div`
//   display: flex;
//   flex-wrap: wrap;
// `;

// const EventCard = styled.div`
//   flex: 1 0 30%;
//   margin: 1rem;
//   border: 1px solid #B0BABF;
//   padding: 1rem;
//   border-radius: 8px;
//   box-sizing: border-box;

//   img {
//     width: 100%;
//     height: auto;
//     margin-bottom: 1rem;
//   }
// `;

// // const EventDetails = styled.div`
// //   display: flex;
// //   flex-direction: column;
// // `;

// // const EventName = styled.h3`
// //   color: #1E2022;
// //   font-family: 'Inter', sans-serif;
// // `;

// const EventCity = styled.p`
//   color: #989090;
//   font-family: 'Inter', sans-serif;
// `;

//  const EventDate = styled.p`
//    color: #989090;
//    font-family: 'Inter', sans-serif;
//  `
//  const EventWeather = styled.p`
//    color: #989090;
//    font-family: 'Inter', sans-serif;
//  `
//  const EventDistance = styled.p`
//    color: #989090;
//    font-family: 'Inter', sans-serif;
//  `
// const LoadingSpinner = styled.div`
//   text-align: center;
//   margin-top: 1rem;
// `;
// const EventDetails = styled.div`
//   position: absolute;
//   bottom: 0;
//   left: 0;
//   right: 0;
// `;

// const EventName = styled.p`
//   color: #333;
//   font-family: 'Inter', sans-serif;
// `;

// // const EventDate = styled.p`
// //   color: #555;
// //   font-family: 'Inter', sans-serif;
// // `;

// const EventLocation = styled.p`
//   color: #777;
//   font-family: 'Inter', sans-serif;
//   display: flex;
//   align-items: center;
// `;

// // const EventWeather = styled.p`
// //   color: #777;
// //   font-family: 'Inter', sans-serif;
// // `;

// // const EventDistance = styled.p`
// //   color: #777;
// //   font-family: 'Inter', sans-serif;
// // `;

// const LocationPinIcon = styled(LocationPin)`
//   width: 1em;
//   margin-right: 0.25em;
// `;

// export default UpcomingEvents;

// import React, { useEffect, useState, useRef, useCallback } from "react";
// import styled from "styled-components";
// import { getUpcomingEvents } from "../services/api";
// import { LocationPin } from "@styled-icons/entypo/LocationPin";
// import { ArrowRightShort as Rightarrow } from "@styled-icons/bootstrap/ArrowRightShort";

// const UpcomingEvents = () => {
//   const [events, setEvents] = useState([]);
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const observer = useRef();

//   const lastEventElementRef = useCallback(
//     (node) => {
//       if (loading) return;
//       if (observer.current) observer.current.disconnect();
//       observer.current = new IntersectionObserver((entries) => {
//         if (entries[0].isIntersecting) {
//           setPage((prevPage) => prevPage + 1);
//         }
//       });
//       if (node) observer.current.observe(node);
//     },
//     [loading]
//   );

//   useEffect(() => {
//     setLoading(true);
//     getUpcomingEvents(page)
//       .then((response) => {
//         setEvents((prevEvents) => [...prevEvents, ...response.data.events]);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching upcoming events:", error);
//         setLoading(false);
//       });
//   }, [page]);

//   return (
//     <Container style={{marginTop:'300px' }}>
//       <Heading>
//         Upcoming Events
//         <Rightarrow style={{ width: "50px", height: "30px" }} />
//       </Heading>
//       <EventList>
//         {events.map((event, index) => {
//           const { imgUrl, cityName, eventName, weather, date, distanceKm } =
//             event;
//           const fileIdMatch = imgUrl.match(/\/file\/d\/([^/]+)/);
//           const fileId = fileIdMatch ? fileIdMatch[1] : null;
//           const directImageUrl = fileId
//             ? `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`
//             : null;

//           return (
//             <EventCard
//               key={event.eventName}
//               ref={index === events.length - 1 ? lastEventElementRef : null}
//             >
//               <EventImageContainer
//                 style={{ backgroundImage: `url(${directImageUrl})` }}
//               >
//                 <EventDateOverlay>
//                   <EventDateText>
//                     {new Date(date).toLocaleDateString()}
//                   </EventDateText>
//                 </EventDateOverlay>
//               </EventImageContainer>
//               <EventDetails>
//                 <div
//                   style={{
//                     display: "flex",
//                     flexDirection: "column",
//                     backgroundColor: "rgba(255, 255, 255, 0.5)",
//                     padding: "1px",
//                   }}
//                 >
//                   <div
//                     style={{
//                       display: "flex",
//                       flexDirection: "row",
//                       marginBottom: "2px",
//                     }}
//                   >
//                     <EventName>{eventName}</EventName>
//                   </div>
//                   <div style={{ display: "flex", flexDirection: "row" }}>
//                     <EventLocation>
//                       <LocationPinIcon /> {cityName}
//                     </EventLocation>
//                     <EventWeather>🌤 {weather}</EventWeather>
//                     <p>|</p>
//                     <EventDistance>
//                       {typeof distanceKm === "number"
//                         ? distanceKm.toFixed(2)
//                         : parseFloat(distanceKm).toFixed(2)}{" "}
//                       km
//                     </EventDistance>

//                     {/* <EventDistance>{typeof distanceKm === 'number' ? distanceKm.toFixed(2) : distanceKm} km</EventDistance> */}
//                   </div>
//                 </div>
//               </EventDetails>
//             </EventCard>
//           );
//         })}
//       </EventList>
//       {loading && <LoadingSpinner>Loading...</LoadingSpinner>}
//     </Container>
//   );
// };

// const Container = styled.div`
//   padding: 1rem;
  
  
  
// `;

// const Heading = styled.h2`
//   color: #1e2022;
//   font-family: "Inter", sans-serif;
// `;

// const EventList = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center; /* Center items horizontally */
//   width: 80%; /* Full width */
// `;

// const EventCard = styled.div`
//   flex: 1 0 30%;
//   margin: 1rem;
//   border: 1px solid #b0babf;
//   border-radius: 8px;
//   overflow: hidden;

//   padding: 1rem;

//   box-sizing: border-box;
// `;

// const EventImageContainer = styled.div`
//   width: 100%;
//   height: 200px; /* Adjust height as needed */
//   background-size: cover;
//   background-position: center;
//   position: relative;
// `;

// // const EventDetails = styled.div`
// //   position: absolute;

// //   ${'' /* bottom: 0; */}
// //   top:0;
// //   ${'' /* left: 0;
// //   right: 0;  */}
// //   background-color: rgba(255, 255, 255, 0.8); /* Adjust transparency as needed */
// //   padding: 1rem;
// // `;
// const EventDateOverlay = styled.div`
//   position: absolute;
//   z-index: 999;
//   margin: 0 auto;
//   left: 0;
//   right: 0;
//   text-align: center;
//   align-items: center;
//   justify-content: center;
//   top: 85%;

//   background-color: rgba(255, 255, 255, 0.8);
//   font-family: Arial, sans-serif;
//   color: #fff;
//   width: 100%;
//   height: 15%;
// `;

// const EventDateText = styled.p`
//   margin: 0;
//   font-size: 1.5rem; /* Adjust the font size as needed */
// `;
// const EventDetails = styled.div``;

// //  const EventDate = styled.p`
// //    color: #555;
// //    font-family: 'Inter', sans-serif;
// //    margin-bottom: 0;
// //    z-index: 999;
// //  `;

// const EventName = styled.h3`
//   color: #1e2022;
//   font-family: "Inter", sans-serif;
//   margin-bottom: 0.5rem;
// `;

// //  const EventDate = styled.p`
// //    color: #555;
// //    font-family: 'Inter', sans-serif;
// //    margin-bottom: 0.5rem;
// //  `;

// const EventLocation = styled.p`
//   color: #777;
//   font-family: "Inter", sans-serif;
//   display: flex;
//   align-items: center;
//   margin-bottom: 0.5rem;
// `;

// const EventWeather = styled.p`
//   color: #777;
//   font-family: "Inter", sans-serif;
//   margin-bottom: 0.5rem;
// `;

// const EventDistance = styled.p`
//   color: #777;
//   font-family: "Inter", sans-serif;
// `;

// const LoadingSpinner = styled.div`
//   text-align: center;
//   margin-top: 1rem;
// `;

// const LocationPinIcon = styled(LocationPin)`
//   width: 1em;
//   margin-right: 0.25em;
// `;

// export default UpcomingEvents;

import React, { useEffect, useState, useRef, useCallback } from "react";
import styled from "styled-components";
import { getUpcomingEvents } from "../services/api";
import { LocationPin } from "@styled-icons/entypo/LocationPin";
import { ArrowRightShort as Rightarrow } from "@styled-icons/bootstrap/ArrowRightShort";

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const observer = useRef();

  const lastEventElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading]
  );

  useEffect(() => {
    setLoading(true);
    getUpcomingEvents(page)
      .then((response) => {
        setEvents((prevEvents) => [...prevEvents, ...response.data.events]);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching upcoming events:", error);
        setLoading(false);
      });
  }, [page]);

  return (
    <Container>
      <Heading>
        Upcoming Events
        <Rightarrow style={{ width: "50px", height: "30px" }} />
      </Heading>
      <EventList>
        {events.map((event, index) => {
          const { imgUrl, cityName, eventName, weather, date, distanceKm } =
            event;
          const fileIdMatch = imgUrl.match(/\/file\/d\/([^/]+)/);
          const fileId = fileIdMatch ? fileIdMatch[1] : null;
          const directImageUrl = fileId
            ? `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`
            : null;

          return (
            <EventCard
              key={event.eventName}
              ref={index === events.length - 1 ? lastEventElementRef : null}
            >
              <EventImageContainer
                style={{ backgroundImage: `url(${directImageUrl})` }}
              >
                <EventDateOverlay>
                  <EventDateText>
                    {new Date(date).toLocaleDateString()}
                  </EventDateText>
                </EventDateOverlay>
              </EventImageContainer>
              <EventDetails>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                    padding: "1px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginBottom: "2px",
                    }}
                  >
                    <EventName>{eventName}</EventName>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <EventLocation>
                      <LocationPinIcon /> {cityName}
                    </EventLocation>
                    <EventWeather>🌤 {weather}</EventWeather>
                    <p>|</p>
                    <EventDistance>
                      {typeof distanceKm === "number"
                        ? distanceKm.toFixed(2)
                        : parseFloat(distanceKm).toFixed(2)}{" "}
                      km
                    </EventDistance>
                  </div>
                </div>
              </EventDetails>
            </EventCard>
          );
        })}
      </EventList>
      {loading && <LoadingSpinner>Loading...</LoadingSpinner>}
    </Container>
  );
};

const Container = styled.div`
  padding: 1rem;
  margin-top: 300px;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
  
`;

const Heading = styled.h2`
  color: #1e2022;
  font-family: "Inter", sans-serif;
`;

const EventList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Center items horizontally */
  width: 100%; /* Full width */
`;

const EventCard = styled.div`
  flex: 1 0 30%;
  margin: 1rem;
  border: 1px solid #b0babf;
  border-radius: 8px;
  overflow: hidden;
  padding: 1rem;
  box-sizing: border-box;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    flex-basis: 100%; /* Full width on smaller screens */
  }
`;

const EventImageContainer = styled.div`
  width: 100%;
  height: 200px; /* Adjust height as needed */
  background-size: cover;
  background-position: center;
  position: relative;
`;

const EventDateOverlay = styled.div`
  position: absolute;
  z-index: 999;
  margin: 0 auto;
  left: 0;
  right: 0;
  text-align: center;
  align-items: center;
  justify-content: center;
  top: 85%;
  background-color: rgba(255, 255, 255, 0.8);
  font-family: Arial, sans-serif;
  color: #fff;
  width: 100%;
  height: 15%;
`;

const EventDateText = styled.p`
  margin: 0;
  font-size: 1.5rem; /* Adjust the font size as needed */
`;

const EventDetails = styled.div``;

const EventName = styled.h3`
  color: #1e2022;
  font-family: "Inter", sans-serif;
  margin-bottom: 0.5rem;
`;

const EventLocation = styled.p`
  color: #777;
  font-family: "Inter", sans-serif;
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const EventWeather = styled.p`
  color: #777;
  font-family: "Inter", sans-serif;
  margin-bottom: 0.5rem;
`;

const EventDistance = styled.p`
  color: #777;
  font-family: "Inter", sans-serif;
`;

const LoadingSpinner = styled.div`
  text-align: center;
  margin-top: 1rem;
`;

const LocationPinIcon = styled(LocationPin)`
  width: 1em;
  margin-right: 0.25em;
`;

export default UpcomingEvents;

