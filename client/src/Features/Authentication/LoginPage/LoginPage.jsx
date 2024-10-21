import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form'; // Import useForm from react-hook-form
import useStore from '../../../store/userStore';
import './LoginPage.scss';
import { useNavigate, Link } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

function LoginPage() {
    const { register, handleSubmit, formState: { errors } } = useForm(); // Initialize useForm
    const { login, isLoading, error, isAuthenticated } = useStore();
    const navigate = useNavigate();

    // useEffect for redirection when authentication is successful
    useEffect(() => {
        if (isAuthenticated) {
            navigate('/');
        }
    }, [isAuthenticated, navigate]);

    // Form submission handler
    const onSubmit = async (data) => {
        const { username, email, password } = data;
        try {
            await login({ username, email, password });
        } catch (err) {
            // Check if the error is an Axios error and has a response
            if (err.response && err.response.data) {
                // Display the custom error message from the backend
                console.log(err.response.data.message); // This should log "User does not exist" or other custom messages
            } else {
                // Handle any other errors
                console.log("Something went wrong", err);
            }
        }
    };


    return (
        <div className='flex justify-center items-center h-screen bg-black'>
            <div className='card-content  bg-[#171717] w-[40vw] rounded-3xl flex-col flex items-center p-8 shadow-lg'>
                <h1 className='font-bold text-3xl text-white mb-8'>Login to Youtube</h1>
                <form className='input-container flex flex-col gap-4 w-full px-10' onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="text"
                        placeholder='Enter your username'
                        className={`p-3 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.username ? 'border-red-500' : ''}`}
                        {...register('username', { required: 'Username is required' })}
                    />
                    {errors.username && <p className="text-red-500">{errors.username.message}</p>}

                    <input
                        type="email"
                        placeholder='Enter your email'
                        className={`p-3 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : ''}`}
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: 'Invalid email address',
                            },
                        })}
                    />
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}  {/* Error message for email */}

                    <input
                        type="password"
                        placeholder='Enter your password'
                        className={`p-3 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.password ? 'border-red-500' : ''}`}
                        {...register('password', { required: 'Password is required' })}
                    />
                    {errors.password && <p className="text-red-500">{errors.password.message}</p>}  {/* Error message for password */}

                    <button
                        type="submit"
                        className="bg-red-600 text-white py-3 px-6 rounded-md mt-6 hover:bg-red-500 transition-colors"
                    >
                        Login
                    </button>

                    <Link to='/register'>
                        <p className='text-white text-center custom-underline cursor-pointer'>
                            Don't have an Account?
                        </p>
                    </Link>
                </form>

                {isLoading && (
                    <div className="fixed inset-0 flex items-center justify-center  bg-black bg-opacity-50">
                        <ClipLoader size={50} color="#ffffff" />
                        <p>Logging in...</p>
                    </div>
                )}

                {error && <p className="text-red-500 text-xl">{error}</p>}
            </div>
        </div>
    );
}

export default LoginPage;
