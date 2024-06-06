import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Button } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from "yup";
import Footer from "../Component/Footer/Footer";

const Contact = () => {
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  };

  const validationSchema = Yup.object({
    firstname: Yup.string().required("First name is required"),
    lastname: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleContact = (values, { setSubmitting, resetForm }) => {
    axios
      .post("http://localhost:2000/api/contact/postDetail", values)
      .then((response) => {
        console.log("Data sent successfully:", response.data);
        resetForm();
        setSubmitting(false);
      })
      .catch((error) => {
        console.error("Error sending data:", error);
        setSubmitting(false);
      });
  };

  return (
    <>
      <div style={{ marginBottom: "60px" }}>
        <img
          src="../images/destination.jpeg"
          alt=""
          style={{ width: "100%", height: "500px" }}
        />
      </div>

      <div className="container">
        <div className="row text-center justify-content-center">
          <div className="col-xl-12 col-sm-12">
            <h4>INFORMATION ABOUT US</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginBottom: "60px" }}>
        <div className="row text-center justify-content-center">
          <div className="col-lg-4 col-sm-6 icon-block">
            <IoLocationOutline size={40} />
            <h6>Office Location</h6>
          </div>
          <div className="col-lg-4 col-sm-6 icon-block">
            <FaPhoneAlt size={40} />
            <h6>Phone Number</h6>
          </div>
          <div className="col-lg-4 col-sm-6 icon-block">
            <MdEmail size={40} />
            <h6>Email Address</h6>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginBottom: "60px" }}>
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-6 col-sm-6 icon-block">
            <img
              src="../images/contact-us.avif"
              alt=""
              style={{ width: "600px", height: "500px" }}
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleContact}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="form-group pt-2">
                    <label className="pt-2" htmlFor="firstname">
                      First Name
                    </label>
                    <Field
                      type="text"
                      name="firstname"
                      className="form-control"
                      id="firstname"
                      placeholder="First name"
                    />
                    <ErrorMessage
                      name="firstname"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastname" className="pt-3">
                      Last Name
                    </label>
                    <Field
                      type="text"
                      name="lastname"
                      className="form-control"
                      id="lastname"
                      placeholder="Last name"
                    />
                    <ErrorMessage
                      name="lastname"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="form-group">
                    <label className="pt-3" htmlFor="email">
                      Email
                    </label>
                    <Field
                      type="email"
                      name="email"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="form-group">
                    <label className="pt-3" htmlFor="phoneno">
                      Phone Number
                    </label>
                    <Field
                      type="text"
                      name="phone"
                      className="form-control"
                      id="phoneno"
                      placeholder="Phone number"
                    />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label className="pt-3" htmlFor="message">
                      Enter Message
                    </label>
                    <Field
                      as="textarea"
                      className="form-control"
                      name="message"
                      id="message"
                      rows="3"
                      placeholder="Message"
                    />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    sx={{
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
                    Send Detail
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
