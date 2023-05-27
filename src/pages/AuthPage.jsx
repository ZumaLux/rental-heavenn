import React, { useEffect } from "react";
import "./AuthPage.css";
import LoginForm from "../components/forms/LoginForm";
import RegisterForm from "../components/forms/RegisterForm";
import { useFormContext } from "../context/formContext";

const AuthPage = () => {
  const { closeRegister } = useFormContext();

  useEffect(() => {
    // resets back to login form
    closeRegister();
  }, []);

  return (
    <div className="page-container">
      <div className="auth-page">
        <div className="auth-page__form">
          <LoginForm />
          <RegisterForm />
        </div>
        <div className="auth-page__img"></div>
      </div>
    </div>
  );
};

export default AuthPage;
