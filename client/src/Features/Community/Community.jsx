import React from 'react'
import { useState, useEffect } from 'react'

import './Community.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faThumbsUp } from '@fortawesome/free-solid-svg-icons'; // Example icons 
import {faPlus } from '@fortawesome/free-solid-svg-icons';
import {faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { useParams, useLocation, Link } from 'react-router-dom';
import useTweetStore from '../../store/useTweetStore'
import useStore from '../../store/userStore';
import userStatsStore from '../../store/userStatsStore';
import Loader from '../../components/Loader/Loader';
import useSubscriptionStore from '../../store/useSubscriptionStore'

function Community() {

    const location = useLocation();
    const {user, isLoading:userLoadingStore} = useStore();
    const subscribedChannel = location.state?.subscribedChannel || user;
    // console.log(user)
    // console.log(location)

    // console.log(subscribedChannel);
    const {
        getUserTweets, 
        userTweets, 
        createTweet, 
        updateTweet, 
        deleteTweet,
        isLoading:tweetsLoadingStore,
    } = useTweetStore();
    const {
        getUserChannelSubscribers,
        channelSubscribers,
        isLoading:subscriberLoadingStore,
    } = useSubscriptionStore();

    const [isCreateTweet, setIsCreateTweet] = useState(false);
    const [newTweetContent, setNewTweetContent] = useState('');
    const [isEditTweet , setIsEditTweet] = useState(false);
    const [currentTweet , setCurrentTweet] = useState(null);
    const {channelId}=useParams();
    const {channel,fetchChannelProfile} = userStatsStore();
    const {username}=useParams();
    const [minLoading,setminLoading]=useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setminLoading(true);  // Start loading
    
            let userId = user?._id;
            if (channelId !== userId) {
                userId = channelId;
            }
    
            try {
                await Promise.all([
                    getUserTweets(userId),
                    getUserChannelSubscribers(userId),
                    fetchChannelProfile(username),
                ]);
            } catch (error) {
                console.error("Error fetching data:", error);
                // Handle any errors here if necessary
            } finally {
                setminLoading(false);  // End loading after all data is fetched
            }
        };
    
        fetchData();
    }, [channelId, isEditTweet]);
    // console.log(userTweets)

    const handleCreatePost = ()=>{
        setIsCreateTweet((prev) => !prev);
        // console.log(isCreateTweet)
    }

    const handleCreateTweet= async()=>{
        if(isEditTweet && currentTweet){
            if (newTweetContent.trim()) {
                await updateTweet(currentTweet?._id,{content: newTweetContent});    
                // console.log(newTweetContent);            
                setNewTweetContent(''); // Clear the textarea after posting
                setIsCreateTweet(false); // Optionally close the post form after submission
                setCurrentTweet(null);
                setIsEditTweet(false);
            }
        }
        else{
            if (newTweetContent.trim()) {
                await createTweet({content:newTweetContent}); // Pass the content to createTweet
                setNewTweetContent(''); // Clear the textarea after posting
                setIsCreateTweet(false); // Optionally close the post form after submission
            }
        }
    }

    const handleEditTweet = (tweet)=>{
        setIsEditTweet(true);
        setCurrentTweet(tweet)
        setNewTweetContent(tweet.content); // Populate the textarea with the current tweet content
    }

    const handleDeleteTweet = async()=>{
        await deleteTweet(currentTweet?._id);
        setCurrentTweet(null);
        setIsEditTweet(false);
    }

    const handleCancelTweet = ()=>{
        setIsCreateTweet(false);
        setCurrentTweet(null);
        setIsEditTweet(false);
    }

    if (subscriberLoadingStore||userLoadingStore||tweetsLoadingStore || minLoading) return <div><Loader /></div>;  

    return (
        <>
        <div className='communityContianer'>
        <div className='channelProfileContainer'>
                    <div className='channelProfileContainer1'>
                        <img src={channel?.avatar} className='channelProfileContainer11' alt="" />
                    </div>
                    <div className='channelProfileContainer2'>
                        <Link to={`/${channel?.username}/${channel?._id}`}>
                            <p className='channelProfileContainer21'>{channel?.username}</p>
                        </Link>
                        <p className='channelProfileContainer22'>{channelSubscribers?.length} subscribers</p>
                    </div>
                </div>
            <div className='mainContainer'>
                
                {userTweets?.map((tweet)=>(
                    <div className='communityPostContainer' key={tweet?._id}>
                        <div className='communityPostContainer1'>
                            <div className='communityPostContainer11'>
                                <div className='communityPostContainer111'>
                                    <img 
                                        className='communityPostContainer1111' 
                                        src={channel?.avatar}
                                        alt="" 
                                    />
                                </div>
                                <p className='communityPostContainer112'>{channel?.username}</p>
                            </div>
                            {channel?._id === user?._id && (
                                <div 
                                    className='communityPostContainer12'
                                    onClick={()=>handleEditTweet(tweet)}
                                >
                                    <FontAwesomeIcon 
                                        icon={faEllipsisVertical} 
                                        className='communityPostContainer121'
                                        
                                    />
                                {isEditTweet && currentTweet?._id === tweet?._id && (
                                    <div className='communityPostContainer122'>
                                        <button
                                            className='communityPostContainer1221'
                                            onClick={handleCreatePost}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className='communityPostContainer1222'
                                            onClick={handleDeleteTweet}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}
                        </div>
                        <div className='communityPostContainer2'>
                            <p>{tweet?.content}</p>
                        </div>
                        <div className='communityPostContainer3'>
                            <FontAwesomeIcon
                                icon={faThumbsUp} 
                                className='communityPostContainer31'
                            />
                            {/* <p
                                className='communityPostContainer32'
                            >
                                45
                            </p> */}
                        </div>
                        
                    </div>
                ))}
                { userTweets.length === 0 && (
                    <div className='noTweets'>No Tweets</div>
                )}
            </div>
            {channel?._id === user?._id && (<button 
                className='mainContainer1'
                onClick={handleCreatePost}
            >
                <FontAwesomeIcon 
                    icon={faPlus} 
                    className='mainContainer11'
                />
            </button>)}
        </div>
        {isCreateTweet &&  (
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
                                onClick={handleCancelTweet}
                            >
                                Cancel
                            </button>
                            <button 
                                className='secondRow22'
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
