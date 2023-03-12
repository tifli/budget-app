import React from 'react';


function ProductList({ products }) {
  return (
    <div className='product-list'>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.name}>
            <span>{product.name}</span>
            <span>${product.price.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;