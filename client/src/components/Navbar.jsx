import * as React from "react";
import { useState } from "react";
import { FaHamburger } from "react-icons/fa";
/* import {SiCodechef} from 'react-icons/si' */
/* import {GiCookingPot} from 'react-icons/gi' */
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.clear();
    navigate("/auth");
  };

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">RecipeApp</div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <FaHamburger color="#f8a13e" size="20px" />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <NavLink to="/" onClick={handleShowNavbar}>
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink to="/saved_recipes" onClick={handleShowNavbar}>
                Mis recetas
              </NavLink>
            </li>
            <li>
              <NavLink to="/create_recipes" onClick={handleShowNavbar}>
                Crear una receta
              </NavLink>
            </li>

            {!cookies.access_token ? (
              <li>
                <NavLink to="/login" onClick={handleShowNavbar}>
                  Inicia sesión
                </NavLink>
              </li>
            ) : (
              <li>
                <button>
                <NavLink to="/login" onClick={logout}>
                  Cerrar sesion
                </NavLink>
                </button>
              </li>
            )}
            {!cookies.access_token ? (
              <li>
                <NavLink to="/register" onClick={handleShowNavbar}>
                  Regístrate
                </NavLink>
              </li>
            ) : (
              <li></li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
