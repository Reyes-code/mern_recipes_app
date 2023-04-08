import React from "react";
import "./loginregister.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  console.log("username:", username, "password:", password);
  const navigate = useNavigate()
  
  const onSubmit = async(event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:3001/auth/register",{
        username, password
      })
      alert("El registro fue exitoso, Inicia sesión");
      navigate("/login")
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="login-box">
      <form onSubmit={onSubmit}>
        <h2>Registro</h2>
        <div className="user-box">
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <label htmlFor="username">Usuario</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <label htmlFor="password">Contraseña</label>
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}
