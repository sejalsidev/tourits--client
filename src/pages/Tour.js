import React, { useState } from "react";
import { Button } from "@mui/material";
import { useEffect } from "react";
import axios from "axios";

const Tour = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:2000/api/package/getPackage")
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
          style={{ width: "100%", height: "600px" }}
        />
      </div>

      <div className="container" style={{ marginBottom: "60px" }}>
        <div className="row d-flex justify-content-center">
          {loading ? (
            <p>Loading...</p>
          ) : (
            data?.map((item, index) => (
              <div key={index} className="col-lg-3 col-md-6 col-sm-6 mb-3">
                <div className="card border">
                  <img
                    src={item.imageUrl}
                    className="card-img-top w-100"
                    alt="..."
                  />
                  <div className="card-body">
                    <p>{item.duration}</p> <h5>{item.title}</h5>{" "}
                    <p>{item.destination}</p> <p>{item.description}</p>{" "}
                    <p>{item.price}</p>{" "}
                    <Button
                      type="submit"
                      className="form-control-submit-button "
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
      {/* -------------------------------footer------------------------------------- */}
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-6 d-flex justify-content-center">
              <div className="tavel-content">
                <h4>TRAVELL IN</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  nihil deleniti ad deserunt officiis nemo voluptatum cupiditate
                  quidem, neque sunt molestias consequatur est nam, laboriosam,
                  recusandae dolores quia ab? Veritatis.
                </p>
                <ul>
                  <li>PO Box:+47-456-567-9876 </li>
                  <li>Location:Ausrtalia</li>
                  <li>Email:info@travellin.com</li>
                  <li>Website:www.Travellin.com</li>
                </ul>
              </div>
            </div>
            <div className="col-3">
              <div className="tavel-content">
                <h4>Quick Link</h4>
                <ul className="list-style">
                  <li>
                    <a className="white" href="http://localhost:3000/Home">
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      className="white"
                      href="http://localhost:3000/destination"
                    >
                      Destination
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a className="white" href="http://localhost:3000/tour">
                      Tour
                    </a>
                  </li>
                  <li>
                    <a className="white" href="http://localhost:3000/contact">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a className="white" href="http://localhost:3000/about">
                      About US
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-3">
              <div className="tavel-content">
                <h4>Newsletter</h4>
                <p>
                  A newsletter is a printed or electronic report containing news
                  concerning the activities of a business or an organization
                  that is sent to its members, customers, employees or other
                  subscribers. Newsletters generally contain one main topic of
                  interest to its recipients.
                </p>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control  mb-2"
                  placeholder="Email Address"
                  /* style={{ width: "50%" }} */
                />
                <Button
                  type="submit"
                  className="form-control-submit-button "
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
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            <div className="copyright-inner rounded d-flex align-items-center justify-content-between">
              <div className="copyright-text">
                <p className="m-0 white">2024 Travelin. All rights reserved.</p>
              </div>
              <div className="social-links">
                {/* <ul>
                  <li>
                    <a href="#">
                      <FaFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaLinkedin />
                    </a>
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tour;
