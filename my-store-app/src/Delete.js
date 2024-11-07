// src/Delete.js
import React, { useEffect, useState } from 'react';

function Delete() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const deleteProduct = async (id) => {
    await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: 'DELETE',
    });
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.title}
            <button onClick={() => deleteProduct(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Delete;