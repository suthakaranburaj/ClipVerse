import React, { useEffect } from 'react';
import useVideosStore from '../../store/useVideosStore';
import './WatchHistory.scss'
import Loader from '../../components/Loader/Loader';
import { Link } from 'react-router-dom';

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
<div className="watchHistoryContainer">
    <h2 className='watchHistoryContainer1'>Your Watch History</h2>
    {watchHistorys.length === 0 ? (
    <p className='watchHistoryContainer2'>No videos in watch history yet.</p>
    ) : (
    <div className="watchHistoryContainer3">
        {watchHistorys.map((video) => (
        <Link key={video?._id} to={`/watchvideo?videoId=${encodeURIComponent(video?._id)}`} >
            <div className="watchHistoryContainer31">
                <div className='watchHistoryContainer311'>
                    <img 
                    src={video.thumbnail || 'placeholder.jpg'} 
                    alt={video.title} 
                    className="watchHistoryContainer3111"
                    />
                </div>
                <div className='watchHistoryContainer312'>
                    <div className='watchHistoryContainer3121'>
                        <img src={video?.owner?.avatar} alt="" />
                    </div>
                    <div className="watchHistoryContainer3122">
                        <div className='watchHistoryContainer31221'>
                            <h3>{video.title}</h3>
                            <Link to={`/${video?.owner?.username}/${video?.owner?._id}`}>
                                <p>{video.owner?.username}</p>
                            </Link>
                        </div>
                        <div className='watchHistoryContainer31222'>
                            <p className='views'>{video?.views} views</p>
                            <p className='dot'>•</p>
                            <p className='time'>Watched on: {new Date(video.createdAt).toLocaleDateString()}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
        ))}
    </div>
    )}
</div>
);
}

export default WatchHistory;
