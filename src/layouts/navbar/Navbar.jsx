import React, { useState } from "react";
import "./Navbar.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import logo from "../../assets/rental-heaven-logo.png";
import { FaBars as BurgirIcon } from "react-icons/fa";
import { CgClose as BurgirClose } from "react-icons/cg";

const navLinks = [
  { path: "/", title: "Home" },
  { path: "/cars", title: "Cars" },
  { path: "/contacts", title: "Contacts" },
  { path: "/customers", title: "Customers" },
  { path: "/rentals", title: "Rentals" },
  { path: "/auth", title: "Sign In" },
];

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);

  // open/close nav
  const changeActive = () => {
    setNavActive((prev) => !prev);
  };

  return (
    <header>
      <nav>
        <div className="nav-logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="nav-right">
          <div className={`nav-links ${!navActive && "nav-hidden"}`}>
            {navLinks.map((link, i) => (
              <CustomLink key={i} to={link.path} onClick={() => changeActive()}>
                {link.title}
              </CustomLink>
            ))}
          </div>
          <div className="burgir-menu" onClick={() => changeActive()}>
            {navActive ? <BurgirClose /> : <BurgirIcon />}
          </div>
        </div>
      </nav>
    </header>
  );
};

function CustomLink({ to, children, ...props }) {
  // resolvedPath returns the full path
  const resolvedPath = useResolvedPath(to);
  // useMatch compares the current path to another path
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  //end:true makes sure the entire URL matches

  return (
    <Link to={to} {...props}>
      <li className={isActive ? "active" : ""}>{children}</li>
    </Link>
  );
}

export default Navbar;
