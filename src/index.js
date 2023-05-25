import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/authContext";
import FormProvider from "./context/formContext";
import ModalProvider from "./context/modalContext";
import CarProvider from "./context/carContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ModalProvider>
          <FormProvider>
            <CarProvider>
              <App />
            </CarProvider>
          </FormProvider>
        </ModalProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
