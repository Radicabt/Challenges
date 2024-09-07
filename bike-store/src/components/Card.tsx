import React from 'react';
import './Card.css';

interface CardProps {
  bike: {
    image: string;
    name: string;
    brand: string;
    price: number;
  };
}

const Card: React.FC<CardProps> = ({ bike }) => (
  <div className="card shadow-sm">
    <img src={`/image/${bike.image}.png`} alt={bike.name} className="card-img-top" />
    <div className="card-body" style={{ backgroundColor: 'rgb(254, 192, 2)' }}>
      <h5 className="card-title">{bike.name}</h5>
      <p className="card-text font-weight-bold">${bike.price}</p>
    </div>
  </div>
);

export default Card;
