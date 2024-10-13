import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Favorites from './components/Favorites';
import RestaurantDetail from './components/RestaurantDetail';
import Footer from './components/Footer';
import '@fortawesome/fontawesome-svg-core/styles.css';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/restaurant/:slug" element={<RestaurantDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
