import { Form, Formik } from "formik";
import React, { useState } from "react";
import * as yup from "yup";
import Data from "../JsonFile/Data.json";
import { Button, Modal, Form as BootstrapForm } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const JsonExample = () => {
  const [data, setData] = useState(Data);
  const [filteredData, setFilteredData] = useState(Data);
  const [startDate, setStartDate] = useState(new Date());
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);
  const [detail, setSelectedDetail] = useState(null);
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = (item) => {
    setSelectedDetail(item);
    setShow(true);
  };

  const handleNavigate = (item) => {
    navigate("/ExampleTable", { state: { detail: item } });
  };

  const validationSchema = yup.object({
    name: yup.string().required("name is required"),
    email: yup.string().required("email is required"),
    date: yup.string().required("date is required"),
    image: yup.string().required("image is required"),
    city: yup.string().required("city is required"),
    title: yup.string().required("title is required"),
    description: yup.string().required("description is required"),
  });

  const handleData = () => {
    alert("Data submitted");
  };

  const handleClear = () => {
    setSearch("");
    setFilteredData(data);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
    const filtered = data.filter((item) => {
      return (
        item.name.toLowerCase().includes(event.target.value.toLowerCase()) ||
        item.email.toLowerCase().includes(event.target.value.toLowerCase()) ||
        item.city.toLowerCase().includes(event.target.value.toLowerCase())
      );
    });
    setFilteredData(filtered);
  };

  return (
    <>
      <div
        className="container d-flex flex-column justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <BootstrapForm.Control
          type="text"
          placeholder="Search by name, email, or city"
          value={search}
          onChange={handleSearch}
          className="mb-4"
        />
        <Button variant="secondary" onClick={handleClear}>
          Clear
        </Button>
        <Formik
          initialValues={{
            name: "",
            email: "",
            date: "",
            image: "",
            city: "",
            title: "",
            description: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleData}
        >
          <Form>
            <div>
              <table className="table">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <img
                          src={item.image}
                          alt=""
                          style={{ width: "100px", height: "100px" }}
                        />
                      </td>
                      <td>{item.title}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.city}</td>
                      <td>
                        <ReactDatePicker
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                        />
                      </td>
                      <td>{item.description}</td>
                      <td style={{ display: "flex", gap: "10px" }}>
                        <Button
                          className="success"
                          type="button"
                          name="submit"
                          onClick={() => handleShow(item)}
                        >
                          View
                        </Button>
                        <Button
                          className="primary"
                          type="button"
                          onClick={() => handleNavigate(item)}
                        >
                          Navigate
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Form>
        </Formik>
        {detail && (
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Booking Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
                <strong>Image:</strong>{" "}
                <img
                  src={detail.image}
                  alt=""
                  style={{ width: "100px", height: "100px" }}
                />
              </p>
              <p>
                <strong>Title:</strong> {detail.title}
              </p>
              <p>
                <strong>Name:</strong> {detail.name}
              </p>
              <p>
                <strong>Email:</strong> {detail.email}
              </p>
              <p>
                <strong>City:</strong> {detail.city}
              </p>
              <p>
                <strong>Date:</strong>{" "}
                <ReactDatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </p>
              <p>
                <strong>Description:</strong> {detail.description}
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </div>
    </>
  );
};

export default JsonExample;
