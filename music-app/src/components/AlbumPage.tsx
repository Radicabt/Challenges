import React from "react";
import { useParams } from "react-router-dom";
import { Artist } from "../types";
import "./AlbumPage.css";

interface AlbumPageProps {
  artists: Artist[];
}

const AlbumPage: React.FC<AlbumPageProps> = ({ artists }) => {
  const { albumId } = useParams<{ albumId: string }>();

  let album;
  let artistName;

  for (const artist of artists) {
    album = artist.albums.find((alb) => alb.albumId === albumId);
    if (album) {
      artistName = artist.name;
      break;
    }
  }

  if (!album) {
    return <div>Album not found</div>;
  }

  return (
    <div className="album-page">
      <h2>
        {artistName} - {album.title}
      </h2>
      <img src={`/images/albums/${album.cover}.jpg`} alt={album.title} />
      <p>
        Title: <span className="album-info">{album.title}</span>
      </p>
      <p>
        Year: <span className="album-info">{album.year}</span>
      </p>
      <p>
        Price: <span className="album-info">{album.price} $</span>
      </p>
    </div>
  );
};

export default AlbumPage;
