import React from 'react';
export default function Item({ name, quantity, category }) {
  return (
    <li className="p-4 m-2 border rounded-lg shadow-md bg-gray-900 hover:bg-gray-800 text-grey">
      <div className="font-semibold">{name}</div>
      <div>Quantity: {quantity}</div>
      <div>Category: {category}</div>
    </li>
  );
}