import React, { useRef, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import devStore from '../../store/devStore';
import './WatchVideo.scss';
import useVideosStore from '../../store/useVideosStore';

function WatchVideo() {
    const { isNavOpen } = devStore();
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const { video, getVideoById, isLoading, error,  } = useVideosStore(); // Fetch the video from the store
    const location = useLocation();
    // incrementVideoViews
    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const videoId = queryParams.get('videoId');
        if (videoId) {
            getVideoById(videoId); // Fetch the video based on videoId
            // incrementVideoViews(videoId);
        }
    }, [location, getVideoById, ]);
    // incrementVideoViews
    const togglePlayPause = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    if (isLoading) return <p>Loading video...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className='watchVideo-container'>
            <div className='watchVideo-left-side'>
                <div>
                    {video ? (
                        <video
                            ref={videoRef}
                            src={video.videoFile} // Assuming the video URL comes from the store
                            controls // Adds default video controls
                            width="100%" // Make it responsive
                            style={{ borderRadius: '10px' }} // Optional: style to make it look better
                        />
                    ) : (
                        <p>No video found.</p>
                    )}
                    <button onClick={togglePlayPause}>
                        {isPlaying ? 'Pause' : 'Play'}
                    </button>
                </div>
                <div>
                    <p className='video-title'>{video ? video.title : 'Video Title Here'}</p>
                </div>
            </div>

            <div className='watchVideo-right-side'>
                {/* Add any additional details or related videos here */}
            </div>
        </div>
    );
}

export default WatchVideo;
