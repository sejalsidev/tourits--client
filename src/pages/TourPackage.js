import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import Footer from "../Component/Footer/Footer";
import { useNavigate, useParams } from "react-router-dom";
import Login from "./Login";

const TourPackage = () => {
  const { id } = useParams();
  console.log("idddd", id);
  const [packageData, setPackageData] = useState(null);
  const [numPeople, setNumPeople] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const getPackageData = async () => {
      try {
        const response = await fetch(
          `http://localhost:2000/api/package/getPackageById/${id}`
        );
        const data = await response.json();
        setPackageData(data);
        setTotalPrice(data.price); // Initialize total price with the package price
      } catch (error) {
        console.error("Error fetching package data:", error);
      }
    };

    getPackageData();
  }, [id]);

  const handlePeopleChange = (event) => {
    const selectedNumPeople = parseInt(event.target.value);
    setNumPeople(selectedNumPeople);
    setTotalPrice(selectedNumPeople * packageData.price);
  };

  const handleBooking = () => {
    if (Login) {
      navigate(`/booking`, {
        state: {
          packageId: id,
          numPeople: numPeople,
          pricePerPerson: packageData.price,
          totalPrice: totalPrice,
        },
      });
    } else {
      alert("Please log in to proceed with the booking.");
    }
  };

  if (!packageData) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div style={{ marginBottom: "60px" }}>
        <img
          src="../images/destination.jpeg"
          alt=""
          style={{ width: "100%", height: "600px" }}
        />
      </div>

      <div className="container mb-4">
        <div className="row">
          <div
            className="col-xl-6 col-lg-6 col-md-6 col-sm-6 "
            style={{ marginBottom: "60px" }}
          >
            <h1>{packageData.destination}</h1>
            <img
              src={packageData.imageUrl}
              alt=""
              style={{ marginBottom: "20px" }}
            />
            <p>{packageData.description}</p>
          </div>
          <div
            className="col-xl-6 col-lg-6 col-md-6 col-sm-6"
            style={{ color: "white", marginTop: "50px" }}
          >
            <div
              className="card border px-3"
              style={{
                width: "60%",
                backgroundColor: "#259b9d",
                color: "white",
              }}
            >
              <div className="card-body text-center">
                <h6>MAKE A BOOKING</h6>
                <p>------------------------------</p>
              </div>
              <p>Trip Start-Date</p>
              <p>{packageData.date}</p>
              <p>{packageData.duration}</p>
              <label htmlFor="noofpeople">No. Of People</label>
              <select
                className="form-select mb-2"
                value={numPeople}
                onChange={handlePeopleChange}
              >
                <option selected disabled>
                  Select Person
                </option>
                {[...Array(6).keys()].map((i) => (
                  <option key={i} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
              <div
                className="card border form-control mb-3"
                style={{ width: "auto", height: "200px" }}
              >
                <p>Per Person: ${packageData.price} </p>
                <p>Other Fees: Free</p>
                <p className="border">Total: ${totalPrice}</p>
                <p>Note: Click Instant Book and Add Passenger Details</p>
              </div>
              <div className="d-flex justify-content-center">
                <Button
                  type="submit"
                  className="form-control-submit-button mb-3"
                  style={{
                    backgroundColor: "#0d6566",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "#0d6566",
                    },
                    "&:active": {
                      backgroundColor: "#0d6566",
                    },
                  }}
                  onClick={handleBooking}
                >
                  Instant Book
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TourPackage;
