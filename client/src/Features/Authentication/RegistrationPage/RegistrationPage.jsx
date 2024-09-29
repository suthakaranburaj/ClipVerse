import React from 'react';
import { useForm } from 'react-hook-form'; // Import useForm from react-hook-form
import './RegistrationPage.scss';
import useStore from '../../../store/userStore';
import { useNavigate } from "react-router-dom";
import { ClipLoader } from 'react-spinners';
import { useEffect } from 'react';

function RegistrationPage() {
    const { register, handleSubmit, formState: { errors } } = useForm(); // Initialize useForm
    const { register: registerUser, isLoading, error ,isAuthenticated } = useStore();
    const navigate = useNavigate();


    useEffect(() => {
        if (isAuthenticated) {
            navigate('/');
        }
    }, [isAuthenticated, navigate]);
    
    // Handle form submission
    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append('username', data.username);
        formData.append('fullName', data.fullName);
        formData.append('email', data.email);
        formData.append('password', data.password);
        formData.append('avatar', data.avatar[0]); // Append avatar file
        formData.append('coverImage', data.coverImage[0]); // Append coverImage file
        try {
            await registerUser(formData); // Pass FormData to register function
        } catch (err) {
            console.error("Error during registration", err);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-800">
            <div className="card-content bg-[#171717] w-[40vw] rounded-3xl flex-col flex items-center p-8 shadow-lg">
                <h1 className="font-bold text-3xl text-white mb-8">Registration Page</h1>
                
                {/* Form with react-hook-form */}
                <form className="input-container flex flex-col gap-4 w-full px-10" onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="text"
                        placeholder="Enter your Username"
                        className={`p-3 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.username ? 'border-red-500' : ''}`}
                        {...register('username', { required: 'Username is required' })}
                    />
                    {errors.username && <p className="text-red-500">{errors.username.message}</p>} {/* Username error */}

                    <input
                        type="email"
                        placeholder="Enter your Email ID"
                        className={`p-3 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : ''}`}
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: 'Invalid email address',
                            },
                        })}
                    />
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>} {/* Email error */}

                    <input
                        type="text"
                        placeholder="Enter your Full Name"
                        className={`p-3 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.fullName ? 'border-red-500' : ''}`}
                        {...register('fullName', { required: 'Full Name is required' })}
                    />
                    {errors.fullName && <p className="text-red-500">{errors.fullName.message}</p>} {/* Full Name error */}

                    <label className="text-gray-400">Upload Avatar Image</label>
                    <input
                        type="file"
                        className="file-input text-white border border-gray-700 rounded-md p-2 focus:outline-none"
                        {...register('avatar', { required: 'Avatar is required' })}
                    />
                    {errors.avatar && <p className="text-red-500">{errors.avatar.message}</p>} {/* Avatar error */}

                    <label className="text-gray-400">Upload Cover Image</label>
                    <input
                        type="file"
                        className="file-input text-white border border-gray-700 rounded-md p-2 focus:outline-none"
                        {...register('coverImage', { required: 'Cover image is required' })}
                    />
                    {errors.coverImage && <p className="text-red-500">{errors.coverImage.message}</p>} {/* Cover Image error */}

                    <input
                        type="password"
                        placeholder="Enter your Password"
                        className={`p-3 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.password ? 'border-red-500' : ''}`}
                        {...register('password', { required: 'Password is required' })}
                    />
                    {errors.password && <p className="text-red-500">{errors.password.message}</p>} {/* Password error */}

                    <button
                        className="bg-blue-500 text-white py-3 px-6 rounded-md mt-6 hover:bg-blue-600 transition-colors"
                        type="submit"
                    >
                        Submit
                    </button>
                </form>

                {isLoading && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <ClipLoader size={50} color="#ffffff" />
                        <p>Registering your account...</p>
                    </div>
                )}

                {error && <p className="text-red-500">{error}</p>}
            </div>
        </div>
    );
}

export default RegistrationPage;
