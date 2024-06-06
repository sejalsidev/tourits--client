import { Button } from "@mui/material";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaNfcDirectional } from "react-icons/fa6";
import { CiMoneyCheck1 } from "react-icons/ci";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Footer from "../Component/Footer/Footer";

const About = () => {
  return (
    <>
      <div style={{ marginBottom: "60px" }}>
        <img
          src="../images/destination.jpeg"
          alt=""
          style={{ width: "100%", height: "500px" }}
        />
      </div>
      {/* -----------------------------------section-1-------------------------------------- */}
      <div className="container" style={{ marginBottom: "60px" }}>
        <div className="row d-flex justify-content-center">
          <div className="col-xl-6 col-sm-12">
            <h2 className="section-title-1">Get To Know Us</h2>
            <h3>Explore All Tour Of The World With Us.</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
              placeat consequatur iste reiciendis velit laboriosam tempore
              dolore ab soluta, error quae, repellat, consectetur iusto
              accusamus quaerat odio dicta earum fuga! Minima optio voluptatum
              impedit velit sapiente voluptatibus veniam beatae fugiat. Atque at
              eaque, dolorum laboriosam magnam reprehenderit a placeat quam
              quisquam voluptas, ad expedita, temporibus tempora amet nihil.
            </p>
          </div>
          <div className="col-xl-6 col-sm-12 pt-2">
            <img
              src="../images/aboutus-image2.jpg"
              alt=""
              style={{ width: "300px", height: "400px" }}
            />
          </div>
        </div>
      </div>

      {/* -----------------------------------section-2-------------------------------------- */}
      <div className="container" style={{ marginBottom: "60px" }}>
        <div className="row d-flex justify-content-center">
          <div className="col-xl-6 col-sm-12">
            <img
              src="../images/aboutus-image1.avif"
              alt=""
              style={{ width: "600px", height: "600px" }}
            />
          </div>
          <div className="col-xl-6 col-sm-12">
            <h2 className="section-title-1">Perfect Team</h2>
            <h3>Our Experience Guides</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At quos
              temporibus culpa possimus ad consectetur, corrupti aliquid
              voluptate eaque fugit. Officiis, doloremque sunt velit nam maiores
              expedita exercitationem odio voluptatibus?
            </p>
            <div className="icon-block">
              <FaLocationDot /> <span>Expert Team Guides</span>{" "}
              <h6>
                Expert Guides has been researching the world's legal market for
                almost 30 years and has become one of the most trusted resources
                for international buyers of legal services.
              </h6>
            </div>
            <div className="icon-block">
              <FaNfcDirectional /> <span>Correct Directions</span>{" "}
              <h6>
                Expert Guides has been researching the world's legal market for
                almost 30 years and has become one of the most trusted resources
                for international buyers of legal services.
              </h6>
            </div>
            <div className="icon-block">
              <CiMoneyCheck1 /> <span>Save Money & Time</span>{" "}
              <h6>
                Expert Guides has been researching the world's legal market for
                almost 30 years and has become one of the most trusted resources
                for international buyers of legal services.
              </h6>
            </div>
          </div>
        </div>
      </div>

      {/* -------------------------------footer------------------------------------- */}
      <Footer />
    </>
  );
};

export default About;
