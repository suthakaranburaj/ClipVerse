import React from 'react';
import { useRef , useState } from 'react';

import video1 from '../../assets/video1.mp4';
import image1 from '../../assets/video1_thumbnail.jpg'

import devStore from '../../store/devStore';
import './WatchVideo.scss';

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
                    <video 
                        src={video1} 
                        controls  // Adds default video controls
                        width="100%"  // Make it responsive
                        style={{ borderRadius: '10px' }} // Optional: style to make it look better
                    />
                    <button onClick={togglePlayPause}>
                        {isPlaying ? 'Pause' : 'Play'}
                    </button>
                </div>
                <div>
                    <p className='w-[100%] text-white font-bold text-2xl'>How to Work with full energy -By Tushar Hasule</p>
                </div>
            </div>

            <div className='watchVideo-right-side flex flex-col gap-3'>
                {videoData.map((video,index) =>( 
                    <div key={index} className='flex gap-2'>
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
    )
}

export default WatchVideo
