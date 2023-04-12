import React, { useState } from 'react';
import { Select } from '@material-ui/core';
import {RangeSlider,InputNumber}  from 'rsuite'
// const products = [
//   { id: 1, name: 'Product A', category: 'Category 1', price: 20 },
//   { id: 2, name: 'Product B', category: 'Category 2', price: 30 },
//   { id: 3, name: 'Product C', category: 'Category 1', price: 40 },
//   { id: 4, name: 'Product D', category: 'Category 3', price: 50 },
//   { id: 5, name: 'Product E', category: 'Category 2', price: 60 },
//   { id: 6, name: 'Product F', category: 'Category 3', price: 70 },
// ];



const ProductFilter = (props) => {
  console.log('props= ',props)
 
  const [category, setCategory] = useState('');
  console.log('category= ',category)
  const [price, setPrice] = useState([0, 100]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(2);

  const filteredProducts = props.products
    .filter( (product) => category === '' || product.Category.value === category)
    .filter( (product) => Number(product.price) >= price[0] && Number(product.price) <= price[1]);

  const selectedProducts=[]
  selectedProducts.push(props.products.Category.value===category)
  console.log('SP',selectedProducts)
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const renderProducts = currentProducts.map((product) => (
    <div key={product.id}>
      <h3>{product.name}</h3>
      <p>{product.Category.label}</p>
      <p>{product.price}</p>
    </div>
  ));

  const renderPagination = () => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filteredProducts.length / productsPerPage); i++) {
      pageNumbers.push(i);
    }
    return pageNumbers.map((number) => (
      <li key={number} onClick={() => setCurrentPage(number)}>
        {number}
      </li>
    ));
  };

  return (
    <div>
      <div>
        <label htmlFor="category">Category:</label>
        <Select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
        <option defaultvalue="">ALL</option>
          
          <option value="drubashki">drubashki</option>
          <option value="dbruki">dbruki</option>
          <option value="dplatya">dplatya</option>
     
        </Select>
      </div>
      <div>
        {/* <label htmlFor="price">Price:</label>
        <InputNumber
          type="range"
          id="price"
          value={price}
          min="0"
          max="100"
          step="10"
          onChange={(e) => setPrice([Number(e.target.value), price[1]])}
        />
        <span>{price[0]}</span>
        <InputNumber
          type="range"
          id="price"
          value={price}
          min="0"
          max="100"
          step="10"
          onChange={(e) => setPrice([price[0], Number(e.target.value)])}
        />
        <span>{price[1]}</span> */}
      </div>
      <div>{renderProducts}</div>
      <ul>{renderPagination()}</ul>
    </div>
  );
};

export default ProductFilter;
