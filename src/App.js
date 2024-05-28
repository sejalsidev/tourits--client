import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Login from "./components/Login";
import { Navbar } from "./components/Navbar";
import Contact from "./components/Contact";
import About from "./components/About";
import Destination from "./components/Destination";
import Tour from "./components/Tour";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Otp from "./components/Otp";

function App() {
  return (
    <>
      <Navbar />
      <div className="" style={{ marginTop: "68px" }}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="tours" element={<Tour />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="otp" element={<Otp />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
