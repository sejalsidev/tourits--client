import React from "react";

const Title = ({ top, heading, description, spantext }) => {
  return (
    <>
      <div className="container" style={{ marginBottom: "60px" }}>
        <div className="row text-center justify-content-center">
          <div className="col-lg-7">
            <h4 className="section-title text-center">{top}</h4>
            <h2 className="section-title-1 text-center">
              <span>{spantext} </span>
              {heading}
            </h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Title;
