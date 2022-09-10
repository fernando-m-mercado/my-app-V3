import React from 'react';
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      Mi Tiendita
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarColor01"
      aria-controls="navbarColor01"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link to="/" className='nav-Link' id='link-navbar'>Pagina Principal</Link>
        </li>
      </ul>

      <CartIcon id="carrito-nav"/>
      <form className="d-flex">
        <input
          className="form-control me-sm-2"
          type="text"
          placeholder="Buscar Producto"
        />
        <button className="btn btn-secondary my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </div>
  </div>
</nav>

        </div>
    );
}

export default Navbar;
