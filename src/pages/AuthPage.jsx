import React from "react";
import "./AuthPage.css";
import LoginForm from "../components/modals/LoginForm";
import RegisterForm from "../components/modals/RegisterForm";

const AuthPage = () => {
  return (
    <div className="page-container">
      <div className="auth-page">
        <div className="form-container">
          <LoginForm />
          <RegisterForm />
        </div>
        <div className="img-container"></div>
      </div>
    </div>
  );
};

export default AuthPage;
