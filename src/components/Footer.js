// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #333;
  color: white;
  padding: 1rem;
  text-align: center;
  width: 100%;
`;

const Footer = () => (
  <FooterContainer>
    <p>&copy; 2024 My Timbu-Cloud-Shop. All rights reserved.</p>
  </FooterContainer>
);

export default Footer;
