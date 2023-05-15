import React from "react";
import { Link } from "react-router-dom";
import "./CarCard.css";

const CarCard = ({ id, brand, model, fuel, year, seats, img, price, discount, discPrice }) => {
  return (
    <Link className="car-card-link" to={`/cars/${id}`}>
      <div className="car-card">
        <div className="car-card__image">
          <img src={img} alt={brand} />
        </div>
        <div className="car-card__info">
          <div className="car-card__extras">
            <span>{year}</span>
            <span>{fuel}</span>
            <span>{seats}-seat</span>
          </div>
          <span className="car-card__model">
            {brand}&nbsp; {model}
          </span>
          <div className="car-card__price">
            {discount > 0 && <span>${discPrice} </span>}
            <s>${price} </s> &ensp;
          </div>
        </div>
        {discount > 0 && (
          <div className="car-card__promo">
            <span>-{discount}%</span>
          </div>
        )}
      </div>
    </Link>
  );
};

export default CarCard;
