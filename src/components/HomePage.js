import React from 'react';
import './HomePage.css'; // Make sure to create this CSS file
  
const HomePage = () => {
  // Function to scroll to the input section
  const scrollToInputSection = () => {
    document.getElementById('inputSection').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="home-page">
      <div className="hero-section">
        <img src="/path-to-your-logo/logo.png" alt="Logo" className="logo" />
        <h1>Welcome to TWC YT AI</h1>
        <button onClick={scrollToInputSection} className="get-started-btn">Get Started</button>
      </div>
      {/* Placeholder for the YouTube link input section */}
      <div id="inputSection" className="input-section">
        {/* Input section content will go here */}
      </div>
    </div>
  );
};

export default HomePage;
