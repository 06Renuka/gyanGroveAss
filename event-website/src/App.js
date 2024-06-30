
import './App.css';

import React from 'react';
import Header from './components/Header';
//  import Banner from './components/Banner';
// import RecommendedEvents from './components/RecommendedEvents';
 import UpcomingEvents from './components/UpcomingEvents';
import styled from 'styled-components';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <AppContainer>
      <Header />
      <Navbar/>
      <HomePage/> 
     {/* <Banner />
      <RecommendedEvents /> */}
     <UpcomingEvents />  
      

    </AppContainer>

  );
};

const AppContainer = styled.div`
  background-color: #ffffff;
`;

export default App;
