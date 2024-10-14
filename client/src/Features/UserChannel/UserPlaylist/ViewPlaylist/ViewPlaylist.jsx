import React from 'react'

import './ViewPlaylist.scss'

import useVideosStore from '../../../../store/useVideosStore'
import usePlaylistStore from '../../../../store/usePlaylistStore'

function ViewPlaylist() {

    const {playlist,getPlaylistById} = usePlaylistStore();
    const {getVideoById, video} =usePlaylistStore();
    
    return (
        <div className='ViewPlaylist'>
            <p className='ViewPlaylist1'>Playlist Videos</p>
            <div className='ViewPlaylist2'>
                <div className='ViewPlaylist21'>

                </div>
            </div>
        </div>
    )
}

export default ViewPlaylist
