import React, { useEffect, useState } from 'react';
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
import logo from '../../assets/ClipVerse_logo.png'

function SearchBar() {
    const { isNavOpen, toggleNav } = devStore(); 
    const { user, isAuthenticated, logout ,register} = useStore();

    const [isDropdownVisible, setDropdownVisible] = useState(false); 

    const submitHandler = () => {
        logout();
    };

    const toggleDropdown = () => {
        setDropdownVisible(prev => !prev);
    };

    useEffect(() => {
        if (isAuthenticated) {
            const fetchData = async () => {
                await user;
            };
            fetchData();
        }
    }, [user, isAuthenticated]);
    

    return (
        <div className="containerSearchBar">
            <div className='containerSearchBar1'>
                <FontAwesomeIcon
                    className='icon-large'
                    icon={isNavOpen ? faTimes : faBars}
                    onClick={() => toggleNav()}
                />
                <Link to='/'>
                    <img src={logo} alt="" />
                </Link>
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
                            <div class="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>
                            <div class="text">Logout</div>
                        </button>
                    ) : (
                        <Link to='/login'>
                            <button className='login-button'>
                                Login
                            </button>
                        </Link>
                    )}
                    <Link to={`/${user?.username}/${user?._id}`}>
                        <div className="relative">
                            <img
                                src={isAuthenticated && user?.avatar ? user.avatar : image1}
                                className="profile-image"
                                onClick={toggleDropdown} 
                            />
                            {/* {isDropdownVisible && (
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
                            )} */}
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;
