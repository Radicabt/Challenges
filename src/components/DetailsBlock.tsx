import React from 'react';
import './styles/DetailsBlock.css';

interface DetailsBlockProps {
  title: string;
  description: string;
  imageUrl: string;
}

const DetailsBlock: React.FC<DetailsBlockProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="details-block">
      <div className="details-text">
        <h5>ABOUT</h5>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="details-image">
        <img src={imageUrl} alt={title} />
      </div>
    </div>
  );
};

export default DetailsBlock;

