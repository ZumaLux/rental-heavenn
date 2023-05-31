import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import logo from "../../assets/rental-heaven-logo.png";
import { FaBars as BurgirIcon } from "react-icons/fa";
import { CgClose as BurgirClose } from "react-icons/cg";
import useBlockScroll from "../../hooks/useBlockScroll";

const navLinks = [
  { path: "/", title: "Home" },
  { path: "/cars", title: "Cars" },
  { path: "/contacts", title: "Contacts" },
  { path: "/rentals", title: "Rentals" },
  { path: "/auth", title: "Sign In" },
];

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const { blockScroll, allowScroll } = useBlockScroll();

  // open/close nav
  const toggleNav = () => {
    setNavActive((prev) => !prev);
    if (navActive) allowScroll();
    if (!navActive) blockScroll();
  };
  const closeNav = () => {
    setNavActive(false);
    allowScroll();
  };

  return (
    <header>
      <nav className={`nav ${navActive && "active"}`}>
        <div className="nav__logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="nav__links-container">
          <div className={`nav-links ${!navActive && "nav-hidden"}`}>
            {navLinks.map((link, i) => (
              <CustomLink key={i} to={link.path} onClick={() => closeNav()}>
                {link.title}
              </CustomLink>
            ))}
          </div>
          <div className="burgir-menu" onClick={() => toggleNav()}>
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
