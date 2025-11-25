"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserAuth } from "../../contexts/AuthContext";
import { getItems, addItem } from "../services/shopping-list-service";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const { user } = useUserAuth();
  const router = useRouter();
  const [items, setItems] = useState([]);
  const [selectedIngredient, setSelectedIngredient] = useState("");

  function loadItems(getItems, userId) {
    getItems(userId).then((items) => {
      setItems(items);
    });
  }

  function handleSelect(name) {
    setSelectedIngredient(cleanName(name));
  }

  function handleAddItem(newItem) {
    try {
      const id = addItem(user.uid, newItem);
      setItems((prev) => [{ id, ...newItem }, ...prev]);
    } catch (error) {
      console.error("Error adding item:", error);
    }
  }
    
  function cleanName(name) {
    return name
      .split(",")[0]                                 
      .replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, "")
      .replace(/\s{2,}/g, " ")                       
      .trim();                                       
  }

  useEffect(() => {
    if (user) {
      loadItems(getItems, user.uid);
    }
  }, [user]);

  if (!user) {
      router.push("/week-10");
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
