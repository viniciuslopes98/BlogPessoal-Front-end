import Menu from "@material-ui/core/Menu";
import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import './Navbar.css';
import { color } from "@mui/system";

function Navbar() {
  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Box className="cursor">
            <Typography variant="h5" color="inherit">
              BlogPessoal
            </Typography>
          </Box>

          <Box display="flex" justifyContent="start">
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                HOME
              </Typography>
            </Box>
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                POSTAGENS
              </Typography>
            </Box>
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                TEMAS
              </Typography>
            </Box>
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                CADASTRAR TEMA
              </Typography>
            </Box>
            <Link to="/login" className="cursor, text-decorater-none" >
              <Box mx={1} style={{ cursor: "pointer", color: "white"}}>
                <Typography variant="h6" color="inherit">
                  LOGOUT
                </Typography>
              </Box>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
