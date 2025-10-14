"use client";
import { useState } from "react";
export default function NewItem() {
    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("produce");

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

  function handleSubmit(event) {
    event.preventDefault();

    const item = {
      name: name,
      quantity: quantity,
      category: category,
    };

    console.log(item);
    alert(`Item Added:
      Name: ${name}
      Quantity: ${quantity}
      Category: ${category}`);

    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  const isMin = quantity <= 1;
  const isMax = quantity >= 20;

return (
    <main className="max-w-xl w-full mx-auto flex flex-col items-center gap-8 mt-16 bg-gray-800 text-white p-8 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold">Add New Item</h1>
      {/* Item Name Input */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
        <div className="flex flex-col gap-2">
          <label className="text-xl font-semibold">Item Name</label>
          <input
            type="text"
            required
            value={name}
            placeholder="Enter item name"
            onChange={(e) => setName(e.target.value)}
            className="text-black px-4 py-2 rounded-lg focus:outline-none bg-white"
          />
        </div>
        {/* Quantity Selector */}
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-2xl font-bold">Quantity: {quantity}</h2>
          <div className="flex gap-4">
            <button
              type="button"
              onClick={decrement}
              disabled={isMin}
              className="px-6 py-3 rounded-lg text-white text-4xl font-bold shadow-md transition-transform bg-red-600 hover:bg-red-700 active:scale-95 disabled:bg-gray-600 disabled:cursor-not-allowed"
            >
              -
            </button>

            <button
              type="button"
              onClick={increment}
              disabled={isMax}
              className="px-6 py-3 rounded-lg text-white text-4xl font-bold shadow-md transition-transform bg-green-600 hover:bg-green-700 active:scale-95 disabled:bg-gray-600 disabled:cursor-not-allowed"
            >
              +
            </button>
          </div>
        </div>

        {/* Item Categories */}
        <div className="flex flex-col gap-2">
          <label className="text-xl font-semibold">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="text-black px-4 py-2 rounded-lg focus:outline-none bg-white"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen foods">Frozen Foods</option>
            <option value="canned goods">Canned Goods</option>
            <option value="dry goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 bg-blue-600 hover:bg-blue-700 active:scale-95 transition-transform px-6 py-3 rounded-lg text-white font-bold shadow-md">
          Add Item
        </button>
      </form>
    </main>
  );
}
