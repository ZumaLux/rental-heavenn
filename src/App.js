import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, Cars, SingleCar, AuthPage, Contacts, Rentals } from "./pages";
import ProtectedRoutes from "./layouts/navbar/ProtectedRoutes";
import Navbar from "./layouts/navbar/Navbar";
import Footer from "./layouts/footer/Footer";

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
      <Footer />
    </>
  );
}

export default App;
