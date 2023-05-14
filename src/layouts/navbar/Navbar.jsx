import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/rental-heaven-logo.png";
import { FaBars as BurgirIcon } from "react-icons/fa";
import { CgClose as BurgirClose } from "react-icons/cg";

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
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
            <Link to="/">Home</Link>
            <Link to="/cars">Cars</Link>
            <Link to="/contacts">Contact</Link>
            <>
              <Link to="/customers">Customers</Link>
              <Link to="/rentals">Rentals</Link>
            </>
            <Link to="/signIn">Sign In</Link>
          </div>
          <div className="burgir-menu" onClick={() => setNavActive((prev) => !prev)}>
            {navActive ? <BurgirClose /> : <BurgirIcon />}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
