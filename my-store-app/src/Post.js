// src/Post.js
import React, { useEffect, useState } from 'react';

function Post() {
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const addProduct = async (e) => {
    e.preventDefault();
    const newProduct = {
      title,
      price: parseFloat(price),
      description,
    };
    const response = await fetch('https://fakestoreapi.com/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    });
    const addedProduct = await response.json();
    setProducts([...products, addedProduct]);
    setTitle('');
    setPrice('');
    setDescription('');
  };

  return (
    <div>
      <h1>Product List</h1>
      <form onSubmit={addProduct}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
        <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
        <button type="submit">Add Product</button>
      </form>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <strong>{product.title}</strong> - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Post;