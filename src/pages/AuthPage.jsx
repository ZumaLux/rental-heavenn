import React, { useEffect, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { AuthProvider } from "../context/authContext";
import { registerFirebaseUser } from "../firebase/auth";
import "./AuthPage.css";
import LoginForm from "../components/modals/LoginForm";
import RegisterForm from "../components/modals/RegisterForm";

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
  };
  const register = async (e) => {
    e.preventDefault();
    const registrationSuccess = await registerFirebaseUser(email, password);
    if (registrationSuccess) {
      // user Details
    }
  };

  useEffect(() => {
    console.log(email);
  }, [email]);

  return (
    <div className="page-container">
      <div className="auth-page">
        <div className="form-container">
          {/* SignIn
          <form onSubmit={login}>
            <input type="email" name="loginEmail" placeholder="email" required />
            <input type="password" name="loginPassword" placeholder="password" />
            <button type="submit">Login</button>
          </form>
          SignUp
          <form onSubmit={register}>
            <input
              type="email"
              name="registerEmail"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="registerPassword"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Register</button>
          </form>
          <h1>no-user</h1> */}
          <LoginForm />
          <RegisterForm />
        </div>
        <div className="img-container"></div>
      </div>
    </div>
  );
};
// const AuthPage = () => {
//   return (
//     <div className="page-container">
//       <div className="sign-in-form">
//         <div className="left-part">
//           <form className="form">
//             <h2 className="title">Register</h2>
//             <h4 className="subtitle">Create new account</h4>
//             <input
//               className="form-field"
//               type="text"
//               name="registerName"
//               placeholder="Name"
//               defaultValue={""}
//               required
//             />
//             <input
//               className="form-field"
//               type="text"
//               name="registerSurname"
//               placeholder="Surname"
//               defaultValue={""}
//               required
//             />
//             <input
//               className="form-field"
//               type="text"
//               name="registerPhone"
//               placeholder="Phone"
//               defaultValue={""}
//               required
//             />
//             <input
//               className="form-field"
//               type="email"
//               name="registerEmail"
//               placeholder="Email"
//               defaultValue={""}
//               required
//             />
//             <input
//               className="form-field"
//               type="password"
//               name="registerPassword"
//               placeholder="Password"
//               defaultValue={""}
//               required
//             />
//             <p className="option">Log in</p>
//             <button className="" type="submit">
//               Register
//             </button>
//           </form>

//           {/* <form className="form">
//             <h2 className="animation a1">LOG IN</h2>
//             <h4 className="animation a2">Log in to your account using email and password</h4>
//             <input
//               className="form-field animation a3"
//               type="email"
//               name="loginEmail"
//               placeholder="Email"
//               defaultValue={""}
//               required
//             />
//             <input
//               className="form-field animation a4"
//               type="password"
//               name="loginPassword"
//               placeholder="Password"
//               defaultValue={""}
//               required
//             />
//             <p className="option animation a5">Don't have an account?</p>
//             <button className="animation a6" type="submit">
//               Login
//             </button>
//           </form> */}
//         </div>
//         <div className="right-part"></div>
//       </div>
//     </div>
//   );
// };

export default AuthPage;
