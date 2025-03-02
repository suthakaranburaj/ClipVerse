import React, { useEffect, useState } from 'react';
import  useSubscriptionStore  from '../../../store/useSubscriptionStore';
import useStore from '../../../store/userStore.js';
import './Subscription.scss'
import Loader from '../../../components/Loader/Loader.jsx';
import { Link } from 'react-router-dom';
import defaultImage from '../../../assets/profile_pic.webp'


export default function Subscription() {
    const {
        channelSubscribers,
        isLoading:channelSubscribersLoadingStore,
        error,
        getUserChannelSubscribers
    } = useSubscriptionStore();

    const [minLoading, setMinLoading] = useState(true); // State for minimum loading time

    const {user} = useStore();
    useEffect(() => {
        if (user._id) {
            getUserChannelSubscribers(user?._id);
        }
        setTimeout(() => {
            setMinLoading(false);
        }, 1000);
    }, [user?._id, getUserChannelSubscribers]);

    return (
        <div className="subscription-container">
            {(channelSubscribersLoadingStore )&& <Loader/>}
            {error && <p className="error-message">{error}</p>}
            {!channelSubscribersLoadingStore && !error && channelSubscribers.length > 0 ? (
                <ul className="subscriber-list">
                    {channelSubscribers.map((subscriber) => (
                        <Link to={`/${subscriber?.username}/${subscriber?._id}`} key={subscriber._id} >
                            <li  className="subscriber-item">
                                <div className="subscriber-details">
                                    <div>
                                        <img
                                            src={subscriber?.avatar ? subscriber.avatar : defaultImage }
                                            alt={subscriber.username}
                                            className="subscriber-avatar"
                                        />
                                    </div>
                                    <p className="subscriber-name">{subscriber.username}</p>
                                    <p className='subscriber-name text-gray-500'>{subscriber.fullName}</p>
                                </div>
                            </li>
                        </Link>
                    ))}
                </ul>
            ) : (
                !channelSubscribersLoadingStore && <div className='NoSubscribersContainer'><p className='NoSubscribers'>No subscribers found.</p></div>
            )}
        </div>
    );
}
