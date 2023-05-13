import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
// import logo from "../../assets/rental-heaven-logo-transparent-low-res.png";
import { FaBars as BurgirIcon } from "react-icons/fa";
// import { CgClose as BurgirClose } from "react-icons/cg";

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="nav-logo">
          <Link to="/">
            <img src={""} alt="" />
            LOGO
          </Link>
        </div>
        <div className="nav-links">
          <ul>
            <Link to="/">Home</Link>
            <Link to="/cars">Cars</Link>
            <Link to="/contacts">Contact</Link>

            <>
              <Link to="/customers">Customers</Link>
              <Link to="/rentals">Rentals</Link>
            </>

            <Link to="/signIn">Sign In</Link>

            {/* <CustomLink showSubNav={""} onMouseEnter={() => ""} onMouseLeave={() => ""}></CustomLink> */}

            {/* <CustomLink to="/signUp">SignUp</CustomLink> */}
          </ul>
          <div className="burgir-menu" onClick={() => ""}>
            {<BurgirIcon />}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
