import React from "react";
import AuthForm from "./AuthForm";
import { useFormContext } from "../../context/formContext";
import { FaGithub as GithubIcon } from "react-icons/fa";
import { FcGoogle as GoogleIcon } from "react-icons/fc";

const RegisterForm = () => {
  const { isRegisterOpen, closeRegister } = useFormContext();

  const toggleForm = () => {
    closeRegister();
  };

  const bodyContent = (
    <div>
      <input type="text" placeholder="Name" required />
      <input type="text" placeholder="Surname" required />
      <input type="text" placeholder="Phone" required />
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <p onClick={toggleForm}>Already have an account?</p>
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
      title="Register"
      subtitle="Create new account"
      body={bodyContent}
      footer={footerContent}
      buttonText="SIGN UP"
      isOpen={isRegisterOpen}
    />
  );
};

export default RegisterForm;
