import React from "react";
import "./loginregister.css";
import { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [_,setCookies] = useCookies(["access_token"]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const result = await axios.post("http://192.168.20.68:3001/auth/login", {
        username,
        password,
      });

      setCookies("access_token", result.data.token);
      window.localStorage.setItem("userID", result.data.userID);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="login-box">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
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
        <button type="submit">Ingresar</button>
        
      </form>
    </div>
  );
}