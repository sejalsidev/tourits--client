import React from "react";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const ExampleTable = () => {
  const location = useLocation();
  const { detail } = location.state || {};

  return (
    <>
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-sm-6">
            <div className="card border" style={{ width: "400px" }}>
              {detail ? (
                <div className="card-body">
                  <p>
                    <strong>Image:</strong>{" "}
                    <img
                      src={detail.image}
                      alt=""
                      style={{ width: "100px", height: "100px" }}
                    />
                  </p>
                  <p>
                    <strong>Title:</strong> {detail.title}
                  </p>
                  <p>
                    <strong>Name:</strong> {detail.name}
                  </p>
                  <p>
                    <strong>Email:</strong> {detail.email}
                  </p>
                  <p>
                    <strong>City:</strong> {detail.city}
                  </p>
                  <p>
                    <strong>Date:</strong> {detail.date}
                  </p>
                  <p>
                    <strong>Description:</strong> {detail.description}
                  </p>
                </div>
              ) : (
                <p>No details available</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExampleTable;
