import React, { useState } from "react";
import Button from "@mui/material/Button";
import { useEffect } from "react";
import axios from "axios";
import Footer from "../Component/Footer/Footer";

const Destination = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:2000/api/destination/getDesti")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <div style={{ marginBottom: "60px" }}>
        <img
          src="../images/destination.jpeg"
          alt=""
          style={{ width: "100%", height: "800px" }}
        />
      </div>

      {/* ----------------------------Define Title----------------------------- */}
      <div className="container" style={{ marginBottom: "60px" }}>
        <div className="row text-center justify-content-center">
          <div className="col-lg-7">
            <h4 className="section-title text-center">Top Destination</h4>
            <h2 className="section-title-1 text-center">
              <span>Explore </span>
              Top Destination
            </h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
              accusamus distinctio fugit repellat unde, assumenda.
            </p>
          </div>
        </div>
      </div>

      {/* ----------------------------Define destination place image----------------------------- */}
      <div className="container" style={{ marginBottom: "60px" }}>
        <div className="row d-flex justify-content-center">
          {loading ? (
            <p>Loading...</p>
          ) : (
            data?.map((destination, index) => (
              <div
                key={index}
                className="col-xl-4 col-md-6 col-sm-12 destination-image mb-2"
              >
                <div className="card text-white">
                  <img
                    className="card-img"
                    src={destination.imageUrl}
                    alt="Card image"
                  />
                  <div className="card-img-overlay">
                    <h3 className="card-title fw-light">{destination.state}</h3>
                    <p className="card-text fw-light">{destination.place}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* -------------------------------footer------------------------------------- */}
      <Footer />
    </>
  );
};

export default Destination;
