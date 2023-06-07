import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cars from "./pages/Cars";
import Home from "./pages/Home";
import Navbar from "./layouts/navbar/Navbar";
import SingleCar from "./pages/SingleCar";
import Footer from "./layouts/footer/Footer";
import AuthPage from "./pages/AuthPage";
import AddCar from "./modals/AddCar";
import EditCar from "./modals/EditCar";
import Contacts from "./pages/Contacts";
import RentCar from "./modals/RentCar";
import Rentals from "./pages/Rentals";
import ProtectedRoutes from "./layouts/navbar/ProtectedRoutes";

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
        <Route element={<ProtectedRoutes />}>
          <Route path="/rentals" element={<Rentals />} />
        </Route>
      </Routes>
      <AddCar />
      <EditCar />
      <Footer />
      <RentCar />
    </>
  );
}

export default App;
