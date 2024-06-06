import React from "react";

const TravelPerferct = ({ data }) => {
  return (
    <>
      <div className="container" style={{ marginBottom: "60px" }}>
        <div className="row text-center justify-content-center">
          {data.map((item) => {
            return (
              <div className="col-lg-3 col-sm-6 icon-block">
                <i className="ion-location-outline"></i>
                <p>{item.icon}</p>
                <h6>{item.text}</h6>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TravelPerferct;
