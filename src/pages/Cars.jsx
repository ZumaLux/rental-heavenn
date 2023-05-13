import React from "react";

import useFetch from "../hooks/useFetch";

const Cars = () => {
  const { data } = useFetch("cars");
  return (
    <div>
      {data.map((car) => (
        <div key={car.id}>{car.model}</div>
      ))}
    </div>
  );
};

export default Cars;
