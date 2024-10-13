import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRestaurantStore } from '../store/restaurantStore';

const SurpriseRestaurant: React.FC = () => {
  const navigate = useNavigate();
  const { restaurants } = useRestaurantStore();

  const surpriseMe = () => {
    const randomIndex = Math.floor(Math.random() * restaurants.length);
    const randomRestaurant = restaurants[randomIndex].slug; 
    navigate(`/restaurant/${randomRestaurant}`); 
  };

  return (
    <button onClick={surpriseMe} style={{ width: '200px' }}>
      Surprise Me!
    </button>
  );
};

export default SurpriseRestaurant;
