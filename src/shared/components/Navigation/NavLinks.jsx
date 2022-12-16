import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import { useAuthStore } from "../../../store/authStore";
import { useLogout } from "../../../api/authApi";

import "./NavLinks.css";

const NavLinks = () => {
  const { mutate: logoutUser } = useLogout();
  const [toggleItems, setToggleItems] = useState(false);
  const user = useAuthStore((state) => state.user);

  const items = (
    <>
      <li>
        <NavLink to="/cms/employees">Employees</NavLink>
      </li>
      <li>
        <NavLink to="/cms/students">Students</NavLink>
      </li>
      <li>
        <NavLink to="/cms/countries">Countries</NavLink>
      </li>
      <li>
        <NavLink to="/cms/universities">Universities</NavLink>
      </li>
    </>
  );
  return (
    <>
      <ul className="nav-links">
        {user.authenticated && (
          <li>
            <NavLink to={`/profile/${user._id}`}>My Profile</NavLink>
          </li>
        )}
        <li>
          <NavLink to="/countries">Countries</NavLink>
        </li>
        {user && user.role === "admin" && (
          <span
            onMouseEnter={() => {
              setToggleItems((prev) => !prev);
            }}
            onMouseLeave={() => {
              setToggleItems((prev) => !prev);
            }}
            className="dropdownContent"
          >
            Admin CMS
            <Dropdown show={toggleItems} dropdownItems={items} />
          </span>
        )}

        <li>
          <NavLink to="/contact">Contact Us</NavLink>
        </li>

        {user.authenticated && (
          <li>
            <Link to="/" onClick={() => logoutUser()}>
              Logout
            </Link>
          </li>
        )}
        {!user.authenticated && (
          <li>
            <Link to="/auth">Login / Register</Link>
          </li>
        )}
      </ul>
    </>
  );
};

export default NavLinks;
