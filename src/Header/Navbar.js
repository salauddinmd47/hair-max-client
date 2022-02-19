import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import navImg from "../images/logo-normal.svg"; 
import useAuth from "../hooks/useAuth";
const Navbar = () => {
  const [state, setState] = React.useState(false);
  const theme = useTheme();
  const { user, logOut } = useAuth();

   
  const useStyles = makeStyles({
    navItem: {
      textDecoration: "none",
      color: "black",
    },
    navIcon: {
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    navContainer: {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    navLogo: {
      [theme.breakpoints.down("sm")]: {
        textAlign: "right",
      },
    },
    loginButton: {
      textDecoration: "none",
      backgroundColor: "tomato",
      color: "white",
      padding: "5px 10px",
      borderRadius: "5px",
    },
  });
  const { navItem, navIcon, navContainer, navLogo, loginButton } = useStyles();

  const list = (
    <Box
      sx={{ width: 250, backgroundColor: "blue", height: "100vh" }}
      role="presentation"
    >
      <List>
        <ListItem>
          <ListItemText>
            <Link className={navItem} to="/">
              <Button color="inherit">Home</Button>
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Link className={navItem} to="/about">
              <Button color="inherit">About Us</Button>
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            <Link className={navItem} to="/contact">
              <Button color="inherit">Contact Us</Button>
            </Link>
          </ListItemText>
        </ListItem>
        <Button sx={{ ml: 2 }} color="inherit">
          Login
        </Button>
      </List>
      <Divider />
    </Box>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar sx={{ backgroundColor: "#CAB4A9" }} position="static">
          <Toolbar>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              onClick={() => setState(true)}
              viewBox="0 0 16 16"
              className={`${navIcon} 'bi bi-list'`}
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
           
            <Typography
              className={navLogo}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <img
                style={{ height: "55px", paddingTop: "5px" }}
                src={navImg}
                alt=""
              />
            </Typography>
            <Box className={navContainer}>
              <Link className={navItem} to="/">
                <Button color="inherit">Home</Button>
              </Link>
              <Link className={navItem} to="/services">
                <Button color="inherit">Services</Button>
              </Link>
              <Link className={navItem} to="/appointments">
                <Button color="inherit">
                  Appointments 
                  <span
                    style={{
                      color: "tomato",
                      marginLeft: "5px",
                      fontWeight: "bold",
                    }}
                  >
                     {user?.displayName}
                  </span> 
                </Button>
              </Link>
              <Link className={loginButton} to="/login">
                {user.displayName ? (
                  <Button onClick={logOut} color="inherit">
                    Logout
                  </Button>
                ) : (
                  <Button color="inherit">Login</Button>
                )}
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Box>
        {
          <React.Fragment>
            <Drawer open={state} onClose={() => setState(false)}>
              {list}
            </Drawer>
          </React.Fragment>
        }
      </Box>
    </>
  );
};

export default Navbar;
