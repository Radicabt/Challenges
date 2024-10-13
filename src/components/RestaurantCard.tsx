import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Restaurant } from '../types';
import './RestaurantCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faRegularHeart } from '@fortawesome/free-regular-svg-icons'; 

interface Props {
  restaurant: Restaurant;
  isFavorited: boolean;
  toggleFavorite: (id: number) => void;
}

const RestaurantCard: React.FC<Props> = ({ restaurant, isFavorited, toggleFavorite }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/restaurant/${restaurant.slug}`);
  };

  return (
    <div className="restaurant-card" onClick={handleCardClick}>
      <img src={restaurant.image} alt={restaurant.businessname} className="restaurant-image" />
      <div className="restaurant-info">
        <p className="restaurant-type" style={{ color: 'red' }}>{restaurant.restauranttype}</p>
        <p className="restaurant-rating">
          Rating: {restaurant.rating} based on {restaurant.reviews?.length || 0} reviews
        </p>
      </div>
      <div
        className={`heart-icon ${isFavorited ? 'favorited' : ''}`}
        onClick={(e) => {
          e.stopPropagation();
          toggleFavorite(restaurant.id);
        }}
      >
        {isFavorited ? (
          <FontAwesomeIcon icon={faHeart} /> 
        ) : (
          <FontAwesomeIcon icon={faRegularHeart} /> 
        )}
      </div>
    </div>
  );
};

export default RestaurantCard;
