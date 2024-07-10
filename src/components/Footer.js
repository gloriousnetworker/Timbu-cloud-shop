import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 88px 20px 55px 20px;
  justify-content: flex-end;
  align-items: center;
  gap: 46px;
  background: #578C85; /* Assuming this color is your var(--Secondary-Secondary700) */

  @media (max-width: 768px) {
    padding: 60px 10px 40px 10px;
    gap: 30px;
  }

  @media (max-width: 480px) {
    padding: 40px 5px 30px 5px;
    gap: 20px;
  }
`;

const SignUpText = styled.h2`
  color: #385F71; /* var(--Primary-Primary) */
  text-align: center;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const EmailSignUpForm = styled.div`
  display: flex;
  width: 532px;
  padding: 16px 12px;
  border-radius: 8px;
  border: 1px solid #E2ECF1; /* var(--Primary-Primary100) */
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    padding: 12px 8px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
    padding: 8px 5px;
  }
`;

const EmailInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  padding: 8px;
  font-size: 12px;

  @media (max-width: 768px) {
    padding: 6px;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 4px;
  }
`;

const SignUpButton = styled.button`
  border-radius: 8px;
  border: 1px solid #E2ECF1; /* var(--Primary-Primary100) */
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  background-color: transparent;
  color: #385F71; /* var(--Primary-Primary) */
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;

  @media (max-width: 768px) {
    padding: 12px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 10px;
    font-size: 14px;
  }
`;

const CopyrightText = styled.p`
  color: #1B2F37; /* var(--Primary-Primary1000) */
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  text-align: center;
  align-self: stretch;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <SignUpText>Sign up for BuyIt News & Special Offers</SignUpText>
      <EmailSignUpForm>
        <EmailInput type="email" placeholder="Enter your email" />
        <SignUpButton>Sign Up</SignUpButton>
      </EmailSignUpForm>
      <CopyrightText>Copyright © 2024 Timbu Cloud Shop Inc. All rights reserved.</CopyrightText>
    </FooterContainer>
  );
};

export default Footer;
