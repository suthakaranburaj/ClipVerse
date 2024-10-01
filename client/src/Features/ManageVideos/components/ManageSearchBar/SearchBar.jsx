// SearchBar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faSearch, faMicrophone } from '@fortawesome/free-solid-svg-icons';
import devStore from '../../../../store/devStore';
import { HiCurrencyDollar } from "react-icons/hi";
import { GrLanguage } from "react-icons/gr";
import { FaRegKeyboard } from "react-icons/fa6";
import { CgPlayListAdd } from "react-icons/cg";
import { FaGoogle, FaUnlockAlt } from "react-icons/fa";
import { PiSignOut } from "react-icons/pi";
import { SiYoutubestudio } from "react-icons/si";
import { FiDatabase, FiUpload, FiEdit } from "react-icons/fi";
import { IoLanguage, IoMoonSharp } from "react-icons/io5";
import { MdOutlineFeedback, MdOutlineSwitchAccount, MdOutlinePodcasts, MdOutlineHelpOutline, MdVideoCall } from "react-icons/md";
import { IoMdSettings, IoMdWifi } from "react-icons/io";
import useStore from '../../../../store/userStore';
import './SearchBar.scss';
import image1 from '../../../../assets/profile_pic.webp';
import { useForm } from 'react-hook-form';
import useVideosStore from '../../../../store/useVideosStore'

function SearchBar() {
    const { isNavOpen, toggleNav } = devStore();
    const { user, isAuthenticated, logout } = useStore();

    const [isModalVisible, setModalVisible] = useState(false);
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [isDropdownVisible1, setDropdownVisible1] = useState(false);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const submitHandler = () => {
        logout();
    };

    const toggleDropdown = () => {
        setDropdownVisible(prev => !prev);
    };

    const toggleDropdown1 = () => {
        setDropdownVisible1(prev => !prev);
    };

    const handleUploadClick = () => {
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
        reset(); // Reset the form fields
    };

    const { register:publishAVideo, isLoading, error } = useVideosStore();
    const onSubmit = async (data) => {
        // FormData is required if you're uploading files
        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('description', data.description);
        formData.append('videoFile', data.videoFile[0]); // File input from useForm
        formData.append('thumbnail',data.thumbnail[0]);
        formData.append("categories", JSON.stringify(data.categories));
        console.log(data)
        // Call the publishAVideo function from the zustand store
        const success = await publishAVideo(formData);
        
        if (success) {
          reset(); // Reset the form if video upload is successful
        }
      };

    return (
        <div className="searchbar-container">
            <div className='nav-icon'>
                <FontAwesomeIcon
                    className='icon-large'
                    icon={isNavOpen ? faTimes : faBars}
                    onClick={toggleNav}
                />
            </div>
            <div className='searchbar-content'>
                <div className="searchbar-inner">
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
                    <div className='actions'>
                        {isAuthenticated ? (
                            <button
                                className='auth-button logout-button'
                                onClick={submitHandler}
                            >
                                Logout
                            </button>
                        ) : (
                            <Link to='/login'>
                                <button className='auth-button login-button'>
                                    Login
                                </button>
                            </Link>
                        )}
                        <div className="create-button-container">
                            <button className='create-button' onClick={toggleDropdown1}>
                                <MdVideoCall className="dropdown-icon" size={22} />
                                Create
                            </button>

                            {/* Create Dropdown Menu */}
                            {isDropdownVisible1 && (
                                <div
                                    className="dropdown-menu create-dropdown"
                                    onMouseLeave={() => setDropdownVisible1(false)}
                                >
                                    <div className='dropdown'>
                                        <div className="dropdown-section">
                                            <div className="dropdown-item" onClick={handleUploadClick}>
                                                <FiUpload className="dropdown-icon" size={22} />
                                                <span className="dropdown-label">Upload videos</span>
                                            </div>
                                            <div className="dropdown-item">
                                                <IoMdWifi className="dropdown-icon" size={22} />
                                                <span className="dropdown-label">Go live</span>
                                            </div>
                                            <div className="dropdown-item">
                                                <FiEdit className="dropdown-icon" size={22} />
                                                <span className="dropdown-label">Create post</span>
                                            </div>
                                            <div className="dropdown-item">
                                                <CgPlayListAdd className="dropdown-icon" size={22} />
                                                <span className="dropdown-label">New playlist</span>
                                            </div>
                                            <div className="dropdown-item">
                                                <MdOutlinePodcasts className="dropdown-icon" size={22} />
                                                <span className="dropdown-label">New podcast</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Profile Image with Dropdown */}
                        <div className="profile-container">
                            <img
                                src={isAuthenticated && user?.avatar ? user.avatar : image1}
                                className="profile-image"
                                onClick={toggleDropdown}
                                alt="Profile"
                            />
                            {/* Profile Dropdown Menu */}
                            {isDropdownVisible && (
                                <div
                                    className="dropdown-menu profile-dropdown"
                                    onMouseLeave={() => setDropdownVisible(false)}
                                >
                                    <div className='dropdown'>
                                        <div className="dropdown-section">
                                            <div className="dropdown-item profile-info">
                                                <img
                                                    src={isAuthenticated && user?.avatar ? user.avatar : image1}
                                                    className="profile-img"
                                                    alt="Profile"
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
                                            <div className="dropdown-item" onClick={submitHandler}>
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
                                            <div className="dropdown-divider"></div>
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
                {/* Upload Modal */}
                {isModalVisible && (
                    <div className="modal-overlay" onClick={handleCloseModal}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <h2 className='modal-label'>Upload a New Video</h2>
                            <div className="dropdown-divider"></div>
                            <form className='upload-section' onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                    <label htmlFor="title">Title</label>
                                    <input
                                        id="title"
                                        type="text"
                                        placeholder="Enter video title"
                                        {...register('title', { required: 'Title is required' })}
                                    />
                                    {errors.title && <span className="error">{errors.title.message}</span>}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="thumbnail">Thumbnail</label>
                                    <input
                                        id="thumbnail"
                                        type="file"
                                        accept="image/*"
                                        {...register('thumbnail', { required: 'Thumbnail is required' })}
                                    />
                                    {errors.thumbnail && <span className="error">{errors.thumbnail.message}</span>}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="description">Description</label>
                                    <textarea
                                        id="description"
                                        placeholder="Enter video description"
                                        {...register('description', { required: 'Description is required' })}
                                    ></textarea>
                                    {errors.description && <span className="error">{errors.description.message}</span>}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="videoFile">Video File</label>
                                    <input
                                        id="videoFile"
                                        type="file"
                                        accept="video/*"
                                        {...register('videoFile', { required: 'Video file is required' })}
                                    />
                                    {errors.videoFile && <span className="error">{errors.videoFile.message}</span>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="categories">Categories (Select up to 5)</label>
                                    <select
                                        id="categories"
                                        multiple
                                        {...register('categories', {
                                            validate: value => value.length <= 5 || 'You can select up to 5 categories',
                                        })}
                                    >
                                        <option value="Education">Education</option>
                                        <option value="Entertainment">Entertainment</option>
                                        <option value="Sports">Sports</option>
                                        <option value="Music">Music</option>
                                        <option value="News">News</option>
                                        <option value="Lifestyle">Lifestyle</option>
                                    </select>
                                    {errors.categories && <span className="error">{errors.categories.message}</span>}
                                </div>


                                <div className="form-actions">
                                    <button type="submit" className="btn-upload">Upload</button>
                                    <button type="button" className="btn-close" onClick={handleCloseModal}>Close</button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
        );
    }

    export default SearchBar;
