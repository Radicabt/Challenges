import React from 'react';
import { useRestaurantStore } from '../store/restaurantStore';
import RestaurantCard from './RestaurantCard';

const Favorites: React.FC = () => {
  const { favorites, toggleFavorite } = useRestaurantStore();

  return (
    <div>
      {favorites.map((restaurant) => (
        <RestaurantCard
          key={restaurant.id}
          restaurant={restaurant}
          isFavorited={true}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
};

export default Favorites;
