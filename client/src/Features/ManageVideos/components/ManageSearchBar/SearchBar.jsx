import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faSearch, faMicrophone } from '@fortawesome/free-solid-svg-icons'; // Import the cross icon
import devStore from '../../../../store/devStore';
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
import useStore from '../../../../store/userStore';
import './SearchBar.scss'; // Ensure this file contains the necessary styling
import image1 from '../../../../assets/profile_pic.webp';

function SearchBar() {
    const { isNavOpen, toggleNav } = devStore(); // Get isNavOpen state from the store
    const { user, isAuthenticated, logout } = useStore();

    // Dropdown state
    const [isDropdownVisible, setDropdownVisible] = useState(false); // Initially set to false
    const [isCreateDropdownVisible, setCreateDropdownVisible] = useState(false); // Initially set to false

    const submitHandler = () => {
        logout();
    };

    const toggleDropdown = () => {
        setDropdownVisible(prev => !prev); // Toggle dropdown visibility
    };
    const toggleCreateDropdown = () => {
        setCreateDropdownVisible(prev => !prev); // Toggle dropdown visibility
    };

    return (
        <div className="cont text-white p-4 flex justify-between">
            <div className='mx-4'>
                <FontAwesomeIcon
                    className='text-white icon-large'
                    icon={isNavOpen ? faTimes : faBars} // Conditional rendering of icons
                    onClick={() => toggleNav()}
                />
            </div>
            <div className='mx-10 w-[80%]'>
                <div className="flex justify-between">
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
                    <div className='flex items-center relative'>
                        {isAuthenticated ? (
                            <button
                                className='bg-gray-800 rounded-2xl px-8 mr-5 h-10'
                                onClick={submitHandler}
                            >
                                Logout
                            </button>
                        ) : (
                            <Link to='/login'>
                                <button className='bg-gray-800 rounded-2xl px-8 mr-5 h-10'>
                                    Login
                                </button>
                        
                            </Link>
                        )}
                        <div onClick={toggleCreateDropdown}>
                            <button className='bg-gray-800 rounded-2xl px-8 mr-5 h-10'  >
                            create
                        </button>
                        {isCreateDropdownVisible && (
                                <div
                                    className="dropdown-menu absolute right-0 w-48 text-white rounded-lg shadow-lg"
                                    onMouseLeave={() => setCreateDropdownVisible(false)} // Hide on mouse leave
                                >
                                    <div className='dropdown '>

                                        <div className="dropdown-section">

                                            
                                            <div className="dropdown-divider"></div>

                                            <Link to="/account" className="dropdown-item">
                                                <FaGoogle className="dropdown-icon" size={22} />
                                                <span className="dropdown-label">Google Account</span>
                                            </ Link>
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

                                        

                                        
                                    </div>
                                </div>
                            )}
                        </div>
                        

                        {/* Profile Image with dropdown */}
                        <div className="relative">
                            <img
                                src={isAuthenticated && user?.avatar ? user.avatar : image1}
                                className="rounded-full bg-green-600 w-10 h-10 flex items-center justify-center text-white font-bold cursor-pointer"
                                onClick={toggleDropdown} // Click to toggle dropdown
                            />
                            {/* Dropdown Menu */}
                            {isDropdownVisible && (
                                <div
                                    className="dropdown-menu absolute right-0 w-48 text-white rounded-lg shadow-lg"
                                    onMouseLeave={() => setDropdownVisible(false)} // Hide on mouse leave
                                >
                                    <div className='dropdown '>

                                        <div className="dropdown-section">

                                            <div className="dropdown-item">

                                                <img
                                                    src={isAuthenticated && user?.avatar ? user.avatar : image1}
                                                    className="rounded-full bg-green-600 w-10 h-10 mr-5 mb-5 flex items-center justify-center text-white font-bold cursor-pointer"

                                                />
                                                <div className='profile-details'>
                                                    <div className="dropdown-label">{isAuthenticated && user?.fullName ? user.fullName : "Name"}</div>
                                                    <div className="dropdown-label">{isAuthenticated && user?.username ? user.username : "Username"}</div>
                                                    <Link to="/userchannel" className="dropdown-label-link">View Channel</ Link>
                                                </div>

                                            </div>
                                            <div className="dropdown-divider"></div>

                                            <Link to="/account" className="dropdown-item">
                                                <FaGoogle className="dropdown-icon" size={22} />
                                                <span className="dropdown-label">Google Account</span>
                                            </ Link>
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
                                                <span className="dropdown-label">Purchase ans memberships</span>
                                            </div>
                                            <div className="dropdown-divider"></div>
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
                                                <span className="dropdown-label">Language:Britsh English</span>
                                            </div>
                                            <div className="dropdown-item">
                                                <FaUnlockAlt className="dropdown-icon" size={22} />
                                                <span className="dropdown-label">Restricted Mode:Off</span>
                                            </div>
                                            <div className="dropdown-item">
                                                <GrLanguage className="dropdown-icon" size={22} />
                                                <span className="dropdown-label">Location:India</span>
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
                                            <div className="dropdown-divider"></div>
                                            <div className="dropdown-item">
                                                <MdOutlineHelpOutline className="dropdown-icon" size={22} />
                                                <span className="dropdown-label">Help</span>
                                            </div>
                                            <div className="dropdown-item">
                                                < MdOutlineFeedback className="dropdown-icon" size={22} />
                                                <span className="dropdown-label">Send feedback</span>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                {/* Tabs */}
            </div>
        </div>
    );
}

export default SearchBar;
