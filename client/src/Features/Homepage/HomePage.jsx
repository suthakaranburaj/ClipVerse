import React, { useEffect, useRef } from 'react';
import './Homepage.scss';
import devStore from '../../store/devStore';
import useVideosStore from '../../store/useVideosStore';
import { Link } from 'react-router-dom';

function HomePage() {
    const videoRefs = useRef([]);
    const { isNavOpen } = devStore();
    const { videos, getAllVideos, loading, error } = useVideosStore();

    useEffect(() => {
        // Fetch all videos when the component is mounted
        getAllVideos({
            page: 1, // default params
            limit: 20, 
            query: '', 
            sortBy: 'views', 
            sortType: 'desc',
            userId: null 
        });
    }, [getAllVideos]);

    const handleMouseEnter = (index) => {
        const videoElement = videoRefs.current[index];
        if (videoElement && videoElement.readyState >= 2) {
            videoElement.style.display = 'block';
            videoElement.play().catch((error) => console.error('Video play failed:', error));
        }
    };

    const handleMouseLeave = (index) => {
        const videoElement = videoRefs.current[index];
        if (videoElement) {
            videoElement.pause();
            videoElement.currentTime = 0;
            videoElement.style.display = 'none';
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading videos</div>;

    return (
        <div className={`${isNavOpen ? 'big-boy1 pl-5' : 'big-boy'}`}>
            <div className="headball flex space-x-4 py-2 overflow-x-auto text-xs font-bold fixed b w-full">
                <button className="live-recommend-btn text-white py-2 px-3 rounded-lg">All</button>
                <button className="recommend-btn text-white py-2 px-3 rounded-lg">Web Development</button>
                <button className="recommend-btn text-white py-2 px-3 rounded-lg">Startup Company</button>
                {/* Other buttons */}
            </div>
            <div className={`${isNavOpen ? 'Navopen flex text-white flex-wrap gap-3 mt-16' : 'main-box flex text-white flex-wrap gap-6 mt-16'}`}>
                {videos.map((video, index) => (
                    <Link to={`/watchvideo?videoSrc=${encodeURIComponent(video.videoUrl)}`} key={video._id} className='box relative pb-10'>
                        <div 
                            onMouseEnter={() => handleMouseEnter(index)} 
                            onMouseLeave={() => handleMouseLeave(index)}
                        >
                            <video
                                ref={(el) => videoRefs.current[index] = el} // Assign video ref
                                className='vid m-1 rounded-xl absolute top-0 left-0'
                                src={video.videoFile}
                                loop
                                preload="auto"
                                style={{ display: 'none' }} // Hide video initially
                            />
                            <img
                                className='thumbnail m-1 rounded-xl'
                                src={video.thumbnail}
                                alt={video.title}
                            />
                            <div className='flex my-3'>
                                <img
                                    className='w-[36px] h-[36px] rounded-full mx-2'
                                    src={video.uploaderAvatarUrl || '/path/to/default/avatar.png'}
                                    alt={video.uploaderName}
                                />
                                <div className='flex-col'>
                                    <p className='description'>{video.title}</p>
                                    <p className='userChannel'>{video.uploaderName}</p>
                                    <div className='flex'>
                                        <p className='views'>{video.views} views</p>
                                        <p className='dot'>•</p>
                                        <p className='time'>{video.timeSinceUpload}</p>
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
