import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Button } from "@mui/material";

const validationSchema = Yup.object({
  currentPassword: Yup.string().required("Current password is required"),
  newPassword: Yup.string()
    .required("New password is required")
    .min(8, "Password must be at least 8 characters long"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
    .required("Confirm password is required"),
});

const ChangePassword = () => {
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    const token = localStorage.getItem("token"); // Assuming token is stored in local storage

    axios
      .post("http://localhost:2000/api/user/changepassword", values, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log("Password changed successfully:", response.data);
        alert("Password changed successfully");
        resetForm();
      })
      .catch((error) => {
        console.error("Error changing password:", error);
        alert("Error changing password. Please try again.");
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <div
      className="container d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <div className="row justify-content-center  w-100">
        <div className="col-xl-6 col-lg-6 col-md-8 col-sm-10 border p-5">
          <h4 className="text-center">Change Password</h4>
          <Formik
            initialValues={{
              currentPassword: "",
              newPassword: "",
              confirmPassword: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="form-group mb-3">
                  <label htmlFor="currentPassword" className="mb-2">
                    Current Password
                  </label>
                  <Field
                    type="password"
                    name="currentPassword"
                    className="form-control"
                    id="currentPassword"
                    placeholder="Enter current password"
                  />
                  <ErrorMessage
                    name="currentPassword"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="newPassword" className="mb-2">
                    New Password
                  </label>
                  <Field
                    type="password"
                    name="newPassword"
                    className="form-control"
                    id="newPassword"
                    placeholder="Enter new password"
                  />
                  <ErrorMessage
                    name="newPassword"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="confirmPassword" className="mb-2">
                    Confirm New Password
                  </label>
                  <Field
                    type="password"
                    name="confirmPassword"
                    className="form-control"
                    id="confirmPassword"
                    placeholder="Confirm new password"
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <Button
                  type="submit"
                  className="btn btn-primary"
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
                  Change Password
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
