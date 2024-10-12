import React from 'react';
import swasthyaImage from '../assets/swasthya.jpg'; // Import the image from the assets folder
// import './Header.css'; // Make sure the CSS file is imported

const Header = () => {
    return (
        <nav className="navbar">
            <div className="brand-container">
                <img src={swasthyaImage} alt="Swasthya Logo" className="brand-logo" />
                <h1 className="brand-name">Swasthya</h1>
            </div>
            <ul className="navbar-list">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Treatments</a></li>
                <li><a href="#">Upcoming Events</a></li>
                <li><a href="#">Testimonials</a></li>
                <li><a href="#">Gallery</a></li>
                <li><a href="#">Contacts</a></li>
            </ul>
        </nav>
    );
}

export default Header;
