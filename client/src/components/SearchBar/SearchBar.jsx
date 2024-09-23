import React from 'react'
import { Link } from 'react-router-dom';
import { IoIosMenu } from "react-icons/io";

function SearchBar() {
    return (
        <div className="bg-black text-white p-4">
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
            <div className="flex space-x-4 mt-4 overflow-x-auto text-xs font-bold">
                <button className="bg-gray-700 text-white py-2 px-3 rounded-lg">All</button>
                <button className="bg-gray-900 text-white py-2 px-3 rounded-lg">Web Development</button>
                <button className="bg-gray-900 text-white py-2 px-3 rounded-lg">Startup Company</button>
                <button className="bg-gray-900 text-white py-2 px-3 rounded-lg">Source Code</button>
                <button className="bg-gray-900 text-white py-2 px-3 rounded-lg">Information Technology</button>
                <button className="bg-gray-900 text-white py-2 px-3 rounded-lg">News</button>
                <button className="bg-gray-900 text-white py-2 px-3 rounded-lg">Podcasts</button>
                <button className="bg-gray-900 text-white py-2 px-3 rounded-lg">Colleges</button>
                <button className="bg-gray-900 text-white py-2 px-3 rounded-lg">Motivation</button>
                <button className="bg-gray-900 text-white py-2 px-3 rounded-lg">Recently Uploaded</button>
            </div>
        </div>
    )
}

export default SearchBar
