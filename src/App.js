import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cars from "./pages/Cars";
import Home from "./pages/Home";
import Navbar from "./layouts/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
      </Routes>
    </>
  );
}

export default App;
