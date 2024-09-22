import React from 'react';
import image1 from '../../assets/video1_thumbnail.jpg'
import image2 from '../../assets/profile_pic.webp'
import './Homepage.scss';

function HomePage() {

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
    <div className='flex text-white m-3 flex-wrap gap-3'>
        {videoData.map((video, index) => (
        <div key={index} className='pb-10 w-[24%]'>
            <img
                className='w-[317px] h-[178px] m-1 rounded-xl'
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
    );
}

export default HomePage;
