// src/pages/Products.js
import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import styled, { keyframes } from 'styled-components';

const products = [
  {
    name: 'Product 1',
    description: 'Description for product 1',
    image: 'https://picsum.photos/200?random=1',
    price: 29.99,
  },
  {
    name: 'Product 2',
    description: 'Description for product 2',
    image: 'https://picsum.photos/200?random=2',
    price: 39.99,
  },
  {
    name: 'Product 3',
    description: 'Description for product 3',
    image: 'https://picsum.photos/200?random=3',
    price: 49.99,
  },
  {
    name: 'Product 4',
    description: 'Description for product 4',
    image: 'https://picsum.photos/200?random=4',
    price: 19.99,
  },
  {
    name: 'Product 5',
    description: 'Description for product 5',
    image: 'https://picsum.photos/200?random=5',
    price: 24.99,
  },
  {
    name: 'Product 6',
    description: 'Description for product 6',
    image: 'https://picsum.photos/200?random=6',
    price: 34.99,
  },
  {
    name: 'Product 7',
    description: 'Description for product 7',
    image: 'https://picsum.photos/200?random=7',
    price: 44.99,
  },
  {
    name: 'Product 8',
    description: 'Description for product 8',
    image: 'https://picsum.photos/200?random=8',
    price: 54.99,
  },
  // Add more products as needed
];

const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-20px);
  }
`;

const Description = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.2rem;
  opacity: ${props => (props.visible ? 1 : 0)};
  animation: ${props => (props.visible ? fadeIn : fadeOut)} 1s forwards;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const PaginationButton = styled.button`
  background: #333;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  margin: 0 0.25rem;
  cursor: pointer;

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const Products = () => {
  const [showDescription, setShowDescription] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDescription(false);
    }, 5000); // hide after 5 seconds
    return () => clearTimeout(timer);
  }, []);

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Description visible={showDescription}>
        <p>Welcome to our shop! Here you can find a variety of products to suit your needs. Browse through our collection and enjoy shopping!</p>
      </Description>
      <ProductsContainer>
        {currentProducts.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            description={product.description}
            image={product.image}
            price={product.price}
          />
        ))}
      </ProductsContainer>
      <PaginationContainer>
        <PaginationButton
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </PaginationButton>
        {[...Array(Math.ceil(products.length / productsPerPage))].map((_, index) => (
          <PaginationButton
            key={index}
            onClick={() => paginate(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </PaginationButton>
        ))}
        <PaginationButton
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === Math.ceil(products.length / productsPerPage)}
        >
          Next
        </PaginationButton>
      </PaginationContainer>
    </div>
  );
};

export default Products;
