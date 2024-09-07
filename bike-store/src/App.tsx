import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Card from './components/Card';
import Filters from './components/Filters';
import Footer from './components/Footer';
import './App.css';
import { fetchBikes } from './fetchData';
import { Bike } from './types/Bike';


const App: React.FC = () => {
  const [bikes, setBikes] = useState<Bike[]>([]);
  const [filteredBikes, setFilteredBikes] = useState<Bike[]>([]);

  useEffect(() => {
    const getBikes = async () => {
      const data = await fetchBikes();
      setBikes(data);
      setFilteredBikes(data); 
    };

    getBikes();
  }, []);

  const handleFilterChange = (filterType: string, value: string) => {
    let filtered = bikes;

    if (filterType === 'gender') {
      filtered = value === 'Show All' ? bikes : bikes.filter((bike) => bike.gender === value);
    } else if (filterType === 'brand') {
      filtered = value === 'Show All' ? bikes : bikes.filter((bike) => bike.brand === value);
    }

    setFilteredBikes(filtered);
  };

  return (
    <div className="app">
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <Filters onFilterChange={handleFilterChange} />
          </div>
          <div className="col-md-9">
            <div className="row">
              {filteredBikes.map((bike, index) => (
                <div key={index} className="col-lg-4 col-md-6 mb-4">
                  <Card bike={bike} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
