import React, { createContext, useContext, useState } from "react";

const RentalContext = createContext();

const RentalProvider = ({ children }) => {
  const [rentalList, setRentalList] = useState([]);

  return (
    <RentalContext.Provider
      value={{
        rentalList,
        setRentalList,
      }}
    >
      {children}
    </RentalContext.Provider>
  );
};

export const useRentalContext = () => useContext(RentalContext);
export default RentalProvider; // wrapper
