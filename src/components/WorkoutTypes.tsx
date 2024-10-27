import React, { useState, useEffect } from "react";
import { collection, getDocs, DocumentData } from "firebase/firestore";
import { db } from "../firebase";
import { Select, MenuItem, CircularProgress } from "@mui/material";

interface WorkoutType {
  id: string;
  name: string;
  description: string;
}

interface WorkoutTypesProps {
  onTypeSelect: (type: string) => void;
}

export const WorkoutTypes: React.FC<WorkoutTypesProps> = ({ onTypeSelect }) => {
  const [workoutTypes, setWorkoutTypes] = useState<WorkoutType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWorkoutTypes = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "workoutTypes"));
        const typesData = querySnapshot.docs.map((doc: DocumentData) => ({
          id: doc.id,
          ...doc.data(),
        })) as WorkoutType[];
        setWorkoutTypes(typesData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching workout types:", error);
        setLoading(false);
      }
    };

    fetchWorkoutTypes();
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Select onChange={(e) => onTypeSelect(e.target.value as string)} displayEmpty fullWidth>
      <MenuItem value="">Select Exercise Type</MenuItem>
      {workoutTypes.map((type) => (
        <MenuItem key={type.id} value={type.name}>
          {type.name}
        </MenuItem>
      ))}
    </Select>
  );
};
