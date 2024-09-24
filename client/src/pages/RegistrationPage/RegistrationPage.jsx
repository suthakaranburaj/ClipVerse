import React from 'react';
import './RegistrationPage.scss';
import useStore from '../../store/userStore';

import { useState } from 'react';

function RegistrationPage() {

    return (
        <div className="flex justify-center items-center h-screen bg-gray-800">
            <div className="card-content  bg-[#171717] w-[40vw] rounded-3xl flex-col flex items-center p-8 shadow-lg">
                <h1 className="font-bold text-3xl text-white mb-8">Registration Page</h1>
                
                <div className="input-container flex flex-col gap-4 w-full px-10">
                    <input
                        type="text"
                        placeholder="Enter your Username"
                        className="p-3 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onClick={(e)=>{}}
                    />
                    <input
                        type="email"
                        placeholder="Enter your Email ID"
                        className="p-3 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="text"
                        placeholder="Enter your Full Name"
                        className="p-3 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <label className="text-gray-400">Upload Avatar Image</label>
                    <input
                        type="file"
                        className="file-input text-white border border-gray-700 rounded-md p-2 focus:outline-none"
                    />
                    <label className="text-gray-400">Upload Cover Image</label>
                    <input
                        type="file"
                        className="file-input text-white border border-gray-700 rounded-md p-2 focus:outline-none"
                    />
                    <input
                        type="password"
                        placeholder="Enter your Password"
                        className="p-3 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="bg-blue-500 text-white py-3 px-6 rounded-md mt-6 hover:bg-blue-600 transition-colors">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}

export default RegistrationPage;
