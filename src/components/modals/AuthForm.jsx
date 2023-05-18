import React from "react";
import "./AuthForm.css";

const AuthForm = ({
  title = "",
  subtitle = "",
  body = React.Element,
  footer = React.Element,
  buttonText = "",
  isOpen,
}) => {
  if (!isOpen) return null;
  return (
    <div className="auth-form">
      <h2 className="auth-form__title">{title}</h2>
      <h4 className="auth-form__subtitle">{subtitle}</h4>
      <div className="auth-form__body">{body}</div>
      <button className="auth-form__submit-btn">{buttonText}</button>
      <div className="auth-form__footer">{footer}</div>
    </div>
  );
};

export default AuthForm;
