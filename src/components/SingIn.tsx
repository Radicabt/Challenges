import React from "react";
import { auth, GoogleAuthProvider, signInWithPopup } from "../firebase";

const SignIn: React.FC = () => {
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User signed in:", result.user);
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "50px" }}>
      <h2 style={{ fontSize: "24px", fontWeight: "bold", color: "#333" }}>Your Fitness Journey Starts Here</h2>
      <button
        onClick={handleGoogleSignIn}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          borderRadius: "5px",
          border: "1px solid #1976d2",
          color: "#1976d2",
          backgroundColor: "#fff",
          cursor: "pointer",
        }}
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default SignIn;
