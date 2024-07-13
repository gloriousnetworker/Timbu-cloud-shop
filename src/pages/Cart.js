// Cart.js
import React, { useContext } from 'react';
import './Cart.css';
import { CartContext } from '../contexts/CartContext';

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-page">
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((cartItem) => (
            <div key={cartItem.id} className="cart-item-row">
              <div className="cart-item-card product-card">
                <img src={cartItem.image} alt={cartItem.name} className="product-image" />
              </div>
              <div className="cart-item-card description-card">
                <div className="description-content">
                  <h2 className="product-name">{cartItem.name}</h2>
                  <p className="product-price">{cartItem.price}</p>
                  <p className="product-quantity">Quantity: {cartItem.quantity}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="product-description">
        <p className="description-title">Description</p>
        <p className="description-text">
          {/* Your description text here */}
        </p>
      </div>
    </div>
  );
};

export default Cart;
