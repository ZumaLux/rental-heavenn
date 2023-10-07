import React, { createContext, useContext, useState } from "react";

const RentalContext = createContext();

const RentalProvider = ({ children }) => {
  const [rentalList, setRentalList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <RentalContext.Provider
      value={{
        rentalList,
        isLoading,
        error,
        setRentalList,
        setIsLoading,
        setError,
      }}
    >
      {children}
    </RentalContext.Provider>
  );
};

export const useRentalContext = () => useContext(RentalContext);
export default RentalProvider; // wrapper
