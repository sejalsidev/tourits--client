import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegFlag } from "react-icons/fa6";
import { SiTrustedshops } from "react-icons/si";
import { FaSlideshare } from "react-icons/fa";
import Slider from "../Component/Slider/Slider";
import Title from "../Component/Title/Title";
import TravelPerferct from "../Component/Travelperfection/TravelPerferct";
import Footer from "../Component/Footer/Footer";
import BestPackage from "../Component/TourPackage/BestPackage";
import Guide from "../Component/Guide/Guide";

const Home = () => {
  const data = [
    { icon: <IoLocationOutline />, text: "Tell Us What You Want To Do" },
    {
      icon: <FaRegFlag />,
      text: "Share Your Travel Locations",
    },
    { icon: <SiTrustedshops />, text: "Share Your Travel Prefernce" },
    { icon: <FaSlideshare />, text: "100% Trusted Your Agency" },
  ];
  return (
    <>
      <Slider />

      <Title
        top={"Core Features"}
        spantext={"Find"}
        heading={"Travel Perfection"}
        description={
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae accusamus distinctio fugit repellat unde, assumenda."
        }
      />

      {/* ---------------------define Location------------------------- */}
      <TravelPerferct data={data} />
      {/* ---------------------define title------------------------- */}
      <Title
        top={"Top Destinations"}
        heading={"Top Destinations"}
        spantext={"Explore"}
        description={
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae accusamus distinctio fugit repellat unde, assumenda."
        }
      />

      {/* ---------------------define image-Tourist------------------------- */}
      <div className="container text-center justify-content-center">
        <div className="row ">
          <div className="col-6 style-image">
            <div>
              <img
                src="../images/goa.jpeg"
                alt=""
                style={{ width: "100%", marginBottom: "5px" }}
              />
            </div>
            <div
              className="d-flex text-center justify-content-center"
              style={{ gap: "6px" }}
            >
              <img
                src="../images/Varanasi.jpeg"
                alt=""
                style={{ width: "50%", height: "60%" }}
              />

              <img
                src="../images/karela.jpeg"
                alt=""
                style={{ width: "50%", height: "60%" }}
              />
            </div>
          </div>
          <div className="col-6 style-image">
            <img
              src="../images/manali.jpeg"
              alt=""
              style={{ width: "100%", height: "73%" }}
            />
          </div>
        </div>
      </div>

      {/* ---------------------Best Tour Packages------------------------- */}
      <div className="container">
        <h4 className="section-title">Top Pick</h4>
        <h2 className="section-title-1">
          <span>Best </span>
          Tour Packages
        </h2>
        <p>Most popular choices for travelers from India</p>
        <BestPackage />
      </div>
      {/* ---------------------Excellent Guides------------------------- */}

      <Title
        top={"Tour Guides"}
        spantext={"Meet Our"}
        heading={"Excellent Guides"}
        description={"Exceptional Guides for unforgettable journey"}
      />
      <Guide />
      {/* -------------------------------footer------------------------------------- */}
      <Footer />
    </>
  );
};

export default Home;
