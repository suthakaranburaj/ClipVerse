import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'; // Import useForm from react-hook-form
import useStore from '../../../store/userStore';
import './LoginPage.scss';
import { useNavigate, Link } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import Loader from '../../../components/Loader/Loader';
import { FcGoogle } from "react-icons/fc";
import { Button } from '../../../shdcnComponent/ui/button.tsx'
import { useGoogleLogin } from '@react-oauth/google';
import { googleLogout } from '@react-oauth/google'
import axios from 'axios';

function LoginPage() {
    const { register, handleSubmit, formState: { errors } } = useForm(); // Initialize useForm
    const { register: registerUser , login, isLoading, error, isAuthenticated } = useStore();
    const navigate = useNavigate();
    const [showPassword,setShowPassword]=useState(false);

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
                // console.log(err.response.data.message);
            } else {
                // console.log("Something went wrong", err);
            }
        }
    };

    const togglePasswordVisibility = ()=>{
        setShowPassword(prev => !prev);
    }

    const loginGoogleAuth = useGoogleLogin({
        onSuccess:(codeResp) => GetUserProfile(codeResp),
        onError: (error) => console.log(error)
    })

    

    const GetUserProfile=(tokenInfo)=>{
        axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,{
            headers:{
                Authorization:`Bearer ${tokenInfo?.access_token}`,
                Accept:'Application/json'
            }
        }).then(async(res)=>{
            function generateRandom10DigitNumber() {
                // Generate a random number between 1000000000 (inclusive) and 9999999999 (inclusive)
                const min = 1000000000;
                const max = 9999999999;
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }
            
            // Example usage:
            const randomNumber = generateRandom10DigitNumber();
            const formData = new FormData();
            console.log(randomNumber);
            console.log(res.data.name);
            console.log(res.data.email);
            // console.log();
            // console.log();
            // console.log();
            console.log(res.data.picture);
            formData.append('username', randomNumber);
            formData.append('fullName', res.data.name);
            formData.append('email', res.data.email);
            formData.append('password', '12345678');
            formData.append('avatar', res.data.picture); // Append avatar file
            // formData.append('coverImage', res.data.coverImage[0]); // Append coverImage file
            try {
                await registerUser(formData); // Pass FormData to register function
            } catch (err) {
                console.error("Error during registration", err);
            }
            // console.log(resp);
            // localStorage.setItem('user',JSON.stringify(res.data));
            // OnGenerateTrip();
            window.location.reload();

        })
        
    }

    return (
        <div className='flex justify-center items-center h-screen bg-black'>
            <div className='card-content  bg-[#171717] w-[40vw] custom766:w-[80vw] custom1024:w-[60vw] rounded-3xl flex-col flex items-center p-8 custom480:p-4 shadow-lg'>
                <h1 className='font-bold text-3xl text-white mb-8 custom480:mb-4 custom360:text-xl '>Login to Clip Verse</h1>
                <form className='input-container flex flex-col gap-4 w-full px-10 custom480:px-4 custom360:px-2' onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="text"
                        placeholder='Enter your username or email'
                        className={`p-3 custom360:p-2 custom360:text-sm rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 ${errors.username ? 'border-red-500' : ''}`}
                        {...register('username', { required: 'Username is required' })}
                    />
                    {errors.username && <p className="text-red-500">{errors.username.message}</p>}

                    {/* <input
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
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}  Error message for email */}

                    <div className='passwordInput flex '>
                        <input
                            type={showPassword ? "password" : "text"}
                            placeholder='Enter your password'
                            className={`w-[95%] custom360:p-2 p-3 custom360:text-sm rounded-l-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none  ${errors.password ? 'border-red-500' : ''}`}
                            {...register('password', { required: 'Password is required' })}
                        />
                        {errors.password && <p className="text-red-500">{errors.password.message}</p>}  {/* Error message for password */}
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="inset-y-0 w-[5%] pr-8 flex items-center bg-gray-800 rounded-r-md text-gray-400 hover:text-gray-200"
                        >
                            {showPassword ?  '🙈' : '👁️'}
                        </button>
                    </div>
                    

                    <button
                        type="submit"
                        className="bg-red-600 text-white py-3 px-6 rounded-md mt-6 custom360:mt-2 custom360:py-2 hover:bg-red-500 transition-colors"
                    >
                        Login
                    </button>
                    <Button 
                    className='w-full mt-6 flex gap-2 items-center bg-black hover:bg-gray-900'
                    onClick={loginGoogleAuth}
                    >
                        <FcGoogle style={{ width: "1.5rem", height: "1.5rem" }} />
                        Sign In with Google 
                    </Button>

                    <Link to='/register'>
                        <p className='custom360:text-sm text-white text-center custom-underline cursor-pointer'>
                            Don't have an Account?
                        </p>
                    </Link>
                </form>

                {isLoading && (
                    <div className="fixed inset-0 flex items-center justify-center  bg-black bg-opacity-50">
                        <Loader/>
                    </div>
                )}

                {error && <p className="text-red-500 text-xl">{error}</p>}
            </div>
        </div>
    );
}

export default LoginPage;
