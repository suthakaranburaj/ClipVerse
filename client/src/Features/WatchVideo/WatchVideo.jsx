import React, { useRef, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import devStore from '../../store/devStore';
import './WatchVideo.scss';

function WatchVideo() {
    const { isNavOpen } = devStore();
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [videoSrc, setVideoSrc] = useState('');

    const location = useLocation();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const videoSource = queryParams.get('videoSrc');
        if (videoSource) {
            setVideoSrc(decodeURIComponent(videoSource));
        }
    }, [location]);

    const togglePlayPause = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className='mx-20 mt-5 flex h-auto'>
            <div className='watchVideo-left-side flex-col'>
                <div>
                    {videoSrc && (
                        <video 
                            ref={videoRef}
                            src={videoSrc} 
                            controls  // Adds default video controls
                            width="100%"  // Make it responsive
                            style={{ borderRadius: '10px' }} // Optional: style to make it look better
                        />
                    )}
                    <button onClick={togglePlayPause}>
                        {isPlaying ? 'Pause' : 'Play'}
                    </button>
                </div>
                <div>
                    <p className='w-[100%] text-white font-bold text-2xl'>Video Title Here</p>
                </div>
            </div>

            <div className='watchVideo-right-side flex flex-col gap-3'>
                {/* Add your video data logic here if needed */}
            </div>
        </div>
    )
}

export default WatchVideo;
