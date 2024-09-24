import React from 'react'
import { Link } from 'react-router-dom';
import { IoIosMenu } from "react-icons/io";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import devStore from '../../store/devStore';

function SearchBar() {
    
    const { toggleNav } = devStore();

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
                    <Link to='/userchannel'>
                        <button className="rounded-full bg-green-600 w-10 h-10 flex items-center justify-center text-white font-bold">
                            F
                        </button>
                    </Link>
                </div>

                {/* Tabs */}

            </div>
        </div>
    )
}

export default SearchBar
