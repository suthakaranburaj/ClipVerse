import React, { useEffect, useState } from 'react';
import './UserVideos.scss';
import userStatsStore from '../../../store/userStatsStore';
import usePlaylistStore from '../../../store/usePlaylistStore';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import useVideosStore from '../../../store/useVideosStore';
import useStore from '../../../store/userStore';

function UserVideos() {
    const { getChannelVideos, channelVideos } = useVideosStore();
    const {user} = useStore();
    const 
    {
        createPlaylist,
        playlist,
        getPlaylist,
        addVideosToPlaylist
    } = usePlaylistStore();

    const { register, handleSubmit, reset,setValue } = useForm();

    const[isCreate,setIsCreate]=useState(false);
    const [isCreatePlaylistActive, setIsCreatePlaylistActive] = useState(false);
    const [selectedVideos, setSelectedVideos] = useState([]);
    const [isEditMode, setIsEditMode] = useState(false);
    const [currentPlaylist, setCurrentPlaylist] = useState(null);

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
        };
        fetchData();
    }, []);

// src/components/UserVideos/UserVideos.jsx

    
    const onSubmit = async (data) => {
        try {
            const videos = selectedVideos;
            console.log(videos)
            if(isEditMode){
                console.log(videos)
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
            navigate(`/userchannel/${channelId}/playlist/${playlist?._id}`)
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

    return (
        <>
        <div className='userVideosContainer'>
            <div className='container'>
                <p className='container1'>Videos</p>
                {user?._id === channelId &&(
                    <p className='container2' onClick={handleCreatePlaylist}>
                    {isCreatePlaylistActive ? 'Cancel Playlist' : 'Create Playlist'}
                </p>
                )}
                <div className='container3'>
                    {channelVideos.map((video) => (
                        <div
                            key={video?._id}
                            className={`container31 ${
                                isCreatePlaylistActive && selectedVideos.includes(video._id)
                                    ? 'selectedVideo'
                                    : ''
                            }`}
                            onClick={() =>
                                isCreatePlaylistActive && handleCheckboxChange(video._id)
                            }
                        >
                            <div className='container311'>
                                <img src={video?.thumbnail} alt="" className='' />
                            </div>
                            <div className='container312'>
                                <p className='container3121'>{video?.title}</p>
                                <p className='container3122'>{video?.description}</p>
                                <p className='container3123'>{video?.views}</p>
                            </div>
                        </div>
                    ))}
                </div>
                {isCreatePlaylistActive && !isEditMode && (
                    <button
                    onClick={handleCreateChange}
                    >
                        Create
                    </button>
                )}
            </div>
        </div>
        {isCreate && !isEditMode && (
            <div className='createPlaylistForm'>
                <p>Playlist</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='createPlaylistForm1'>
                        <label>
                            Name
                        </label>
                        <input 
                            type="text" 
                            {...register('name')}
                        />
                    </div>
                    <div className='createPlaylistForm2'>
                        <label>
                            Description
                        </label>
                        <input 
                            type="text" 
                            {...register('description')}
                        />
                    </div>
                    <div className='createPlaylistForm3'>
                        <button 
                            type='submit'
                            className='createPlaylistForm31'
                        >
                            Create
                        </button>
                        <button
                            onClick={handleCancelForm}
                            className='createPlaylistForm32'
                        >
                            Cancel
                        </button>
                    </div>                    
                </form>
            </div>
        )}
        {isEditMode && (
            <div className='updatePlaylistForm'>
                <button onClick={onSubmit}>
                    Update Videos
                </button>
            </div>
        )}
        </>
    );
}

export default UserVideos;
