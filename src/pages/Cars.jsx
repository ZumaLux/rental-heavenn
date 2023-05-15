import React from "react";
import "./Cars.css";
import useFetch from "../hooks/useFetch";
import CarCard from "../components/carCard/CarCard";

const Cars = () => {
  const { data } = useFetch("cars");
  return (
    <div className="page-container">
      <section className="cars-grid">
        <div className="cars-grid__content">
          {data.map((car) => (
            <CarCard key={car.id} {...car} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Cars;
