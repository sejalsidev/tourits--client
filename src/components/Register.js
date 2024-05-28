import React from "react";
import { Avatar, Grid, Paper, Link } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LockClockOutlinedIcon from "@mui/icons-material/LockClockOutlined";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { registerUser } from "../servicer/register";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const Navigate = useNavigate();
  const initialValues = {
    email: "",
    username: "",
    password: "",
    repassword: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
    repassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Please confirm your password"),
  });

  // const handleSubmit = (values, { resetForm }) => {

  // };

  const paperStyle = {
    padding: 20,
    height: "65vh",
    width: 280,
    margin: "100px auto",
    align: "center",
  };

  const avatarStyle = { backgroundColor: "#16aaac" };

  return (
    <Grid>
      <Paper elevation={4} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockClockOutlinedIcon />
          </Avatar>
          <h2>Sign Up</h2>
        </Grid>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, { resetForm }) => {
            registerUser(values)
              .then((data) => {
                console.log("Received data:", data);
                if (data.status === 200) {
                  // Assuming Navigate is a function to redirect, adjust if necessary
                  Navigate("/login");
                }
                resetForm();
              })
              .catch((error) => {
                console.error("Error registering user:", error);
              });
          }}
          validationSchema={validationSchema}
        >
          {({ values, handleChange, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <Grid container spacing={2} justify="center" direction="column">
                <Grid item>
                  <Field
                    name="username"
                    as={TextField}
                    label="Username"
                    placeholder="Enter Username"
                    fullWidth
                    required
                    InputLabelProps={{
                      style: { color: "#16aaac" },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: "#16aaac",
                        },
                      },
                    }}
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="error"
                  />
                </Grid>
                <Grid item>
                  <Field
                    name="email"
                    as={TextField}
                    label="Email Id"
                    placeholder="Email Address"
                    fullWidth
                    required
                    InputLabelProps={{
                      style: { color: "#16aaac" },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: "#16aaac",
                        },
                      },
                    }}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error"
                  />
                </Grid>
                <Grid item>
                  <Field
                    name="password"
                    as={TextField}
                    label="Password"
                    placeholder="Enter Password"
                    type="password"
                    fullWidth
                    required
                    InputLabelProps={{
                      style: { color: "#16aaac" },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: "#16aaac",
                        },
                      },
                    }}
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="error"
                  />
                </Grid>
                <Grid item>
                  <Field
                    name="repassword"
                    as={TextField}
                    label="Re-Enter Password"
                    placeholder="Re-Enter Password"
                    type="password"
                    fullWidth
                    required
                    InputLabelProps={{
                      style: { color: "#16aaac" },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: "#16aaac",
                        },
                      },
                    }}
                  />
                  <ErrorMessage
                    name="repassword"
                    component="div"
                    className="error"
                  />
                </Grid>
                <Grid item>
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
                    fullWidth
                    variant="contained"
                  >
                    Register
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
        <Grid item textAlign={"center"}>
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={1}
          >
            <Grid item sx={{ color: "#16aaac" }}>
              {"Already have an account?"}
            </Grid>
            <Grid item>
              <Link href="Login" underline="none">
                {"Login"}
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Register;
