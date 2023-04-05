import React from "react";
import './auth.css'

export default function auth() {
  return (
    <div className="auth">
      <Login />
      <Register />
    </div>
  );
}

const Login = () => {
  return (
    <div class="login-box">
      <h2>Login</h2>
      <form>
        <div class="user-box">
          <input type="text" name="" required="" />
          <label>Usuario</label>
        </div>
        <div class="user-box">
          <input type="password" name="" required="" />
          <label>Contraseña</label>
        </div>
        <a href="/">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Ingresar
        </a>
      </form>
    </div>
  );
};

const Register = () => {
  return (
    <div className="login">
      <form>
        {/* <h2>Register</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
        </div> */}
      </form>
    </div>
  );
};
