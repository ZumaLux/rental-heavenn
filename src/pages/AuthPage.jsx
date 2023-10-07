import React, { useState } from "react";
import "./AuthPage.css";
import LoginForm from "../components/forms/LoginForm";
import RegisterForm from "../components/forms/RegisterForm";

const AuthPage = () => {
  const [isLoginActive, setIsLoginActive] = useState(true);
  const [isRegisterActive, setIsRegisterActive] = useState(false);

  const toggleLoginForm = () => {
    setIsRegisterActive(false);
    setIsLoginActive(true);
  };
  const toggleRegisterForm = () => {
    setIsLoginActive(false);
    setIsRegisterActive(true);
  };

  return (
    <div className="page-container">
      <div className="auth-page">
        <div className="auth-page__form">
          <LoginForm isActive={isLoginActive} toggleRegisterForm={toggleRegisterForm} />
          <RegisterForm isActive={isRegisterActive} toggleLoginForm={toggleLoginForm} />
        </div>
        <div className="auth-page__img"></div>
      </div>
    </div>
  );
};

export default AuthPage;
