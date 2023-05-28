import React, { useEffect } from "react";
import "./Home.css";
import { useAuthContext } from "../context/authContext";
import { signOutUser } from "../firebase/auth";
import { useNavigate } from "react-router-dom";
import Feature from "../components/Feature";
import { AiFillCar as CarIcon } from "react-icons/ai";
import { FaRegMoneyBillAlt as MoneyIcon } from "react-icons/fa";
import { GiClick as ClickIcon } from "react-icons/gi";
import jeep from "./../assets/jeep.jpg";
import Button from "../components/Button";

const Home = () => {
  const navigate = useNavigate();
  const { currentUser } = useAuthContext();

  useEffect(() => {
    console.log("user home: ", currentUser);
  }, [currentUser]);
  return (
    <div className="page-container">
      <section className="home-header">
        <div className="home-header__left-side">
          <h1>Keep steering. Leave the rest to us.</h1>
          <button className="rent-btn" onClick={() => navigate("/cars")}>
            RENT NOW
          </button>
        </div>
        <h5 className="home-header__author-name">Photo by Lukas Žvikas</h5>
      </section>

      <section className="home-features">
        <Feature
          title="Quality cars"
          text="We have many different types of vehicles to fit your taste. And we keep them in top shape."
          icon={<CarIcon />}
        />
        <Feature
          title="Low prices"
          text="Drive around the world carefree with the lowest prices"
          icon={<MoneyIcon />}
        />
        <Feature
          title="Fast rent"
          text="Renting a car has never been so easy. You are just one click away"
          icon={<ClickIcon />}
        />
      </section>

      <section className="home-dark-lovers">
        <div className="home-dark-lovers__image-container">
          <img src={jeep} alt="" />
          <p className="home-dark-lovers__author-name">Photo by Kam Pratt</p>
        </div>
        <div className="home-dark-lovers__text-container">
          <h1>Dark Lovers</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque voluptas unde magni
            laborum deserunt ratione, illum vitae, explicabo, illo aliquam distinctio suscipit
            placeat eum ut cumque eligendi repellat. Fuga repellat consequatur asperiores! Porro,
            optio quae quibusdam eum fuga tenetur nulla vel cupiditate, impedit ipsum vitae
            recusandae asperiores omnis, veritatis ullam?
          </p>
          <div className="see-more-btn">
            <Button label="See more" />
          </div>
        </div>
      </section>

      <p>{currentUser?.uid}</p>
      <button onClick={() => signOutUser()}>Sign out</button>
    </div>
  );
};

export default Home;
