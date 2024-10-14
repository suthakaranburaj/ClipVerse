import React, { useEffect } from 'react';
import './ViewPlaylist.scss';
import useVideosStore from '../../../../store/useVideosStore';
import usePlaylistStore from '../../../../store/usePlaylistStore';
import { useParams } from 'react-router-dom';

function ViewPlaylist() {
    const { playlist, getPlaylistById } = usePlaylistStore();
    const { getVideoById, videos } = useVideosStore();
    const { playlistId } = useParams();

    useEffect(() => {
        getPlaylistById(playlistId);
    }, [playlistId, getPlaylistById]);

    useEffect(() => {
        if (playlist && playlist.videos && playlist.videos.length > 0) {
            playlist.videos.forEach(videoId => {
                getVideoById(videoId); // Fetch each video's details
            });
        }
    }, [playlist, getVideoById]);

    return (
        <div className='ViewPlaylist'>
            <p className='ViewPlaylist1'>Playlist Videos</p>
            <div className='ViewPlaylist2'>
                <div className='ViewPlaylist21'>
                    {/* Map over playlist video IDs and match with the fetched videos */}
                    {playlist && playlist.videos && playlist.videos.length > 0 ? (
                        playlist.videos.map(videoId => {
                            const video = videos.find(v => v._id === videoId); // Find the correct video from the videos array
                            return (
                                video && (
                                    <div key={videoId} className='video-item'>
                                        <img src={video.thumbnail} alt={video.title} className='video-thumbnail' />
                                        <p className='video-title'>{video.title}</p>
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
