import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cars from "./pages/Cars";
import Home from "./pages/Home";
import Navbar from "./layouts/navbar/Navbar";
import SingleCar from "./pages/SingleCar";
import Footer from "./layouts/footer/Footer";
import { AuthProvider } from "./context/authContext";
import AuthPage from "./pages/AuthPage";
import { FormProvider } from "./context/formContext";

function App() {
  return (
    <>
      <AuthProvider>
        <FormProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/cars/:id" element={<SingleCar />} />
            <Route path="/auth" element={<AuthPage />} />
          </Routes>
          <Footer />
        </FormProvider>
      </AuthProvider>
    </>
  );
}

export default App;
