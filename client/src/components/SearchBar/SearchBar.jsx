import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faSearch, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import devStore from '../../store/devStore';
import { HiCurrencyDollar } from "react-icons/hi";
import { GrLanguage } from "react-icons/gr";
import { FaRegKeyboard } from "react-icons/fa6";
import { FaGoogle, FaUnlockAlt } from "react-icons/fa";
import { PiSignOut } from "react-icons/pi";
import { SiYoutubestudio } from "react-icons/si";
import { FiDatabase } from "react-icons/fi";
import { IoLanguage, IoMoonSharp } from "react-icons/io5";
import { MdOutlineFeedback, MdOutlineSwitchAccount, MdOutlineHelpOutline } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import useStore from '../../store/userStore';
import './SearchBar.scss'; // Ensure this file contains the necessary styling
import image1 from '../../assets/profile_pic.webp';

function SearchBar() {
    const { isNavOpen, toggleNav } = devStore(); 
    const { user, isAuthenticated, logout } = useStore();

    const [isDropdownVisible, setDropdownVisible] = useState(false); 

    const submitHandler = () => {
        logout();
    };

    const toggleDropdown = () => {
        setDropdownVisible(prev => !prev);
    };

    return (
        <div className="cont">
            <div>
                <FontAwesomeIcon
                    className='icon-large'
                    icon={isNavOpen ? faTimes : faBars}
                    onClick={() => toggleNav()}
                />
            </div>
            <div className='search-bar-wrapper'>
                <div className="nav-center">
                    <div className="search-bar">
                        <input
                            type="text"
                            placeholder="Search"
                            className="search-input"
                        />
                        <button className="search-button">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                    <FontAwesomeIcon icon={faMicrophone} className="mic-icon" />
                </div>
                <div className='profile-section'>
                    {isAuthenticated ? (
                        <button
                            className='logout-button'
                            onClick={submitHandler}
                        >
                            Logout
                        </button>
                    ) : (
                        <Link to='/login'>
                            <button className='login-button'>
                                Login
                            </button>
                        </Link>
                    )}
                    <div className="relative">
                        <img
                            src={isAuthenticated && user?.avatar ? user.avatar : image1}
                            className="profile-image"
                            onClick={toggleDropdown} 
                        />
                        {isDropdownVisible && (
                            <div
                                className="dropdown-menu"
                                onMouseLeave={() => setDropdownVisible(false)} 
                            >
                                <div className='dropdown'>
                                    <div className="dropdown-section">
                                        <div className="dropdown-item">
                                            <img
                                                src={isAuthenticated && user?.avatar ? user.avatar : image1}
                                                className="profile-image-dropdown"
                                            />
                                            <div className='profile-details'>
                                                <div className="dropdown-label">{isAuthenticated && user?.fullName ? user.fullName : "Name"}</div>
                                                <div className="dropdown-label">{isAuthenticated && user?.username ? user.username : "Username"}</div>
                                                <Link to="/userchannel" className="dropdown-label-link">View Channel</Link>
                                            </div>
                                        </div>
                                        <div className="dropdown-divider"></div>
                                        <Link to="/account" className="dropdown-item">
                                            <FaGoogle className="dropdown-icon" size={22} />
                                            <span className="dropdown-label">Google Account</span>
                                        </Link>
                                        <div className="dropdown-item">
                                            <MdOutlineSwitchAccount className="dropdown-icon" size={22} />
                                            <span className="dropdown-label">Switch Account</span>
                                        </div>
                                        <div className="dropdown-item">
                                            <PiSignOut className="dropdown-icon" size={22} />
                                            <span className="dropdown-label">Sign out</span>
                                        </div>
                                    </div>
                                    <div className="dropdown-divider"></div>
                                    <div className="dropdown-section">
                                        <div className="dropdown-item">
                                            <SiYoutubestudio className="dropdown-icon" size={22} />
                                            <span className="dropdown-label">YouTube Studio</span>
                                        </div>
                                        <div className="dropdown-item">
                                            <HiCurrencyDollar className="dropdown-icon" size={22} />
                                            <span className="dropdown-label">Purchase and memberships</span>
                                        </div>
                                        <div className="dropdown-item">
                                            <FiDatabase className="dropdown-icon" size={22} />
                                            <span className="dropdown-label">Your data in YouTube</span>
                                        </div>
                                        <div className="dropdown-item">
                                            <IoMoonSharp className="dropdown-icon" size={22} />
                                            <span className="dropdown-label">Appearance: Device theme</span>
                                        </div>
                                        <div className="dropdown-item">
                                            <IoLanguage className="dropdown-icon" size={22} />
                                            <span className="dropdown-label">Language: British English</span>
                                        </div>
                                        <div className="dropdown-item">
                                            <FaUnlockAlt className="dropdown-icon" size={22} />
                                            <span className="dropdown-label">Restricted Mode: Off</span>
                                        </div>
                                        <div className="dropdown-item">
                                            <GrLanguage className="dropdown-icon" size={22} />
                                            <span className="dropdown-label">Location: India</span>
                                        </div>
                                        <div className="dropdown-item">
                                            <FaRegKeyboard className="dropdown-icon" size={22} />
                                            <span className="dropdown-label">Keyboard shortcuts</span>
                                        </div>
                                    </div>
                                    <div className="dropdown-divider"></div>
                                    <div className="dropdown-section">
                                        <div className="dropdown-item">
                                            <IoMdSettings className="dropdown-icon" size={22} />
                                            <span className="dropdown-label">Settings</span>
                                        </div>
                                        <div className="dropdown-item">
                                            <MdOutlineHelpOutline className="dropdown-icon" size={22} />
                                            <span className="dropdown-label">Help</span>
                                        </div>
                                        <div className="dropdown-item">
                                            <MdOutlineFeedback className="dropdown-icon" size={22} />
                                            <span className="dropdown-label">Send feedback</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;
