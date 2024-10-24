import React, { useRef, useState, useEffect } from 'react';
import { useLocation ,Link} from 'react-router-dom';
import './WatchVideo.scss';
import useVideosStore from '../../store/useVideosStore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faThumbsUp } from '@fortawesome/free-solid-svg-icons'; // Example icons 
import {faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'; 
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import {faSort } from '@fortawesome/free-solid-svg-icons'; // Example icons
import useStore from '../../store/userStore';
import useCommentsStore from '../../store/useCommentsStore'
import useSubscriptionStore from '../../store/useSubscriptionStore';
import useLikesStore from '../../store/useLikesStore';
import { useForm } from 'react-hook-form';
import Loader from '../../components/Loader/Loader';
import defaultImage from '../../assets/profile_pic.webp'





function WatchVideo() {

    // const { isNavOpen } = devStore();

    const videoRef = useRef(null);
    // const [isPlaying, setIsPlaying] = useState(false);
    const [commentsUpdated, setCommentsUpdated] = useState(false);
    const [commentContent, setCommentContent] = useState('');
    const [isSubscribed,setIsSubscribed] = useState(false);
    const [channelId, setChannelId] = useState(null);
    const [isVideoLiked,setIsVideoLiked] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(null);
    const [isEditComment,setIsEditComment] = useState(false);
    const [currentComment, setCurrentComment] = useState();
    const [minLoading, setMinLoading] = useState(true); // State for minimum loading time
    const [showComments, setShowComments] = useState(false);
    // const [videoLikes,setIsVideoLikes]=useState(0);

    // Function to toggle comment visibility
    

    
    const { register, handleSubmit, reset } = useForm();

    const { 
        video, 
        getVideoById, 
        isLoading:videoLoadingStore, 
        error, 
        userWatchHistory, 
        incrementVideoViews,
        getAllVideos,
        videos,
        watchHistorys
    } = useVideosStore(); // Fetch the video from the store

    const {user} = useStore();
    const location = useLocation();
    const { 
        commentsOfVideo,
        getVideoComments,
        addCommentOnVideo,
        deleteCommentOnVideo,
        updateCommentOnVideo,
        isLoading:commentsLoadingStore,
    } = useCommentsStore();

    const {
        getUserChannelSubscribers, 
        channelSubscribers,
        toggleSubscription, 
        // error:subscriptionError
    } = useSubscriptionStore();
    
    const {
        toggleVideoLike, 
        getVideoLikes,
        likesOfVideo,
        likesOfVideoNumber, 
        likesOfComments,
        toggleCommentLike, 
        getLikesOfComment,
        setCurrentUserId,
        isLoading:likesLoadingStore,
    } = useLikesStore();

    const queryParams = new URLSearchParams(location.search);
    const videoId = queryParams.get('videoId');
    useEffect(() => {
        if (video?.owner?._id) {
            setChannelId(video.owner._id);
        }
    }, [video]);
    useEffect(() => {
        const fetchData =async()=>{
            if (videoId && channelId) {
                const isVideoInHistory = watchHistorys.some(history => history._id === videoId);
                if (!isVideoInHistory) {
                    await userWatchHistory(videoId);
                }
                await Promise.all([
                    getVideoById(videoId),
                    incrementVideoViews(videoId),
                    getVideoComments(videoId),
                    getAllVideos(),
                    getVideoLikes(videoId),
                    getUserChannelSubscribers(channelId),
                    getUserChannelSubscribers(channelId)

                ]);

            }

            setTimeout(() => {
                setMinLoading(false);
            }, 1000);
        };
        fetchData();
    }, [
        videoId,
        channelId,
        userWatchHistory,
        getLikesOfComment,
        user,
        // likesOfVideo,
        // commentsOfVideo
    ]);

    useEffect(() => {
        const fetchData = async () => {
            if (user && videoId) {
                try {
                    // Fetch the video likes
                    await getVideoLikes(videoId);
                    if (likesOfVideo === undefined) {
                        // Handle undefined case, set a default value instead of toggling
                        setIsVideoLiked(false); // or true, depending on your requirements
                    }
                    if (likesOfVideo && likesOfVideo.length > 0) {
                        const isVideoLiked = likesOfVideo.some(
                            (like) => like.likedBy === user._id
                        );
    
                        // Update the state only if necessary
                        setIsVideoLiked((prevIsVideoLiked) => {
                            if (prevIsVideoLiked !== isVideoLiked) {
                                return isVideoLiked;
                            }
                            return prevIsVideoLiked;
                        });
                    }
                } catch (error) {
                    console.error("Error fetching video likes:", error);
                }
            }
        };
    
        // Use a small delay to debounce state updates, preventing multiple re-renders
        const debounceTimeout = setTimeout(() => {
            fetchData();
        }, 200);
    
        return () => clearTimeout(debounceTimeout);
    }, [videoId, user, likesOfVideo ,channelId,isVideoLiked,]); // removed unnecessary `isVideoLiked` and `channelId` dependencies
    
    
    

    useEffect(() => {
        const fetchData = async () => {
            if (user && channelId) {
                // Fetch the channel subscribers
                await getUserChannelSubscribers(channelId);
                
                // Only check if user is subscribed once channelSubscribers is updated
                if (channelSubscribers.length >= 0) {
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
    }, [channelSubscribers, channelId, user,videoId]); 
    

    useEffect(() => {
        const fetchData = async () => {
            // console.log(videoId)
            if (videoId) {

                // clearCommentsOfVideo();
                await getVideoComments(videoId);  // Re-fetch comments when the videoId or commentsUpdated changes
                // console.log("hellow",commentsOfVideo)
                // console.log(videoId)
                if (commentsOfVideo && commentsOfVideo.length >= 0) {
                    const fetchLikesPromises = commentsOfVideo.map(comment => getLikesOfComment(comment._id));
                    await Promise.all(fetchLikesPromises);  // Fetch likes for all comments in parallel
                }
            }
        };
        fetchData();
    }, [videoId, toggleCommentLike,channelId,commentsOfVideo,getLikesOfComment]); 
    
    const handleAddComment = async()=>{
        if(videoId && commentContent){
            await Promise.all([
                addCommentOnVideo(videoId,commentContent),
                getVideoComments(videoId), // Fetch updated comments after adding the comment
            ])
            setCommentContent('');
            setCommentsUpdated((prev) => !prev);
        }
    }

    useEffect(() => {
        const fetchData = async()=>{
            if (videoId) {
                await getVideoComments(videoId);  // Re-fetch comments when the videoId or commentsUpdated changes
            }
        }
        fetchData();
    }, [videoId, commentsUpdated,channelId ]);
    

    const handleSubscription = async (channelId) => {
        if (channelId) {
            // console.log(channelId)
            await Promise.all([
                toggleSubscription(channelId),
                getUserChannelSubscribers(channelId),
            ]);
    
            // if (isSubscribed) {
            //     channelSubscribers.length -= 1;
            // } else {
            //     channelSubscribers.length += 1;
            // }
            setIsSubscribed((prev)=>prev)
        }
    };

    const handleVideoLike = async(videoId)=>{
        if(videoId){
            // setIsVideoLiked((prevIsVideoLiked) => !prevIsVideoLiked); 
            // console.log("hellow")
            await Promise.all([
                toggleVideoLike(videoId),
                getVideoLikes(videoId),
            ])
            // if(isVideoLiked ){
            //     likesOfVideo.length-= 1;
            // }
            // else{
            //     likesOfVideo.length += 1;
            // }
            // console.log(isVideoLiked)
            setIsVideoLiked(prev=>!prev);
            // console.log(isVideoLiked);
        }
    };

    useEffect(() => {
        if (user && user._id) {
            setCurrentUserId(user._id);
        }
    }, [
        user, 
        setCurrentUserId, 
        toggleCommentLike,
        getLikesOfComment,
        commentsOfVideo,
    ]);
    
    const handleCommentLike = async (commentId) => {
        if (commentId) {
            // console.log(likesOfComments)
            await toggleCommentLike(commentId);
            await getLikesOfComment(commentId);
            // setIsVideoLiked((prev) => !prev);
        }
    };

    

    const toggleDropdown = (commentId) => {
        setIsDropdownOpen((prev) => (prev === commentId ? null : commentId));
    };

    const handleCommentDelete = async(commentId) =>{
        await deleteCommentOnVideo(commentId);
        setCommentsUpdated((prev) => !prev); // Trigger refetch after deletion

    }

    const handleCommentEdit = (comment)=>{
        setIsEditComment(true);
        setCurrentComment(comment);
    }

    const onSubmit = async(data)=>{ 
        try {
            // console.log(data.content)
            await updateCommentOnVideo(currentComment?._id,{content: data.content});
            reset();
            setIsEditComment(false);
            setCommentsUpdated((prev) => !prev); // Trigger refetch after deletion

        } catch (error) {
            console.error("Error while updating the comment !!")
        }
    };

    const handleCloseEdit = ()=>{
        setIsEditComment(false);
        reset();
    }

    const handleDoubleClick = (event) => {
        const rect = videoRef.current.getBoundingClientRect();
        const clickX = event.clientX - rect.left; // X coordinate of click relative to video
        const videoWidth = rect.width;

        if (clickX < videoWidth / 3) {
            // Clicked on the left third of the video, skip backward
            videoRef.current.currentTime -= 5; // Move backward by 5 seconds
        } else if (clickX > (videoWidth * 2) / 3) {
            // Clicked on the right third of the video, skip forward
            videoRef.current.currentTime += 5; // Move forward by 5 seconds
        }
    };

    const toggleComments = () => {
        setShowComments((prevShowComments) => !prevShowComments);
    };

    if (videoLoadingStore || minLoading ) return <Loader/>
    if (error) return <p>Error: {error}</p>;

    

    dayjs.extend(relativeTime);

    // console.log(video)
    // console.log(video?.videoFile)
    const formatViews =(views)=> {
        if (views >= 1_000_000_000) {
          return (views / 1_000_000_000).toFixed(1) + 'B';  // Billion
        } else if (views >= 1_000_000) {
          return (views / 1_000_000).toFixed(1) + 'M';  // Million
        } else if (views >= 1_000) {
          return (views / 1_000).toFixed(1) + 'K';  // Thousand
        } else {
          return views;  // Less than 1000
        }
    }

    return (
        <>
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
                                onDoubleClick={handleDoubleClick}
                            />
                        ) : (
                            <p>No video found.</p>
                        )}
                    </div>
                    <div>
                        <p className='video-title'>{video ? video?.title : 'Video Title Here'}</p>
                    </div>
                    <div className='subscribeSection'>
                        <div className='section1'>
                            <Link to={`/${video?.owner?.username}/${video?.owner?._id}`}>
                                <div className='section11'>
                                    <div className='section111'>
                                        <img src={video?.owner?.avatar ? video.owner.avatar : defaultImage} alt="" />
                                    </div>
                                    <div className='section112'>
                                        <p className='ownerName'>{video?.owner?.fullName}</p>
                                        <p className='ownerSubscribers'>{channelSubscribers.length}</p>
                                    </div>
                                </div>
                            </Link>
                            <div className='section12'>
                                <button 
                                    className='subscribeButton'
                                    onClick={ ()=> 
                                        handleSubscription(channelId)
                                    }
                                >
                                    {isSubscribed ? 'Subscribed' : 'Subscribe'}
                                </button>

                                <div className='likeButton'>
                                    <FontAwesomeIcon 
                                        icon={faThumbsUp} 
                                        onClick={()=>handleVideoLike(videoId)}
                                        className={`${isVideoLiked ? 'likeIcon' : 'unLikeIcon'}`}
                                    />
                                    <p>{likesOfVideoNumber}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='description'>
                        <div className='section21'>
                            <p className='views'>{video ? formatViews(video?.views) : '0'} views</p>
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
                                <img src={user?.avatar ? user.avatar : defaultImage} alt="" />
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
                    </div>
                    <div>
                        <button onClick={toggleComments}>
                            {showComments ? 'Hide Comments' : 'Read Comments'}
                        </button>
                        {showComments &&(
                            <div className='channelComments'>
                            {
                                commentsOfVideo && commentsOfVideo.length > 0 ?
                                commentsOfVideo.map((comment)=>{
                                    const commentLikeData =
                                    // console.log(likesOfComments)
                                        likesOfComments[comment._id] ||{
                                            likes:0,
                                            likedbyUser:false,
                                        };
                                    return(
                                        <div key={comment?._id} className='channelCommentsSection'>
                                            <div className='channelCommentsSection1'>
                                                <img src={comment?.owner?.avatar ? comment.owner.avatar : defaultImage} alt="" />
                                            </div>
                                            <div className='channelCommentsSection2'>
                                                <div className='channelCommentsSection21'>
                                                    <p className='channelCommentsSection211'>{comment?.owner?.username}</p>
                                                    <p className='channelCommentsSection212'>{dayjs(comment?.createdAt).fromNow()}</p>
                                                    <FontAwesomeIcon 
                                                        icon={faEllipsisVertical} 
                                                        className='channelCommentsSection213' 
                                                        onClick={()=>toggleDropdown(comment._id)}
                                                    />
                                                    {isDropdownOpen === comment._id && (comment?.owner?._id === user?._id || channelId === user?._id)  &&( // Conditionally render dropdown
                                                        <div className='commentDropdown'>
                                                            <button onClick={() => handleCommentEdit(comment)}>Edit</button>
                                                            <button onClick={()=>handleCommentDelete(comment?._id)}>Delete</button>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className='channelCommentsSecton22'>
                                                    <p className='channelCommentsSection221'>{comment?.content}</p>
                                                </div>
                                                <div className='channelCommensSection23'>
                                                    <div className='channelCommensSection231'>
                                                        <FontAwesomeIcon
                                                            icon={faThumbsUp} 
                                                            className={`${
                                                                commentLikeData.likedByUser
                                                                    ? 'likeIcon'
                                                                    : 'unLikeIcon'
                                                            }`}
                                                            onClick={() => {
                                                                // Toggle the like status locally
                                                                handleCommentLike(comment?._id);
                                                                // commentLikeData.likedByUser = !commentLikeData.likedByUser;
                                                                // if (commentLikeData.likedByUser) {
                                                                //     commentLikeData.likes += 1; // Increment the like count
                                                                // } else {
                                                                //     commentLikeData.likes -= 1; // Decrement the like count
                                                                // }
                                                
                                                                // Call the like API
                                                                
                                                            }}
                                                        />
                                                    </div>
                                                    <p>{commentLikeData.likes}</p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        );
                                    }) 
                                    :
                                <p>No Comments</p>
                            }
                            </div>
                        )}
                        
                    </div>
                </div>

                <div className='watchVideo-right-side'>
                    {videos.length > 0 && videos.map((video, index) => (
                        video?._id !== videoId && (
                            <Link key={index} to={`/watchvideo?videoId=${encodeURIComponent(video?._id)}`} >
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
                                                <p className='views'>{video ? formatViews(video.views) : '0'} views</p>
                                                <p className='dot'>•</p>
                                                <p className='time'>{dayjs(video?.createdAt).fromNow()}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    ))}
                </div>
            </div>
        </div>
        {isEditComment && currentComment?.owner?._id === user?._id &&(
            <div className='editCommentContainer'>
                <form onSubmit={handleSubmit(onSubmit)} className='editCommentContainer1'>
                    <p className='editCommentContainer11'>Edit Comment</p>
                    <div className='editCommentContainer12'>
                        <label className='editCommentContainer121'>
                            Content
                        </label>
                        <input 
                            type="text" 
                            {...register('content')}
                            defaultValue={currentComment.content}
                            className='editCommentContainer122'
                        />
                    </div>
                    <div className="formButtons">
                                <button className='formButtons1' type="submit">Submit</button>
                                <button className='formButtons2' type="button" onClick={handleCloseEdit}>Close</button>
                    </div>
                </form>
            </div>
        )}
        
    </>


    );
}

export default WatchVideo;



