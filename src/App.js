import { Route, Routes } from "react-router-dom";
import "./App.css";
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
import TourPackage from "./pages/TourPackage";
import Booking from "./pages/Booking";
import Protected from "./Component/Protected/Protected";
import ChangePassword from "./pages/ChangePassword";
import ExampleJson from "./pages/ExampleJson";
import JsonExample from "./pages/JsonExample";
import ExampleTable from "./pages/ExampleTable";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/tours" element={<Tour />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tourpackage/:id" element={<TourPackage />} />
        <Route path="/booking" element={<Protected Component={Booking} />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/examplejson" element={<ExampleJson />} />
        <Route path="/jsonexample" element={<JsonExample />} />
        <Route path="/ExampleTable" element={<ExampleTable />} />
      </Routes>
    </>
  );
}

export default App;
