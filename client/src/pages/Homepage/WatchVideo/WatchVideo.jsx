import React from 'react';

import video1 from '../../../assets/video1.mp4';

import './WatchVideo.scss';
import devStore from '../../../store/devStore';

function WatchVideo() {

    const { isNavOpen } = devStore();

    return (
        <div className={isNavOpen ? 'WatchVideo-Container-WithNav' : 'WatchVideo-Container-WithoutNav'}>
            <div className='left-side'>
                <video src={video1}></video>
            </div>
            <div className='right-side'>

            </div>
        </div>
    )
}

export default WatchVideo
