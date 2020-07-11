import React from 'react';
import { Link } from "react-router-dom";
import "../styles/navmenu.css"

function NavMenu() {
  return (
    <ul className="nav-bar">
      <li className="nav-item">
        <Link to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/skills">Skills</Link>
      </li>
      <li className="nav-item">
        <Link to="/projects">Projects</Link>
      </li>
    </ul>
  );
}

export default NavMenu;
