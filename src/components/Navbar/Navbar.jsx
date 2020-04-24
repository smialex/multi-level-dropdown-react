import React from 'react';
import './Navbar.css';

export const Navbar = (props) => {
  return (
    <nav className="navbar">
      <ul>
        {props.children}
      </ul>
    </nav>
  );
}
