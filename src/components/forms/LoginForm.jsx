import React, { useState } from "react";
import AuthForm from "./AuthForm";
import { useFormContext } from "../../context/formContext";
import { FaGithub as GithubIcon } from "react-icons/fa";
import { FcGoogle as GoogleIcon } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { authWithGithub, authWithGoogle, createUserDetails, loginUser } from "../../firebase/auth";
import { collection_users } from "../../firebase/variables";
import { useAuthContext } from "../../context/authContext";

const LoginForm = () => {
  const { isLoginOpen, closeLogin } = useFormContext();
  const [isFirstRender, setIsFirstRender] = useState(true);
  const { currentUser } = useAuthContext();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  // LOGIN
  const login = async (e) => {
    e.preventDefault();
    if (currentUser) {
      setMessage("Already logged in!");
      return;
    }
    const loginResult = await loginUser(e.target.email.value, e.target.password.value);
    if (loginResult.success) navigate("/");
    else if (loginResult.message) setMessage(loginResult.message);
  };

  // LOGIN - GOOGLE
  const loginWithGoogle = () => {
    if (currentUser) {
      setMessage("Already logged in!");
      return;
    }
    authWithGoogle().then((res) => {
      if (res?.isNewUser) {
        const user = {
          username: res.user.displayName,
          email: res.user.email,
          role: "user",
        };
        createUserDetails(collection_users, user, res.user.uid);
      }
    });
  };

  // LOGIN - GITHUB
  const loginWithGithub = () => {
    if (currentUser) {
      setMessage("Already logged in!");
      return;
    }
    authWithGithub().then((res) => {
      if (res?.isNewUser) {
        const user = {
          username: res.user.displayName,
          email: res.user.email,
          role: "user",
        };
        createUserDetails(collection_users, user, res.user.uid);
      }
    });
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
      <button type="button" onClick={() => loginWithGoogle()}>
        <GoogleIcon />
        Google
      </button>
      <button type="button" onClick={() => loginWithGithub()}>
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
      message={message}
    />
  );
};

export default LoginForm;
