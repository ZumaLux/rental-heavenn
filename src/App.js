import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cars from "./pages/Cars";
import Home from "./pages/Home";
import Navbar from "./layouts/navbar/Navbar";
import SingleCar from "./pages/SingleCar";
import Footer from "./layouts/footer/Footer";
import AuthPage from "./pages/AuthPage";
import AddCarModal from "./modals/AddCarModal";
import EditCarModal from "./modals/EditCarModal";
import { useModalContext } from "./context/modalContext";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/cars/:id" element={<SingleCar />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
      <AddCarModal />
      <EditCarModal />
      <Footer />
    </>
  );
}

export default App;
