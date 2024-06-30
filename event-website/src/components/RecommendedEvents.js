

import React, { useEffect, useState, useCallback, useRef } from 'react';
import styled from 'styled-components';
import { getRecommendedEvents } from '../services/api';
import { LocationPin } from '@styled-icons/entypo/LocationPin';
import { ArrowRightShort as Rightarrow } from "@styled-icons/bootstrap/ArrowRightShort";

const debounce = (func, delay) => {
  let timer;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
};

const RecommendedEvents = () => {
  const [events, setEvents] = useState([]);
  const [pageNumber, setPageNumber] = useState(1); // Track page number for pagination
  const containerRef = useRef(null); // Reference to scroll container

  const fetchRecommendedEvents = useCallback(async (page) => {
    try {
      const response = await getRecommendedEvents(page);
      console.log('API Response:', response);
      if (response.data && response.data.events) {
        // Append new events to existing list
        setEvents(prevEvents => [...prevEvents, ...response.data.events]);
        setPageNumber(page + 1); // Increment page number for next fetch
      } else {
        console.error('Invalid response structure:', response);
      }
    } catch (error) {
      console.error('Error fetching recommended events:', error);
    }
  }, []);

  // Initial load of recommended events
  useEffect(() => {
    fetchRecommendedEvents(pageNumber); // Fetch initial events on component mount
  }, [fetchRecommendedEvents]);

  // Load more events when user scrolls to the end
   const loadMoreEvents = useCallback(() => {
     fetchRecommendedEvents(pageNumber); // Fetch more events when user scrolls
   }, [fetchRecommendedEvents, pageNumber]);

  // Handle scrolling to load more events
  useEffect(() => {
    const handleScroll = debounce(() => {
      const container = containerRef.current;
      if (!container) return;

      // Check if user has scrolled to the end horizontally
      const isEndOfScroll = container.scrollLeft + container.clientWidth >= container.scrollWidth - 15;

      if (isEndOfScroll) {
         loadMoreEvents();
      }
    }, ); 
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const truncateEventName = (eventName) => {
    const words = eventName.split(' ');
    return words.slice(0, 2).join(' ');
  };

  return (
    <Container>
      <Heading>
        <div>
          Recommended Shows
          <Rightarrow style={{ width: '50px', height: '30px' }} />
          <a style={{ fontSize: '20px', color: 'white' }} href='see'>see all</a>
        </div>
      </Heading>
      <EventList ref={containerRef}>
        {events.map((event, index) => {
          const { imgUrl, cityName, eventName, weather, date, distanceKm } = event;
          const fileIdMatch = imgUrl.match(/\/file\/d\/([^/]+)/);
          const fileId = fileIdMatch ? fileIdMatch[1] : null;
          const directImageUrl = fileId ? `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000` : null;

          return (
            <EventCard key={index}>
              <ImageWrapper>
              <div style={{backgroundRepeat:'no-repeat', backgroundSize:'cover',border:'2px solid black',  margin:'20px'}} >
                {directImageUrl && (
                  <img src={directImageUrl} alt={eventName} />
                )}
                </div>
                <EventDateOverlay>
                <OverlayContent>
                  <div style={{ display: "flex", flexDirection: "column", backgroundColor: "rgba(255, 255, 255, 0.5)"}}>
                    
                    <div style={{ display: "flex", flexDirection: "row", justifyContent:'space-between' }}>
                      <EventName>{truncateEventName(eventName)}</EventName> 
                      <EventDate>{new Date(date).toLocaleDateString()}</EventDate>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent:'space-around'}}>
                      <EventLocation>
                        <LocationPinIcon /> {cityName}
                      </EventLocation>
                      <EventWeather>🌤 {weather}</EventWeather>
                      <Divider>|</Divider>
                      <EventDistance>
                        {typeof distanceKm === "number" ? distanceKm.toFixed(2) : parseFloat(distanceKm).toFixed(2)} km
                      </EventDistance>
                    </div>
                  </div>
                </OverlayContent>
              </EventDateOverlay>

                
              </ImageWrapper>
              
            </EventCard>
          );
        })}
      </EventList>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  @media (max-width: 768px) {
   
  }

  
`;

const Heading = styled.h2`
  color: white;
  font-family: 'Inter', sans-serif;
`;

const EventList = styled.div`
  display: flex;
  overflow-x: auto;
  

 
 
  
  
  /* Hide scrollbar */
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none;  /* Firefox */
  &::-webkit-scrollbar {
    display: none;  /* Safari and Chrome */
  }
`;

const ImageWrapper = styled.div`
  border-radius: 2%;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    
    bottom:20px;
    border: none;
    display: block;
  }
`;

const EventCard = styled.div`
  min-width: 300px;
  position:absolute;

  margin-right: 1rem;
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
  top: 80%;
  font-family: Arial, sans-serif;
  color: #fff;
  width: 90%;
  height: 10%;
  padding: 1rem;
  border-radius: 8px;
  overflow: hidden;
`;

const OverlayContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const EventName = styled.p`
  color: #333;
  font-family: 'Inter', sans-serif;
`;

const EventDate = styled.p`
  color: #555;
  font-family: 'Inter', sans-serif;
`;

const EventLocation = styled.p`
  color: #777;
  font-family: 'Inter', sans-serif;
  display: flex;
  align-items: center;
`;

const EventWeather = styled.p`
  color: #777;
  font-family: 'Inter', sans-serif;
`;

const EventDistance = styled.p`
  color: #777;
  font-family: 'Inter', sans-serif;
`;

const LocationPinIcon = styled(LocationPin)`
  width: 1em;
  margin-right: 0.25em;
`;

const Divider = styled.span`
  margin: 0 0.5rem;
  color: #777;
`;

export default RecommendedEvents;

