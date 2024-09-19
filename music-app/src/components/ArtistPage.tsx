import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Artist } from '../types';
import './ArtistPage.css';

interface ArtistPageProps {
  artists: Artist[];
}

const ArtistPage: React.FC<ArtistPageProps> = ({ artists }) => {
  const { id } = useParams<{ id: string }>();

  const artist = artists.find(artist => artist.id === parseInt(id || '0'));

  if (!artist) {
    return <div>Artist not found</div>;
  }

  return (
    <div className="artist-page">
      <h1>{artist.name}</h1>
      <img src={`/images/covers/${artist.cover}.jpg`} alt={artist.name} />
      <p>{artist.bio}</p>

      <div className="albums-list">
        {artist.albums.map(album => (
          <div key={album.albumId} className="album-card">
            <Link to={`/album/${album.albumId}`}>
              <img src={`/images/albums/${album.cover}.jpg`} alt={album.title} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtistPage;
