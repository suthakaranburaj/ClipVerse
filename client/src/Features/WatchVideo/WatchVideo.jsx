import React, { useRef, useState, useEffect, useMemo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './WatchVideo.scss';
import useVideosStore from '../../store/useVideosStore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faEllipsisVertical, faSort } from '@fortawesome/free-solid-svg-icons';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import useStore from '../../store/userStore';
import useCommentsStore from '../../store/useCommentsStore';
import useSubscriptionStore from '../../store/useSubscriptionStore';
import useLikesStore from '../../store/useLikesStore';
import { useForm } from 'react-hook-form';
import Loader from '../../components/Loader/Loader';

dayjs.extend(relativeTime);

function WatchVideo() {
    const videoRef = useRef(null);
    const [commentContent, setCommentContent] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(null);
    const [isEditComment, setIsEditComment] = useState(false);
    const [currentComment, setCurrentComment] = useState();
    const [minLoading, setMinLoading] = useState(true);

    const { register, handleSubmit, reset } = useForm();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const videoId = queryParams.get('videoId');

    // Store hooks
    const { user } = useStore();
    const { 
        video, 
        getVideoById, 
        isLoading: videoLoadingStore, 
        error, 
        userWatchHistory, 
        incrementVideoViews,
        getAllVideos,
        videos 
    } = useVideosStore();

    const {
        commentsOfVideo,
        getVideoComments,
        addCommentOnVideo,
        deleteCommentOnVideo,
        updateCommentOnVideo,
    } = useCommentsStore();

    const {
        getUserChannelSubscribers, 
        channelSubscribers,
        toggleSubscription, 
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
    } = useLikesStore();

    // Derived state
    const channelId = useMemo(() => video?.owner?._id, [video]);
    const isSubscribed = useMemo(
        () => channelSubscribers.some(subscriber => subscriber._id === user?._id),
        [channelSubscribers, user]
    );
    const isVideoLiked = useMemo(
        () => likesOfVideo.some(like => like.likedBy === user?._id),
        [likesOfVideo, user]
    );

    // Main data fetching effect
    useEffect(() => {
        const fetchData = async () => {
            if (!videoId) return;
            try {
                setMinLoading(true);
                
                // Sequential data fetching
                await getVideoById(videoId);
                await Promise.all([
                    userWatchHistory(videoId),
                    incrementVideoViews(videoId),
                ]);
                
                if (channelId) {
                    await getUserChannelSubscribers(channelId);
                }

                await Promise.all([
                    getVideoComments(videoId),
                    getVideoLikes(videoId),
                    getAllVideos(),
                ]);

                // Fetch comment likes in parallel
                if (commentsOfVideo?.length) {
                    await Promise.all(
                        commentsOfVideo.map(comment => getLikesOfComment(comment._id))
                    );
                }

                setTimeout(() => setMinLoading(false), 1000);
            } catch (error) {
                console.error("Error fetching data:", error);
                setMinLoading(false);
            }
        };

        fetchData();
    }, [videoId, channelId]);

    // Set current user ID for likes
    useEffect(() => {
        if (user?._id) setCurrentUserId(user._id);
    }, [user, setCurrentUserId]);

    // Comment handlers
    const handleAddComment = async () => {
        if (videoId && commentContent.trim()) {
            await addCommentOnVideo(videoId, commentContent);
            setCommentContent('');
            await getVideoComments(videoId);
        }
    };

    // Subscription handler
    const handleSubscription = async () => {
        if (!channelId) return;
        await toggleSubscription(channelId);
        await getUserChannelSubscribers(channelId);
    };

    // Like handlers
    const handleVideoLike = async () => {
        if (!videoId) return;
        await toggleVideoLike(videoId);
        await getVideoLikes(videoId);
    };

    const handleCommentLike = async (commentId) => {
        if (!commentId) return;
        await toggleCommentLike(commentId);
        await getLikesOfComment(commentId);
    };

    // Comment management
    const toggleDropdown = (commentId) => {
        setIsDropdownOpen(prev => prev === commentId ? null : commentId);
    };

    const handleCommentDelete = async (commentId) => {
        await deleteCommentOnVideo(commentId);
        await getVideoComments(videoId);
    };

    const handleCommentEdit = (comment) => {
        setIsEditComment(true);
        setCurrentComment(comment);
        reset({ content: comment.content });
    };

    // Form handlers
    const onSubmit = async (data) => {
        try {
            await updateCommentOnVideo(currentComment._id, data);
            await getVideoComments(videoId);
            setIsEditComment(false);
        } catch (error) {
            console.error("Error updating comment:", error);
        }
    };

    const handleCloseEdit = () => {
        setIsEditComment(false);
        reset();
    };

    // Video controls
    const handleDoubleClick = (event) => {
        if (!videoRef.current) return;
        
        const rect = videoRef.current.getBoundingClientRect();
        const clickX = event.clientX - rect.left;
        const videoWidth = rect.width;

        if (clickX < videoWidth / 3) {
            videoRef.current.currentTime -= 5;
        } else if (clickX > (videoWidth * 2) / 3) {
            videoRef.current.currentTime += 5;
        }
    };

    if (videoLoadingStore || minLoading) return <Loader />;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className='box'>
            <div className='watchVideo-container'>
                {/* Left Section */}
                <div className='watchVideo-left-side'>
                    <video
                        ref={videoRef}
                        src={video?.videoFile}
                        controls
                        onDoubleClick={handleDoubleClick}
                    />

                    <h1 className='video-title'>{video?.title}</h1>

                    {/* Channel Info */}
                    <div className='subscribeSection'>
                        <Link to={`/${video?.owner?.username}/${channelId}`}>
                            <div className='channel-info'>
                                <img src={video?.owner?.avatar} alt="avatar" />
                                <div>
                                    <p>{video?.owner?.fullName}</p>
                                    <p>{channelSubscribers.length} subscribers</p>
                                </div>
                            </div>
                        </Link>
                        
                        <div className='action-buttons'>
                            <button onClick={handleSubscription}>
                                {isSubscribed ? 'Subscribed' : 'Subscribe'}
                            </button>
                            <div className='like-container'>
                                <FontAwesomeIcon 
                                    icon={faThumbsUp} 
                                    onClick={handleVideoLike}
                                    className={isVideoLiked ? 'liked' : ''}
                                />
                                <span>{likesOfVideoNumber}</span>
                            </div>
                        </div>
                    </div>

                    {/* Video Info */}
                    <div className='video-info'>
                        <p>{video?.views} views • {dayjs(video?.createdAt).fromNow()}</p>
                        <p className='description'>{video?.description}</p>
                    </div>

                    {/* Comments Section */}
                    <div className='comments-section'>
                        <div className='comments-header'>
                            <h3>{commentsOfVideo?.length} Comments</h3>
                            <div className='sort-filter'>
                                <FontAwesomeIcon icon={faSort} />
                                <span>Sort by</span>
                            </div>
                        </div>

                        {/* Add Comment */}
                        <div className='add-comment'>
                            <img src={user?.avatar} alt="user avatar" />
                            <input
                                value={commentContent}
                                onChange={(e) => setCommentContent(e.target.value)}
                                placeholder="Add a comment..."
                            />
                            <div className='comment-buttons'>
                                <button onClick={() => setCommentContent('')}>
                                    Cancel
                                </button>
                                <button 
                                    onClick={handleAddComment}
                                    disabled={!commentContent.trim()}
                                >
                                    Comment
                                </button>
                            </div>
                        </div>

                        {/* Comments List */}
                        <div className='comments-list'>
                            {commentsOfVideo?.map(comment => {
                                const commentLikes = likesOfComments[comment._id] || { likes: 0 };
                                const isLiked = commentLikes.likedByUser;

                                return (
                                    <div key={comment._id} className='comment'>
                                        <img src={comment.owner.avatar} alt="avatar" />
                                        <div className='comment-content'>
                                            <div className='comment-header'>
                                                <span>{comment.owner.username}</span>
                                                <span>{dayjs(comment.createdAt).fromNow()}</span>
                                                {(comment.owner._id === user?._id) && (
                                                    <div className='comment-actions'>
                                                        <FontAwesomeIcon 
                                                            icon={faEllipsisVertical}
                                                            onClick={() => toggleDropdown(comment._id)}
                                                        />
                                                        {isDropdownOpen === comment._id && (
                                                            <div className='dropdown-menu'>
                                                                <button onClick={() => handleCommentEdit(comment)}>
                                                                    Edit
                                                                </button>
                                                                <button onClick={() => handleCommentDelete(comment._id)}>
                                                                    Delete
                                                                </button>
                                                            </div>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                            <p>{comment.content}</p>
                                            <div className='comment-likes'>
                                                <FontAwesomeIcon
                                                    icon={faThumbsUp}
                                                    className={isLiked ? 'liked' : ''}
                                                    onClick={() => handleCommentLike(comment._id)}
                                                />
                                                <span>{commentLikes.likes}</span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Right Section - Recommendations */}
                <div className='watchVideo-right-side'>
                    {videos
                        .filter(v => v._id !== videoId)
                        .map(video => (
                            <Link key={video._id} to={`/watch?videoId=${video._id}`}>
                                <div className='video-recommendation'>
                                    <img src={video.thumbnail} alt="thumbnail" />
                                    <div className='video-info'>
                                        <h4>{video.title}</h4>
                                        <p>{video.owner?.username}</p>
                                        <p>{video.views} views • {dayjs(video.createdAt).fromNow()}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                </div>
            </div>

            {/* Edit Comment Modal */}
            {isEditComment && (
                <div className='edit-comment-modal'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h3>Edit Comment</h3>
                        <textarea
                            {...register('content', { required: true })}
                            defaultValue={currentComment?.content}
                        />
                        <div className='modal-buttons'>
                            <button type="submit">Save</button>
                            <button type="button" onClick={handleCloseEdit}>Cancel</button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}

export default WatchVideo;