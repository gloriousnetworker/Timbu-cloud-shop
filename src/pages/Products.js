// Products.js
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductsStyles.css';
import ProductCard from '../components/ProductCard';
import { CartContext } from '../contexts/CartContext';

// Replace with your actual product images
const productImages = [
  require('../assets/product01.png'),
  require('../assets/product02.png'),
  require('../assets/product03.png'),
  require('../assets/product04.png'),
  require('../assets/product05.png'),
  require('../assets/product06.png'),
  require('../assets/product07.png'),
  require('../assets/product08.png'),
  require('../assets/product09.png'),
  require('../assets/product10.png'),
  require('../assets/product11.png'),
  require('../assets/product12.png'),
  require('../assets/product13.png'),
  require('../assets/product14.png'),
  require('../assets/product15.png'),
];

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productImages.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(productImages.length / productsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleProductClick = (index) => {
    const selectedProduct = {
      id: index + 1, // Example: Use an appropriate unique identifier
      image: productImages[index],
      name: `Product Name ${index + 1}`,
      price: 29.99, // Example: Replace with actual product price
      rating: 4.5, // Example: Replace with actual product rating
      oldPrice: 39.99, // Example: Replace with actual old price
    };

    addToCart(selectedProduct);
    navigate('/cart');
  };

  return (
    <div className="product-page">
      {/* Your existing JSX */}
      <div className="new-arrival-section">
        <h2 className="new-arrival-heading">New Arrival</h2>
        <div className="product-cards-container">
          {currentProducts.map((image, index) => (
            <div key={index} onClick={() => handleProductClick(index)}>
              <ProductCard
                image={image}
                name={`Product Name ${index + 1}`}
                price={29.99}
                rating={4.5}
                oldPrice={39.99}
              />
            </div>
          ))}
        </div>
        <div className="pagination">
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
            &lt; Prev
          </button>
          <span>Page {currentPage} of {totalPages}</span>
          <button onClick={handleNextPage} disabled={currentPage === totalPages}>
            Next &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
