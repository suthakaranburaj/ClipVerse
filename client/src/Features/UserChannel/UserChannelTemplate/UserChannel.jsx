import React, { useEffect, useState } from 'react';
import { Outlet, NavLink, useParams } from 'react-router-dom';

import image2 from '../../../assets/profile_pic.webp';
import userCoverImage from '../../../assets/user_coverImage.jpg';

import './UserChannel.scss';
import useStore from '../../../store/userStore';
import userStatsStore from '../../../store/userStatsStore';
import Loader from '../../../components/Loader/Loader';
import useSubscriptionStore from '../../../store/useSubscriptionStore';

function UserChannel() {
    const { isAuthenticated, user,isLoading:userLoading } = useStore();
    const {fetchChannelProfile,channel,isLoading:statsLoading} = userStatsStore();
    const {channelId} = useParams();
    const {username} = useParams();
    const [minLoading, setMinLoading] = useState(true); // State for minimum loading time
    const [isSubscribed, setIsSubscribed] = useState(false);

    const {
        getUserChannelSubscribers, 
        channelSubscribers,
        toggleSubscription, 
        // error:subscriptionError
    } = useSubscriptionStore();


    useEffect(()=>{
        const fetchData = async()=>{
            await fetchChannelProfile(username);
        }
        fetchData();
        setTimeout(() => {
            setMinLoading(false);
        }, 1000);

    },[channelId])

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

    const handleSubscription = async(channelId) =>{
        await toggleSubscription(channelId);
    }



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
                            {user?._id === channelId &&(
                                <>
                                <button  onClick={() => window.open('/channel', '_blank')}>Customise channel</button>
                                
                                <button>Update profile</button>
                                </>
                            )}
                            {user?._id !== channelId &&(
                                <>
                                    <button
                                        className={`subscribeButton ${isSubscribed ? 'subscribed' : ''}`}
                                        onClick={()=>handleSubscription(channelId)}
                                    >
                                        {isSubscribed ? 'Subscribed': 'Subscribe'}
                                    </button>
                                </>
                            )}
                        </div>
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
