import React from 'react';
import './LandingPage.css';
import RocketIcon from '../assets/RocketIcon.png';
import AppleLogo from '../assets/appleLogo.png';
import ImageHero from '../assets/ImageHero.png';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <>
      <div className="container">
        <header className="header">
          <div className="logo">
            <img src={RocketIcon} className="logo-icon" style={{ width: '2em' }} alt="Rocket Icon" /> Boost
          </div>
        </header>

        <main className="main">
          <div className="hero">
            <div className="hero-text">
              <h1>
                Boost Your Testosterone
              </h1>
              <p className="subtitle">
                Increase your energy, drive, and confidence.
              </p>
              <div className="store-buttons">
                <button className="store-btn apple">
                  <img src={AppleLogo} alt="Apple Logo" className="apple-logo" />
                  <div>
                    <span>Download on the</span>
                    <p>App Store</p>
                  </div>
                </button>
              </div>
            </div>
            <div className="hero-image">
              <img src={ImageHero} alt="App Preview" />
            </div>
          </div>
        </main>
      </div>
      <footer className="footer">
        <p>© 2025 Boost | <Link to="/privacy">Privacy Policy</Link></p>
      </footer>
    </>
  );
};

export default LandingPage;
