import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { AllWorkouts } from "./components/AllWorkouts";
import { AddNewWorkout } from "./components/AddNewWorkout";
import { Welcome } from "./components/Welcome";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

const App: React.FC = () => {
  const [workouts, setWorkouts] = useState<any[]>([]);

  const fetchWorkouts = async () => {
    const querySnapshot = await getDocs(collection(db, "workouts"));
    const workoutData = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    setWorkouts(workoutData);
  };

  useEffect(() => {
    fetchWorkouts();
  }, []);

  const handleAddWorkout = (newWorkout: any) => {
    setWorkouts((prevWorkouts) => [...prevWorkouts, newWorkout]);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/all-workouts" element={<AllWorkouts workouts={workouts} />} />
        <Route path="/add-new-workout" element={<AddNewWorkout onAddWorkout={handleAddWorkout} />} />
      </Routes>
    </Router>
  );
};

export default App;
