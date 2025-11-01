"use client";
import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedIngredient, setSelectedIngredient] = useState("");

  function handleAddItem(newItem) {
    setItems((prev) => [newItem, ...prev]);
  }

  function handleSelect(name) {
    setSelectedIngredient(cleanName(name));
  }

function cleanName(name) {
  return name
    .split(",")[0]                                 
    .replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, "")
    .replace(/\s{2,}/g, " ")                       
    .trim();                                       
}


  return (
    <main className="grid grid-cols-1 min-h-screen bg-black p-8">
      <h1 className="text-3xl font-bold mb-6">Shopping List</h1>
      <div className="grid grid-cols-1 min-h-screen bg-black p-8">
        <section className="bg-gray-800 p-4 rounded-lg shadow-md text-white">
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onSelect={handleSelect} />
        </section>
        <div>
        <MealIdeas ingredient={selectedIngredient} />
        </div>
      </div>
    </main>
  );
}
