import React from 'react'
import { useState, useEffect } from 'react'

import './Community.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faThumbsUp } from '@fortawesome/free-solid-svg-icons'; // Example icons 
import { useParams, useLocation } from 'react-router-dom';
import useTweetStore from '../../store/useTweetStore'

function Community() {

    const location = useLocation();
    const {subscribedChannel} = location.state || {};
    // console.log(location)
    // console.log(subscribedChannel);
    const {getUserTweets, userTweets} = useTweetStore();

    useEffect(()=>{
        
        const fetchData = async()=>{
            const userId = subscribedChannel?._id;
            // console.log(userId)
            await getUserTweets(userId);
            // console.log(userTweets)
        }
        fetchData();
    },[])
    // console.log(userTweets)
    return (
        <div className='communityContianer'>
            <div className='mainContainer'>
                <div className='channelProfileContainer'>

                </div>
                {userTweets?.map((tweet)=>(
                    <div className='communityPostContainer'>
                        <div className='communityPostContainer1'>
                            <div className='communityPostContainer11'>
                                <img 
                                    className='communityPostContainer111' 
                                    src={subscribedChannel?.avatar}
                                    alt="" 
                                />
                            </div>
                            <p className='communityPostContainer12'>{subscribedChannel?.username}</p>
                        </div>
                        <div className='communityPostContainer2'>
                            <p>{tweet?.content}</p>
                        </div>
                        <div className='communityPostContainer3'>
                            <FontAwesomeIcon
                                icon={faThumbsUp} 
                                className='communityPostContainer31'
                            />
                            <p
                                className='communityPostContainer32'
                            >
                                45
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Community
