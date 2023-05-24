import React from "react";
import { Link } from "react-router-dom";
import "./CarCard.css";

const CarCard = ({
  id,
  brand,
  model,
  fuel,
  year,
  seats,
  image,
  price,
  discount,
  discountPrice,
}) => {
  return (
    <Link className="car-card-link" to={`/cars/${id}`}>
      <div className="car-card">
        <div className="car-card__image">
          <img src={image} alt={brand} />
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
            {discount ? <s>${price} </s> : <span>${price}</span>}
            {discount > 0 && <span>&ensp; ${discountPrice} </span>}
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
