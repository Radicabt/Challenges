import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRestaurantStore } from '../store/restaurantStore';
import { Review } from '../types';

const RestaurantDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { restaurants, updateRestaurant } = useRestaurantStore();
  const restaurant = restaurants.find((r) => r.slug === slug);

  const [newReview, setNewReview] = useState<Review>({
    id: 0, 
    author: '',
    comment: '',
    stars: 1,
  });

  const addReview = async () => {
    if (restaurant) {
      const updatedReview: Review = {
        ...newReview,
        id: Date.now(), 
      };

      const updatedReviews = [...restaurant.reviewsList, updatedReview];

      await updateRestaurant(restaurant.id, { ...restaurant, reviewsList: updatedReviews });
      setNewReview({ id: 0, author: '', comment: '', stars: 1 });
    }
  };

  useEffect(() => {
    if (restaurant) {
      const totalStars = restaurant.reviewsList.reduce((sum, review) => sum + review.stars, 0);
      restaurant.rating = totalStars / restaurant.reviewsList.length || 0; 
    }
  }, [restaurant]);

  if (!restaurant) return <p>Restaurant not found</p>;

  return (
    <div>
      <h1>{restaurant.businessname}</h1>
      <img src={restaurant.image} alt={restaurant.businessname} />
      <p>Rating: {restaurant.rating.toFixed(1)} based on {restaurant.reviewsList.length} reviews</p>
      <p>{restaurant.address}</p>
      <p>{restaurant.parkinglot ? 'We have a parking lot waiting for you.' : 'No parking available.'}</p>

      <h2>REVIEWS</h2>
      {restaurant.reviewsList.map((review) => (
        <div key={review.id}>
          <p><strong>{review.author}</strong>: {review.comment} (Rating: {review.stars})</p>
        </div>
      ))}

      <h3>Add a Review</h3>
      <input 
        type="text" 
        placeholder="Name" 
        value={newReview.author} 
        onChange={(e) => setNewReview({ ...newReview, author: e.target.value })} 
      />
      <textarea 
        placeholder="Comment" 
        value={newReview.comment} 
        onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })} 
      />
      <select 
        value={newReview.stars} 
        onChange={(e) => setNewReview({ ...newReview, stars: Number(e.target.value) })}
      >
        <option value="1">1 Star</option>
        <option value="2">2 Stars</option>
        <option value="3">3 Stars</option>
        <option value="4">4 Stars</option>
        <option value="5">5 Stars</option>
      </select>
      <button onClick={addReview}>Leave a Review</button>
    </div>
  );
};

export default RestaurantDetail;
