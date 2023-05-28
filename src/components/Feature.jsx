import React from "react";
import "./Feature.css";

const Feature = ({ title, text, icon }) => {
  return (
    <div className="feature">
      <div className="feature__icon">{icon}</div>
      <h3 className="feature__title">{title}</h3>
      <p className="feature__text">{text}</p>
    </div>
  );
};

export default Feature;
