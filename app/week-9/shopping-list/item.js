import React from 'react';
export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li onClick={() => onSelect(name)} className="p-3 m-2 border rounded-lg shadow-md bg-gray-950 hover:bg-gray-800 text-grey">
      <div>{name}</div>
      <div>Quantity: {quantity}</div>
      <div>Category: {category}</div>
    </li>
  );
}