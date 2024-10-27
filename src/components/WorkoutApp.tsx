import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { AddNewWorkout } from "./AddNewWorkout";
import { AllWorkouts } from "./AllWorkouts";

const WorkoutApp: React.FC = () => {
  const [workouts, setWorkouts] = useState<any[]>([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const querySnapshot = await getDocs(collection(db, "workouts"));
      const workoutData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setWorkouts(workoutData);
    };

    fetchWorkouts();
  }, []);

  const handleAddWorkout = (newWorkout: any) => {
    setWorkouts((prevWorkouts) => [...prevWorkouts, newWorkout]);
  };

  return (
    <div>
      <AddNewWorkout onAddWorkout={handleAddWorkout} />
      <AllWorkouts workouts={workouts} /> 
    </div>
  );
};

export default WorkoutApp;
