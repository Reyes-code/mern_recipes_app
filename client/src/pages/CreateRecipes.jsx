import React, { useState } from "react";
import "./createrecipes.css";
import axios from "axios";
import { GrAddCircle } from 'react-icons/gr';

export default function CreatedRecipes() {
  const [recipe, setRecipe] = useState({
    name: "",
    ingredients: [],
    instructions: "",
    cookingTime: 0,
    userOwner: 0,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleIngredientChange = (event, idx) => {
    const { value } = event.target;
    const ingredients = recipe.ingredients;
    ingredients[idx] = value;
    setRecipe({ ...recipe, ingredients });
  };

  const addIngredient = () => {
    setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ""] });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:3001/recipes", recipe)
      alert("Receta creada")
    }catch(err) {
      console.log(err)
    }

  }

  console.log(recipe);
  return (
    <div className="create-recipe-parent">
      <div className="create-recipe">
        <h2>Crea tu receta</h2>
        <form>
          <label htmlFor="name">Nombre</label>
          <input type="text" name="name" id="name" className="text" onChange={handleChange} />

          <label htmlFor="url">Url de imágen</label>
          <input
            type="text"
            name="imageUrl"
            id="imageUrl"
            onChange={handleChange}
          />

          <label htmlFor="cookingTime">Tiempo de cocción (minutos) </label>
          <input
            type="number"
            name="cookingTime"
            id="cookingTime"
            onChange={handleChange}
          />

          <label htmlFor="ingredients">Ingredientes</label>
          {recipe.ingredients.map((ingredient, idx) => (
            <input
              key={idx}
              type="text"
              name="ingredients"
              id="ingredients"
              className="ingredients"
              value={ingredient}
              onChange={(event) => handleIngredientChange(event, idx)}
            />
          ))}
          <button onClick={addIngredient} type="button" className="add">
            <GrAddCircle size={20}/>
          </button>

          <label htmlFor="instructions" className="instructions">Instrucciones</label>
          <textarea
            name="instructions"
            id="instructions"
            placeholder="Describe los pasos que realizaste en tu receta"
            maxLength="3000"
            onChange={handleChange}
          ></textarea>

          <button type="submit" className="create" onClick={onSubmit}>
            Create Recipe
          </button>
        </form>
      </div>
    </div>
  );
}
