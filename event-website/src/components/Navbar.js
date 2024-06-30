import React, { useState } from 'react';
import styled from 'styled-components';
import { LocationPin } from '@styled-icons/entypo/LocationPin';
import { ArrowDropDown } from '@styled-icons/material/ArrowDropDown';

const Navbar = () => {
  const [location, setLocation] = useState('Mumbai, India');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLocationChange = (newLocation) => {
    setLocation(newLocation);
    setDropdownOpen(false);
  };

  return (
    <NavbarContainer>
      <LocationSection onClick={() => setDropdownOpen(!dropdownOpen)}>
        <LocationPinIcon />
        <LocationText>{location}</LocationText>
        <DropdownArrowIcon />
        {dropdownOpen && (
          <DropdownMenu>
            <DropdownItem onClick={() => handleLocationChange('Mumbai, India')}>Mumbai, India</DropdownItem>
            <DropdownItem onClick={() => handleLocationChange('Delhi, India')}>Delhi, India</DropdownItem>
            <DropdownItem onClick={() => handleLocationChange('Bangalore, India')}>Bangalore, India</DropdownItem>
          </DropdownMenu>
        )}
      </LocationSection>
      <NavItems>
        <NavItem>Live Show</NavItem>
        <NavItem>Stream</NavItem>
        <NavItem>Play</NavItem>
        <NavItem>Movies</NavItem>
        <NavItem>Sports</NavItem>
        <NavItem>Event Activities</NavItem>
      </NavItems>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.nav`
  background-color: #ffffff;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-bottom: 1px solid #B0BABF;
`;

const LocationSection = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: 1rem;
  cursor: pointer;
`;

const LocationPinIcon = styled(LocationPin)`
  width: 1rem;
  color: #1E2022;
`;

const LocationText = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: #989090;
  margin-left: 0.5rem;
`;

const DropdownArrowIcon = styled(ArrowDropDown)`
  width: 1rem;
  color: #1E2022;
  margin-left: 0.5rem;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  border: 1px solid #B0BABF;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const DropdownItem = styled.div`
  padding: 0.5rem 1rem;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
  color: #1E2022;
`;

const NavItem = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: #1E2022;
  
  margin: 0 1rem;
  cursor: pointer;
`;

export default Navbar;
