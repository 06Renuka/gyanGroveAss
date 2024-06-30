// import React from 'react';
// import styled from 'styled-components';
// import banner from "../assests/banner.svg"

// const Banner = () => {
//   return (
//     <Container>
//       <img src={banner} alt="Banner" />
//       <TextOverlay>
//       <span >Discover Exciting events happening <br/>Near You- Stay Tuned For More Updates! </span>
//       <p>Lorenm Discover Exciting Events Happening near you- stay tuned for more updates!<br/>Lorenm Discover Exciting events happening near you- stay tuned for more updates! </p>

//       </TextOverlay>
      
//     </Container>
//   );
// };

// const Container = styled.div`
//   width: 100%;
//   text-align: center;
//   position: relative;


//   img {
//     width: 100%;
//     height: auto;
    
//   }
//   &:after {
//     content: '';
//     position: absolute;
  
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: rgba(0, 0, 0, 0.5); 
//   }
// `;
// const TextOverlay = styled.div`
//   position: absolute;
//   width:100%;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   color: white;
//   z-index: 1;

//   span {
//     font-size: 4rem;
//     margin: 0;
//   }

//   p {
//     font-size: 1rem;
//     margin: 0;
//   }
// `;

// export default Banner;

import React from 'react';
import styled from 'styled-components';
import banner from "../assests/banner.svg"

const Banner = () => {
  return (
    <Container>
      <img src={banner} alt="Banner" />
      <TextOverlay>
        <span>Discover Exciting Events Happening <br/>Near You - Stay Tuned For More Updates!</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra est non nisi laoreet, ac feugiat lectus sagittis.</p>
      </TextOverlay>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  text-align: center;
  position: relative;

  img {
    width: 100%;
    height: auto;
  }

  &:after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
`;

const TextOverlay = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  z-index: 1;
  text-align: center;

  span {
    font-size: 4rem;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
  }

  p {
    font-size: 1rem;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 0.875rem;
    }

    @media (max-width: 480px) {
      font-size: 0.75rem;
    }
  }
`;

export default Banner;

