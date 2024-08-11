import React from 'react';
import Banner from './components/Banner';
import DetailsBlock from './components/DetailsBlock';
import PlacesContainer from './components/PlacesContainer';
import Footer from './components/Footer';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Banner />
      <DetailsBlock
        title="Stories of Adventure"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere ratione nostrum ea obcaecati suscipit quia magnam! Sed, eveniet vel reprehenderit tenetur
        minima aa alloula vellt culousaam earum aspernatur aoloremoue losum!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere ratione nostrum ea obcaecati suscipit quia magnam!"
        imageUrl="https://picsum.photos/600/400"
      />
      <PlacesContainer />
      <DetailsBlock
        title="Popular Adventures"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere ratione nostrum ea obcaecati suscipit quia magnam! Sed, eveniet vel reprehenderit tenetur
        minima aa alloula vellt culousaam earum aspernatur aoloremoue losum!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere ratione nostrum ea obcaecati suscipit quia magnam!"
        imageUrl="https://picsum.photos/600/400"
      />
      <Footer />
    </div>
  );
};

export default App;
