import React, { useEffect } from "react";
import AuthForm from "./AuthForm";
import { useFormContext } from "../../context/formContext";
import { FaGithub as GithubIcon } from "react-icons/fa";
import { FcGoogle as GoogleIcon } from "react-icons/fc";

const LoginForm = () => {
  const { isLoginOpen, closeLogin } = useFormContext();

  const toggleForm = () => {
    closeLogin();
  };

  const bodyContent = (
    <div>
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <p onClick={toggleForm}>Don't have an account?</p>
    </div>
  );
  const footerContent = (
    <div>
      <p>or login with</p>
      <button>
        <GoogleIcon />
        Google
      </button>
      <button>
        <GithubIcon />
        GitHub
      </button>
    </div>
  );

  return (
    <AuthForm
      title="Log In"
      subtitle="Welcome back!"
      body={bodyContent}
      footer={footerContent}
      buttonText="LOGIN"
      isOpen={isLoginOpen}
    />
  );
};

export default LoginForm;
