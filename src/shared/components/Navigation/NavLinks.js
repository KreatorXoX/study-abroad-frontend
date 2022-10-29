import React from "react";
import { NavLink, Link } from "react-router-dom";

import "./NavLinks.css";

const NavLinks = () => {
  return (
    <>
      <ul className="nav-links">
        <li>
          <NavLink to="/profile/userId">My Profile</NavLink>
        </li>
        <li>
          <NavLink to="/countries">Countries</NavLink>
        </li>
        {/* <li>
          <NavLink to="/students">Students</NavLink>
        </li>
        <li>
          <NavLink to="/employees">Employees</NavLink>
        </li> */}
        <li>
          <NavLink to="/contact">Contact Us</NavLink>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </>
  );
};

export default NavLinks;
