import React, { useRef, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import devStore from '../../store/devStore';
import './WatchVideo.scss';
import image1 from '../../assets/video1_thumbnail.jpg'
import useVideosStore from '../../store/useVideosStore';
import { Outlet } from 'react-router-dom';
import Navbar from './components/NavMangeVideo/Sidebar';
import SearchBar from './components/ManageSearchBar/SearchBar';


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

    return (
        <div className='box'>
        <div className='SearchBar'>
                <SearchBar />
            </div>
            <div className='layout'>
                
                
                <div className={`left-side ${isNavOpen ? '' : 'hidden'}`}>
                <Navbar />
                </div>
                <div className={isNavOpen ? 'right-side-WithNav' : 'right-side-WithoutNav'}>
                    <Outlet />
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
            </div>
            
        </div>



    );
}

export default WatchVideo;



