
import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = () => (
  <div className="navbar-wrapper">
    <p className="app-title">threact.com</p> 
    <div className="nav-link-group">
      <Link to="/Examples">
        <div className="nav-link">Examples</div>
      </Link>
      <Link to="/Modules">
        <div className="nav-link">Modules</div>
      </Link>
      <Link to="/Modules">
        <div className="nav-link">Editors</div>
      </Link>
      <Link to="/Blog">
        <div className="nav-link">Blog</div>
      </Link>
    </div>
  </div>
);

export default NavBar;