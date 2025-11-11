"use client";
import { use, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserAuth } from "../../contexts/AuthContext";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
  const { user } = useUserAuth();
  const router = useRouter();
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

if (!user) {
    router.push("/week-9");
    return null;
 }

else {
    return (
      <main className="grid grid-cols-1 min-h-screen bg-black p-8">
        <h1 className="text-3xl font-bold mb-6">Shopping List</h1>
        <div className="grid grid-cols-1 min-h-screen bg-black p-8">
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onSelect={handleSelect} />
        <MealIdeas ingredient={selectedIngredient} />
      </div>
    </main>
  );
}
}
