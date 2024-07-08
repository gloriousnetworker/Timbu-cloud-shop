// src/components/ProductCard.js
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 4px;
  margin: 1rem;
  padding: 1rem;
  text-align: left;
  flex: 1 1 calc(25% - 2rem);
  box-sizing: border-box;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 4px;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin: 0.5rem 0;
`;

const Description = styled.p`
  margin: 0.5rem 0;
  flex: 1;
`;

const Price = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  color: #000;
  text-align: right;
`;

const Rating = styled.div`
  display: flex;
  margin-top: 0.5rem;
`;

const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProductCard = ({ name, description, image, price }) => (
  <Card>
    <Image src={image} alt={name} />
    <Title>{name}</Title>
    <Description>{description}</Description>
    <ProductInfo>
      <Rating>
        {[...Array(5)].map((_, index) => (
          <FontAwesomeIcon key={index} icon={faStar} color="#FFD700" />
        ))}
      </Rating>
      <Price>${price}</Price>
    </ProductInfo>
  </Card>
);

export default ProductCard;
