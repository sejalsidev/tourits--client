import React from "react";
import { Carousel, initMDB } from "mdb-ui-kit"; // Assuming you have installed mdb-ui-kit as a dependency
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState, useEffect } from "react";
import "./Slide.css";
import axios from "axios";
const Slider = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:2000/api/slider/getDetail")
      .then((response) => {
        setSlides(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data from API", error);
      });
  }, []);
  useEffect(() => {
    // Initialize MDB Carousel on component mount
    initMDB({ Carousel });
  }, []);

  return (
    <>
      <div
        id="carouselDarkVariant"
        className="carousel slide carousel-fade carousel-dark"
        data-mdb-ride="carousel"
        style={{ marginBottom: "60px" }}
      >
        <div className="carousel-indicators">
          {slides.map((slide, index) => (
            <button
              key={index}
              data-mdb-target="#carouselDarkVariant"
              data-mdb-slide-to={index}
              className={`white-indicator ${index === 0 ? "active" : ""}`}
              aria-current={index === 0 ? "true" : undefined}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        <div className="">
          <div className="carousel-inner" style={{ height: "800px" }}>
            {slides?.map((slide, index) => (
              <div
                className={` main-slider carousel-item ${
                  index === 0 ? "active" : ""
                }`}
                key={index}
              >
                <img
                  src={slide.imageUrl}
                  className="d-block w-100"
                  alt={slide.altText}
                />
                <div className="slider-text">{slide?.title}</div>
              </div>
            ))}
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-mdb-target="#carouselDarkVariant"
          data-mdb-slide="prev"
        >
          <span aria-hidden="true">
            <FaChevronLeft className="icon" />
          </span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-mdb-target="#carouselDarkVariant"
          data-mdb-slide="next"
        >
          <span aria-hidden="true">
            <FaChevronRight className="icon" />
          </span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Slider;
