import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Button } from "react-bootstrap";
import * as yup from "yup";
import { userDetail, userRegistration } from "../servicer/userdetail";

const UserDetails = () => {
  const [user, setUser] = useState(null);

  const validationSchema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    password: yup.string().required("Password is required"),
    // phoneno: yup.string().required("Phone number is required"),
  });

  const fetchData = async () => {
    try {
      const data = await userDetail();
      console.log(
        data,
        "<=====================data from action modal =====================>"
      );
      setUser(data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleRegisterSubmit = async (values, { resetForm }) => {
    try {
      const register = await userRegistration(values);
      if (register) {
        fetchData();
        resetForm();
      }
    } catch (error) {
      console.log("Registration error:", error);
    }
  };

  return (
    <div className="container">
      <div className="row align-center justify-content-center">
        <div className="col">
          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
              // phoneno: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleRegisterSubmit}
          >
            <Form>
              <div
                className="container"
                style={{ height: "100vh", marginTop: "300px" }}
              >
                <div className="row d-flex align-center justify-content-center">
                  <div className="col">
                    <h1>Register</h1>
                    <div className="p-2">
                      <label htmlFor="name" style={{ marginRight: "5px" }}>
                        User Name
                      </label>
                      <Field
                        as={TextField}
                        label="Name"
                        name="name"
                        style={{ marginBottom: "5px" }}
                      />
                      <ErrorMessage
                        className="text-danger error"
                        name="name"
                        component="div"
                      />
                    </div>
                    <div className="p-2">
                      <label htmlFor="email" style={{ marginRight: "5px" }}>
                        Email ID
                      </label>
                      <Field
                        as={TextField}
                        label="Email"
                        name="email"
                        style={{ marginBottom: "5px" }}
                      />
                      <ErrorMessage
                        className="text-danger error"
                        name="email"
                        component="div"
                      />
                    </div>
                    <div className="p-2">
                      <label htmlFor="password" style={{ marginRight: "5px" }}>
                        Password
                      </label>
                      <Field
                        as={TextField}
                        label="Password"
                        name="password"
                        type="password"
                        style={{ marginBottom: "5px" }}
                      />
                      <ErrorMessage
                        className="text-danger error"
                        name="password"
                        component="div"
                      />
                    </div>
                    {/* <div>
                      <label htmlFor="phoneno">Phone no:</label>
                      <Field as={TextField} label="Phone no" name="phoneno" />
                      <ErrorMessage
                        className="text-danger error"
                        name="phoneno"
                        component="div"
                      />
                    </div> */}
                    <Button type="submit" className="mt-3">
                      Register
                    </Button>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-sm-6 mb-2">
                    <h1>Login</h1>
                    <div className="p-2">
                      <label htmlFor="email" style={{ marginRight: "5px" }}>
                        Email ID
                      </label>
                      <Field
                        as={TextField}
                        label="Email"
                        name="email"
                        style={{ marginBottom: "5px" }}
                      />
                      <ErrorMessage
                        className="text-danger error"
                        name="email"
                        component="div"
                      />
                    </div>
                    <div className="p-2">
                      <label htmlFor="password" style={{ marginRight: "5px" }}>
                        Password
                      </label>
                      <Field
                        as={TextField}
                        label="Password"
                        name="password"
                        type="password"
                        style={{ marginBottom: "5px" }}
                      />
                      <ErrorMessage
                        className="text-danger error"
                        name="password"
                        component="div"
                      />
                    </div>
                    <Button type="submit" className="mt-3">
                      Login
                    </Button>
                  </div>
                </div>
              </div>
            </Form>
          </Formik>
          <div className="mt-5">
            <table className="table">
              <thead>
                <tr>
                  <th>User Name</th>
                  <th>Email</th>
                  <th>Password</th>
                  {/* <th>Phone no</th> */}
                </tr>
              </thead>
              <tbody>
                {user &&
                  user.map((item, index) => (
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.password}</td>
                      {/* <td>{item.phoneno}</td> */}
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
