import React, { createContext, useContext, useState } from "react";

const CarContext = createContext();

const CarProvider = ({ children }) => {
  const [carList, setCarList] = useState([]);
  const [singleCar, setSingleCar] = useState();

  return (
    <CarContext.Provider
      value={{
        carList,
        singleCar,
        setCarList,
        setSingleCar,
      }}
    >
      {children}
    </CarContext.Provider>
  );
};

export const useCarContext = () => useContext(CarContext);
export default CarProvider; // wrapper
