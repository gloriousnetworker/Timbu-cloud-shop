import React from 'react';
import './ProductsStyles.css';
import bannerImage from '../assets/banner0.png';
import bannerImage1 from '../assets/banner1.png';
import productImage0 from '../assets/product1.png';
import productImage1 from '../assets/product01.png';
import productImage2 from '../assets/product02.png';
import productImage3 from '../assets/product03.png';
import productImage4 from '../assets/product04.png';
import productImage5 from '../assets/product05.png';
import productImage6 from '../assets/product06.png';
import productImage7 from '../assets/product07.png';
import productImage8 from '../assets/product08.png';
import productImage9 from '../assets/product09.png';
import productImage10 from '../assets/product10.png';
import productImage11 from '../assets/product11.png';
import productImage12 from '../assets/product12.png';
import productImage13 from '../assets/product13.png';
import productImage14 from '../assets/product14.png';
import productImage15 from '../assets/product15.png';
import ProductCard from '../components/ProductCard';

const Products = () => {
  return (
    <div className="product-page">
      <div className="banner">
        <div className="banner-images">
          <img src={bannerImage1} alt="Advertisement 1" className="banner-image" />
          <img src={bannerImage} alt="Advertisement 2" className="banner-image" />
        </div>
        <div className="banner-text">
          <h1 className="banner-heading">Destination for sophisticated and stylish clothing.</h1>
          <p className="banner-subtext">
            Experience exceptional customer service and seamless shopping as you <br></br>discover the perfect pieces to express your elegance and confidence.<br></br> Shop now and transform your fashion journey with BuyIt.
          </p>
        </div>
      </div>

      <div className="product-banner-section">
        <div className="product-banner-card">
          <img src={productImage0} alt="Product 1" className="product-banner-image" />
          <div className="product-banner-description">
            <h2 className="product-banner-heading">Men’s Solid Polo Shirt</h2>
            <h3 className="product-banner-subheading">Product details</h3>
            <p className="product-banner-text">
              The Classic Men's Polo Shirt is more than just a wardrobe staple; it's a statement of style and sophistication. With its superior fabric, impeccable design, and wide range of colors, it promises to elevate your fashion game while providing the utmost comfort.
            </p>
          </div>
        </div>
      </div>

      <div className="new-arrival-section">
        <h2 className="new-arrival-heading">New Arrival</h2>
        <div className="product-cards-container">
          <ProductCard 
            image={productImage1} 
            name="Men’s Cotton Casuals Short Sleeved Round Neck T-Shirt" 
            price={29.99} 
            rating={4.5}
            oldPrice={39.99}
          />
          <ProductCard 
            image={productImage2} 
            name="Women’s Summer Casual Sleeveless Dress" 
            price={49.99} 
            rating={4.8}
            oldPrice={59.99}
          />
          <ProductCard 
            image={productImage3} 
            name="Unisex Hooded Sweatshirt" 
            price={39.99} 
            rating={4.7}
            oldPrice={49.99}
          />
          <ProductCard 
            image={productImage4} 
            name="Product Name 4" 
            price={19.99} 
            rating={4.2}
            oldPrice={29.99}
          />
          <ProductCard 
            image={productImage5} 
            name="Product Name 5" 
            price={39.99} 
            rating={4.6}
            oldPrice={49.99}
          />
          <ProductCard 
            image={productImage6} 
            name="Product Name 6" 
            price={24.99} 
            rating={4.4}
            oldPrice={34.99}
          />
          <ProductCard 
            image={productImage7} 
            name="Product Name 7" 
            price={29.99} 
            rating={4.5}
            oldPrice={39.99}
          />
          <ProductCard 
            image={productImage8} 
            name="Product Name 8" 
            price={49.99} 
            rating={4.8}
            oldPrice={59.99}
          />
          <ProductCard 
            image={productImage9} 
            name="Product Name 9" 
            price={39.99} 
            rating={4.7}
            oldPrice={49.99}
          />
          <ProductCard 
            image={productImage10} 
            name="Product Name 10" 
            price={19.99} 
            rating={4.2}
            oldPrice={29.99}
          />
          <ProductCard 
            image={productImage11} 
            name="Product Name 11" 
            price={39.99} 
            rating={4.6}
            oldPrice={49.99}
          />
          <ProductCard 
            image={productImage12} 
            name="Product Name 12" 
            price={24.99} 
            rating={4.4}
            oldPrice={34.99}
          />
          <ProductCard 
            image={productImage13} 
            name="Product Name 13" 
            price={29.99} 
            rating={4.5}
            oldPrice={39.99}
          />
          <ProductCard 
            image={productImage14} 
            name="Product Name 14" 
            price={49.99} 
            rating={4.8}
            oldPrice={59.99}
          />
          <ProductCard 
            image={productImage15} 
            name="Product Name 15" 
            price={39.99} 
            rating={4.7}
            oldPrice={49.99}
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
