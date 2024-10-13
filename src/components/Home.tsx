import React, { useEffect } from 'react';
import PopularRestaurants from './PopularRestaurants';
import AllRestaurants from './AllRestaurants';
import Cuisines from './Cuisines';
import { useRestaurantStore } from '../store/restaurantStore';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  const { popularRestaurants, initializeRestaurants } = useRestaurantStore();
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchRestaurants = async () => {
      const response = await fetch('http://localhost:3002/restaurants'); 
      const data = await response.json();
      initializeRestaurants(data.restaurants); 
    };

    fetchRestaurants();
  }, [initializeRestaurants]);

  const handleSurpriseMe = () => {
    if (popularRestaurants.length === 0) {
      alert("No popular restaurants available.");
      return;
    }
    const randomIndex = Math.floor(Math.random() * popularRestaurants.length);
    const randomRestaurant = popularRestaurants[randomIndex];
    
    navigate(`/restaurant/${randomRestaurant.slug}`);
  };

  return (
    <div className="home">
      <h1 className="home-heading">DON'T KNOW WHAT TO EAT?</h1>
      <button className="surprise-button" onClick={handleSurpriseMe}>
        Surprise me!
      </button>

      <section className="popular-section">
        <PopularRestaurants />
      </section>

      <section className="cuisines-section">
        <Cuisines />
      </section>

      <section className="all-restaurants-section">
        <h2>ALL RESTAURANTS</h2>
        <AllRestaurants />
      </section>
    </div>
  );
};

export default Home;
