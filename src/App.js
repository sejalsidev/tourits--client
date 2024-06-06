import { Route, Routes } from "react-router-dom";
import "./App.css";
import * as mdb from "mdb-ui-kit";
// import Login from "./pages/Login";
import { Navbar } from "./pages/Navbar";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Destination from "./pages/Destination";
import Tour from "./pages/Tour";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Otp from "./pages/Otp";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

function App() {
  return (
    <>
      <Navbar />

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
    </>
  );
}

export default App;
