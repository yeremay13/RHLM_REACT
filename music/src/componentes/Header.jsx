import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <NavLink exact to="/" className="logo-link">
          <img src="logo3.webp" alt="Logo de la aplicación" className="logo" />
        </NavLink>
      </div>
      <nav className="nav">
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
        </ul>
      </nav>
    </header>
  );
}

export default Header;
