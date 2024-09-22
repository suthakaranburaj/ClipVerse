import React, { useState } from 'react';
import './Navbar.scss';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      {/* Toggle Button for smaller screens */}
      <div className="menu-toggle" onClick={toggleSidebar}>
        ☰ {/* You can replace this with an icon */}
      </div>

      {/* Sidebar Container */}
      <div className={`container ${sidebarOpen ? 'open' : ''}`}>
        {/* Main Menu Section */}
        <div className="menu-section">
          <div className="menu-item active">
            <i className="fas fa-home"></i> Home
          </div>
          <div className="menu-item">
            <i className="fas fa-play-circle"></i> Shorts
          </div>
          <div className="menu-item">
            <i className="fas fa-video"></i> Subscriptions
          </div>
        </div>

        {/* Divider */}
        <hr />

        {/* Library Section */}
        <div className="menu-section">
          <div className="menu-item">
            <i className="fas fa-history"></i> History
          </div>
          <div className="menu-item">
            <i className="fas fa-clock"></i> Watch Later
          </div>
          <div className="menu-item">
            <i className="fas fa-thumbs-up"></i> Liked Videos
          </div>
        </div>

        {/* Divider */}
        <hr />

        {/* Subscriptions */}
        <div className="menu-section">
          <h4 className="section-title">Subscriptions</h4>
          <div className="subscription-item">
            <img src="path-to-image.jpg" alt="User" />
            Apna College
          </div>
          <div className="subscription-item">
            <img src="path-to-image.jpg" alt="User" />
            BB Ki Vines
          </div>
          <div className="subscription-item">
            <img src="path-to-image.jpg" alt="User" />
            CarryMinati
          </div>
          <div className="show-more">Show more</div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="main-content">
        {/* Add your homepage or other page content here */}
        <h1>Homepage Content</h1>
        <p>This is where the homepage content goes.</p>
      </div>
    </>
  );
};

export default Navbar;
