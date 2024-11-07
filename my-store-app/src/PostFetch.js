// src/PostFetch.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function PostFetch() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/${product.id}`}>
              {product.title} - ${product.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostFetch;