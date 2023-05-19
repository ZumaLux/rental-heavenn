import React, { createContext, useContext, useEffect, useState } from "react";

export const FormContext = createContext();

const FormProvider = ({ children }) => {
  const [isLoginOpen, setIsLoginOpen] = useState(true);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const closeLogin = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(true);
  };

  const closeRegister = () => {
    setIsLoginOpen(true);
    setIsRegisterOpen(false);
  };

  return (
    <FormContext.Provider value={{ isLoginOpen, isRegisterOpen, closeLogin, closeRegister }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => useContext(FormContext);
export default FormProvider; // wrapper
