import React from "react";
import AuthForm from "./AuthForm";
import { useFormContext } from "../../context/formContext";
import { FaGithub as GithubIcon } from "react-icons/fa";
import { FcGoogle as GoogleIcon } from "react-icons/fc";
import {
  authWithGithub,
  authWithGoogle,
  createUserDetails,
  registerUser,
} from "../../firebase/auth";
import { useNavigate } from "react-router-dom";
import { collection_users } from "../../firebase/variables";
import { useAuthContext } from "../../context/authContext";

const RegisterForm = () => {
  const { isRegisterOpen, closeRegister } = useFormContext();
  const { currentUser } = useAuthContext();
  const navigate = useNavigate();

  // REGISTER
  const register = async (e) => {
    e.preventDefault();
    if (currentUser) {
      console.log("Already logged in!");
      return;
    }
    const user = {
      username: e.target.name.value + " " + e.target.surname.value,
      email: e.target.email.value,
      role: "user",
    };
    const registerResult = await registerUser(e.target.email.value, e.target.password.value);
    if (registerResult) {
      createUserDetails(collection_users, user, registerResult.uid);
      navigate("/");
    }
  };

  // REGISTER - GOOGLE
  const registerWithGoogle = () => {
    if (currentUser) {
      console.log("Already logged in!");
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

  // REGISTER - GITHUB
  const registerWithGithub = () => {
    if (currentUser) {
      console.log("Already logged in!");
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
    closeRegister();
  };

  const bodyContent = (
    <div>
      <input type="text" name="name" placeholder="Name" required />
      <input type="text" name="surname" placeholder="Surname" required />
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
      <p onClick={toggleForm}>Already have an account?</p>
    </div>
  );
  const footerContent = (
    <div>
      <p>or register with</p>
      <button type="button" onClick={() => registerWithGoogle()}>
        <GoogleIcon />
        Google
      </button>
      <button type="button" onClick={() => registerWithGithub()}>
        <GithubIcon />
        GitHub
      </button>
    </div>
  );

  return (
    <AuthForm
      title="Register"
      subtitle="Create new account"
      body={bodyContent}
      footer={footerContent}
      buttonText="SIGN UP"
      isOpen={isRegisterOpen}
      submitAction={register}
      firstRender={false}
    />
  );
};

export default RegisterForm;
