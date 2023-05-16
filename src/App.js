import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cars from "./pages/Cars";
import Home from "./pages/Home";
import Navbar from "./layouts/navbar/Navbar";
import SingleCar from "./pages/SingleCar";
import Footer from "./layouts/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/cars/:id" element={<SingleCar />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
