import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';
import { CartContext } from '../contexts/CartContext';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 502px;
  border: 1px solid #ddd;
  padding: 1rem;
  text-align: left;
  background-color: var(--Primary-Primary600, #C6DAE3);
  border-radius: 10px;
`;

const ProductImage = styled.img`
  display: flex;
  height: 388px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  align-self: stretch;
  cursor: pointer;
`;

const ProductName = styled.h2`
  color: var(--Primary-Primary1000, #1B2F37);
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: #EDA145;
  margin: 8px 0;
`;

const PriceSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: auto;
`;

const Price = styled.div`
  color: var(--Primary-Primary1000, #1B2F37);
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
`;

const OldPrice = styled.div`
  color: var(--Primary-Primary600, #548FAA);
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  text-decoration: line-through;
  margin-top: 4px;
`;

const ProductCard = ({ name, image, price, rating, oldPrice }) => {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const handleImageClick = () => {
    const product = { name, image, price, rating, oldPrice };
    addToCart(product);
    navigate('/cart'); // Navigate to the cart page
  };

  return (
    <Card className="product-card">
      <ProductImage src={image} alt={name} onClick={handleImageClick} />
      <ProductName>{name}</ProductName>
      <Rating>
        <FaStar /> {rating}
      </Rating>
      <PriceSection>
        <Price>${price.toFixed(2)}</Price>
        {oldPrice && <OldPrice>${oldPrice.toFixed(2)}</OldPrice>}
      </PriceSection>
    </Card>
  );
};

export default ProductCard;
