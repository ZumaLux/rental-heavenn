import React from "react";
import { useParams } from "react-router-dom";

const SingleCar = () => {
  const { id } = useParams();

  return <div>SingleCar</div>;
};

export default SingleCar;
