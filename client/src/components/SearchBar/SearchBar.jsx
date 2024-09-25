import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import devStore from '../../store/devStore';
import useStore from '../../store/userStore';
import { useEffect } from 'react';

import image1 from '../../assets/profile_pic.webp'

function SearchBar() {
    
    const { toggleNav } = devStore();
    const { user, isAuthenticated,logout } = useStore();
    const submitHandler = () => {
        logout();
    };
    // useEffect(() => {
    //     // If you want to perform some action when user changes
    // }, [user]);

    return (
        <div className=" text-white p-4 flex justify-between">
            <div className='mx-10'>
                <FontAwesomeIcon
                    className='text-white  '
                    icon={faBars}
                    onClick={() => toggleNav()}
                />
            </div>
            <div className='mx-10 w-[80%]'>
                <div className="flex justify-between">
                    <input
                        type="text"
                        placeholder="Search"
                        className="bg-gray-800 text-white rounded-full px-4 py-2 focus:outline-none w-[50%] ml-[20%]"
                    />
                    <div className='flex'>
                        {isAuthenticated ? (
                            <button
                                className='bg-gray-800 rounded-2xl px-8 mr-5 h-10 '
                                onClick={submitHandler}
                            >
                                Logout
                            </button>) 
                            : 
                            (<Link to='/login'>
                                <button className='bg-gray-800 rounded-2xl px-8 mr-5 h-10'>
                                    Login
                                </button>
                            </Link>
                            )}
                        <Link to='/userchannel'>
                            <img 
                                src={isAuthenticated && user?.avatar ? user.avatar : image1} 
                                className="rounded-full bg-green-600 w-10 h-10 flex items-center justify-center text-white font-bold"
                            />
                        </Link>
                    </div>
                </div>

                {/* Tabs */}

            </div>
        </div>
    )
}

export default SearchBar