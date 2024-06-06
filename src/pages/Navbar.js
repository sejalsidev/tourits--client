import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import { Typography, Toolbar, Button, Box } from "@mui/material";
import FestivalIcon from "@mui/icons-material/Festival";
import { Link as RouterLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <AppBar sx={{ bgcolor: "#16aaac;" }}>
        <Toolbar className="menu">
          <Typography>
            <FestivalIcon />
          </Typography>
          <Box>
            <Button color="inherit" component={RouterLink} to="/home">
              HOME
            </Button>
            <Button color="inherit" component={RouterLink} to="/destination">
              DESTINATION
            </Button>
            <Button color="inherit" component={RouterLink} to="/tours">
              TOUR
            </Button>
            <Button color="inherit" component={RouterLink} to="/contact">
              CONTACT US
            </Button>
            <Button color="inherit" component={RouterLink} to="/about">
              ABOUT US
            </Button>
          </Box>
          <Button
            sx={{ marginLeft: "auto" }}
            color="inherit"
            component={RouterLink}
            to="/login"
          >
            Login
          </Button>
          {/* <Button
            sx={{ marginLeft: "10px" }}
            color="inherit"
            component={RouterLink}
            to="/register"
          >
            Register
          </Button> */}
        </Toolbar>
      </AppBar>
    </>
  );
};
