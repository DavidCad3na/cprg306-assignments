"use client";
import { useState } from "react";
export default function NewItem() {
    const [quantity, setQuantity] = useState(1);

function increment() {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
}

function decrement() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
}

  const isMin = quantity <= 1;
  const isMax = quantity >= 20;

  return (
    <main className="max-w-xl w-full mx-auto flex flex-col items-center gap-8 mt-16 bg-gray-800 text-white p-8 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold">Add New Item</h1>
      <h1 className="text-4xl font-bold">Quantity: {quantity}</h1>
      <div className="flex gap-4">
   <button
      type="button"
      onClick={decrement}
        disabled={isMin}
          className={
            "px-6 py-3 rounded-lg text-white text-4xl font-bold shadow-md transition-transform disabled:bg-gray-600 disabled:cursor-not-allowed disabled:transform scale-100 bg-red-600 hover:bg-red-700 active:scale-95"
          }
    >
      -
    </button>

    <button
      type="button"
      onClick={increment}
      disabled={isMax}
          className={
            "px-6 py-3 rounded-lg text-white text-4xl font-bold shadow-md transition-transform bg-green-600 hover:bg-green-700 active:scale-95 disabled:bg-gray-600 disabled:cursor-not-allowed disabled:transform disabled:scale-100"
          }
    >
      +
    </button>

    </div>
    </main>
  );
}
