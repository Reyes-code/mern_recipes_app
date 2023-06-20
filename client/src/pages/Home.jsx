import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SavedREcipes.css";

export default function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        /* const response = await axios.get("http://localhost:3001/recipes"); */
        const response = await axios.get("http://192.168.10.44:3001/recipes"); /* Try in another device */
        setRecipes(response.data);
        console.log(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchRecipe();
  }, []);

  return (
<div className="recipe-container">
  <h2>Mis Recetas</h2>
  <div className="card-container">
    {recipes.map((recipe) => (
      <div key={recipe._id} className="card">
        <div className="card-image">
          <img
            width={230}
            height={345}
            src={recipe.imageUrl}
            alt={recipe.name}
            className="recipe-image"
          />
        </div>
        <div className="card-content">
          <h2>{recipe.name}</h2>
          <p>{recipe.category}</p>
        </div>
      </div>
    ))}
  </div>
</div>
  );
}
