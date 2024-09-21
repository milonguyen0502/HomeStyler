import React, { useState } from 'react';
import '../css/Cart.css';

function Cart({ cart, handleDelete }) {
  const [isCheckout, setIsCheckout] = useState(false); 

  const totalPrice = cart.reduce((total, product) => {
    const price = parseFloat(product.price) || 0;
    return total + (price * product.quantity);
  }, 0); 

  const handleCheckout = () => {
    setIsCheckout(true); 
    setTimeout(() => {
      window.location.reload(); 
    }, 3000); 
  };

  return (
    <div className="cart-page">
      <h1>WishList</h1>
      {isCheckout ? ( 
        <p className="success-message">Order Successfully!</p>
      ) : cart.length === 0 ? (
        <p className="text-center">Your wishlist is empty</p>
      ) : (
        <div className="cart-container">
          <div className="cart-items">
            {cart.map((product, index) => {
              const price = parseFloat(product.price);
              const total = price * product.quantity;
              return (
                <div key={index} className="cart-item">
                  <img src={product.image} alt="Product" width="200px" height="200px" />
                  <div className="cart-item-details">
                    <h3>{product.name}</h3>
                    <p className="sku">SKU: {product.sku}</p>
                    <p className="final-sale">Final Sale</p>
                    <div className="shipping-info">
                      <i className="fa fa-truck" aria-hidden="true"></i>
                      <p>This item is eligible for international shipping.</p>
                    </div>
                    <p>Qty: {product.quantity}</p>
                    <p className="price">Price per item: {product.price} USD</p>
                    <p className="price">Total: {(product.price * product.quantity)} USD</p>
                    <button className="delete-btn" onClick={() => handleDelete(index)}>
                      <i className="fa fa-times" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="cart-summary">
            <h2>Order Summary</h2>
            <div className="summary-item">
              <span>Subtotal ({cart.reduce((total, product) => total + product.quantity, 0)} item{cart.length > 1 ? 's' : ''})</span>
              <span>{totalPrice.toFixed(2)} USD</span>
            </div>
            <div className="summary-item">
              <span>Shipping</span>
              <span>-</span>
            </div>
            <div className="summary-item">
              <span>Taxes</span>
              <span>-</span>
            </div>
            <div className="summary-item total">
              <span>Total</span>
              <span>{totalPrice.toFixed(2)} USD</span>
            </div>
            <button className="btn-order" onClick={handleCheckout}>Log in to Checkout</button> {/* Gọi hàm handleCheckout */}
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
