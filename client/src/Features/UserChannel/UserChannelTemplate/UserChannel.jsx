import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

import image2 from '../../../assets/profile_pic.webp';
import userCoverImage from '../../../assets/user_coverImage.jpg';

import './UserChannel.scss';
import useStore from '../../../store/userStore';

function UserChannel() {
    const { isAuthenticated, user } = useStore();

    return (
        <div className='UserChannel-Container'>
            <div className='UserProfileContainer'>
                <div className='cover-container'>
                    <img 
                        src={isAuthenticated && user?.coverImage ? user.coverImage : userCoverImage} 
                        alt="Cover" 
                    />
                    {/* <span className="edit-icon">
                        <FontAwesomeIcon icon={faPen} />
                    </span> */}
                </div>

                <div className='profile-container'>
                    <div className='avatar-container'>
                        <img 
                            src={isAuthenticated && user?.avatar ? user.avatar : image2} 
                            alt="Avatar" 
                        />
                        {/* <span className="edit-icon">
                            <FontAwesomeIcon icon={faPen} />
                        </span> */}
                    </div>
                    <div className='profile-info'>
                        <p className='name'>
                            {isAuthenticated && user?.fullName ? user.fullName : "Name"}
                        </p>
                        <p>{isAuthenticated && user?.username ? user.username : "Username"}</p>
                        <p>More about this channel <span className='more-info'>...more</span></p>
                        <div className='buttons'>
                            <button>Customise channel</button>
                            <button onClick={() => window.open('/channel', '_blank')}>Manage videos</button>
                            <button>Update profile</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='nav-links'>
                <NavLink to='playlist'>Playlists</NavLink>
                <NavLink to='community'>Community</NavLink>
            </div>

            <div className='separator'></div>

            <div className='content'>
                <Outlet />
            </div>
        </div>
    );
}

export default UserChannel;
