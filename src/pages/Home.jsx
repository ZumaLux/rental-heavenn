import React, { useEffect } from "react";
import "./Home.css";
import { useAuthContext } from "../context/authContext";
import { signOutUser } from "../firebase/auth";
import AddCar from "../modals/AddCarModal";
import { useModalContext } from "../context/modalContext";

const Home = () => {
  const { currentUser } = useAuthContext();
  const { openModal } = useModalContext();

  useEffect(() => {
    console.log("user home: ", currentUser);
  }, [currentUser]);
  return (
    <div className="page-container">
      Home
      <p>{currentUser?.uid}</p>
      <button onClick={() => signOutUser()}>Sign out</button>
      <button onClick={() => openModal()}>Modal</button>
    </div>
  );
};

export default Home;
