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





function WatchVideo() {
    const videoData = [
        {
            image1: image1,
            description: 'How to Work with full energy -By Tushar Hasule',
            userChannel: 'Tushar Hasule Talks',
            views: '1.1M views',
            time: '1 day ago',
        },
        {
            image1: image1,
            description: 'How to Work with full energy -By Tushar Hasule',
            userChannel: 'Tushar Hasule Talks',
            views: '1.1M views',
            time: '1 day ago',
        },
        {
            image1: image1,
            description: 'How to Work with full energy -By Tushar Hasule',
            userChannel: 'Tushar Hasule Talks',
            views: '1.1M views',
            time: '1 day ago',
        },
        {
            image1: image1,
            description: 'How to Work with full energy -By Tushar Hasule',
            userChannel: 'Tushar Hasule Talks',
            views: '1.1M views',
            time: '1 day ago',
        },
        {
            image1: image1,
            description: 'How to Work with full energy -By Tushar Hasule',
            userChannel: 'Tushar Hasule Talks',
            views: '1.1M views',
            time: '1 day ago',
        },
        {
            image1: image1,
            description: 'How to Work with full energy -By Tushar Hasule',
            userChannel: 'Tushar Hasule Talks',
            views: '1.1M views',
            time: '1 day ago',
        },
        {
            image1: image1,
            description: 'How to Work with full energy -By Tushar Hasule',
            userChannel: 'Tushar Hasule Talks',
            views: '1.1M views',
            time: '1 day ago',
        },
        {
            image1: image1,
            description: 'How to Work with full energy -By Tushar Hasule',
            userChannel: 'Tushar Hasule Talks',
            views: '1.1M views',
            time: '1 day ago',
        },
        {
            image1: image1,
            description: 'How to Work with full energy -By Tushar Hasule',
            userChannel: 'Tushar Hasule Talks',
            views: '1.1M views',
            time: '1 day ago',
        },
    ];

    const { isNavOpen } = devStore();

    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const { video, getVideoById, isLoading, error, userWatchHistory, incrementVideoViews } = useVideosStore(); // Fetch the video from the store

    const {user} = useStore();
    const location = useLocation();
    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const videoId = queryParams.get('videoId');
        console.log(videoId);
        if (videoId) {
            getVideoById(videoId);
            incrementVideoViews(videoId);
            userWatchHistory(videoId);
        }
    }, [location, getVideoById, userWatchHistory, incrementVideoViews]);

    // const togglePlayPause = () => {
    //     if (isPlaying) {
    //         videoRef.current.pause();
    //     } else {
    //         videoRef.current.play();
    //     }
    //     setIsPlaying(!isPlaying);
    // };

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
                                    <p className='ownerSubscribers'>No of Subscribers</p>
                                </div>
                            </div>
                            <div className='section12'>
                                <button className='subscribeButton'>
                                    Subscribe
                                </button>
                                <div className='likeButton'>
                                    <FontAwesomeIcon icon={faThumbsUp} className='likeIcon'/>
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
                            <p className='commentSection12'>No of Comments</p>
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
                                />
                                <button>
                                    Cancel
                                </button>
                                <button>
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
                        <div className='userAvatar'>
                            <img src={video.owner.avatar} alt="" />
                        </div>
                        <div className='channelComments1'>
                            <p className='commentOwner'>User</p>
                            <p>Time ago</p>
                        </div>
                        <div className='channelComments2'>
                            <p className='userComment'>user comment</p>
                        </div>
                    </div>
                    <div className='commentLike'>
                            <FontAwesomeIcon icon={faThumbsUp} className='commentLikeIcon'/>
                    </div>
                </div>

                <div className='watchVideo-right-side'>
                    {videoData.map((video, index) => (
                        <div key={index} className='vids flex gap-2'>
                            <div className='w-[50%]'>
                                <img src={video.image1} className='rounded-lg' alt="" />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <div>
                                    <p className='font-bold' >{video.description}</p>
                                </div>
                                <div>
                                    <p className='text-[#808080] text-[1%] '>{video.userChannel}</p>
                                </div>
                                <div className='flex'>
                                    <div>
                                        <p className='text-[#808080] text-[90%] '>{video.views}</p>
                                    </div>
                                    <div>
                                        <p className='text-[#808080] text-[90%] '>{video.time}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>



    );
}

export default WatchVideo;



