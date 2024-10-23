import React from 'react';
import swasthyaImage from '../assets/swasthya.jpg'; // Import the image from the assets folder
import '../App.css'; // Ensure the CSS file is imported

const Header = () => {
    return (
        <nav className="navbar">
            <div className="brand-container">
                <img src={swasthyaImage} alt="Swasthya Logo" className="brand-logo" />
                <h1 className="brand-name">Swasthya</h1>
            </div>
            <ul className="navbar-list">
                <li><a href="/">HOME</a></li>
                <li className="dropdown">
                    <a href="" className="dropdown-toggle">
                        ABOUT +
                    </a>
                    <ul className="dropdown-menu">
                        <li><a href="/About">About Us</a></li>
                        <li><a href="/Team">Our Team</a></li>
                        <li><a href="/Awards">Awards</a></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <a href="#" className="dropdown-toggle">
                        TREATMENTS +
                    </a>
                    <ul className="dropdown-menu">
                        <li className="dropdown-submenu">
                            <a href="#">Acupuncture</a>
                            {/* Sub-dropdown for Acupuncture */}
                            <ul className="dropdown-submenu-menu">
                                <li><a href="/Accupuncture">Accupuncture</a></li>
                                <li><a href="/Moxibustion">Moxibustion</a></li>
                                <li><a href="/CuppingTherapy">Cupping Therapy</a></li>
                                <li><a href="/FireCupping">Fire Cupping</a></li>
                                <li><a href="/Scalp">Scalp Acupuncture</a></li>
                                <li><a href="/Acufacial">Acufacial Cosmetic Acupuncture</a></li>
                                <li><a href="/Point">Point Injections</a></li>
                                <li><a href="/Paedriatic">Paediatric Acupuncture</a></li>
                                <li><a href="/Ear">Ear Acupuncture</a></li>
                            </ul>
                        </li>
                        <li><a href="/Accupressure">Acupressure</a></li>
                        <li><a href="/Hyperbolic">Hyperbaric Oxygen Therapy</a></li>
                        <li><a href="/Atomic">Atomic Hydrogen Therapy</a></li>
                        <li><a href="/WholeBody">Whole Body Cryotherapy</a></li>
                        <li><a href="/Ozone">Ozone Therapy</a></li>
                        <li><a href="/Colon">Colon Hydrotherapy</a></li>
                        <li><a href="/Physiotherapy">Physiotherapy</a></li>
                        <li><a href="HeatCold">Special Heat and Cold Therapy</a></li>
                        <li><a href="/Naturopathy">Naturopathy</a></li>
                        <li><a href="/Yoga">Yoga & Diet Therapy</a></li>
                        <li><a href="/Mudra">Mudra Healing / Su-Jok</a></li>
                        <li><a href="/Reflexology">Reflexology</a></li>
                        <li><a href="/Weight">Worry-Free Weight Management</a></li>
                    </ul>
                </li>
                <li><a href="/Events">UPCOMING EVENTS</a></li>
                <li className="dropdown">
                    <a href="#" className="dropdown-toggle">
                        TESTIMONIALS +
                    </a>
                    <ul className="dropdown-menu">
                        <li><a href="/Videos">Videos</a></li>
                    </ul>
                </li>
                <li><a href="/Gallery">GALLERY</a></li>
                <li><a href="/Contacts">CONTACTS</a></li>
            </ul>
        </nav>
    );
}

export default Header;
