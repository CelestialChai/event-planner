import React, { useEffect, useState } from "react";
import { Drawer, List, ListItem, ListItemText, ListItemIcon, Button, Box, Tooltip } from "@mui/material";
import { Home, Event, Lock, Info, Place, BorderColor,} from "@mui/icons-material";
// import { Login, PersonAdd, CalendarMonth }  from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import auth from '../utils/auth';
import tykLogo from '../assets/WeddingPlanner/tykLogo.png';



const NavigationBar: React.FC = () => {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if a token exists in localStorage to determine if the user is logged in
    const loginCheck = auth.loggedIn();
    setIsLoggedIn(loginCheck); // Set true if the token exists
  }, []);

  const handleLogout = () => {
    // Clear the token and redirect to the login page
    auth.logout();
    setIsLoggedIn(false);
  };

    const menuItems = [
      { text: "Home", icon: <Home />, path: "/" },
      { text: "Create", icon: <BorderColor />, path: "/create" },
      { text: "My Events", icon: <Event />, path: "/my-events" },
      { text: "Unlocks", icon: <Lock />, path: "/unlocks" },
      { text: "About Us", icon: <Info />, path: "/about-us" },
      { text: "Venues", icon: <Place />, path: "/venues" },
      { text : "RSVP", icon: <Event />, path: "/RSVPform" },
    ];


  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
        },
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <List>
          <Box sx={{ display: "flex", justifyContent: "center", p: 2 }}>
            <img src={ tykLogo } alt="TYK Logo" style={{ width: "80%", height: "auto" }} />
          </Box>
          {menuItems.map((item) => (
            <ListItem
              key={item.text}
              component={Link as React.ElementType}
              to={item.path}
              role="button"
              selected={location.pathname === item.path}
              sx={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <Tooltip title={item.text} placement="right">
                <ListItemIcon>{item.icon}</ListItemIcon>
              </Tooltip>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
        <Box sx={{ mt: "auto", p: 2, textAlign: "center" }}>
        {isLoggedIn ? (
            <Button
              variant="contained"
              color="secondary"
              onClick={handleLogout}
            >
              Logout
            </Button>
          ) : (
            <>
              <Button
                variant="contained"
                color="primary"
                component={Link as React.ElementType}
                to="/login"
                sx={{ marginBottom: 1 }}
              >
                Login
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                component={Link as React.ElementType}
                to="/sign-up"
              >
                Sign Up
              </Button>
            </>
          )}
        </Box>
      </Box>
    </Drawer>
  );
};

export default NavigationBar;