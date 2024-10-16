import React from 'react'
import { useState, useEffect } from 'react'

import './Community.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faThumbsUp } from '@fortawesome/free-solid-svg-icons'; // Example icons 
import {faPlus } from '@fortawesome/free-solid-svg-icons';
import { useParams, useLocation } from 'react-router-dom';
import useTweetStore from '../../store/useTweetStore'
import useStore from '../../store/userStore';

function Community() {

    const location = useLocation();
    const {user} = useStore();
    const subscribedChannel = location.state?.subscribedChannel || user;
    // console.log(user)
    // console.log(location)

    // console.log(subscribedChannel);
    const {getUserTweets, userTweets, createTweet} = useTweetStore();
    const [isCreateTweet, setIsCreateTweet] = useState(false);
    const [newTweetContent, setNewTweetContent] = useState('');

    useEffect(()=>{
        
        const fetchData = async()=>{
            const userId = subscribedChannel?._id;
            // console.log(userId)
            await getUserTweets(userId);
            // console.log(userTweets)
        }
        fetchData();
    },[userTweets])
    // console.log(userTweets)

    const handleCretePost = ()=>{
        setIsCreateTweet((prev) => !prev);
        console.log(isCreateTweet)
    }

    const handleCreateTweet= async()=>{
        if (newTweetContent.trim()) {
            await createTweet({content:newTweetContent}); // Pass the content to createTweet
            setNewTweetContent(''); // Clear the textarea after posting
            setIsCreateTweet(false); // Optionally close the post form after submission
        }
    }
    return (
        <>
        <div className='communityContianer'>
            <div className='mainContainer'>
                <div className='channelProfileContainer'>

                </div>
                {userTweets?.map((tweet)=>(
                    <div className='communityPostContainer' key={tweet?._id}>
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
            <button 
                className='mainContainer1'
                onClick={handleCretePost}
            >
                <FontAwesomeIcon 
                    icon={faPlus} 
                    className='mainContainer11'
                />
            </button>
        </div>
        {isCreateTweet &&(
            <div className='commnityPost'>
                <div className='userCommunityContainer'>
                    <div className='tweetContainer'>
                        <div className='firstRow'>
                            <div className='firstRow1'>
                                <img src={subscribedChannel?.avatar} alt="" className='firstRow11'/>
                                <p className='firstRow12'>{subscribedChannel?.username}</p>
                            </div>
                            <div className='firstRow2'>
                                <p className='firstRow21'>Visibility:</p>
                                <p className='firstRow22'>Public</p>
                            </div>
                        </div>
                        <div className='secondRow1'>
                            <textarea 
                                className='secondRow11' 
                                placeholder="Write something..."
                                value={newTweetContent}
                                onChange={(e)=>setNewTweetContent(e.target.value)}
                            >
                            </textarea>
                        </div>
                        <div className='secondRow2'>
                            <button 
                                className='secondRow21'
                                onClick={handleCreateTweet}
                            >
                                Post
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )}

        </>
    )
}

export default Community
