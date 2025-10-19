import Item from "./item";
import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="min-h-screen bg-black-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center ">Shopping List</h1>
      <ItemList/>
    </main>
  );
}
