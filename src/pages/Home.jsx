import React, { useEffect } from "react";
import "./Home.css";
import { useAuthContext } from "../context/authContext";
import { signOutUser } from "../firebase/auth";
import AddCar from "../modals/AddCar";

const Home = () => {
  const { currentUser } = useAuthContext();

  useEffect(() => {
    console.log("user home: ", currentUser);
  }, [currentUser]);
  return (
    <div className="page-container">
      Home
      <p>{currentUser?.uid}</p>
      <button onClick={() => signOutUser()}>Sign out</button>
      <AddCar />
    </div>
  );
};

export default Home;
