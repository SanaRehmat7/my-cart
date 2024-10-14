import React from 'react';
import PropTypes from 'prop-types';
// Import custom CSS for styling
import './Product.css'; 

export default function Product({ product, index, incrementQuantity, decrementQuantity, removeItem }) {
  return (
    <div className="product-card shadow-sm p-4 mb-4 rounded">
      <div className="row align-items-center">
        
        {/* Product Name & Price */}
        <div className="col-md-5">
          <h2 className="product-name">
            {product.name}
            <span className="badge product-price ms-3">₹{product.price}</span>
          </h2>
        </div>

        {/* Quantity Controls */}
        <div className="col-md-3">
          <div className="btn-group" role="group" aria-label="Quantity Controls">
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => decrementQuantity(index)}
              disabled={product.quantity === 0}
            >
              -
            </button>
            <button type="button" className="btn btn-warning">
              {product.quantity}
            </button>
            <button
              type="button"
              className="btn btn-success"
              onClick={() => incrementQuantity(index)}
            >
              +
            </button>
          </div>
        </div>

        {/* Total Price */}
        <div className="col-md-2 text-center">
          <h5 className="total-price">₹{product.quantity * product.price}</h5>
        </div>

        {/* Remove Button */}
        <div className="col-md-2">
          <button
            className="btn btn-outline-danger w-100"
            onClick={() => removeItem(index)}
          >
            Remove
          </button>
        </div>

      </div>
    </div>
  );
}

// Prop Types Validation
Product.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  incrementQuantity: PropTypes.func.isRequired,
  decrementQuantity: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
};
