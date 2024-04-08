import React from 'react';

const Header = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/studentdetail">Student Details </NavLink>
        </li>
        <li>
          <NavLink to="/contactus">Contact Us </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default Header;
