import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { HomeFeature, Button } from "../components";
import { AiFillCar as CarIcon } from "react-icons/ai";
import { FaRegMoneyBillAlt as MoneyIcon } from "react-icons/fa";
import { GiClick as ClickIcon } from "react-icons/gi";
import jeep from "./../assets/jeep.jpg";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <section className="home-header">
        <div className="home-header__left-side">
          <h1>Keep steering. Leave the rest to us.</h1>
          <button className="rent-btn" onClick={() => navigate("/cars")}>
            RENT NOW
          </button>
        </div>
        <h5 className="author-name">Photo by Lukas Žvikas</h5>
      </section>

      <section className="home-features">
        <HomeFeature
          title="Quality cars"
          text="We have many different types of vehicles to fit your taste. And we keep them in top shape"
          icon={<CarIcon />}
        />
        <HomeFeature
          title="Low prices"
          text="Drive around the world carefree with the lowest prices"
          icon={<MoneyIcon />}
        />
        <HomeFeature
          title="Fast rent"
          text="Renting a car has never been so easy. You are just one click away"
          icon={<ClickIcon />}
        />
      </section>

      <section className="home-dark-lovers">
        <div className="home-dark-lovers__image-container">
          <img src={jeep} alt="" />
          <h5 className="author-name">Photo by Kam Pratt</h5>
        </div>
        <div className="home-dark-lovers__text-container">
          <h2>Dark Lovers</h2>
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
    </div>
  );
};

export default Home;
