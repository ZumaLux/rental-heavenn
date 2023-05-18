import React from "react";
import AuthForm from "./AuthForm";
import { useFormContext } from "../../context/formContext";
import { FaGithub as GithubIcon } from "react-icons/fa";
import { FcGoogle as GoogleIcon } from "react-icons/fc";
import { createUserDetails, registerUser } from "../../firebase/auth";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const { isRegisterOpen, closeRegister } = useFormContext();
  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();
    const user = {
      name: e.target.name.value,
      surname: e.target.surname.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      permissons: "user",
    };
    const registereResult = await registerUser(e.target.email.value, e.target.password.value);
    if (registereResult) {
      createUserDetails("users", user, registereResult.uid);
      navigate("/");
    }
  };

  const toggleForm = () => {
    closeRegister();
  };

  const bodyContent = (
    <div>
      <input type="text" name="name" placeholder="Name" required />
      <input type="text" name="surname" placeholder="Surname" required />
      <input type="text" name="phone" placeholder="Phone" required />
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
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
      submitAction={register}
      firstRender={false}
    />
  );
};

export default RegisterForm;
