import React from 'react';
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <div>
    <a className="navbar-brand" href='/' >
      <img src="" className="d-inline-block align-text-top"/>
      título
    </a>
    </div>
    <div className='d-flex'>
    <NavLink to = "/carrito">
        <img src="" className="d-inline-block align-text-top"/>
        <p>precio total</p>
    </NavLink>
    </div>
  </div>
</nav>
    </div>
  )
};

export default NavBar;
