import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductsStyles.css';
import ProductCard from '../components/ProductCard';
import { CartContext } from '../contexts/CartContext';
import { getProducts } from '../services/TimbuAPI';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const productsPerPage = 10;
  const imageBaseUrl = 'https://api.timbu.cloud/images/hng-1/';

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getProducts(currentPage, productsPerPage);
      console.log('Fetched products:', data); // Log fetched data
      if (data.items && data.items.length > 0) {
        const productsWithImages = data.items.map(product => ({
          ...product,
          image: product.photos.length ? `${imageBaseUrl}${product.photos[0].url}` : '',
        }));
        setProducts(productsWithImages);
      } else {
        setProducts([]);
        setError('No products found.');
      }
    } catch (error) {
      console.error('Error fetching products:', error);
      setError('Failed to fetch products. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleProductClick = (product) => {
    const selectedProduct = {
      id: product.id,
      image: product.image,
      name: product.name,
      price: product.selling_price || 29.99,
      rating: 4.5,
      oldPrice: product.discounted_price || 39.99,
    };

    addToCart(selectedProduct);
    navigate('/cart');
  };

  return (
    <div className="product-page">
      <div className="new-arrival-section">
        <h2 className="new-arrival-heading">New Arrival</h2>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div className="product-cards-container">
            {products.length > 0 ? (
              products.map((product) => (
                <div key={product.id} onClick={() => handleProductClick(product)}>
                  <ProductCard
                    image={product.image}
                    name={product.name}
                    price={product.selling_price || 29.99}
                    rating={4.5}
                    oldPrice={product.discounted_price || 39.99}
                  />
                </div>
              ))
            ) : (
              <p>No products available.</p>
            )}
          </div>
        )}
        <div className="pagination">
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
            &lt; Prev
          </button>
          <span>Page {currentPage}</span>
          <button onClick={handleNextPage}>Next &gt;</button>
        </div>
      </div>
    </div>
  );
};

export default Products;
