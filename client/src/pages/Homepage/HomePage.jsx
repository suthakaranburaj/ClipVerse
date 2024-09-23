import React from 'react';
import image1 from '../../assets/video1_thumbnail.jpg'
import image2 from '../../assets/profile_pic.webp'
import './Homepage.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
function HomePage() {
    const isOpen = useSelector((state) => state.navbar.isOpen);
    const videoData = [
        {
            image1: image1,
            image2: image2,
            description: 'How to Fuck with full energy -By Tushar Hasule',
            userChannel: 'Tushar Hasule Talks',
            views: '1.1M views',
            time: '1 day ago',
        },
        {
            image1: image1,
            image2: image2,
            description: 'How to Fuck with full energy -By Tushar Hasule',
            userChannel: 'Tushar Hasule Talks',
            views: '1.1M views',
            time: '1 day ago',
        },
        {
            image1: image1,
            image2: image2,
            description: 'How to Fuck with full energy -By Tushar Hasule',
            userChannel: 'Tushar Hasule Talks',
            views: '1.1M views',
            time: '1 day ago',
        },
        {
            image1: image1,
            image2: image2,
            description: 'How to Fuck with full energy -By Tushar Hasule',
            userChannel: 'Tushar Hasule Talks',
            views: '1.1M views',
            time: '1 day ago',
        },
        {
            image1: image1,
            image2: image2,
            description: 'How to Fuck with full energy -By Tushar Hasule',
            userChannel: 'Tushar Hasule Talks',
            views: '1.1M views',
            time: '1 day ago',
        },
        {
            image1: image1,
            image2: image2,
            description: 'How to Fuck with full energy -By Tushar Hasule',
            userChannel: 'Tushar Hasule Talks',
            views: '1.1M views',
            time: '1 day ago',
        },
        {
            image1: image1,
            image2: image2,
            description: 'How to Fuck with full energy -By Tushar Hasule',
            userChannel: 'Tushar Hasule Talks',
            views: '1.1M views',
            time: '1 day ago',
        },
        {
            image1: image1,
            image2: image2,
            description: 'How to Fuck with full energy -By Tushar Hasule',
            userChannel: 'Tushar Hasule Talks',
            views: '1.1M views',
            time: '1 day ago',
        },
        {
            image1: image1,
            image2: image2,
            description: 'How to Fuck with full energy -By Tushar Hasule',
            userChannel: 'Tushar Hasule Talks',
            views: '1.1M views',
            time: '1 day ago',
        },
    ];
    return (
    <div>
        <div className="flex space-x-4 py-2  overflow-x-auto text-xs font-bold fixed bg-black w-full">
                    <button className="bg-gray-700 text-white py-2 px-3 rounded-lg">All</button>
                    <button className="bg-gray-900 text-white py-2 px-3 rounded-lg">Web Development</button>
                    <button className="bg-gray-900 text-white py-2 px-3 rounded-lg">Startup Company</button>
                    <button className="bg-gray-900 text-white py-2 px-3 rounded-lg">Source Code</button>
                    <button className="bg-gray-900 text-white py-2 px-3 rounded-lg">Information Technology</button>
                    <button className="bg-gray-900 text-white py-2 px-3 rounded-lg">News</button>
                    <button className="bg-gray-900 text-white py-2 px-3 rounded-lg">Podcasts</button>
                    <button className="bg-gray-900 text-white py-2 px-3 rounded-lg">Colleges</button>
                    <button className="bg-gray-900 text-white py-2 px-3 rounded-lg">Motivation</button>
                    <button className="bg-gray-900 text-white py-2 px-3 rounded-lg">Recently Uploaded</button>
        </div>
        <Link to='watchvideo'>
            <div className='flex text-white m-3 flex-wrap gap-3 mt-16'>
                {videoData.map((video, index) => (
                <div key={index} className='pb-10 w-[24%]'>
                    <img
                        className='w-[100%] h-[60%] m-1 rounded-xl'
                        src={video.image1}
                        alt=""
                    />
                    <div className='flex my-3'>
                        <img
                        className='w-[36px] h-[36px] rounded-full mx-2'
                        src={video.image2}
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
                ))}
            </div>
        </Link>
    </div>
    );
}

export default HomePage;
