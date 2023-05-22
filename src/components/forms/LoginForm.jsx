import React, { useState } from "react";
import AuthForm from "./AuthForm";
import { useFormContext } from "../../context/formContext";
import { FaGithub as GithubIcon } from "react-icons/fa";
import { FcGoogle as GoogleIcon } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../firebase/auth";

const LoginForm = () => {
  const { isLoginOpen, closeLogin } = useFormContext();
  const [isFirstRender, setIsFirstRender] = useState(true);
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    const loginResult = await loginUser(e.target.email.value, e.target.password.value);
    if (loginResult) navigate("/");
    e.target.reset();
  };

  const toggleForm = () => {
    setIsFirstRender(false);
    closeLogin();
  };

  const bodyContent = (
    <div>
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
      <p onClick={toggleForm}>Don't have an account?</p>
    </div>
  );
  const footerContent = (
    <div>
      <p>or login with</p>
      <button disabled>
        <GoogleIcon />
        Google
      </button>
      <button disabled>
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
      firstRender={isFirstRender}
      submitAction={login}
    />
  );
};

export default LoginForm;
