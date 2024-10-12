import React from 'react'

import './UserVideos.scss'

import userStatsStore from '../../../store/userStatsStore'

function UserVideos() {

    const {getChannelVideos} = userStatsStore();
    return (
        <div className='userVideosContainer'>
            <div>
                <p>Videos</p>
                <p>Create Playlist</p>
            </div>
        </div>
    )
}

export default UserVideos
