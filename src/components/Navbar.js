import React from 'react';
import './styles/navbar.css';
import logo from '../assets/Logo.png';
import home from '../assets/Home.png';
import analytics from '../assets/Analytics.png';
import pay from '../assets/Pay.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" />
      <div className="navbar_menu">
        <NavLink to="/" className="navbar_menu-inner">
          <img src={home} alt="home" />
          Home
        </NavLink>
        <NavLink to="/analytics" className="navbar_menu-inner">
          <img src={analytics} alt="analytics" />
          Analytics
        </NavLink>
        <NavLink to="/pay" className="navbar_menu-inner">
          <img src={pay} alt="pay" />
          Pay
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
