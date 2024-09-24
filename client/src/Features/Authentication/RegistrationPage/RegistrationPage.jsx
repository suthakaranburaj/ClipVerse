import React, { useState } from 'react';
import React, { useState } from 'react';
import './RegistrationPage.scss';
import useStore from '../../../store/userStore';
import { useNavigate } from "react-router-dom";

function RegistrationPage() {

    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [avatar, setAvatar] = useState(null); // Store file
    const [coverImage, setCoverImage] = useState(null); // Store file

    const { register } = useStore();
    const { register } = useStore();
    const navigate = useNavigate();


    const submitHandler = async () => {
        // Create FormData object
        const formData = new FormData();
        formData.append('username', username);
        formData.append('fullName', fullName);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('avatar', avatar); // Append avatar file
        formData.append('coverImage', coverImage); // Append coverImage file

        try {
            await register(formData); // Pass FormData to register function
            navigate('/');
        } catch (error) {
            console.error("Error during registration", error);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-800">
            <div className="card-content bg-[#171717] w-[40vw] rounded-3xl flex-col flex items-center p-8 shadow-lg">
            <div className="card-content bg-[#171717] w-[40vw] rounded-3xl flex-col flex items-center p-8 shadow-lg">
                <h1 className="font-bold text-3xl text-white mb-8">Registration Page</h1>
                <div className="input-container flex flex-col gap-4 w-full px-10">
                    <input
                        type="text"
                        placeholder="Enter your Username"
                        className="p-3 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => setUsername(e.target.value)} // Use onChange
                    />
                    <input
                        type="email"
                        placeholder="Enter your Email ID"
                        className="p-3 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => setEmail(e.target.value)} // Use onChange
                    />
                    <input
                        type="text"
                        placeholder="Enter your Full Name"
                        className="p-3 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => setFullName(e.target.value)} // Use onChange
                    />
                    <label className="text-gray-400">Upload Avatar Image</label>
                    <input
                        type="file"
                        className="file-input text-white border border-gray-700 rounded-md p-2 focus:outline-none"
                        onChange={(e) => setAvatar(e.target.files[0])} // Use onChange to get the file
                    />
                    <label className="text-gray-400">Upload Cover Image</label>
                    <input
                        type="file"
                        className="file-input text-white border border-gray-700 rounded-md p-2 focus:outline-none"
                        onChange={(e) => setCoverImage(e.target.files[0])} // Use onChange to get the file
                    />
                    <input
                        type="password"
                        placeholder="Enter your Password"
                        className="p-3 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => setPassword(e.target.value)} // Use onChange
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        className="bg-blue-500 text-white py-3 px-6 rounded-md mt-6 hover:bg-blue-600 transition-colors"
                        onClick={submitHandler}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}

export default RegistrationPage;
