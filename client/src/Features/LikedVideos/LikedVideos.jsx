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

    const formatViews =(views)=> {
        if (views >= 1_000_000_000) {
          return (views / 1_000_000_000).toFixed(1) + 'B';  // Billion
        } else if (views >= 1_000_000) {
          return (views / 1_000_000).toFixed(1) + 'M';  // Million
        } else if (views >= 1_000) {
          return (views / 1_000).toFixed(1) + 'K';  // Thousand
        } else {
          return views;  // Less than 1000
        }
    }

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
                                        <p className='views'>{video ? formatViews(video.views) : '0'} views</p>
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
            {likedVideos.length === 0 &&(
                <div className='NoLikedVideosContainer'>
                    <p className='NoLikedVideos'>No Liked Videos Found</p>
                </div>
            )}
        </div>
    )
}

export default LikedVideos
