import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import { Button } from "@mui/material";
import * as Yup from "yup";
import Footer from "../Component/Footer/Footer";
import axios from "axios";
import { useLocation } from "react-router-dom";

const validationSchema = Yup.object({
  fullname: Yup.string().required("Name is required"),
  gender: Yup.string().required("Gender is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  mobile: Yup.string().required("Phone number is required"),
  age: Yup.number().required("Age is required"),
  bordingPoint: Yup.string().required("City is required"),
  members: Yup.array().of(
    Yup.object({
      pfullname: Yup.string().required("Name is required"),
      pmobile: Yup.string().required("Phone number is required"),
      pgender: Yup.string().required("Gender is required"),
      page: Yup.number().required("Age is required"),
    })
  ),
});

const Booking = () => {
  const location = useLocation();
  const { packageId, numPeople, pricePerPerson, totalPrice } = location.state;
  console.log("location.statelocation.state", location.state);
  const [numTravelers, setNumTravelers] = useState(numPeople);
  const [totalCost, setTotalCost] = useState(totalPrice);
  const [razorpayKey, setRazorpayKey] = useState("");

  useEffect(() => {
    setTotalCost(numTravelers * pricePerPerson);
  }, [numTravelers, pricePerPerson]);

  useEffect(() => {
    axios
      .get("http://localhost:2000/api/payment/getKey")
      .then((response) => {
        setRazorpayKey(response.data.key);
      })
      .catch((error) => {
        console.error("Error fetching Razorpay key:", error);
      });
  }, []);

  const handleBook = (values) => {
    console.log("fullname", values);
    alert("fsfs");
    const token = localStorage.getItem("token");
    console.log(token);

    axios
      .post(
        `http://localhost:2000/api/booking/insertBookDetail/${packageId}`,
        values,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log("Data sent successfully:", response.data);
        createOrder();
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });
  };

  const createOrder = () => {
    axios
      .post("http://localhost:2000/api/payment/createOrder", {
        amount: totalCost,
      })
      .then((response) => {
        const { amount, id: order_id, currency } = response.data.order;
        openRazorpay(amount, order_id, currency);
      })
      .catch((error) => {
        console.error("Error creating order:", error);
      });
  };

  const openRazorpay = (amount, order_id, currency) => {
    const options = {
      key: razorpayKey,
      amount: amount,
      currency: currency,
      name: "Your Company Name",
      description: "Test Transaction",
      order_id: order_id,
      handler: (response) => {
        verifyPayment(response);
      },
      prefill: {
        name: "Test User",
        email: "test.user@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const verifyPayment = (response) => {
    axios
      .post("http://localhost:2000/api/payment/paymentVerification", response)
      .then((res) => {
        console.log("Payment verified successfully:", res.data);
        alert("Payment Success");
      })
      .catch((error) => {
        console.error("Error verifying payment:", error);
        // alert("Payment Verification Failed");
      });
  };

  return (
    <>
      <div style={{ marginBottom: "60px" }}>
        <img
          src="../images/destination.jpeg"
          alt=""
          style={{ width: "100%", height: "600px" }}
        />
      </div>
      <div className="container">
        <div className="row spacing">
          <div
            className="col-xl-6 col-lg-6 col-md-6 col-sm-6 border p-3"
            style={{ marginBottom: "60px" }}
          >
            <Formik
              initialValues={{
                fullname: "",
                gender: "",
                email: "",
                mobile: "",
                age: "",
                bordingPoint: "",
                // members: Array(numPeople - 1).fill({
                //   pfullname: "",
                //   pmobile: "",
                //   pgender: "",
                //   page: "",
                // }),
              }}
              validationSchema={validationSchema}
              onSubmit={handleBook}
            >
              {({ isSubmitting, values }) => (
                <Form>
                  <div>
                    <h4>Traveller Information</h4>
                    <p>Let Us Know Who You Are</p>
                  </div>
                  <div className="form-group pt-2">
                    <label className="pt-2" htmlFor="fullname">
                      Name
                    </label>
                    <Field
                      type="text"
                      name="fullname"
                      className="form-control"
                      id="fullname"
                      placeholder="Name"
                    />
                    <ErrorMessage
                      name="fullname"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="gender" className="pt-3">
                      Gender
                    </label>
                    <Field
                      as="select"
                      name="gender"
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option value="" label="Select Gender" />
                      <option value="male" label="Male" />
                      <option value="female" label="Female" />
                      <option value="other" label="Other" />
                    </Field>
                    <ErrorMessage
                      name="gender"
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
                    <label className="pt-3" htmlFor="mobile">
                      Phone Number
                    </label>
                    <Field
                      type="text"
                      name="mobile"
                      className="form-control"
                      id="mobile"
                      placeholder="Phone number"
                    />
                    <ErrorMessage
                      name="mobile"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label className="pt-3" htmlFor="age">
                      Age
                    </label>
                    <Field
                      type="number"
                      className="form-control"
                      name="age"
                      id="age"
                      placeholder="Age"
                    />
                    <ErrorMessage
                      name="age"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="bordingPoint">Select City</label>
                    <Field
                      as="select"
                      name="bordingPoint"
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option value="" label="Select City" />
                      <option value="surat" label="Surat" />
                      <option value="Vadodara" label="Vadodara" />
                      <option value="Mumbai" label="Mumbai" />
                      <option value="rajkot" label="Rajkot" />
                    </Field>
                    <ErrorMessage
                      name="bordingPoint"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <FieldArray name="members">
                    {({ push }) => (
                      <>
                        {values.members?.map((member, index) => (
                          <div key={index}>
                            <h4>Member {index + 1}</h4>
                            <div className="form-group pt-2">
                              <label
                                className="pt-2"
                                htmlFor={`members.${index}.pfullname`}
                              >
                                Name
                              </label>
                              <Field
                                type="text"
                                name={`members.${index}.pfullname`}
                                className="form-control"
                                id={`members.${index}.pfullname`}
                                placeholder="Name"
                              />
                              <ErrorMessage
                                name={`members.${index}.pfullname`}
                                component="div"
                                className="text-danger"
                              />
                            </div>
                            <div className="form-group">
                              <label
                                className="pt-3"
                                htmlFor={`members.${index}.pmobile`}
                              >
                                Phone Number
                              </label>
                              <Field
                                type="number"
                                name={`members.${index}.pmobile`}
                                className="form-control"
                                id={`members.${index}.pmobile`}
                                placeholder="Phone number"
                              />
                              <ErrorMessage
                                name={`members.${index}.pmobile`}
                                component="div"
                                className="text-danger"
                              />
                            </div>
                            <div className="form-group">
                              <label
                                htmlFor={`members.${index}.pgender`}
                                className="pt-3"
                              >
                                Gender
                              </label>
                              <Field
                                as="select"
                                name={`members.${index}.pgender`}
                                className="form-select"
                                aria-label="Default select example"
                              >
                                <option value="" label="Select Gender" />
                                <option value="male" label="Male" />
                                <option value="female" label="Female" />
                                <option value="other" label="Other" />
                              </Field>
                              <ErrorMessage
                                name={`members.${index}.pgender`}
                                component="div"
                                className="text-danger"
                              />
                            </div>
                            <div className="form-group mb-3">
                              <label
                                className="pt-3"
                                htmlFor={`members.${index}.page`}
                              >
                                Age
                              </label>
                              <Field
                                type="number"
                                className="form-control"
                                name={`members.${index}.page`}
                                id={`members.${index}.page`}
                                placeholder="Age"
                              />
                              <ErrorMessage
                                name={`members.${index}.page`}
                                component="div"
                                className="text-danger"
                              />
                            </div>
                          </div>
                        ))}
                        <div className="d-flex justify-content-between">
                          <Button
                            type="button"
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
                            onClick={() => {
                              push({
                                pfullname: "",
                                pmobile: "",
                                pgender: "",
                                page: "",
                              });
                              setNumTravelers(numTravelers + 1);
                            }}
                          >
                            Add Member
                          </Button>
                          <Button
                            type="submit"
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
                            disabled={isSubmitting}
                          >
                            Send Detail
                          </Button>
                        </div>
                      </>
                    )}
                  </FieldArray>
                </Form>
              )}
            </Formik>
          </div>
          <div
            className="col-xl-6 col-lg-6 col-md-6 col-sm-6 border p-3 "
            style={{ marginBottom: "60px" }}
          >
            <div className="text-center">
              <h4>Booking Detail</h4>
            </div>
            <div
              className="card border form-control px-3 d-flex justify-content-between mb-3"
              style={{
                width: "auto",
                height: "300px",
                backgroundColor: "#259b9d",
                color: "white",
              }}
            >
              <p>Superior Town: 500</p>
              <p>Price Per Person: ${pricePerPerson * numPeople}</p>
              <p>Number Of Travellers: {numTravelers}</p>
              <p>Tax & Fees: No Tax</p>
              <p>Booking Fee: Free</p>
              <p className="border">Total Amount: ${totalCost}</p>
            </div>
            <Button
              className="text-center"
              type="button"
              onClick={createOrder}
              style={{ display: "flex", justifyContent: "flex-end" }}
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
              Payment
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Booking;
