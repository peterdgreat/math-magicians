import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="nav-link" to="/">Math Magician</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse  d-flex justify-content-end navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item bdr">
              <NavLink className="nav-link " to="/">Home</NavLink>
            </li>
            <li className="nav-item bdr">
              <NavLink className="nav-link" to="/calculator">Calculator</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/quote">Quote</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
