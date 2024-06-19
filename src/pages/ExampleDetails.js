import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import React, { useState } from "react";
import { TextField } from "@mui/material";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button, Modal } from "react-bootstrap";

const ExampleDetails = () => {
  const [data, setData] = useState(null); // State to hold form data
  const [date, setDate] = useState(null);
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const validationSchema = yup.object({
    name: yup.string().required("Name is required"),
    description: yup.string().required("Description is required"),
  });

  const handleData = (values) => {
    setData({ ...values, date }); // Save form values and date to state
    handleShow(); // Open the modal
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <Formik
              initialValues={{
                name: "",
                image: null,
                description: "",
              }}
              validationSchema={validationSchema}
              onSubmit={handleData}
            >
              {({ setFieldValue }) => (
                <Form>
                  <div className="form-group">
                    <label className="pt-2" htmlFor="name">
                      Name
                    </label>
                    <Field
                      as={TextField}
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="form-control"
                    />
                    <ErrorMessage
                      component="div"
                      className="text-danger"
                      name="name"
                    />
                  </div>
                  <div className="form-group">
                    <label className="pt-2" htmlFor="image">
                      Image
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      onChange={(event) => {
                        setFieldValue("image", event.currentTarget.files[0]);
                      }}
                    />
                  </div>
                  <div className="form-group pt-2">
                    <label className="pt-2" htmlFor="date">
                      Date
                    </label>
                    <ReactDatePicker
                      selected={date}
                      className="form-control"
                      name="date"
                      id="date"
                      onChange={(date) => setDate(date)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="pt-2" htmlFor="description">
                      Description
                    </label>
                    <Field
                      as={TextField}
                      type="text"
                      name="description"
                      placeholder="Description"
                      className="form-control"
                    />
                    <ErrorMessage
                      component="div"
                      className="text-danger"
                      name="description"
                    />
                  </div>
                  <div className="form-group pt-2">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>User Details</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>
                  <strong>Name:</strong> {data && data.name}
                </p>
                <p>
                  <strong>Description:</strong> {data && data.description}
                </p>
                <p>
                  <strong>image:</strong>{" "}
                  {data && data.image && (
                    <img
                      src={URL.createObjectURL(data.image)}
                      alt="Uploaded"
                      style={{ maxWidth: "100%" }}
                    />
                  )}
                </p>
                <p>
                  <strong>Date:</strong>{" "}
                  {data && data.date && data.date.toDateString()}
                </p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExampleDetails;
