import React, { useState } from 'react';

const products = [
  { id: 1, name: 'T-shirt', category: 'Clothing', price: 20, size: 'M' },
  { id: 2, name: 'Hoodie', category: 'Clothing', price: 40, size: 'L' },
  { id: 3, name: 'Jeans', category: 'Clothing', price: 60, size: 'S' },
  { id: 4, name: 'Sneakers', category: 'Footwear', price: 80, size: 'M' },
  { id: 5, name: 'Sandals', category: 'Footwear', price: 30, size: 'L' },
];

const Clothes = () => {
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [size, setSize] = useState('');

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const filteredProducts = products.filter((product) => {
    if (category && product.category !== category) {
      return false;
    }
    if (price && product.price > price) {
      return false;
    }
    if (size && product.size !== size) {
      return false;
    }
    return true;
  });

  return (
    <div>
      <h1>Clothes Products</h1>
      <div>
        <label htmlFor="category">Category:</label>
        <select id="category" value={category} onChange={handleCategoryChange}>
          <option value="">All</option>
          <option value="Clothing">Clothing</option>
          <option value="Footwear">Footwear</option>
        </select>
      </div>
      <div>
        <label htmlFor="price">Max Price:</label>
        <input
          id="price"
          type="number"
          value={price}
          onChange={handlePriceChange}
        />
      </div>
      <div>
        <label htmlFor="size">Size:</label>
        <select id="size" value={size} onChange={handleSizeChange}>
          <option value="">All</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
        </select>
      </div>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            {product.name} - {product.category} - ${product.price} - {product.size}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Clothes;