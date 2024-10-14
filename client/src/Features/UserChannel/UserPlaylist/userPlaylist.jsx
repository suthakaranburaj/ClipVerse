import React, { useEffect } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import './userPlaylist.scss';

import image1 from '../../../assets/video1_thumbnail.jpg';
import usePlaylistStore from '../../../store/usePlaylistStore';
import userStore from '../../../store/userStore';

function UserPlaylist() {
    const { getUserPlaylists, userPlaylists } = usePlaylistStore();
    const { user } = userStore();
    const { playlistId } = useParams(); 
    const location = useLocation(); 

    const userId = user?._id;

    useEffect(() => {
        const fetchData = async () => {
            await getUserPlaylists(userId);
        };
        fetchData();
    }, []);

    const isViewingPlaylist = location.pathname.includes('playlist') && playlistId;
    console.log(playlistId)
    console.log(location)

    return (
        <div className="userPlaylistContainer">
            {!isViewingPlaylist && (
                <>
                    <p>Created Playlists</p>
                    {userPlaylists.map((playlist) => (
                        <div key={playlist?._id} className="playlistContainer">
                            <img src={image1} alt="" />
                            <div>
                                <p>{playlist?.name}</p>
                                <p>{playlist?.description}</p>
                                <Link to={`${playlist?._id}`}>
                                    <button>View full playlist</button>
                                </Link>
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
