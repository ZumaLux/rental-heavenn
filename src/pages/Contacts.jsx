import React from "react";
import "./Contacts.css";
import logo from "../assets/rental-heaven-logo.png";

import { FaFacebookSquare as FbIcon } from "react-icons/fa";
import { RiInstagramFill as IgIcon } from "react-icons/ri";
import { FaTwitterSquare as TwIcon } from "react-icons/fa";
import Button from "../components/Button";

const Contacts = () => {
  return (
    <div className="page-container">
      <section className="contacts-top">
        <div className="top-left">
          <h1 className="title">Contact us</h1>
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
            <label htmlFor="message">Message</label>
            <input type="text" name="message" />
            <Button label="Send" />
          </form>
        </div>
        <div className="top-right">
          <img src={logo} alt="" />
        </div>
      </section>
      <section className="contacts-bottom">
        <div className="bot-left">
          <h1 className="title1">GET IN TOUCH</h1>
          <h3 className="title2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic illum repellendus sapiente
            suscipit iusto perferendis nemo veritatis numquam.
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores aliquid nobis corrupti,
            adipisci nesciunt voluptatum debitis tempore ut id est magnam sequi quisquam inventore
            non recusandae aliquam nulla repudiandae veritatis iusto repellendus assumenda. Ratione
            hic odio cumque eligendi nisi minus?
          </p>
          <div className="icons">
            <FbIcon />
            <TwIcon />
            <IgIcon />
          </div>
        </div>
        <div className="bot-right">
          <div className="card">
            <div>
              <h3>Call us</h3>
              <p>9999-999-999</p>
              <p>8888-888-888</p>
            </div>
            <div>
              <h3>Location</h3>
              <p>19 Lorem Street, 5 Avenue</p>
              <p>Lorem Ipsum, LI 254524</p>
            </div>
            <div>
              <h3>Working Hours</h3>
              <p>Monday-Friday 10:00-18:00</p>
              <p>Saturday-Sunday (Closed)</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
