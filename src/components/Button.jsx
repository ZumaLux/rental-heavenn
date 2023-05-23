import React from "react";
import "./Button.css";

const Button = ({ label = "", type = "button", onClick = Function }) => {
  return (
    <button type={type} className="button" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
