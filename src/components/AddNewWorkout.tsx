import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db, auth } from "../firebase";
import { TextField, Button, Select, MenuItem, Typography, Box } from "@mui/material";
import workoutTypesData from '../db/workoutTypes.json';
import { useNavigate } from "react-router-dom";

interface WorkoutType {
  id: string;
  name: string;
  description: string;
}
interface AddNewWorkoutProps {
  onAddWorkout: (newWorkout: any) => void;
}

export const AddNewWorkout: React.FC<AddNewWorkoutProps> = ({ onAddWorkout }) => {
  const [workoutTypes] = useState<WorkoutType[]>(workoutTypesData.workoutTypes);
  const [exerciseType, setExerciseType] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  const [intensity, setIntensity] = useState<string>("");

  const navigate = useNavigate();

  const handleAddWorkout = async () => {
    if (exerciseType && duration && intensity) {
      const newWorkout = {
        exerciseType,
        duration: Number(duration),
        intensity,
        userId: auth.currentUser?.uid,
        date: new Date().toISOString(),
      };
      try {
        await addDoc(collection(db, "workouts"), newWorkout);
        console.log("Workout added successfully");
        onAddWorkout(newWorkout); 
        navigate('/all-workouts');
      } catch (error) {
        console.error("Error adding workout:", error);
      }
    } else {
      console.error("All fields are required");
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      padding="20px"
      bgcolor="#f5f5f5"
    >
      <Typography variant="h4" marginBottom="20px">
        Add New Workout
      </Typography>
      <Box display="flex" flexDirection="column" gap="20px" width="100%" maxWidth="400px">
        <Select
          value={exerciseType}
          onChange={(e) => setExerciseType(e.target.value)}
          displayEmpty
          variant="outlined"
          fullWidth
        >
          <MenuItem value="">
            <em>Select Exercise Type</em>
          </MenuItem>
          {workoutTypes.map((type) => (
            <MenuItem key={type.id} value={type.name}>
              {type.name}
            </MenuItem>
          ))}
        </Select>
        <TextField
          label="Duration (minutes)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          type="number"
          variant="outlined"
          fullWidth
        />
        <Select
          value={intensity}
          onChange={(e) => setIntensity(e.target.value)}
          displayEmpty
          variant="outlined"
          fullWidth
        >
          <MenuItem value="">
            <em>Select Intensity</em>
          </MenuItem>
          <MenuItem value="Low">Low</MenuItem>
          <MenuItem value="Medium">Medium</MenuItem>
          <MenuItem value="High">High</MenuItem>
        </Select>
        <Button
          onClick={handleAddWorkout}
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          style={{ backgroundColor: "#1976d2", color: "#fff" }}
        >
          Add Workout
        </Button>
      </Box>
    </Box>
  );
};
