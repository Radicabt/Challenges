import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-light">
      <div className="footer-container">
        <div className="social-share">
          <h6>Social share</h6>
          <div className="icons">
            <FaFacebookF className="social-icon text-white p-1" />
            <FaInstagram className="social-icon text-white p-1" />
            <FaTwitter className="social-icon text-white p-1" />
            <FaLinkedin className="social-icon text-white p-1" />
          </div>
        </div>
        <div className="footer-section">
          <h6>Event info</h6>
          <ul>
            <li>Enter Now</li>
            <li>Event Info</li>
            <li>Course Maps</li>
            <li>Race Pack</li>
            <li>Results</li>
            <li>FAQ</li>
            <li>Am I Registered?</li>
          </ul>
        </div>
        <div className="footer-section">
          <h6>Registration</h6>
          <ul>
            <li>Volunteers</li>
            <li>Gallery</li>
            <li>Press</li>
            <li>Results</li>
            <li>Privacy Policy</li>
            <li>Service Plus</li>
            <li>Contacts</li>
          </ul>
        </div>
        <div className="footer-section">
          <h6>Schedule</h6>
          <ul>
            <li>Gallery</li>
            <li>About</li>
            <li>Videos</li>
            <li>Results</li>
            <li>FAQs</li>
            <li>Results</li>
            <li>Volunteers</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
