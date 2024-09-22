import React from 'react';
import image1 from '../../assets/video1_thumbnail.jpg'
import image2 from '../../assets/profile_pic.webp'
function HomePage() {
    return (
        <div className='flex text-white'>
            <div className=''>
                <img className='w-[30%] m-1 rounded-xl' src={image1} alt="" />
                <div className='flex my-3'>
                    <img className='w-[5%] rounded-full mx-2 ' src={image2} alt="" />
                    <div>
                        <p className='description'>How to Fuck with full energy -By Tushar Hasule</p>
                        <p className='userChannel'>Tushar Hasule Talks</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
