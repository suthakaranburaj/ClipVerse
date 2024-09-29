import React from 'react';
import { Outlet ,NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

import image2 from '../../../assets/profile_pic.webp';
import userCoverImage from '../../../assets/user_coverImage.jpg'

import './UserChannel.scss';
import useStore from '../../../store/userStore';


function UserChannel() {

    const {isAuthenticated , user} = useStore();
    return (
        <div className='UserChannel-Container'>
            <div className='mx-[10%] mt-5 '>
                <div className= 'w-[100%] h-[25vh] mb-5 relative'>
                    <img className='w-full h-full object-cover rounded-2xl' src={isAuthenticated && user?.coverImage ? user.coverImage : userCoverImage} alt="" />
                    <span className="absolute bottom-0 right-0 bg-[#9b9b9b] rounded-full cursor-pointer">
                            <FontAwesomeIcon icon={faPen} className="text-gray-600 w-6 h-4" />
                    </span>
                </div>
                <div className='flex'>
                    <div className='relative w-[15%] h-[25%] mx-5'>
                        <img 
                            className='w-full h-full rounded-full object-cover' 
                            src={isAuthenticated && user?.avatar ? user.avatar : image2} 
                            alt="" 
                        />
                        <span className="absolute bottom-0 right-0 bg-[#9b9b9b] rounded-full cursor-pointer">
                            <FontAwesomeIcon icon={faPen} className="text-gray-600 w-6 h-4" />
                        </span>
                    </div>
                    <div className='text-[#808080] flex flex-col mt-5 gap-2'>
                        <p className='text-2xl font-bold text-white'>
                            {isAuthenticated && user?.fullName ? user.fullName : "Name"}
                        </p>
                        <p>
                            {isAuthenticated && user?.username ? user.username : "Username"}
                        </p>
                        <p>More about this channel <span className=' text-white font-semibold'>...more</span></p>
                        <div className='flex gap-2 mx-2 my-2'>
                            <button>
                                Customise channel
                            </button>
                            <Link to='/managevideos'>
                                <button>
                                    Manage videos
                                </button>
                            </Link>
                            <button>
                                Update profile
                            </button>
                        </div>
                    </div>
                </div>
                <div className='flex ml-5 gap-4 mt-5 text-lg font-semibold text-[#808080]'>
                    <NavLink to='playlist' className={ ({isActive}) => `${isActive ? 'text-white' : 'text-[#808080]'}` }>
                        <p>Playlists</p>
                    </NavLink>
                    <NavLink to='community' className={ ({isActive}) => `${isActive ? 'text-white' : 'text-[#808080]'}` }>
                        <p>Community</p>
                    </NavLink>
                </div>
                
            </div>

            <div className='bg-[#808080] h-[1px] w-full mt-3'></div>

            <div className='ml-[11%] '>
                <Outlet/>
            </div>
        </div>
    )
}

export default UserChannel
