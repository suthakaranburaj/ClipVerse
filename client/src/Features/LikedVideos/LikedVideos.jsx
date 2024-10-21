import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import './LikedVideos.scss'

import useLikesStore from '../../store/useLikesStore'

function LikedVideos() {

    const {likedVideos,getLikedVideos}= useLikesStore();

    useEffect(()=>{
        const fetchData= async() =>{
            await getLikedVideos();
            // console.log(likedVideos);
        }
        fetchData();
    },[])

    dayjs.extend(relativeTime);
    return (
        <div className='LikedVideosContainer'>
            <div className='videoContainer'>
                {likedVideos?.map((video)=>(
                    video && (
                    <Link key={video?._id} to={`/watchvideo?videoId=${encodeURIComponent(video?._id)}`} >
                        <div className='videoContainer1'>
                            <div className='videoContainer11'>
                                <img src={video?.thumbnail} alt="" />
                            </div>
                            <div className='videoContainer12'>
                                <div className='videoContainer121'>
                                    <img src={video?.owner?.avatar} alt="" />
                                </div>
                                <div className='videoContainer122'>
                                    <p className='videoContainer1221'>
                                        {video?.title}
                                    </p>
                                    <Link to={`/${video?.owner?.username}/${video?.owner?._id}`}>
                                        <p className='videoContainer1222'>
                                            {video?.owner?.username}
                                        </p>
                                    </Link>
                                    <div className='videoContainer1223'>
                                        <p className='views'>{video?.views} views</p>
                                        <p className='dot'>•</p>
                                        <p className='time'>{dayjs(video?.createdAt).fromNow()}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    )
                ))}
            </div>
        </div>
    )
}

export default LikedVideos
