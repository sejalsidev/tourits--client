import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";

const Guide = () => {
  const [guides, setGuides] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:2000/api/guide/getDetail"
        );
        setGuides(response.data);
      } catch (error) {
        console.error("Error fetching the guide data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container" style={{ marginBottom: "60px" }}>
      <div className="row d-flex justify-content-center">
        {guides.map((guide, index) => (
          <div key={index} className="col-xxl-3 col-md-6 col-sm-12">
            <div className="guide-container">
              <img
                src={guide.imageUrl}
                alt={guide.name}
                className="guide-image"
              />
              <Button
                type="submit"
                sx={{
                  width: "100%",
                  backgroundColor: "#16aaac",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "#16aaac",
                  },
                  "&:active": {
                    backgroundColor: "#16aaac",
                  },
                }}
                fullWidth
                variant="contained"
              >
                {guide.name}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guide;
