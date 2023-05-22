import React from "react";
import "./AuthForm.css";
import Button from "../Button";

const AuthForm = ({
  title = "",
  subtitle = "",
  body = React.Element,
  footer = React.Element,
  buttonText = "",
  isOpen = Boolean,
  submitAction = () => {},
  firstRender = Boolean,
}) => {
  if (!isOpen) return null;
  return (
    <form onSubmit={submitAction} className="auth-form">
      <h2 className={`auth-form__title ${firstRender && "animation a1"}`}>{title}</h2>
      <h4 className={`auth-form__subtitle ${firstRender && "animation a1"}`}>{subtitle}</h4>
      <div className={`auth-form__body ${firstRender && "animation a3"}`}>{body}</div>
      <div type="submit" className={`auth-form__submit-btn ${firstRender && "animation a4"}`}>
        <Button name={buttonText}></Button>
      </div>
      <div className={`auth-form__footer ${firstRender && "animation a5"}`}>{footer}</div>
    </form>
  );
};

export default AuthForm;
