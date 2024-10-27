import React, { useEffect, useState } from 'react';
import { Outlet, NavLink, useParams } from 'react-router-dom';

import image2 from '../../../assets/profile_pic.webp';
import userCoverImage from '../../../assets/user_coverImage.jpg';

import './UserChannel.scss';
import ProfileUpdateForm from './ProfileUpdateForm';
import useStore from '../../../store/userStore';
import userStatsStore from '../../../store/userStatsStore';
import Loader from '../../../components/Loader/Loader';
import useSubscriptionStore from '../../../store/useSubscriptionStore';

function UserChannel() {
    const { isAuthenticated, user, isLoading: userLoading, updateAvatar, updateCoverImage, updateDetails } = useStore();
    const { fetchChannelProfile, channel, isLoading: statsLoading } = userStatsStore();
    const { channelId } = useParams();
    const { username } = useParams();
    const [minLoading, setMinLoading] = useState(true); // State for minimum loading time
    const [isSubscribed, setIsSubscribed] = useState(false);

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    // Function to toggle popup visibility
    const togglePopup = () => setIsPopupOpen(!isPopupOpen);

    const {
        getUserChannelSubscribers,
        channelSubscribers,
        toggleSubscription,
        // error:subscriptionError  
    } = useSubscriptionStore();


    useEffect(() => {
        const fetchData = async () => {
            await fetchChannelProfile(username);
        }
        fetchData();
        setTimeout(() => {
            setMinLoading(false);
        }, 1000);

    }, [channelId])

    useEffect(() => {
        const fetchData = async () => {
            if (user && channelId) {
                // Fetch the channel subscribers
                await getUserChannelSubscribers(channelId);

                // Only check if user is subscribed once channelSubscribers is updated
                if (channelSubscribers.length > 0) {
                    const isUserSubscribed = channelSubscribers.some(
                        (subscriber) => subscriber._id === user._id
                    );

                    // Update the state only if necessary to prevent unnecessary re-renders
                    setIsSubscribed((prevIsSubscribed) => {
                        if (prevIsSubscribed !== isUserSubscribed) {
                            return isUserSubscribed;
                        }
                        return prevIsSubscribed;
                    });
                }
            }
        };

        // Use a small delay to debounce state updates, preventing multiple re-renders
        const debounceTimeout = setTimeout(() => {
            fetchData();
        }, 200);

        return () => clearTimeout(debounceTimeout);
    }, [channelSubscribers, channelId, user]);

    const handleSubscription = async (channelId) => {
        await toggleSubscription(channelId);
    }

    const handleUpdate = async (data) => {

        console.log(data);

        const formData = new FormData();
        formData.append('fullName', data.fullName);
        formData.append('email', data.email);
        formData.append('password', data.password);

        if (data.avatar instanceof File) {
            formData.append('avatar', data.avatar);
        }

        if (data.coverImage instanceof File) {
            formData.append('coverImage', data.coverImage);
        }

        if (data.avatar && data.avatar !== user.avatar) {
            console.log("aaya re");
            await updateAvatar(data.avatar[0]);
        }

        if (data.coverImage && data.coverImage !== user.coverImage) {
            await updateCoverImage(data.coverImage[0]);
        }

        if (data.password) {
            console.log("aaya re");
        }
        for (let [key, value] of formData.entries()) {
            console.log(`${key}:`, value);
        }

        try {
            await updateDetails(data.fullName, data.email);
        } catch (error) {
            console.error("Failed to update profile:", error);
        }
    };

    if (statsLoading || minLoading || userLoading) return <div><Loader /></div>;
    return (
        <div className='UserChannel-Container'>
            <div className='UserProfileContainer'>
                <div className='cover-container'>
                    <img
                        src={isAuthenticated && channel?.coverImage ? channel?.coverImage : userCoverImage}
                        alt="Cover"
                    />
                    {/* <span className="edit-icon">
                        <FontAwesomeIcon icon={faPen} />
                    </span> */}
                </div>

                <div className='profile-container'>
                    <div className='avatar-container'>
                        <img
                            src={isAuthenticated && channel?.avatar ? channel?.avatar : image2}
                            alt="Avatar"
                        />
                        {/* <span className="edit-icon">
                            <FontAwesomeIcon icon={faPen} />
                        </span> */}
                    </div>
                    <div className='profile-info'>
                        <p className='name'>
                            {isAuthenticated && channel?.fullName ? channel?.fullName : "Name"}
                        </p>
                        <p>{isAuthenticated && channel?.username ? channel?.username : "Username"}</p>
                        {/* <p>More about this channel <span className='more-info'>...more</span></p> */}
                        <div className='buttons'>
                            {user?._id === channelId && (
                                <>
                                    <button onClick={() => window.open('/channel', '_blank')}>Customise channel</button>

                                    <button onClick={togglePopup}>Update profile</button>
                                </>
                            )}
                            {user?._id !== channelId && (
                                <>
                                    <button
                                        className={`subscribeButton ${isSubscribed ? 'subscribed' : ''}`}
                                        onClick={() => handleSubscription(channelId)}
                                    >
                                        {isSubscribed ? 'Subscribed' : 'Subscribe'}
                                    </button>
                                </>
                            )}
                        </div>
                        <ProfileUpdateForm
                            user={user}
                            isOpen={isPopupOpen}
                            onClose={togglePopup}
                            onUpdate={handleUpdate}
                        />
                    </div>
                </div>
            </div>
            <div className='nav-links'>
                <NavLink to='videos' >Videos</NavLink>
                {/* <NavLink to='live' >Live</NavLink> */}
                <NavLink to='playlist' >Playlists</NavLink>
                <NavLink to={`/community/${username}/${channelId}`} >Community</NavLink>
            </div>

            <div className='separator'></div>

            <div className='content'>
                <Outlet />
            </div>
        </div>
    );
}

export default UserChannel;
