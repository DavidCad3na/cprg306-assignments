"use client";
import { use, useEffect, useState } from "react";

async function fetchMealIdeas(ingredient) {
      const meal = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    if (!meal.ok) {
        throw new Error(`Failed to fetch meal ideas: ${meal.status}`);
    }
    const mealData = await meal.json();
    console.log(mealData);
    return mealData.meals || [];
}

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);
    
    useEffect(() => {
          async function loadMealIdeas() {
      if (!ingredient) return;
      const mealResults = await fetchMealIdeas(ingredient);
      setMeals(mealResults);
    }

    loadMealIdeas();
    }, [ingredient]);



  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Meal Ideas</h2>
      <ul className="space-y-2">
        {meals.map((meal) => (
          <li key={meal.idMeal} className="bg-gray-800 p-4 rounded">
            <h3 className="font-semibold">{meal.strMeal}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}
