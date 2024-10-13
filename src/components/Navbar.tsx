import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Restaurant</Link>
      <Link to="/favorites">
        <FontAwesomeIcon icon={faHeart} className="heart-icon-navbar" />
      </Link>
    </nav>
  );
};

export default Navbar;

