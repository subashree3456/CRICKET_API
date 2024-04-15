import React from "react";
import { AppBar } from "@material-ui/core";
import {
    Button,
    IconButton,
    makeStyles,
    Toolbar,
    Typography,
  } from "@material-ui/core";
  import MenuIcon from "@material-ui/icons/Menu";

const Navbar = () => {
    return (

        <AppBar  position="static">
            <Toolbar>
            <IconButton color="inherit">
            <MenuIcon />
          </IconButton>

            <Typography variant="h6">Live Score </Typography>
            </Toolbar>
        </AppBar>



    );



}


export default Navbar;