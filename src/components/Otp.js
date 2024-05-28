import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { Button, Grid, Paper } from "@mui/material";

const Otp = () => {
  const [otp, setOtp] = useState("");
  const paperStyle = {
    padding: 20,
    height: "20vh",
    width: 280,
    margin: "100px auto",
    align: "center",
  };
  const handleClear = () => {
    setOtp("");
  };
  const handleOtp = () => {};
  const handleSubmit = () => {};
  return (
    <Grid>
      <Paper elevation={4} style={paperStyle}>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <h2>Enter Verification Code</h2>
          <Grid item>
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              renderSeparator={<span>-</span>}
              renderInput={(props) => <input {...props} />}
              onComplete={handleSubmit}
            />
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{ marginTop: "10px" }}
        >
          <Grid item>
            <Button
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
              variant="contained"
              onClick={handleClear}
            >
              Clear
            </Button>
          </Grid>
          <Grid item>
            <Button
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
              variant="contained"
              onClick={handleOtp}
            >
              GET OTP
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};
export default Otp;
