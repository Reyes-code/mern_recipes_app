import React, { useState } from "react";
import "./FormularioReceta.css";

const FormularioReceta = () => {
  const [nombre, setNombre] = useState("");
  const [foto, setFoto] = useState("");
  const [ingredientes, setIngredientes] = useState([""]);
  const [categoria, setCategoria] = useState("postre");
  const [pasos, setPasos] = useState([""]);

  const agregarIngrediente = () => {
    setIngredientes([...ingredientes, ""]);
  };

  const eliminarIngrediente = (index) => {
    const nuevosIngredientes = [...ingredientes];
    nuevosIngredientes.splice(index, 1);
    setIngredientes(nuevosIngredientes);
  };

  const agregarPaso = () => {
    setPasos([...pasos, ""]);
  };

  const eliminarPaso = (index) => {
    const nuevosPasos = [...pasos];
    nuevosPasos.splice(index, 1);
    setPasos(nuevosPasos);
  };

  const handleInputChange = (event, index, type) => {
    if (type === "ingredientes") {
      const nuevosIngredientes = [...ingredientes];
      nuevosIngredientes[index] = event.target.value;
      setIngredientes(nuevosIngredientes);
    } else if (type === "pasos") {
      const nuevosPasos = [...pasos];
      nuevosPasos[index] = event.target.value;
      setPasos(nuevosPasos);
    } else if (type === "nombre") {
      setNombre(event.target.value);
    } else if (type === "foto") {
      setFoto(event.target.value);
    } else if (type === "categoria") {
      setCategoria(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Aquí puedes realizar la lógica para guardar los datos en la base de datos

    // Limpia los campos después de enviar el formulario
    setNombre("");
    setFoto("");
    setIngredientes([""]);
    setCategoria("postre");
    setPasos([""]);
  };

  return (
    <div className="create-box">
    <h2>Crea tu receta</h2>
    <form className="formulario-receta" onSubmit={handleSubmit}>
      
      <label htmlFor="nombre">Nombre de la receta:</label>
      <input
        type="text"
        id="nombre"
        name="nombre"
        value={nombre}
        onChange={(event) => handleInputChange(event, null, "nombre")}
        required
      />
  
      <label htmlFor="foto">Link de la foto:</label>
      <input
        type="text"
        id="foto"
        name="foto"
        value={foto}
        onChange={(event) => handleInputChange(event, null, "foto")}
        required
      />
  
      <label htmlFor="ingredientes">Ingredientes:</label>
      {ingredientes.map((ingrediente, index) => (
        <div key={index} className="input-container">
          <input
            type="text"
            name="ingredientes[]"
            value={ingrediente}
            onChange={(event) =>
              handleInputChange(event, index, "ingredientes")
            }
            required
          />
          {index === ingredientes.length - 1 && (
            <button
              className="agregar-ingrediente"
              type="button"
              onClick={agregarIngrediente}
            >
              +
            </button>
          )}
          {index > 0 && (
            <button
              className="eliminar-ingrediente"
              type="button"
              onClick={() => eliminarIngrediente(index)}
            >
              -
            </button>
          )}
        </div>
      ))}
  
      <label htmlFor="categoria">Categoría:</label>
      <select
        id="categoria"
        name="categoria"
        value={categoria}
        onChange={(event) => handleInputChange(event, null, "categoria")}
        required
      >
        <option value="postre">Entrada</option>
        <option value="entrada">Postre</option>
        <option value="plato-fuerte">Plato Fuerte</option>
        <option value="bebida">Bebida</option>
      </select>
  
      <label htmlFor="pasos">Pasos:</label>
      {pasos.map((paso, index) => (
        <div key={index} className="input-container">
          <input
            type="text"
            name="pasos[]"
            value={paso}
            onChange={(event) => handleInputChange(event, index, "pasos")}
            required
          />
          {index === pasos.length - 1 && (
            <button
              className="agregar-paso"
              type="button"
              onClick={agregarPaso}
            >
              +
            </button>
          )}
          {index > 0 && (
            <button
              className="eliminar-paso"
              type="button"
              onClick={() => eliminarPaso(index)}
            >
              -
            </button>
          )}
        </div>
      ))}
  
      <button type="submit">Guardar Receta</button>
    </form>
    </div>
  );
          }  


export default FormularioReceta