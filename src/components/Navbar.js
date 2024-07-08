// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const NavbarContainer = styled.nav`
  background: #333;
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
`;

const SearchBar = styled.input`
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-right: 1rem;
  flex-grow: 1;
  max-width: 200px;
`;

const ProfileDescription = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 0.5rem;
`;

const Navbar = () => (
  <NavbarContainer>
    <NavLinks>
      <NavLink to="/">Products</NavLink>
      <NavLink to="/checkout">Checkout</NavLink>
    </NavLinks>
    <RightSection>
      <SearchBar type="text" placeholder="Search..." />
      <NavLink to="/cart">
        <FontAwesomeIcon icon={faShoppingCart} size="lg" />
      </NavLink>
      <ProfileDescription>
        <ProfileImage src="https://via.placeholder.com/40" alt="Profile" />
        <span>John Doe</span>
      </ProfileDescription>
    </RightSection>
  </NavbarContainer>
);

export default Navbar;
