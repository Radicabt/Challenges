import React from "react";
import { Button } from "@mui/material";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase";

export const Welcome: React.FC = () => {
  const provider = new GoogleAuthProvider();

  const handleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      console.log("User signed in successfully");
    } catch (error) {
      console.error("Error signing in", error);
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
      <div style={{ flex: "1", display: "flex", justifyContent: "center" }}>
        <img
          src="/images/heroBanner.jpeg"
          alt="Hero Banner"
          style={{ width: "80%", maxWidth: "400px" }}
        />
      </div>
      <div style={{ flex: "1", textAlign: "left", padding: "20px" }}>
        <h1>Your Fitness Journey Starts Here</h1>
        <Button
          variant="outlined"
          onClick={handleSignIn}
          style={{
            width: "100%",
            backgroundColor: "white",
            color: "black",
            border: "1px solid black",
            marginTop: "20px",
            padding: "10px 0",
          }}
        >
          Sign in with Google
        </Button>
      </div>
    </div>
  );
};
