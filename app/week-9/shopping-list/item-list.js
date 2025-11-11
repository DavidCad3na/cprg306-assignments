"use client";

import { useState, useMemo} from "react";
import Item from "./item";

export default function ItemList({ items = [], onSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = useMemo(() => {
    const copy = [...items];
    return copy.sort((a, b) => {
      if (sortBy === "name") {
        return (a.name || "").localeCompare(b.name || "");
      } else {
        return (a.category || "").localeCompare(b.category || "");
      }
    });
  }, [items, sortBy]);

  return (
      <div>
        <div className="flex gap-2 mb-4 bg-gray-800 p-4 rounded-lg shadow-lg max-w-xl w-75 mx-2">
          <label className="text-white font-bold px-3 py-2">Sort by:</label>
          <button
            onClick={() => setSortBy("name")}
            className={`px-3 py-2 rounded ${sortBy === "name" ? " bg-green-600 text-white rounded-lg shadow-lg" : "bg-gray-600 text-white rounded-lg shadow-lg"}`}
          >
            Name
          </button>
          <button
            onClick={() => setSortBy("category")}
            className={`px-3 py-2 rounded ${sortBy === "category" ? "bg-green-600 text-white rounded-lg shadow-lg" : "bg-gray-600 text-white rounded-lg shadow-lg"}`}
          >
            Category
          </button>
        </div>
  
        <ul>
          {sortedItems.map((item) => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
              onSelect={onSelect}

            />
          ))}
        </ul>
      </div>
    );
}
