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
            console.log(err);
        }
    };

    return (
        <div className='flex justify-center items-center h-screen bg-gray-800'>
            <div className='card-content  bg-[#171717] w-[40vw] rounded-3xl flex-col flex items-center p-8 shadow-lg'>
                <h1 className='font-bold text-3xl text-white mb-8'>Login to Youtube</h1>
                
                {/* Form with react-hook-form */}
                <form className='input-container flex flex-col gap-4 w-full px-10' onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="text"
                        placeholder='Enter your username'
                        className={`p-3 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.username ? 'border-red-500' : ''}`}
                        {...register('username', { required: 'Username is required' })}
                    />
                    {errors.username && <p className="text-red-500">{errors.username.message}</p>}  {/* Error message for username */}

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
                        className="bg-blue-500 text-white py-3 px-6 rounded-md mt-6 hover:bg-blue-600 transition-colors"
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

                {/* {error && <p className="text-red-500 text-2xl">{error}</p>} */}
            </div>
        </div>
    );
}

export default LoginPage;
