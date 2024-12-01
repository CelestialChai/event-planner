import React from "react";
import { Drawer, List, ListItem, ListItemText, ListItemIcon, Button, Box, Tooltip,} from "@mui/material";
import { Home, Event, Lock, Info, Place, BorderColor,} from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";

const NavigationBar: React.FC = () => {
  const location = useLocation();

  const menuItems = [
    { text: "Home", icon: <Home />, path: "/" },
    { text: "Create", icon: <BorderColor />, path: "/create" },
    { text: "My Events", icon: <Event />, path: "/my-events" },
    { text: "Unlocks", icon: <Lock />, path: "/unlocks" },
    { text: "About Us", icon: <Info />, path: "/about-us" },
    { text: "Venues", icon: <Place />, path: "/venues" },
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
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/login"
            sx={{ marginBottom: 1 }}
          >
            Login
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            component={Link}
            to="/sign-up"
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};

export default NavigationBar;