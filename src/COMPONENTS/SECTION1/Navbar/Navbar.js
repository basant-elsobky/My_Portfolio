import React from 'react';
import Mainbutton from '../../mainbutton/Mainbutton';
import logo from '../../images/logo-removebg-preview.png';
import './navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg mb-4">
          <div className="fixed-top nav d-flex justify-content-between align-items-center">
            <div className="order-lg-1 order-2 "  >
              <NavLink className="navbar-brand" to="/">
                <img className='logo' src={logo} alt='' />
              </NavLink>
            </div>

            <div className="order-lg-3 order-4">
              <button
                className="btn d-lg-none ms-auto "
                style={{ backgroundColor: '#db9a64' }}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
            </div>


            <div className="collapse navbar-collapse order-lg-2 order-3" id="navbarNav">

              <ul className="navbar-nav mx-auto text-capitalize">

                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to='/'>Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to='/works'>About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="services">Services</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/ Projects">projects</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                </li>
              </ul>
            </div>

            <div className="order-lg-4 d-none d-lg-block main">
              <NavLink to='/contact'>  <Mainbutton name='Lets Talk' /></NavLink>

            </div>
          </div>

        </nav>
      </header>

    </>
  );
};

export default Navbar;
