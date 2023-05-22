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
