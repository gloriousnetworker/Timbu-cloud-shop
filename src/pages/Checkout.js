import React from 'react';
import styled from 'styled-components';

// Import images from the assets folder
import productImage1 from '../assets/product1.png';
import productImage2 from '../assets/product2.png';

const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const Heading = styled.h1`
  color: var(--Primary-Primary1000, #1B2F37);
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  margin-bottom: 20px;
  text-align: left;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const OrderSummary = styled.div`
  width: 100%;
  max-width: 800px;
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

const ProductItem = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #dddddd;
  border-radius: 8px;
  overflow: hidden;
`;

const ProductImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
  padding: 20px;
`;

const ProductImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`;

const ProductName = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #1B2F37;
  margin-bottom: 10px;
`;

const ProductQuantity = styled.span`
  font-size: 14px;
  color: #555555;
  margin-bottom: 10px;
`;

const ProductPrice = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: #1B2F37;
  margin-top: auto;
`;

const Subtotal = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 700;
  padding-top: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
    padding-top: 15px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding-top: 10px;
  }
`;

const CheckoutButton = styled.button`
  width: 100%;
  max-width: 200px;
  padding: 15px;
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
  background-color: var(--Primary-Primary900, #253F4B);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 20px;
  align-self: center;

  @media (max-width: 768px) {
    padding: 12px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 10px;
    font-size: 12px;
  }
`;

const Checkout = () => {
  // Dummy product data for illustration
  const products = [
    { id: 1, name: "Product 1", image: productImage1, quantity: 2, price: 29.99 },
    { id: 2, name: "Product 2", image: productImage2, quantity: 1, price: 49.99 }
  ];

  const subtotal = products.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);

  return (
    <CheckoutContainer>
      <Heading>Check Out</Heading>
      <OrderSummary>
        <ProductList>
          {products.map((product) => (
            <ProductItem key={product.id}>
              <ProductImageContainer>
                <ProductImage src={product.image} alt={product.name} />
              </ProductImageContainer>
              <ProductDetails>
                <ProductName>{product.name}</ProductName>
                <ProductQuantity>Quantity: {product.quantity}</ProductQuantity>
                <ProductPrice>${(product.price * product.quantity).toFixed(2)}</ProductPrice>
              </ProductDetails>
            </ProductItem>
          ))}
        </ProductList>
        <Subtotal>
          <span>Subtotal:</span>
          <span>${subtotal}</span>
        </Subtotal>
        <CheckoutButton>Checkout</CheckoutButton>
      </OrderSummary>
    </CheckoutContainer>
  );
};

export default Checkout;
