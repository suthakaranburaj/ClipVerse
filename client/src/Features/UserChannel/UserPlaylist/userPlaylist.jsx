import React from 'react'
import './userPlaylist.scss'
import image1 from '../../../assets/video1_thumbnail.jpg'
function userPlaylist() {
    return (
        <div className='userPlaylistContainer'>
            <p>Created Playlists</p>
            <div className='playlistContainer'>
                <img src={image1} alt="" />
                <div>

                </div>
            </div>
        </div>
    )
}

export default userPlaylist
