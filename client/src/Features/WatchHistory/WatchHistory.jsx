import React, { useEffect } from 'react';
import useVideosStore from '../../store/useVideosStore';
import './WatchHistory.scss'
import Loader from '../../components/Loader/Loader';

function WatchHistory() {
const { watchHistorys,getuserWatchHistory, isLoading:videoStoreLoading, error } = useVideosStore();
console.log(watchHistorys)
useEffect(() => {
    const fetchWatchHistory = async () => {
        await getuserWatchHistory();
    };

    fetchWatchHistory(); // Call the async function when component mounts
}, []); // Empty dependency array ensures this runs only once on mo

if (videoStoreLoading) return <div><Loader/></div>;
if (error) return <div>Error: {error}</div>;

return (
<div className="watch-history-container">
    <h2>Your Watch History</h2>
    {watchHistorys.length === 0 ? (
    <p>No videos in watch history yet.</p>
    ) : (
    <div className="watch-history-grid">
        {watchHistorys.map((video) => (
        <div key={video._id} className="watch-history-item">
            <img 
            src={video.thumbnail || 'placeholder.jpg'} 
            alt={video.title} 
            className="thumbnail"
            />
            <div className="video-details">
            <h3>{video.title}</h3>
            <p>{video.views} views</p>
            <p>Watched on: {new Date(video.createdAt).toLocaleDateString()}</p>
            </div>
        </div>
        ))}
    </div>
    )}
</div>
);
}

export default WatchHistory;
