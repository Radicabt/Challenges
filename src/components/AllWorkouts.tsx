import React from "react";
import { WorkoutItem } from "./WorkoutItem";

interface AllWorkoutsProps {
  workouts: {
    id: string;
    exerciseType: string;
    duration: number; 
    intensity: string;
  }[];
}

export const AllWorkouts: React.FC<AllWorkoutsProps> = ({ workouts }) => {
  return (
    <div>
      <h2>All Workouts</h2>
      {workouts.length === 0 ? (
        <p>No workouts available.</p>
      ) : (
        workouts.map((workout) => (
          <WorkoutItem key={workout.id} workout={workout} />
        ))
      )}
    </div>
  );
};
