import React from 'react';
import { FaHome, FaHistory, FaRegThumbsUp } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { CgPlayList, CgProfile } from "react-icons/cg";
import { IoLogoYoutube } from "react-icons/io";
import { RiVideoLine, RiPlayListLine } from "react-icons/ri";
import './Navbar.scss';
import devStore from '../../store/devStore';
import { Link } from 'react-router-dom';

function Navbar() {
  const { isNavOpen } = devStore();
  return (
    <div className='sidebar'>

      <div className="sidebar-section">
        <Link to="/">
          <div className="sidebar-item active">
            <FaHome className="sidebar-icon" size={24} />
            <span className="sidebar-label">Home</span>
          </div>
        </Link>
        <div className="sidebar-item">
          <SiYoutubeshorts className="sidebar-icon" size={24} />
          <span className="sidebar-label">Shorts</span>
        </div>
        <div className="sidebar-item">
          <MdOutlineSubscriptions className="sidebar-icon" size={24} />
          <span className="sidebar-label">Subscriptions</span>
        </div>
      </div>

      <div className="sidebar-divider"></div>

      <div className="sidebar-section">
        <div className="sidebar-header">You</div>
        <div className="sidebar-item">
          <CgProfile className="sidebar-icon" size={24} />
          <Link to="/userchannel" className="sidebar-label">Your channel</ Link>
          
        </div>
        <div className="sidebar-item">
          <FaHistory className="sidebar-icon" size={24} />
          <span className="sidebar-label">History</span>
        </div>
        <div className="sidebar-item">
          <CgPlayList className="sidebar-icon" size={24} />
          <span className="sidebar-label">Playlists</span>
        </div>
        <div className="sidebar-item">
          <RiVideoLine className="sidebar-icon" size={24} />
          <span className="sidebar-label">Your videos</span>
        </div>
        <div className="sidebar-item">
          <RiPlayListLine className="sidebar-icon" size={24} />
          <span className="sidebar-label">Watch later</span>
        </div>
        <div className="sidebar-item">
          <FaRegThumbsUp className="sidebar-icon" size={24} />
          <span className="sidebar-label">Liked videos</span>
        </div>
      </div>

      <div className="sidebar-divider"></div>

      <div className="sidebar-section">
        <div className="sidebar-header">Subscriptions</div>
        <div className="sidebar-item">
          <img src="/path-to-profile-image1.jpg" alt="Profile 1" className="profile-img" />
          <span className="sidebar-label">SR PAY</span>
        </div>

        <div className="sidebar-item">
          <img src="/path-to-profile-image4.jpg" alt="Profile 4" className="profile-img" />
          <span className="sidebar-label">Joe Rogan</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
