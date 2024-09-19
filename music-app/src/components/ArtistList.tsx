import React from 'react';
import { Link } from 'react-router-dom';
import { Artist } from '../types';
import './ArtistList.css';

interface ArtistsListProps {
  artists: Artist[];
}

const ArtistsList: React.FC<ArtistsListProps> = ({ artists }) => {
  return (
    <div className="artists-list">
        <h1>Browse the artists</h1>
      {artists.map(artist => (
        <div className="artist-card" key={artist.id}>
          <Link to={`/artist/${artist.id}`}>
            <img src={`/images/covers/${artist.cover}.jpg`} alt={artist.name} />
            <h2>{artist.name}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ArtistsList;
