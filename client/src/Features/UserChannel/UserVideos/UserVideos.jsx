import React, { useEffect, useState } from 'react';
import './UserVideos.scss';
import userStatsStore from '../../../store/userStatsStore';
import usePlaylistStore from '../../../store/usePlaylistStore';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

function UserVideos() {
    const { getChannelVideos, videos: channelVideos } = userStatsStore();
    const {createPlaylist, playlist,getPlaylist} = usePlaylistStore();
    const [isCreatePlaylistActive, setIsCreatePlaylistActive] = useState(false);
    const [selectedVideos, setSelectedVideos] = useState([]);
    const {channelId}=useParams();
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

    const[isCreate,setIsCreate]=useState(false);
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
            await getChannelVideos();
        };
        fetchData();
    }, []);

    const { register, handleSubmit, reset } = useForm();
// src/components/UserVideos/UserVideos.jsx

    const navigate = useNavigate();
    const onSubmit = async (data) => {
        const videos = selectedVideos;
        try {
            console.log(data.name);
            console.log(data.description);
            // console.log(videos);
            await createPlaylist({ name: data.name, description: data.description, videos: videos }); // Correct
            reset();
            handleCancelForm();
            handleCreatePlaylist();
            alert("Playlist created successfully!!")
            navigate(`/userchannel/${channelId}/playlist/${playlist?._id}`)
        } catch (error) {
            console.error("Error while creating playlist !!");
        }
    };

    

    return (
        <>
        <div className='userVideosContainer'>
            <div className='container'>
                <p className='container1'>Videos</p>
                <p className='container2' onClick={handleCreatePlaylist}>
                    {isCreatePlaylistActive ? 'Cancel Playlist' : 'Create Playlist'}
                </p>
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
                {isCreatePlaylistActive &&(
                    <button
                    onClick={handleCreateChange}
                    >
                        Create
                    </button>
                )}
            </div>
        </div>
        {isCreate &&(
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
        </>
    );
}

export default UserVideos;
