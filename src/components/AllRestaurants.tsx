import React, { useEffect, useState } from 'react';
import { Restaurant } from '../types';
import { useRestaurantStore } from '../store/restaurantStore';
import RestaurantCard from './RestaurantCard'; 
import './AllRestaurants.css';

const AllRestaurants: React.FC = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const { favorites, toggleFavorite } = useRestaurantStore();

  useEffect(() => {
    fetch('http://localhost:3002/restaurants')
      .then((response) => response.json())
      .then((data) => setRestaurants(data))
      .catch((error) => console.error('Error fetching restaurants:', error));
  }, []);

  return (
    <div className="restaurant-list">
      {restaurants.map((restaurant) => {
        const isFavorited = favorites.some(fav => fav.id === restaurant.id);
        return (
          <RestaurantCard 
            key={restaurant.id} 
            restaurant={restaurant} 
            isFavorited={isFavorited} 
            toggleFavorite={toggleFavorite} 
          />
        );
      })}
    </div>
  );
};

export default AllRestaurants;
