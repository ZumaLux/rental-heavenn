import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/authContext";
import FormProvider from "./context/formContext";
import ModalProvider from "./context/modalContext";
import CarProvider from "./context/carContext";
import RentalProvider from "./context/rentalContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <AuthProvider>
    <BrowserRouter>
      <CarProvider>
        <RentalProvider>
          <ModalProvider>
            <FormProvider>
              <App />
            </FormProvider>
          </ModalProvider>
        </RentalProvider>
      </CarProvider>
    </BrowserRouter>
  </AuthProvider>
  //</React.StrictMode>
);
