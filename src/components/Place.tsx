import React from 'react';
import './styles/Place.css';

interface PlaceProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Place: React.FC<PlaceProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="place">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Place;
