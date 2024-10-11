import React, { useRef, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import devStore from '../../store/devStore';
import './WatchVideo.scss';
import image1 from '../../assets/video1_thumbnail.jpg'
import useVideosStore from '../../store/useVideosStore';
import { Outlet } from 'react-router-dom';
import Navbar from './components/NavMangeVideo/Sidebar';
import SearchBar from './components/ManageSearchBar/SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faThumbsUp } from '@fortawesome/free-solid-svg-icons'; // Example icons
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import {faSort } from '@fortawesome/free-solid-svg-icons'; // Example icons
import useStore from '../../store/userStore';
import useCommentsStore from '../../store/useCommentsStore'
import useSubscriptionStore from '../../store/useSubscriptionStore';




function WatchVideo() {

    const { isNavOpen } = devStore();

    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [commentsUpdated, setCommentsUpdated] = useState(false);
    const [commentContent, setCommentContent] = useState('');
    const [isSubscribed,setIsSubscribed] = useState(false);
    const [channelId, setChannelId] = useState(null);

    const { video, getVideoById, isLoading, error, userWatchHistory, incrementVideoViews,getAllVideos,videos } = useVideosStore(); // Fetch the video from the store
    const {user} = useStore();
    const location = useLocation();
    const { commentsOfVideo,getVideoComments,addCommentOnVideo} = useCommentsStore();
    // console.log(commentsOfVideo);
    const {getUserChannelSubscribers, channelSubscribers,toggleSubscription, error:subscriptionError} = useSubscriptionStore();

    const queryParams = new URLSearchParams(location.search);
    const videoId = queryParams.get('videoId');
    useEffect(() => {
        const fetchData =async()=>{
            if (videoId) {
                // await userWatchHistory(videoId);
                await getVideoById(videoId);
                await incrementVideoViews(videoId);
                await getVideoComments(videoId);
                await getAllVideos();

                const channelId = await video?.owner?._id;
                // console.log(video?.owner?._id);
                if(video?.owner?._id){
                    setChannelId(video.owner._id);
                    // console.log(video?.owner?._id);
                    await getUserChannelSubscribers(channelId);
                }
            }
        };
        fetchData();
    }, [videoId, getVideoById, userWatchHistory, incrementVideoViews,getVideoComments,commentsUpdated,getAllVideos,getUserChannelSubscribers]);

    useEffect( () => {
        const fetchData = async()=>{
            if (channelSubscribers.length > 0 && user) {
                const isUserSubscribed = channelSubscribers.some(subscriber => subscriber._id === user._id);
                setIsSubscribed(isUserSubscribed);
            }
            const channelId = await video?.owner?._id;
            await getVideoById(videoId);
            // await getUserChannelSubscribers(channelId);
        };
        fetchData();
    }, [channelSubscribers, user,videoId]);

    const handleAddComment = async()=>{

        if(videoId && commentContent){
            await addCommentOnVideo(videoId,commentContent);
            setCommentContent('');
            setCommentsUpdated(prev => !prev);
        }
    }

    const handleSubscription = async () => {
        if (channelId) {
            await toggleSubscription(channelId);
            if(isSubscribed){
                channelSubscribers.length -= 1;
            }else{
                channelSubscribers.length += 1;
            }
            setIsSubscribed((prev) => !prev);
        }
    };
    // useEffect(() => {
    //     const handleAutoSubmit = () => {
    //         if (commentContent.trim()) {
    //             handleAddComment();
    //         }
    //     };

    //     handleAutoSubmit();
    // }, [commentContent]); // Run handleSubmit when commentContent changes

    if (isLoading) return <p>Loading video...</p>;
    if (error) return <p>Error: {error}</p>;

    dayjs.extend(relativeTime);

    return (
        <div className='box'>
            <div className='watchVideo-container'>
                <div className='watchVideo-left-side'>
                    <div>
                        {video ? (
                            <video
                                ref={videoRef}
                                src={video?.videoFile}
                                controls
                                style={{ borderRadius: '10px' }}
                            />
                        ) : (
                            <p>No video found.</p>
                        )}
                        {/* <button onClick={togglePlayPause}>
                            {isPlaying ? 'Pause' : 'Play'}
                        </button> */}
                    </div>
                    <div>
                        <p className='video-title'>{video ? video?.title : 'Video Title Here'}</p>
                    </div>
                    <div className='subscribeSection'>
                        <div className='section1'>
                            <div className='section11'>
                                <div className='section111'>
                                    <img src={video?.owner?.avatar} alt="" />
                                </div>
                                <div className='section112'>
                                    <p className='ownerName'>{video?.owner?.fullName}</p>
                                    <p className='ownerSubscribers'>{channelSubscribers.length}</p>
                                </div>
                            </div>
                            <div className='section12'>
                                <button 
                                    className='subscribeButton'
                                    onClick={handleSubscription}
                                >
                                    {isSubscribed ? 'Subscribed' : 'Subscribe'}
                                </button>

                                <div className='likeButton'>
                                    <FontAwesomeIcon icon={faThumbsUp} className='likeIcon'/>
                                    <p>45</p>
                                </div>
                            </div>
                        </div>
                        {/* <div className='section2'>
                            <button>

                            </button>

                        </div> */}
                    </div>
                    <div className='description'>
                        <div className='section21'>
                            <p className='views'>{video?.views} views</p>
                            {/* <p className='dot'>•</p> */}
                            <p className='time'>{dayjs(video?.createdAt).fromNow()}</p>
                        </div>
                        <div className='section22'>
                            <p className='section221'>Description</p>
                            <p className='descriptionContent'>{video?.description}</p>
                        </div>
                    </div>
                    <div className='commentSection'>
                        <div className='commentSection1'>
                            <p className='commentSection12'>{commentsOfVideo?.length} Comments</p>
                        </div>
                        <div className='commentSection2'>
                            <FontAwesomeIcon icon={faSort} />
                            <p className='commentSection21'>Sort by</p>
                        </div>
                    </div>
                    <div className='comments'>
                        <div className='comments1'>
                            <div className='comments11'>
                                <img src={user?.avatar} alt="" />
                                <input 
                                    type="text"
                                    placeholder='Add a Comment'
                                    value={commentContent}
                                    onChange={(e)=>setCommentContent(e.target.value)}
                                />
                                <button 
                                    onClick={()=>setCommentContent('')}
                                >
                                    Cancel
                                </button>
                                <button 
                                    onClick={handleAddComment}
                                    disabled={!commentContent.trim()}
                                >
                                    Comment
                                </button>
                            </div>
                            <div className='divider'>

                            </div>
                        </div>
                        {/* <div className='comments2'>
                        </div> */}
                    </div>
                    <div className='channelComments'>
                        {
                            commentsOfVideo && commentsOfVideo.length > 0 ?
                            commentsOfVideo.map((comment)=>{
                                return(
                                    <div key={comment?._id} className='channelCommentsSection'>
                                        <div className='channelCommentsSection1'>
                                            <img src={comment?.owner?.avatar} alt="" />
                                        </div>
                                        <div className='channelCommentsSection2'>
                                            <div className='channelCommentsSection21'>
                                                <p className='channelCommentsSection211'>{comment?.owner?.username}</p>
                                                <p className='channelCommentsSection212'>{dayjs(comment?.createdAt).fromNow()}</p>
                                            </div>
                                            <div className='channelCommentsSecton22'>
                                                <p className='channelCommentsSection212'>{comment?.content}</p>
                                            </div>
                                            <div className='channelCommensSection23'>
                                                <FontAwesomeIcon icon={faThumbsUp} className=''/>
                                                <p>4</p>
                                            </div>
                                        </div>
                                    </div>
                                    );
                                }) 
                                :
                            <p>No Comments</p>
                        }
                    </div>
                    
                </div>

                <div className='watchVideo-right-side'>
                    {videos.length > 0 && videos.map((video, index) => (
                        video?._id != videoId && (
                            <div key={index} className='watchVideoSection'>
                                <div className='watchVideoSection1'>
                                    <img src={video?.thumbnail} className='watchVideoSection11' alt="" />
                                </div>
                                <div className='watchVideoSection2'>
                                    <div className='watchVideoSection21'>
                                        <p className='watchVideoSection211'>{video?.title}</p>
                                    </div>
                                    <div className='watchVideoSection22'>
                                        <p className='watchVideoSection221'>{video?.owner?.username}</p>
                                    </div>
                                    <div className='watchVideoSection23'>
                                            <p className='views'>{video?.views} views</p>
                                            <p className='dot'>•</p>
                                            <p className='time'>{dayjs(video?.createdAt).fromNow()}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    ))}
                </div>
            </div>
        </div>



    );
}

export default WatchVideo;



