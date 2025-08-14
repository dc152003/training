
import React from 'react';

const MaleProducts = ({ products }) => (
  <div>
    <h2>Male Products</h2>
    <ul>
      {products.map(product => (
        <li key={product.pId}>
          {product.pName} - Rupees {product.pPrice} {product.pIsInStock ? '(In Stock)' : '(Out of Stock)'}
        </li>
      ))}
    </ul>
  </div>
);

export default MaleProducts;