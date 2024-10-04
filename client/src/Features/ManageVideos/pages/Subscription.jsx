import React, { useEffect } from 'react';
import  useSubscriptionStore  from '../../../store/useSubscriptionStore';
import useStore from '../../../store/userStore.js';

export default function Subscription() {
    const {
        channelSubscribers,
        isLoading,
        error,
        getUserChannelSubscribers
    } = useSubscriptionStore();

    const {user} = useStore();
    useEffect(() => {
        // console.log(user._id)
        if (user._id) {
            getUserChannelSubscribers(user._id);
        }
    }, [user._id, getUserChannelSubscribers]);

    return (
        <div className="subscription-container">
            {isLoading && <p>Loading subscribers...</p>}
            {error && <p className="error-message">{error}</p>}
            {!isLoading && !error && channelSubscribers.length > 0 ? (
                <ul className="subscriber-list">
                    {channelSubscribers.map((subscriber) => (
                        <li key={subscriber.id} className="subscriber-item">
                            <div className="subscriber-details">
                                <img
                                    src={subscriber.avatar}
                                    alt={subscriber.name}
                                    className="subscriber-avatar"
                                />
                                <p className="subscriber-name">{subscriber.name}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                !isLoading && <p>No subscribers found.</p>
            )}
        </div>
    );
}
