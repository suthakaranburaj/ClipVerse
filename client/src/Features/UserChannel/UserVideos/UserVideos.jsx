import React, { useEffect, useState } from 'react';
import './UserVideos.scss';
import usePlaylistStore from '../../../store/usePlaylistStore';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import useVideosStore from '../../../store/useVideosStore';
import useStore from '../../../store/userStore';
import Loader from '../../../components/Loader/Loader';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'; // Example icons 

function UserVideos() {
    const { 
        getChannelVideos, 
        channelVideos,
        isLoading:videosLoading,
    } = useVideosStore();
    const {user} = useStore();
    const 
    {
        createPlaylist,
        addVideosToPlaylist
    } = usePlaylistStore();

    const { register, handleSubmit, reset,setValue } = useForm();

    const[isCreate,setIsCreate]=useState(false);
    const [isCreatePlaylistActive, setIsCreatePlaylistActive] = useState(false);
    const [selectedVideos, setSelectedVideos] = useState([]);
    const [isEditMode, setIsEditMode] = useState(false);
    const [currentPlaylist, setCurrentPlaylist] = useState(null);
    const [minLoading,setMinLoading]=useState(true)

    const {channelId}=useParams();

    const location = useLocation();
    const navigate = useNavigate();
    // console.log(playlist?._id);

    const handleCreatePlaylist = () => {
        setIsCreatePlaylistActive((prev) => !prev);
        if (isCreatePlaylistActive) {
            // console.log(isCreatePlaylistActive)
            setSelectedVideos([]);
        }
    };

    const handleCheckboxChange = (videoId) => {
        setSelectedVideos((prevSelected) => {
            if (prevSelected.includes(videoId)) {
                return prevSelected.filter((id) => id !== videoId);
            } else {
                return [...prevSelected, videoId];
            }
        });
    };


    const handleCreateChange = () => {
        // console.log('Before toggle:', isCreate);
        setIsCreate((prev) => !prev);
        // console.log('After toggle:', !isCreate);
    };
    const handleCancelForm = () => {
        setIsCreate(false);
    };

    
    useEffect(() => {
        const fetchData = async () => {
            await getChannelVideos(channelId);

            setTimeout(()=>{
                setMinLoading(false);
            },1000);
            // setMinLoading(true);
        };
        fetchData();
        
    }, [channelId]);

// src/components/UserVideos/UserVideos.jsx

    
    const onSubmit = async (data) => {
        try {
            const videos = selectedVideos;
            // console.log(videos)
            if(isEditMode){
                // console.log(videos)
                await addVideosToPlaylist(currentPlaylist?._id,{videoIds:videos});
                alert("Playlist updated successfully!");
            }
            else{
                await createPlaylist({ name: data.name, description: data.description, videos: videos }); // Correct
                alert("Playlist created successfully!");
            }
            reset();
            // handleCancelForm();
            // handleCreatePlaylist();
            setIsCreatePlaylistActive(false);
            navigate(`/userchannel/${channelId}/playlist`)
        } catch (error) {
            console.error("Error while creating playlist !!");
        }
    };

    useEffect(()=>{
        if(location?.state?.isEditMode){
            setIsCreatePlaylistActive(true);
            setIsEditMode(true);
            setCurrentPlaylist(location.state.playlist);
            setValue('name',location.state.playlist.name);
            setValue('description',location.state.playlist.description);
            setSelectedVideos(location.state.playlist.videos || []);
        }
    },[location.state,setValue]);

    if(videosLoading) return<div><Loader/></div>

    dayjs.extend(relativeTime);

    return (
        <>
        <div className='userVideosContainer'>
            <div className='container'>
                <p className='container1'>Videos</p>
                {user?._id === channelId && channelVideos?.length>0 &&(
                    <p className='container2 flex' onClick={handleCreatePlaylist}>
                    {isCreatePlaylistActive ? 'Cancel Playlist' : 'Create Playlist'}
                    {isCreatePlaylistActive &&(<p className='text-red-500 ml-5'>Select Videos</p>)}
                </p>
                )}
                <div className='container3'>
                {channelVideos.map((video) => {
                    const VideoContent = (
                        <div
                            className={`container31 ${
                                isCreatePlaylistActive && selectedVideos.includes(video._id)
                                    ? 'selectedVideo'
                                    : ''
                            }`}
                            onClick={() => isCreatePlaylistActive && handleCheckboxChange(video._id)}
                        >
                            <div className='container311'>
                                <img src={video?.thumbnail} alt="" className='' />
                            </div>
                            <div className='container312'>
                                <div>
                                    <p className='container3121'>{video?.title}</p>
                                    <div className='container3122'>
                                        <p className=''>{video?.views} views</p>
                                        <p className='dot'> • </p>
                                        <p className='time'> {dayjs(video?.createdAt).fromNow()}</p>
                                    </div>
                                </div>
                                <div>
                                    <FontAwesomeIcon 
                                        icon={faEllipsisVertical} 
                                        className='channelCommentsSection221 ml-2' 
                                    />
                                </div>
                            </div>
                        </div>
                    );

                    return isCreatePlaylistActive ? (
                        <div key={video._id}>
                            {VideoContent}
                        </div>
                    ) : (
                        <Link key={video._id} to={`/watchvideo?videoId=${encodeURIComponent(video._id)}`}>
                            {VideoContent}
                        </Link>
                    );
                })}

                </div>
                {isCreatePlaylistActive && !isEditMode   && (
                    
                    <button
                        onClick={handleCreateChange}
                        className='mainCreateButton'
                    >
                        Create
                    </button>
                )}
            </div>
        </div>
        {isCreate && !isEditMode && (
            <div className='createPlaylistForm'>
                
                <form onSubmit={handleSubmit(onSubmit)} className='createPlaylistForm1'>
                    <p>Playlist</p>
                    <div className='createPlaylistForm11'>
                        <label>
                            Name
                        </label>
                        <input 
                            type="text" 
                            {...register('name',{ maxLength: 30 })}
                            required
                            maxLength={30}
                        />
                    </div>
                    <div className='createPlaylistForm12'>
                        <label>
                            Description
                        </label>
                        <input 
                            type="text" 
                            {...register('description',{ maxLength: 75 })}
                            required
                            maxLength={75}
                        />
                    </div>
                    <div className='createPlaylistForm13'>
                        <button 
                            type='submit'
                            className='createPlaylistForm131'
                        >
                            Create
                        </button>
                        <button
                            type='button' 
                            onClick={handleCancelForm}
                            className='createPlaylistForm132'
                        >
                            Cancel
                        </button>
                    </div>                    
                </form>
            </div>
        )}
        {isEditMode && (
            <div className=''>
                <button 
                onClick={onSubmit}
                className='updatePlaylistForm'
                >
                    Update Videos
                </button>
            </div>
        )}
        {channelVideos?.length === 0 &&(
            <div className='noVideosHeader'><p className='text-2xl text-gray-500'>No Videos found</p></div>
        )}
        </>
    );
}

export default UserVideos;
