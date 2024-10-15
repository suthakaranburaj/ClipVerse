import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import './userPlaylist.scss';

import image1 from '../../../assets/video1_thumbnail.jpg';
import usePlaylistStore from '../../../store/usePlaylistStore';
import userStore from '../../../store/userStore';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'; // Example icons 

function UserPlaylist() {

    // const [isDelete,setIsDelete] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(null);

    const { getUserPlaylists, userPlaylists ,deletePlaylist } = usePlaylistStore();
    const { user } = userStore();
    const { playlistId } = useParams(); 
    const location = useLocation(); 


    const userId = user?._id;

    useEffect(() => {
        const fetchData = async () => {
            await getUserPlaylists(userId);
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
    return (
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
                                    <FontAwesomeIcon 
                                        icon={faEllipsisVertical} 
                                        className='channelCommentsSection221' 
                                        onClick={() =>handleDeleteDropDown(playlist?._id)}
                                    />
                                    {isDropdownOpen === playlist?._id &&(
                                        <div className='deleteContainer'>
                                            <button 
                                                className='deleteContainer1'
                                                onClick={()=>handleDelete(playlist?._id)}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </>
            )}
            {/* The nested route will be rendered here (only if viewing a playlist) */}
            {isViewingPlaylist && <Outlet />}
        </div>
    );
}

export default UserPlaylist;
