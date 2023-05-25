import React, { createContext, useContext, useState } from "react";

export const CarContext = createContext();

const CarProvider = ({ children }) => {
  const [carList, setCarList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <CarContext.Provider
      value={{
        carList,
        isLoading,
        error,
        setCarList,
        setIsLoading,
        setError,
      }}
    >
      {children}
    </CarContext.Provider>
  );
};

export const useCarContext = () => useContext(CarContext);
export default CarProvider; // wrapper
