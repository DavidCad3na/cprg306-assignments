"use client";
import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  function handleAddItem(newItem) {
    setItems((prev) => [newItem, ...prev]);
  }

  return (
    <main className=" min-h-screen bg-black p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Shopping List</h1>
      <div className=" space-y-12">
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} />
      </div>
    </main>
  );
}
