import * as React from "react";
import { useState } from "react";
import { FaHamburger } from "react-icons/fa";
/* import {SiCodechef} from 'react-icons/si' */
/* import {GiCookingPot} from 'react-icons/gi' */
import { NavLink } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

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
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/saved_recipes">My Recipes</NavLink>
            </li>
            <li>
              <NavLink to="/create_recipes">Create a Recipe</NavLink>
            </li>
            <li>
              <NavLink to="/auth">Register/LogIn</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
