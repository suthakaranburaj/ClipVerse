import React, { useRef } from 'react';
import  profile_pic from '../../assets/user_coverImage.jpg';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';
import image5 from '../../assets/image5.png';
import image6 from '../../assets/image6.png';
import image7 from '../../assets/image7.png';
import image8 from '../../assets/image8.png';
import image9 from '../../assets/image9.png';
import image10 from '../../assets/image10.png';
import image11 from '../../assets/image11.png';
import image12 from '../../assets/image12.png';
import './Homepage.scss';

import devStore from '../../store/devStore';
import video1 from '../../assets/video1.mp4';
import video2 from '../../assets/video2.mp4';
import video3 from '../../assets/video3.mp4';
import video4 from '../../assets/video4.mp4';
import video5 from '../../assets/video5.mp4';
import video6 from '../../assets/video6.mp4';
import video7 from '../../assets/video7.mp4';
import video8 from '../../assets/video8.mp4';
import video9 from '../../assets/video9.mp4';
import video10 from '../../assets/video10.mp4';
import video11 from '../../assets/video11.mp4';
import video12 from '../../assets/video12.mp4';
import { Link } from 'react-router-dom';

function HomePage() {
    const videoRefs = useRef([]); // Create a ref array for multiple videos
    const { isNavOpen } = devStore();
    const videoData = [
        {
           
            image:image1,
             profile_pic,
            description: 'How to Work with full energy -By Tushar Hasule',
            userChannel: 'Tushar Hasule Talks',
            views: '1.1M views',
            time: '1 day ago',
            videoSrc: video1,
        },
        
        {
          
            image:image8,
             profile_pic,
            description: 'How to dance with full energy -By Tushar Hasule',
            userChannel: 'Tushar Hasule Talks',
            views: '2.1M views',
            time: '1 day ago',
            videoSrc: video8,
        },
        {
          
            image:image9,
             profile_pic,
            description: 'How to Work with full energy -By Tushar Hasule',
            userChannel: 'Tushar Hasule Talks',
            views: '1.1M views',
            time: '1 day ago',
            videoSrc: video9,
        },
        {
           
            image:image10,
             profile_pic,
            description: 'How to Work with full energy -By Tushar Hasule',
            userChannel: 'Tushar Hasule Talks',
            views: '1.1M views',
            time: '1 day ago',
            videoSrc: video10,
        },
        {
            
            image:image3,
             profile_pic,
            description: 'How to Work with full energy -By Tushar Hasule',
            userChannel: 'Tushar Hasule Talks',
            views: '1.1M views',
            time: '1 day ago',
            videoSrc: video3,
        },
        {
            
            image:image4,
             profile_pic,
            description: 'How to Work with full energy -By Tushar Hasule',
            userChannel: 'Tushar Hasule Talks',
            views: '1.1M views',
            time: '1 day ago',
            videoSrc: video4,
        },
        {
            
            image:image5,
             profile_pic,
            description: 'How to dance with full energy -By Tushar Hasule',
            userChannel: 'Tushar Hasule Talks',
            views: '2.1M views',
            time: '1 day ago',
            videoSrc: video5,
        },
        {
            
            image:image6,
             profile_pic,
            description: 'How to Work with full energy -By Tushar Hasule',
            userChannel: 'Tushar Hasule Talks',
            views: '1.1M views',
            time: '1 day ago',
            videoSrc: video6,
        },
        {
            
            image:image7,
             profile_pic,
            description: 'How to Work with full energy -By Tushar Hasule',
            userChannel: 'Tushar Hasule Talks',
            views: '1.1M views',
            time: '1 day ago',
            videoSrc: video7,
        },
        
        {
          
            image:image11,
             profile_pic,
            description: 'How to dance with full energy -By Tushar Hasule',
            userChannel: 'Tushar Hasule Talks',
            views: '2.1M views',
            time: '1 day ago',
            videoSrc: video11,
        },
        {
           
            image:image12,
             profile_pic,
            description: 'How to Work with full energy -By Tushar Hasule',
            userChannel: 'Tushar Hasule Talks',
            views: '1.1M views',
            time: '1 day ago',
            videoSrc: video12,
        },
        {
            
            image:image2,
             profile_pic,
            description: 'How to dance with full energy -By Tushar Hasule',
            userChannel: 'Tushar Hasule Talks',
            views: '2.1M views',
            time: '1 day ago',
            videoSrc: video2,
        },
        // Repeat this object for other videos...
    ];

    const handleMouseEnter = (index) => {
        const videoElement = videoRefs.current[index];
        if (videoElement && videoElement.readyState >= 2) { // Ensure video is ready to play
            videoElement.style.display = 'block'; // Show video on hover
            videoElement.play().catch((error) => console.error('Video play failed:', error));
        }
    };

    const handleMouseLeave = (index) => {
        const videoElement = videoRefs.current[index];
        if (videoElement) {
            videoElement.pause();
            videoElement.currentTime = 0; // Reset video
            videoElement.style.display = 'none'; // Hide video when not hovering
        }
    };

    return (
        <div className={`${isNavOpen ? 'big-boy1 pl-5' : 'big-boy'}`}>
            <div className="headball flex space-x-4 py-2  overflow-x-auto text-xs font-bold fixed b w-full">
                <button className="live-recommend-btn text-white py-2 px-3 rounded-lg">All</button>
                <button className="recommend-btn text-white py-2 px-3 rounded-lg">Web Development</button>
                <button className="recommend-btn text-white py-2 px-3 rounded-lg">Startup Company</button>
                <button className="recommend-btn text-white py-2 px-3 rounded-lg">Source Code</button>
                <button className="recommend-btn text-white py-2 px-3 rounded-lg">Information Technology</button>
                <button className="recommend-btn text-white py-2 px-3 rounded-lg">News</button>
                <button className="recommend-btn text-white py-2 px-3 rounded-lg">Podcasts</button>
                <button className="recommend-btn text-white py-2 px-3 rounded-lg">Colleges</button>
                <button className="recommend-btn text-white py-2 px-3 rounded-lg">Motivation</button>
                <button className="recommend-btn text-white py-2 px-3 rounded-lg">Recently Uploaded</button>
            </div>
            <div className={`${isNavOpen ? 'Navopen flex text-white flex-wrap gap-3 mt-16' : 'main-box  flex text-white flex-wrap gap-6 mt-16'}`}>
                {videoData.map((video, index) => (
                    <Link to={`/watchvideo?videoSrc=${encodeURIComponent(video.videoSrc)}`} key={index} className='box relative pb-10'>
                        <div 
                            onMouseEnter={() => handleMouseEnter(index)} 
                            onMouseLeave={() => handleMouseLeave(index)}
                        >
                            {/* Video Element */}
                            <video
                                ref={(el) => videoRefs.current[index] = el} // Assign video ref
                                className='vid  m-1 rounded-xl absolute top-0 left-0'
                                src={video.videoSrc}
                                
                                loop
                                preload="auto" // Preload video
                                style={{ display: 'none' }} // Hide video initially
                            />
                            {/* Video Thumbnail */}
                            <img
                                className='  thumbnail m-1 rounded-xl'
                                src={video.image}
                                alt=""
                            />
                            {/* Video Info */}
                            <div className='flex my-3'>
                                <img
                                    className='w-[36px] h-[36px] rounded-full mx-2'
                                    src={video.profile_pic}
                                    alt=""
                                />
                                <div className='flex-col'>
                                    <p className='description'>{video.description}</p>
                                    <p className='userChannel'>{video.userChannel}</p>
                                    <div className='flex'>
                                        <p className='views'>{video.views}</p>
                                        <p className='dot'>•</p>
                                        <p className='time'>{video.time}</p>
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
