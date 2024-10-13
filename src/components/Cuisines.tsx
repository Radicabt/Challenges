import React from 'react';
import './Cuisines.css';

const cuisines = ['canteen', 'bukka', 'eatery', 'seafood', 'pizza', 'vegan', 'pasta', 'american', 'japanese'];

const Cuisines: React.FC = () => {
  return (
    <div className="cuisines-container">
      <h2 className="cuisines-heading">CUISINES</h2>
      <div className="cuisine-filters">
        {cuisines.map((cuisine) => (
          <button key={cuisine} className="cuisine-button">
            {cuisine}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Cuisines;
