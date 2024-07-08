// src/pages/Checkout.js
import React from 'react';
import styled from 'styled-components';

const CheckoutContainer = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const ProductImage = styled.img`
  max-width: 100%;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

const ProductDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
`;

const CheckoutButton = styled.button`
  background-color: #333;
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  font-size: 1rem;

  &:hover {
    background-color: #555;
  }
`;

const CheckoutPage = () => {
  // Example product data (replace with your actual product data)
  const product = {
    name: 'Product Name',
    image: 'https://picsum.photos/200',
    price: 29.99,
    quantity: 1, // Assuming quantity 1 for single item checkout
  };

  return (
    <CheckoutContainer>
      <h2>Checkout</h2>
      <ProductImage src={product.image} alt={product.name} />
      <ProductDetails>
        <div>
          <p>{product.name}</p>
          <p>Quantity: {product.quantity}</p>
        </div>
        <p>${product.price.toFixed(2)}</p>
      </ProductDetails>
      <p>Total: ${product.price.toFixed(2)}</p>
      <CheckoutButton>Proceed to Payment</CheckoutButton>
    </CheckoutContainer>
  );
};

export default CheckoutPage;
