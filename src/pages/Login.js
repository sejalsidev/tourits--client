import React, { useState } from "react";
import { Avatar, Grid, Paper, Link } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LockClockOutlinedIcon from "@mui/icons-material/LockClockOutlined";
import { loginData } from "../servicer/login";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e) => {
    const values = {
      Email: email,
      password: password,
    };
    loginData(values);
    console.log(values, "");
    // alert(values);
    setEmail("");
    setPassword("");
  };
  const paperStyle = {
    padding: 20,
    height: "50vh",
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
          <h2>Login</h2>
        </Grid>
        <Grid container spacing={2} justify="center" direction="column">
          <Grid item>
            <TextField
              className="textfield"
              label="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            ></TextField>
          </Grid>
          <Grid item>
            <TextField
              className="textfield"
              label="Password"
              placeholder="Enter Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            ></TextField>
          </Grid>
          <Grid item>
            <Link href="#" underline="none">
              {"Forgive Password?"}
            </Link>
          </Grid>
          <Grid item>
            <Button
              type="submit"
              onClick={() => handleLogin()}
              sx={{
                backgroundColor: "#16aaac",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#16aaac",
                },
                "&:active": {
                  backgroundColor: "#16aaac",
                },
                marginBottom: "16px",
              }}
              fullWidth
              variant="contained"
            >
              Login
            </Button>
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={1}
            >
              <Grid item sx={{ color: "#16aaac" }}>
                {"Don't have an account?"}
              </Grid>
              <Grid item>
                <Link href="Register" underline="none">
                  {"Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Login;
