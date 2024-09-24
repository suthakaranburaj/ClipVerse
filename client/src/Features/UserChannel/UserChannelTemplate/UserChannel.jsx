import React from 'react';
import { Outlet ,NavLink } from 'react-router-dom';

import image2 from '../../../assets/profile_pic.webp';

import './UserChannel.scss';
import useStore from '../../../store/userStore';


function UserChannel() {

    const {isAuthenticated , user} = useStore();
    return (
        <div className='UserChannel-Container'>
            <div className='ml-[10%] mt-5'>
                <div className='flex'>
                    <img 
                        className='w-[15%] h-[25%] rounded-full mx-5' 
                        src={ isAuthenticated && user ?.avatar ? user.avatar: image2} 
                        alt="" />
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
                            <button>
                                Manage videos
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
