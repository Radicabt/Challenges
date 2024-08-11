import React, { useEffect, useState } from 'react';
import Place from './Place';
import './styles/PlacesContainer.css';

interface PlaceData {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const PlacesContainer: React.FC = () => {
  const [places, setPlaces] = useState<PlaceData[]>([]);

  useEffect(() => {
    fetch('http://localhost:5001/places')
      .then(response => response.json())
      .then(data => setPlaces(data));
  }, []);

  return (
    <div className="places-container">
      {places.map(place => (
        <Place key={place.id} {...place} />
      ))}
    </div>
  );
};

export default PlacesContainer;
