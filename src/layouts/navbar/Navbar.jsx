import React, { useState } from "react";
import "./Navbar.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import logo from "../../assets/rental-heaven-logo.png";
import { FaBars as BurgirIcon } from "react-icons/fa";
import { CgClose as BurgirClose } from "react-icons/cg";
import useBlockScroll from "../../hooks/useBlockScroll";
import { useAuthContext } from "../../context/authContext";
import { signOutUser } from "../../firebase/auth";

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const [subNavActive, setSubNavActive] = useState(false);
  const { blockScroll, allowScroll } = useBlockScroll();
  const { currentUser } = useAuthContext();

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
            <CustomLink to={"/"} onClick={() => closeNav()}>
              Home
            </CustomLink>
            <CustomLink to={"/cars"} onClick={() => closeNav()}>
              Cars
            </CustomLink>
            <CustomLink to={"/contacts"} onClick={() => closeNav()}>
              Contacts
            </CustomLink>
            {currentUser?.role === "admin" && (
              <CustomLink to={"/rentals"} onClick={() => closeNav()}>
                Rentals
              </CustomLink>
            )}
            {!currentUser && (
              <CustomLink to={"/auth"} onClick={() => closeNav()}>
                Sign in
              </CustomLink>
            )}
            {currentUser && (
              <div
                className="user-profile"
                onMouseEnter={() => setSubNavActive(true)}
                onMouseLeave={() => setSubNavActive(false)}
              >
                <li className="display-name">{currentUser?.username}</li>
                <ul className={`sub-nav ${!subNavActive ? "hidden" : ""}`}>
                  <li onClick={() => signOutUser()}>Sign Out</li>
                </ul>
              </div>
            )}
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
