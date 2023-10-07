import React, { createContext, useContext, useState } from "react";

const CarContext = createContext();

const CarProvider = ({ children }) => {
  const [carList, setCarList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [singleCar, setSingleCar] = useState();

  return (
    <CarContext.Provider
      value={{
        carList,
        isLoading,
        error,
        singleCar,
        setCarList,
        setIsLoading,
        setError,
        setSingleCar,
      }}
    >
      {children}
    </CarContext.Provider>
  );
};

export const useCarContext = () => useContext(CarContext);
export default CarProvider; // wrapper
