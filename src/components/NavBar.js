import React from 'react';

import { Link } from 'react-router-dom';

export default function(props) {
  return (
    <div className="container">
      <nav
        className="navbar"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link
            to="/"
            className="navbar-item"
          >
            <b>Oaxaca menu</b>
          </Link>

          <a
            id="navbarBurger"
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navBar"
            href="/"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarMenu" className="navbar-menu">
          <div className="navbar-start">
            <Link
              to="/"
              className="navbar-item"
            >
              Home
            </Link>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
