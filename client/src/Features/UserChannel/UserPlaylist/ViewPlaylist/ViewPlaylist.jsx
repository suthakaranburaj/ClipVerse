import React, { useEffect } from 'react';
import './ViewPlaylist.scss';
import useVideosStore from '../../../../store/useVideosStore';
import usePlaylistStore from '../../../../store/usePlaylistStore';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

function ViewPlaylist() {
    const { playlist, getPlaylistById, removeVideoFromPlaylist } = usePlaylistStore();
    const { getVideoById, videos:videosStore } = useVideosStore();
    const { playlistId } = useParams();

    const [isDropdownOpen, setIsDropdownOpen] = useState(null);

    const handleDeleteDropDown = (videoId)=>{
        setIsDropdownOpen((prev)=> (prev === videoId ? null : videoId));
    }

    const handleDelete = async(videoId,playlistId)=>{
        await removeVideoFromPlaylist(videoId,playlistId);
        getPlaylistById(playlistId);
    }

    useEffect(() => {
        getPlaylistById(playlistId);
    }, []);

    useEffect(() => {
        if (playlist && playlist.videos && playlist.videos.length > 0) {
            playlist.videos.forEach(videoId => {
                getVideoById(videoId); // Fetch each video's details
            });
        }
    }, []);

    dayjs.extend(relativeTime);
    return (
        <div className='ViewPlaylist'>
            <p className='ViewPlaylist1'>Playlist Videos</p>
            <div className='ViewPlaylist2'>
                <div className='ViewPlaylist21'>
                    {/* Map over playlist video IDs and match with the fetched videos */}
                    {playlist && playlist.videos && playlist.videos.length > 0 ? (
                        playlist.videos.map(videoId => {
                            const video = videosStore.find(v => v._id === videoId); // Find the correct video from the videos array
                            return (
                                video && (
                                    <div key={videoId} className='video-item'>
                                            {/* <div className='video-item1'> */}
                                            <Link to={`/watchvideo?videoId=${encodeURIComponent(video?._id)}`} key={video?._id} >
                                                <div  className='video-item1'>
                                                    <img src={video.thumbnail} alt={video.title} className='video-item11' />
                                                </div>
                                            </Link>
                                            <div className='video-item2'>
                                                <div className='video-item21'>
                                                    <p className='video-item211'>{video.title}</p>
                                                    <div className='video-item212'>
                                                        <p className='views'>{video?.views} views</p>
                                                        <p className='dot'> • </p>
                                                        <p className='time'> {dayjs(video?.createdAt).fromNow()}</p>
                                                    </div>
                                                </div>
                                                <div className='video-item22'>
                                                    <FontAwesomeIcon 
                                                        icon={faEllipsisVertical} 
                                                        className='video-item221' 
                                                        onClick={() =>handleDeleteDropDown(video?._id)}
                                                    />
                                                    {isDropdownOpen === video?._id &&(
                                                        <div className='deleteContainer'>
                                                            <button 
                                                                className='deleteContainer1'
                                                                onClick={()=>handleDelete(video?._id,playlist?._id)}
                                                            >
                                                                Remove
                                                            </button>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    
                                )
                            );
                        })
                    ) : (
                        <p>No videos found in this playlist.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ViewPlaylist;
