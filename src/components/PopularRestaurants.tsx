import React from 'react';
import RestaurantCard from './RestaurantCard';
import { useRestaurantStore } from '../store/restaurantStore';

const PopularRestaurants: React.FC = () => {
  const { popularRestaurants, toggleFavorite } = useRestaurantStore();

  return (
    <div className="popular-restaurants">
      <h2>Popular Restaurants</h2>
      <div className="restaurant-list">
        {popularRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
            isFavorited={restaurant.isFavorited}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularRestaurants;
