import { useState } from 'react';
import React from 'react';
const studios = [
  {
    name: "Whole Yoga",
    price: "$17.00"
  },
  {
    name: "Rino Yoga Social",
    price: "Suggested Donation"
  },
  {
    name: "Samadhi Yoga",
    price: "$20.00"
  },
  {
    name: "Corepower Yoga",
    price: "$25.00"
  },
  {
    name: "The River Yoga",
    price: "$20.00"
  },
  {
    name: "Endorphin Yoga",
    price: "$10.00"
  },
  {
    name: "Kindness Yoga",
    price: "$20.00"
  },
  {
    name: "Yoga High",
    price: "$15.00"
  },
  {
    name: "Freyja Project",
    price: "$22.00"
  },
  {
    name: "Kula Yoga",
    price: "$17.00"
  }
];

function sortByPrice(arr) {
  const sortedArr = arr.slice().sort((a, b) => {
    const priceA = parseFloat(a.price.replace('$', '') || 0);
    const priceB = parseFloat(b.price.replace('$', '') || 0);
    return priceA - priceB;
  });
  return sortedArr;
}

function StudiosList() {
  const [sortedStudios, setSortedStudios] = useState(studios);

  function handleSort() {
    const sortedArr = sortByPrice(studios);
    setSortedStudios(sortedArr);
  }

  return (<div>
      <button onClick={handleSort}>Sort by price</button>
      <ul>
        {sortedStudios.map(studio => (
          <li key={studio.name}>
            <div>Name: {studio.name}</div>
            <div>Price: {studio.price}</div>
          </li>
        ))}
      </ul>
    </div>
   
  );
}

export default StudiosList