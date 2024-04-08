import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css";

const Header = () => {
  return (
    <div className="header_link-container">
      <ul className= "header_link">
        <li>
          <NavLink to="/studentdetail">Student Details </NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact Us </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default Header;
