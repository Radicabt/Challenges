import React from 'react';
import { Link } from 'react-router-dom';
import { Artist } from '../types';
import './ArtistItem.css';

interface ArtistItemProps {
  artist: Artist;
}

const ArtistItem: React.FC<ArtistItemProps> = ({ artist }) => {
  return (
    <div className="artist-item">
      <Link to={`/artist/${artist.id}`}>
      <img src={`/images/${artist.cover}.jpg`} alt={artist.name} className="artist-cover"/>
        <div className="artist-name">{artist.name}</div>
      </Link>
    </div>
  );
};

export default ArtistItem;
