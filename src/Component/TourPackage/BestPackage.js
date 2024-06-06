import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";

const BestPackage = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:2000/api/package/getPackage")
      .then((response) => {
        setPackages(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the packages!", error);
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        {packages &&
          packages.map((pkg, index) =>
            index < 3 ? (
              <div key={index} className="col-4 icon-block">
                <div>
                  <img
                    src={pkg.imageUrl}
                    alt={pkg.name}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
                <div>
                  <Button
                    type="submit"
                    style={{
                      marginLeft: "60%",
                      backgroundColor: "#16aaac",
                      color: "#fff",
                      "&:hover": {
                        backgroundColor: "#16aaac",
                      },
                      "&:active": {
                        backgroundColor: "#16aaac",
                      },
                    }}
                    variant="contained"
                  >
                    {pkg.day}
                  </Button>
                </div>
                <p>{pkg.destination}</p>
                <h6>{pkg.description}</h6>
                <p>
                  ${pkg.price} <span className="person">| Per Person</span>
                </p>
              </div>
            ) : (
              ""
            )
          )}
      </div>
    </div>
  );
};

export default BestPackage;
