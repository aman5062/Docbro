import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Images/logo_doc.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} id='logo' />
        <h1>Doc-Bro</h1>
      </div>
      <ul className="navbar-links">
       
        <li><Link to="/logout">Logout</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
