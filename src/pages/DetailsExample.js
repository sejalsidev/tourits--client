import { ErrorMessage, Form, Formik } from "formik";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import ReactDatePicker from "react-datepicker";
import * as yup from "yup";

const DetailsExample = () => {
  const [data, setData] = useState();
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [date, setDate] = useState(null); // Initialize date state with null

  const validationSchema = yup.object({
    image: yup.string().required("Image is required"),
    date: yup.string().required("Date is required"), // Adjusted to validate date type
  });

  const handleData = (values) => {
    console.log(values);
    setData(values);
    handleShow();
  };

  return (
    <div className="container" style={{ marginTop: 100 }}>
      <div className="row justify-content-center">
        <div className="col-lg-6 col-sm-6">
          <Formik
            initialValues={{ image: "", date: "" }} // Corrected initial values
            validationSchema={validationSchema}
            onSubmit={handleData}
          >
            {({ setFieldValue }) => (
              <Form>
                <div className="container">
                  <label className="pt-2" htmlFor="image">
                    Image
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="customFile"
                    onChange={(e) => {
                      setFieldValue("image", e.currentTarget.files[0]); // Set file value correctly
                    }}
                    multiple
                  />
                  <ErrorMessage
                    component="div"
                    name="image"
                    className="text-danger"
                  />
                </div>
                <div>
                  <label className="pt-2" htmlFor="date">
                    Date
                  </label>
                  <ReactDatePicker
                    selected={date}
                    className="form-control"
                    name="date"
                    id="date"
                    onChange={(date) => {
                      setFieldValue("date", date); // Update date value
                      setDate(date); // Update local state if needed
                    }}
                  />
                  <ErrorMessage
                    component="div"
                    name="date"
                    className="text-danger"
                  />
                </div>
                <button type="submit">Submit</button> {/* Add submit button */}
              </Form>
            )}
          </Formik>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>User Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
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
  );
};

export default DetailsExample;
