import React from "react";
import { FaHome, FaHistory, FaRegThumbsUp } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { CgPlayList, CgProfile } from "react-icons/cg";
import { RiVideoLine, RiPlayListLine } from "react-icons/ri";
import { Link } from "react-router-dom";

import './Navbar.scss';

function Navbar() {
    return (
        <div className="sidebar">
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
                <Link to='/subscription'>
                    <div className="sidebar-item">
                        <MdOutlineSubscriptions className="sidebar-icon" size={24} />

                        <span className="sidebar-label">Subscriptions</span>
                    </div>
                </Link>
            </div>
            <div className="sidebar-divider"></div>
            <div className="sidebar-section">
                <div className="sidebar-header">You</div>
                <div className="sidebar-item">
                    <CgProfile className="sidebar-icon" size={24} />
                    <Link to="/userchannel" className="sidebar-label">
                        Your channel
                    </Link>
                </div>
                <div className="sidebar-item">
                    <FaHistory className="sidebar-icon" size={24} />
                    <Link to="/watch-history" className="sidebar-label">
                        Watch History
                    </Link>
                </div>
                <div className="sidebar-item" >
                    <CgPlayList className="sidebar-icon" size={24} />
                    <Link className="sidebar-label">
                        Playlists                    
                    </Link>
                </div>
                <div className="sidebar-item">
                    <RiVideoLine className="sidebar-icon" size={24} />
                    <span className="sidebar-label">Your videos</span>
                </div>
                <div className="sidebar-item">
                    <RiPlayListLine className="sidebar-icon" size={24} />
                    <span className="sidebar-label">Watch later</span>
                </div>
                <Link to='likedvideos'>
                    <div className="sidebar-item">
                        <FaRegThumbsUp className="sidebar-icon" size={24} />
                        <span className="sidebar-label">Liked videos</span>
                    </div>
                </Link>
            </div>
            <div className="sidebar-divider"></div>
            <div className="sidebar-section">
                <div className="sidebar-header">Subscriptions</div>
                <div className="sidebar-item">
                    <img
                        src="/path-to-profile-image1.jpg"
                        alt="Profile 1"
                        className="profile-img"
                    />
                    <span className="sidebar-label">SR PAY</span>
                </div>
                <div className="sidebar-item">
                    <img
                        src="/path-to-profile-image4.jpg"
                        alt="Profile 4"
                        className="profile-img"
                    />
                    <span className="sidebar-label">Joe Rogan</span>
                </div>
            </div>
        </div>
  );
}

export default Navbar;
