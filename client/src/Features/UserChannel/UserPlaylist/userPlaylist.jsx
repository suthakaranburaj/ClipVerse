import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import './userPlaylist.scss';

import image1 from '../../../assets/video1_thumbnail.jpg';
import usePlaylistStore from '../../../store/usePlaylistStore';
import userStore from '../../../store/userStore';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'; // Example icons 
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function UserPlaylist() {

    // const [isDelete,setIsDelete] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(null);
    const [isEdit, setIsEdit] = useState(false);
    const [currentPlaylist, setCurrentPlaylist] = useState(null);
    const {reset, handleSubmit, register} = useForm();
    const navigate = useNavigate();

    const { 
        getUserPlaylists, 
        userPlaylists,
        deletePlaylist,
        updatePlaylist,
    } = usePlaylistStore();

    const { user } = userStore();
    const { playlistId } = useParams(); 
    const location = useLocation(); 


    const {channelId} = useParams();

    useEffect(() => {
        const fetchData = async () => {
            await getUserPlaylists(channelId);
        };
        fetchData();
    }, [userPlaylists]);

    const isViewingPlaylist = location.pathname.includes('playlist') && playlistId;
    // console.log(playlistId)
    // console.log(location)

    const handleDeleteDropDown = (playlistId)=>{
        setIsDropdownOpen((prev)=> (prev === playlistId ? null : playlistId));
    }

    const handleDelete = async(playlistId)=>{
        await deletePlaylist(playlistId);
        // setIsDropdownOpen(null);
    }

    const handlePlaylistEdit = (playlist)=>{
        setIsEdit(true);
        setCurrentPlaylist(playlist);
    }

    const handleCloseEdit = ()=>{
        setIsEdit(false);
        reset();
    }

    const handlePlaylistAddVideos=(playlist)=>{
        navigate(`/userchannel/${user._id}/videos`, { 
            state: { isEditMode: true, playlist} 
        });
    }

    const onSubmit = async(data)=>{
        try {
            await updatePlaylist(currentPlaylist?._id,{name:data.name,description:data.description});
            reset();
            setIsEdit(false);
            setIsDropdownOpen(null);
            alert("Playlist Updated Successfully!")
        } catch (error) {
            console.error("Error while updating playlist !!")
        }
    }
    return (
        <>
        <div className="userPlaylistContainer">
            {!isViewingPlaylist && (
                <>
                    <p>Created Playlists</p>
                    {userPlaylists.map((playlist) => (
                        <div key={playlist?._id} className="playlistContainer">
                            <img src={image1} alt="" className='playlistContainer1'/>
                            <div className='playlistContainer2'>
                                <div className='playlistContainer21'>
                                    <p className='playlistContainer211'>{playlist?.name}</p>
                                    <p className='playlistContainer212'>{playlist?.description}</p>
                                    <Link to={`${playlist?._id}`}>
                                        <button
                                            
                                        >
                                            View full playlist
                                        </button>
                                    </Link>
                                </div >
                                <div className='playlistContainer22'>
                                    {channelId === user?._id && (
                                        <FontAwesomeIcon 
                                        icon={faEllipsisVertical} 
                                        className='channelCommentsSection221' 
                                        onClick={() =>handleDeleteDropDown(playlist?._id)}
                                        />
                                    )}
                                    {isDropdownOpen === playlist?._id &&(
                                        <div className='deleteContainer'>
                                            <button 
                                                className='deleteContainer1'
                                                onClick={()=>handleDelete(playlist?._id)}
                                            >
                                                Delete
                                            </button>
                                            <button
                                                className='deleteContainer2'
                                                onClick={()=>handlePlaylistEdit(playlist)}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                className='deleteContainer3'
                                                onClick={()=>handlePlaylistAddVideos(playlist)}
                                            >
                                                Add
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </>
            )}
            {isViewingPlaylist && <Outlet />}
            {isEdit && (
                <div className='editPlaylistContainer'>
                    <form onSubmit={handleSubmit(onSubmit)} className='editPlaylistContainer1'>
                        {/* <div className='editPlaylistContainer12'> */}
                        <p className=''>Edit Playlist</p>
                        <label className='editPlaylistContainer11'>
                            Name
                        </label>
                        <input 
                            type="text" 
                            {...register('name')}
                            defaultValue={currentPlaylist.name}
                            className='editPlaylistContainer12'
                        />
                        <lable className='editPlaylistContainer13'>
                            Description
                        </lable>
                        <input 
                            type="text" 
                            {...register('description')}
                            defaultValue={currentPlaylist.description}
                            className='editPlaylistContainer14'
                        />
                        {/* </div> */}
                        <div className="formButtons">
                            <button type="submit">Update</button>
                            <button type="button" onClick={handleCloseEdit}>Close</button>
                        </div>
                    </form>
                </div>
            )}
            
        </div>
        {userPlaylists?.length === 0 &&(
            <div className='noPlaylistHeader'><p className='headerFont'>No Playlist found</p></div>
        )}
        </>
    );
}

export default UserPlaylist;
