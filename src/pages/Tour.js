import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import axios from "axios";
import Footer from "../Component/Footer/Footer";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";

const Tour = () => {
  const itemsPerPage = 4; // Number of tour packages to display per page
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:2000/api/package/getPackage")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  // Calculate the index range for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Handle pagination change
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleViewDetail = (_id) => {
    console.log(_id);
    navigate(`/tourpackage/${_id}`);
  };
  return (
    <>
      <div style={{ marginBottom: "60px" }}>
        <img
          src="../images/destination.jpeg"
          alt=""
          style={{ width: "100%", height: "600px" }}
        />
      </div>

      <div className="container" style={{ marginBottom: "60px" }}>
        <div className="row d-flex justify-content-center">
          {loading ? (
            <p>Loading...</p>
          ) : (
            currentItems.map((item, index) => (
              <div key={index} className="col-lg-3 col-md-6 col-sm-6 mb-3">
                <div className="card border">
                  <img
                    src={item.imageUrl}
                    className="card-img-top w-100"
                    alt={item.title}
                  />
                  <div className="card-body">
                    <p>{item.duration}</p>
                    <h5>{item.title}</h5>
                    <p>{item.destination}</p>
                    <p>{item.description}</p>
                    <p>{item.price}</p>
                    <Button
                      type="submit"
                      className="form-control-submit-button"
                      style={{
                        height: "30%",
                        backgroundColor: "#16aaac",
                        color: "#fff",
                        "&:hover": {
                          backgroundColor: "#16aaac",
                        },
                        "&:active": {
                          backgroundColor: "#16aaac",
                        },
                      }}
                      onClick={() => handleViewDetail(item._id)}
                    >
                      View Detail
                    </Button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="container">
        <div className="row text-center justify-content-center">
          <div className="col-lg-3 col-md-6 col-sm-6 mb-5">
            <Stack spacing={2}>
              <Pagination
                count={Math.ceil(data.length / itemsPerPage)}
                page={currentPage}
                onChange={handlePageChange}
                variant="outlined"
                color="primary"
              />
            </Stack>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Tour;
