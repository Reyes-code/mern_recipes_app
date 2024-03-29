import React, { useState } from "react";
import "./createRecipeForm.css";
import axios from "axios";
import { useGetUserID } from "../hooks/useGetUserID";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

export default function CreateRecipesForm() {
  const userID = useGetUserID();
  const [cookies] = useCookies(["access_token"]);
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([""]);
  const [category, setCategory] = useState("postre");
  const [steps, setSteps] = useState([""]);
  const [userOwner] = useState(userID);

  const navigate = useNavigate();

  const addIngredient = () => {
    setIngredients([...ingredients, ""]);
  };

  const deleteIngredient = (index) => {
    const newIngredients = [...ingredients];
    newIngredients.splice(index, 1);
    setIngredients(newIngredients);
  };

  const addStep = () => {
    setSteps([...steps, ""]);
  };

  const deleteStep = (index) => {
    const nuevosPasos = [...steps];
    nuevosPasos.splice(index, 1);
    setSteps(nuevosPasos);
  };

  const handleInputChange = (event, index, type) => {
    if (type === "ingredients") {
      const newIngredients = [...ingredients];
      newIngredients[index] = event.target.value;
      setIngredients(newIngredients);
    } else if (type === "steps") {
      const nuevosPasos = [...steps];
      nuevosPasos[index] = event.target.value;
      setSteps(nuevosPasos);
    } else if (type === "name") {
      setName(event.target.value);
    } else if (type === "imageUrl") {
      setImageUrl(event.target.value);
    } else if (type === "category") {
      setCategory(event.target.value);
    } else if (type === "description") {
      setDescription(event.target.value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.preventDefault();
    try {
      await axios.post(
        "http://192.168.20.68:3001/recipes",
        {
          name,
          imageUrl,
          description,
          ingredients,
          category,
          steps,
          userOwner,
        },
        {
          headers: { authorization: cookies.access_token },
        }
      );

      alert("Recipe Created");
      navigate("/");
    } catch (error) {
      console.error(error);
    }

    setName("");
    setImageUrl("");
    setDescription("");
    setIngredients([""]);
    setCategory("postre");
    setSteps([""]);
  };

  console.log(name, imageUrl, description, ingredients, category, steps);

  const avanzarPagina = () => {
    setPage(page + 1);
  };

  const retrocederPagina = () => {
    setPage(page - 1);
  };
  const renderFormulario = () => {
    switch (page) {
      case 1:
        return (
          <>
            <label htmlFor="name">Nombre de la receta:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(event) => handleInputChange(event, null, "name")}
              required
            />

            <label htmlFor="imageUrl">Link de la imageUrl:</label>
            <input
              type="text"
              id="imageUrl"
              name="imageUrl"
              value={imageUrl}
              onChange={(event) => handleInputChange(event, null, "imageUrl")}
              required
            />

            <label htmlFor="description">Descripción:</label>
            <input
              type="text"
              id="description"
              name="description"
              value={description}
              onChange={(event) =>
                handleInputChange(event, null, "description")
              }
              required
            />

            <button type="button" className="page" onClick={avanzarPagina}>
            <GrFormNext/>
            </button>
          </>
        );

      case 2:
        return (
          <>
            <label htmlFor="category">Categoría:</label>
            <select
              id="category"
              name="category"
              value={category}
              onChange={(event) => handleInputChange(event, null, "category")}
              required
            >
              <option value="Postre">Postre</option>
              <option value="Entrada">Entrada</option>
              <option value="Plato Fuerte">Plato Fuerte</option>
              <option value="Bebida">Bebida</option>
            </select>

            <label htmlFor="ingredients">Ingredientes:</label>
            {ingredients.map((ingrediente, index) => (
              <div key={index} className="input-container">
                <input
                  type="text"
                  name="ingredients[]"
                  value={ingrediente}
                  onChange={(event) =>
                    handleInputChange(event, index, "ingredients")
                  }
                  required
                />
                {index === ingredients.length - 1 && (
                  <button
                    className="agregar-ingrediente"
                    type="button"
                    onClick={addIngredient}
                  >
                    +
                  </button>
                )}
                {index > 0 && (
                  <button
                    className="eliminar-ingrediente"
                    type="button"
                    onClick={() => deleteIngredient(index)}
                  >
                    -
                  </button>
                )}
              </div>
            ))}

            <button type="button" onClick={retrocederPagina} className="page">
            <GrFormPrevious/>
            </button>
            <button type="button" onClick={avanzarPagina} className="page">
            <GrFormNext/>
            </button>
          </>
        );

      case 3:
        return (
          <>
            <label htmlFor="steps">Pasos:</label>
            {steps.map((paso, index) => (
              <div key={index} className="input-container">
                <input
                  type="text"
                  name="steps[]"
                  value={paso}
                  onChange={(event) => handleInputChange(event, index, "steps")}
                  required
                />
                {index === steps.length - 1 && (
                  <button
                    className="agregar-paso"
                    type="button"
                    onClick={addStep}
                  >
                    +
                  </button>
                )}
                {index > 0 && (
                  <button
                    className="eliminar-paso"
                    type="button"
                    onClick={() => deleteStep(index)}
                  >
                    -
                  </button>
                )}
              </div>
            ))}

            <button type="button" onClick={retrocederPagina} className="page">
            <GrFormPrevious/>
            </button>
            <button type="submit">Crear Receta</button>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="create-box">
      <h2>Crea tu receta</h2>
      <form className="formulario-receta" onSubmit={handleSubmit}>
        {renderFormulario()}
      </form>
    </div>
  );
}
