// import React from 'react';
// import styled from 'styled-components';
// import Banner from './Banner';
//  import RecommendedEvents from './RecommendedEvents';
// //import UpcomingEvents from './UpcomingEvents';

// const HomePage = () => {
//   return (
//     <>
//     <OverlayContainer>
//       <Banner />
//       <RecommendedEventsOverlay>
//         <RecommendedEvents />
//       </RecommendedEventsOverlay>
//     </OverlayContainer>
    
//   </>
    
//   );
// };

// const OverlayContainer = styled.div`
//   position: relative;
//   marginBottom:100px;
// `;

// const RecommendedEventsOverlay = styled.div`
//   position: absolute;
//   marginBottom:100px;
//   bottom: 0;
//   top: 74%;
//   left: 0;
//   right: 0;
  
//   padding: 1rem;
//   @media (max-width: 768px) {
   
//   }
// `;


// export default HomePage;

import React from 'react';
import styled from 'styled-components';
import Banner from './Banner';
import RecommendedEvents from './RecommendedEvents';
//import UpcomingEvents from './UpcomingEvents';

const HomePage = () => {
  return (
    <>
      <OverlayContainer>
        <Banner />
        <RecommendedEventsOverlay>
          <RecommendedEvents />
        </RecommendedEventsOverlay>
      </OverlayContainer>
    </>
  );
};

const OverlayContainer = styled.div`
  position: relative;
  margin-bottom: 100px;
`;

const RecommendedEventsOverlay = styled.div`
  position: absolute;
  bottom: 0;
  top: 74%;
  left: 0;
  right: 0;
  padding: 1rem;

  @media (max-width: 768px) {
    top: auto;
    bottom: auto;
    position: relative;
    padding: 0.5rem;
  }
`;

export default HomePage;

