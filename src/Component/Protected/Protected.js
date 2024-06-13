import React, { useEffect } from "react";
import { useNavigate } from "react-router";

const Protected = (props) => {
  const { Component } = props;
  const navigate = useNavigate();
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) {
      navigate("/Login");
    }
  });
  return (
    <div>
      <Component />
    </div>
  );
};

export default Protected;
