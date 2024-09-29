import React from 'react';
import { FaHome, FaHistory, FaRegThumbsUp } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";

import './NoSideBar.scss';
import devStore from '../../../../store/devStore';
import useStore from '../../../../store/userStore';
import { Link } from 'react-router-dom';

function Navbar() {
    const { isNavOpen } = devStore();
    const { isAuthenticated, user } = useStore();
    return (
        <div className='sidebar2'>

            <div className="sidebar2-section">
                <Link to="/">
                    <div className="sidebar2-item">
                        <FaHome className="sidebar2-icon" size={24} />
                        <span className="sidebar2-label">Home</span>
                    </div>
                </Link>
                <div className="sidebar2-item">
                    <SiYoutubeshorts className="sidebar2-icon" size={24} />
                    <span className="sidebar2-label">Shorts</span>
                </div>
                <div className="sidebar2-item">
                    <MdOutlineSubscriptions className="sidebar2-icon" size={24} />
                    <span className="sidebar2-label">Subscriptions</span>
                </div>
                <div className="sidebar2-item">
                    <MdOutlineSubscriptions className="sidebar2-icon" size={24} />
                    <div className="sidebar2-label">You</div>

                </div>
            </div>
        </div>
    );
}

export default Navbar;
