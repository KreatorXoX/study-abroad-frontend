import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuthStore } from "../../../store/authStore";

import "./NavLinks.css";

const NavLinks = () => {
  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser);

  return (
    <>
      <ul className="nav-links">
        {user.authenticated && (
          <li>
            <NavLink to="/profile/userId">My Profile</NavLink>
          </li>
        )}
        <li>
          <NavLink to="/countries">Countries</NavLink>
        </li>
        {user && user.role === "admin" && (
          <li>
            <NavLink to="/cms">Admin</NavLink>
          </li>
        )}
        <li>
          <NavLink to="/contact">Contact Us</NavLink>
        </li>
        {user.authenticated && (
          <li>
            <Link to="/" onClick={() => setUser({})}>
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
