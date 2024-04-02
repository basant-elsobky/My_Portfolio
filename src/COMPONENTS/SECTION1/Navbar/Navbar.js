import React, { useState, useEffect } from 'react';
import Mainbutton from '../../mainbutton/Mainbutton';
import logo from '../../images/logo-removebg-preview.png';
import './navbar.css';
import { NavLink, useLocation } from 'react-router-dom';

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {

    setNavbarOpen(false);


    window.scrollTo(0, 0);
  }, [location]);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg mb-4">
          <div className="fixed-top nav d-flex justify-content-between align-items-center">
            <div className="order-lg-1 order-2">
              <NavLink className="navbar-brand" to="/">
                <img className='logo' src={logo} alt='' />
              </NavLink>
            </div>

            <div className="order-lg-3 order-4 togg" >
              <button
                className="btn d-lg-none ms-auto"
                style={{ backgroundColor: '#db9a64' }}
                type="button"
                onClick={toggleNavbar}
              >
                <span className="navbar-toggler-icon" />
              </button>
            </div>

            <div className={`collapse navbar-collapse order-lg-2 order-3${navbarOpen ? ' show' : ''}`} id="navbarNav">
              <ul className="navbar-nav mx-auto text-capitalize">
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to='/' onClick={toggleNavbar}>Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to='/works' onClick={toggleNavbar}>About</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="services" onClick={toggleNavbar}>Services</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/projects" onClick={toggleNavbar}>Projects</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact" onClick={toggleNavbar}>Contact Us</NavLink>
                </li>
              </ul>
            </div>

            <div className="order-lg-4 d-none d-lg-block main">
              <NavLink to='/contact'>
                <Mainbutton name='Lets Talk' />
              </NavLink>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;