import React from "react";

interface WorkoutItemProps {
  workout: {
    exerciseType: string;
    duration: number; 
    intensity: string;
  };
}

export const WorkoutItem: React.FC<WorkoutItemProps> = ({ workout }) => {
  return (
    <div style={{ margin: "10px 0", border: "1px solid #ccc", padding: "10px", borderRadius: "5px" }}>
      <h3>{workout.exerciseType}</h3>
      <p>Duration: {workout.duration} minutes</p>
      <p>Intensity: {workout.intensity}</p>
    </div>
  );
};
