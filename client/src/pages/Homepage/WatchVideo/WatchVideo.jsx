import React from 'react'
import './WatchVideo.scss'
import video1 from '../../../assets/video1.mp4'
import { useSelector } from 'react-redux'
function WatchVideo() {
    const isOpen = useSelector((state)=> state.navbar.isopen);
    return (
        <div className={isOpen ? 'WatchVideo-Container-WithNav' : 'WatchVideo-Container-WithoutNav'}>
            <div className='left-side'>
                <video src={video1}></video>
            </div>
            <div className='right-side'>

            </div>
        </div>
    )
}

export default WatchVideo
