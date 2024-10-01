import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faSearch, faMicrophone } from '@fortawesome/free-solid-svg-icons'; // Import the cross icon
import devStore from '../../../../store/devStore';
import { HiCurrencyDollar } from "react-icons/hi";
import { GrLanguage } from "react-icons/gr";
import { FaRegKeyboard } from "react-icons/fa6";
import { CgPlayListAdd } from "react-icons/cg";
import { FaGoogle, FaUnlockAlt } from "react-icons/fa";
import { PiSignOut } from "react-icons/pi";
import { SiYoutubestudio } from "react-icons/si";
import { FiDatabase,FiUpload,FiEdit } from "react-icons/fi";
import { IoLanguage, IoMoonSharp } from "react-icons/io5";
import { MdOutlineFeedback, MdOutlineSwitchAccount,MdOutlinePodcasts, MdOutlineHelpOutline,MdVideoCall } from "react-icons/md";
import { IoMdSettings,IoMdWifi } from "react-icons/io";
import useStore from '../../../../store/userStore';
import './SearchBar.scss'; // Ensure this file contains the necessary styling
import image1 from '../../../../assets/profile_pic.webp';
import { useForm } from 'react-hook-form';
import { ClipLoader } from 'react-spinners';
import useVideoStore from '../../../../store/useVideosStore'

function SearchBar() {
    const { isNavOpen, toggleNav } = devStore(); // Get isNavOpen state from the store
    const { user, isAuthenticated, logout } = useStore();

    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null);

    // Dropdown state
    const [isDropdownVisible, setDropdownVisible] = useState(false); // Initially set to false
    const [isDropdownVisible1, setDropdownVisible1] = useState(false);
  

    const submitHandler = () => {
        logout();
    };

    const toggleDropdown = () => {
        setDropdownVisible(prev => !prev); // Toggle dropdown visibility
    };
    const toggleDropdown1 = () => {
        setDropdownVisible1(prev => !prev); // Toggle dropdown visibility
    };

    const handleUploadClick = () => {
        setModalVisible(true);  // Open the modal
    };

    const handleCloseModal = () => {
        setModalVisible(false);  // Close the modal
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedVideo(file);
        // Further processing can be done with the file, like uploading it to a server
    };
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {publishAVideo , isLoading , error} = useVideoStore();

    const onSubmit = async(data) =>{
        const formData = new FormData();
        formData.append('title',data.title);
        formData.append('description',data.description);
        formData.append('thumbnail',data.thumbnail[0]);
        formData.append('videoFile',data.videoFile[0]);
        formData.append('isPublished', data.isPublished);

        try {
            await publishAVideo(formData);
            handleCloseModal();  
        } catch (error) {
            console.error("Error during uploading video !!",error);
        }
    }
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
                       
                        <div className="relative">
                            <button className='bttn bg-gray-800 rounded-2xl px-8 mr-5 h-10' onClick={toggleDropdown1}>
                            <MdVideoCall className="dropdown-icon" size={22} />
                                Create
                            </button>

                            {/* Dropdown Menu */}
                            {isDropdownVisible1 && (
                                <div
                                    className="dropdown-menu2 absolute right-0 w-48 text-white rounded-lg shadow-lg"
                                    onMouseLeave={() => setDropdownVisible1(false)} // Hide on mouse leave
                                >
                                    <div className='dropdown '>

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
            {isModalVisible && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2 className='label'>Select a Video to Upload</h2>
                        <div className="dropdown-divider"></div>
                        <form className='formContainer' onSubmit={handleSubmit(onSubmit)}>

                            <input 
                            type="text" 
                            placeholder='Enter the title of the video'
                            className={`${errors.title ? 'border-red-500':''} `}
                            {...register('title',{required:'Title is required'})}
                            />

                            <input 
                            type="text"
                            placeholder='Enter the description of the video'
                            className={`${errors.description ? 'border-red-500' : ''}`}
                            {...register('description',{required:'Description is required'})} 
                            />

                            <label className=''>Upload the thumbnail</label>
                            <input 
                            type="file"
                            className=''
                            accept="image/*"
                            {...register('thumbnail',{required:'Thumbnail is required'})}
                            />

                            <label className=''>Upload the video file</label>
                            <input 
                            type="file"
                            accept="video/*"
                            className=''
                            // onChange={handleFileChange} 
                            {...register('videoFile',{required:'Video File is required'})}
                            />
                            
                            <input 
                            type="checkbox" 
                            {...register('isPublished')}
                            />
                            <button 
                            className="btn-upload" 
                            type='submit'
                            >
                                submit
                            </button>

                            <button 
                            className="btn-upload" 
                            onClick={handleCloseModal}
                            >
                                Close
                            </button>
                        </form>
                        {isLoading && (
                            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                                <ClipLoader size={50} color="#ffffff" />
                                <p>Uploading your Video...</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>

    );
}

export default SearchBar;
