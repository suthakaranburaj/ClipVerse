import React from 'react'
import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';


import './LikedVideos.scss'

import useLikesStore from '../../store/useLikesStore'
import Loader from '../../components/Loader/Loader';
import defaultImage from '../../assets/profile_pic.webp'


function LikedVideos() {

    const {likedVideos,getLikedVideos,isLoading:LikedVideosLoadingStore}= useLikesStore();
    const [minLoading, setMinLoading] = useState(true); // State for minimum loading time


    useEffect(()=>{
        const fetchData= async() =>{
            await getLikedVideos();
            // console.log(likedVideos);
            setTimeout(() => {
                setMinLoading(false);
            }, 1000);
        }
        fetchData();
    },[])

    dayjs.extend(relativeTime);

    if (LikedVideosLoadingStore || minLoading) return <div><Loader /></div>;  
    return (
        <div className='LikedVideosContainer'>
            <p className='header'>Liked Videos</p>
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
                                    <img src={video?.owner?.avatar ? video.owner.avatar : defaultImage} alt="" />
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
