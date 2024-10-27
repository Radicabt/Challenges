import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, IconButton, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase"; 
import { onAuthStateChanged, signOut } from "firebase/auth";  

export const Navbar: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });
    return unsubscribe;
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  if (!isAuthenticated) return null;

  return (
    <AppBar position="static" style={{ backgroundColor: "#1976d2" }}>
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <Link
          to="/all-workouts"
          style={{ color: "#fff", textDecoration: "none", fontSize: "20px", fontWeight: "bold" }}
        >
          <img
            src="/images/dumbell-svgrepo-com.svg"
            alt="Fitness Tracker"
            style={{ width: "30px", height: "30px", verticalAlign: "middle", filter: "invert(1)" }}
          />
        </Link>
        <IconButton
          onClick={() => navigate("/add-new-workout")}
          style={{ color: "#fff", fontSize: "24px" }}
        >
          +
        </IconButton>
        <Button color="inherit" onClick={handleLogout} style={{ fontSize: "16px", fontWeight: "bold" }}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};
