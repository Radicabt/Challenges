import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ArtistsList from "./components/ArtistList";
import ArtistPage from "./components/ArtistPage";
import AlbumPage from "./components/AlbumPage";
import artists from "./data/db";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<ArtistsList artists={artists} />} />
            <Route path="/artist/:id" element={<ArtistPage artists={artists} />} />
            <Route path="/album/:albumId" element={<AlbumPage artists={artists} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
