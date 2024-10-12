import React from 'react'
import { useEffect } from 'react'
import './userPlaylist.scss'

import image1 from '../../../assets/video1_thumbnail.jpg'
import usePlaylistStore from '../../../store/usePlaylistStore'
import userStore from '../../../store/userStore'

function UserPlaylist() {

    const {getUserPlaylists, userPlaylists} = usePlaylistStore();
    const {user}=userStore();

    const userId = user?._id;


    useEffect(()=>{
        const fetchData = async()=>{
            await getUserPlaylists(userId);
        }
        fetchData();
    },[])


    return (
        <div className='userPlaylistContainer'>
            <p>Created Playlists</p>
            {userPlaylists.map((playlist)=>(
                <div key={playlist?._id} className='playlistContainer'>
                    <img src={image1} alt="" />
                    <div>
                        <p>{playlist?.name}</p>
                        <p>{playlist?.description}</p>
                        <button>View full playlist</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default UserPlaylist
