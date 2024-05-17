import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/styles/Header.css';

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <NavLink exact to="/" className="logo-link">
          <img src="logo3.webp" alt="Logo de la aplicación" className="logo" />
        </NavLink>
      </div>
      <button className="nav-toggle" onClick={toggleMenu}>
        {showMenu ? 'Cerrar' : 'Menú'}
      </button>
      <nav className={`nav ${showMenu ? 'active' : ''}`}>
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink exact to="/" className="nav-link" activeClassName="active">Anuel AA</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Views" className="nav-link" activeClassName="active">Top Views</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Albums" className="nav-link" activeClassName="active">Albums</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Foro" className="nav-link" activeClassName="active">Foro</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
