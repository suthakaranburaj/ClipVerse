import React, { useEffect, useRef } from 'react';
import './Homepage.scss';

import devStore from '../../store/devStore';
import useVideosStore from '../../store/useVideosStore';
import { Link } from 'react-router-dom';
import useStore from '../../store/userStore';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useNavigate } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import { useState } from 'react';

function HomePage() {
    const videoRefs = useRef([]);
    const { isNavOpen } = devStore();
    const { videos, getAllVideos, isLoading:videoStoreLoading, error:videoStoreError } = useVideosStore();
    const {isAuthenticated}=useStore();
    const [minLoading, setMinLoading] = useState(true); // State for minimum loading time


    const navigate = useNavigate();
    if(isAuthenticated == false){
        navigate("/login");
    }

    dayjs.extend(relativeTime);

    useEffect(() => {
        const startLoading = async () => {
            await getAllVideos({
                page: 1,
                limit: 20,
                query: '',
                sortBy: 'views',
                sortType: 'desc',
                userId: null,
            });
            // Ensure loader is shown for at least 1.5 seconds
            setTimeout(() => {
                setMinLoading(false);
            }, 1000);
        };

        startLoading();
    }, [getAllVideos]);



    const handleMouseLeave = (index) => {
        const videoElement = videoRefs.current[index];
        if (videoElement) {
            videoElement.pause();
            videoElement.currentTime = 0;
            videoElement.style.display = 'none';
        }
    };

    if (videoStoreLoading || minLoading) return <div><Loader /></div>;  
    
    const handleMouseEnter = (index) => {
        const videoElement = videoRefs.current[index];
        if (videoElement && videoElement.readyState >= 2) {
            videoElement.style.display = 'block';
            videoElement.play().catch((videoStoreError) => console.error('Video play failed:', videoStoreError));
        }
    };
    if (videoStoreError) return <div>Error loading videos</div>;

    return (
        <div className='HomePageContainer'>
            <div className="headball">
                <button className="live-recommend-btn">All</button>
                <button className="recommend-btn">Web Development</button>
                <button className="recommend-btn">Startup Company</button>
                {/* Other buttons */}
            </div>
            <div className={`${isNavOpen ? 'Navopen flex text-white flex-wrap gap-3 mt-16' : 'main-box flex text-white flex-wrap gap-6 mt-16'}`}>
                {Array.isArray(videos) && videos
                .filter(video => video?.isPublished)
                .map((video, index) => (
                    <Link to={`/watchvideo?videoId=${encodeURIComponent(video?._id)}`} key={video?._id} className='box'>
                        <div 
                            onMouseEnter={() => handleMouseEnter(index)} 
                            onMouseLeave={() => handleMouseLeave(index)}
                            className='ThumbailAndTitleCard'
                        >
                            <div className='thumbnailContainer'>
                                <video
                                    ref={(el) => videoRefs.current[index] = el} // Assign video ref
                                    className='vid'
                                    src={video?.videoFile}
                                    loop
                                    preload="auto"
                                    style={{ display: 'none' }} // Hide video initially
                                />
                                <img
                                    className='thumbnail'
                                    src={video?.thumbnail}
                                    alt={video?.title}
                                />
                            </div>
                            <div className='channelContainer flex my-3'>
                                <img
                                    className='channelContainer1 w-[36px] h-[36px] rounded-full mx-2'
                                    src={video?.owner?.avatar || ''}
                                />
                                <div className='channelContainer2'>
                                    <p className='description'>{video?.title}</p>
                                    <Link to={`/${video?.owner?.username}/${video?.owner?._id}`}>
                                        <p className='userChannel'>
                                            {video?.owner?.username}
                                        </p>
                                    </Link>
                                    <div className='flex'>
                                        <p className='views'>{video?.views} views</p>
                                        <p className='dot'>•</p>
                                        <p className='time'>{dayjs(video?.createdAt).fromNow()}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default HomePage;
