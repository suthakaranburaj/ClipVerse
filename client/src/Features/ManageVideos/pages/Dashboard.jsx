import React, { useState } from 'react';
import { useEffect } from 'react';


import './Dashboard.scss';
import userStatsStore from '../../../store/userStatsStore';
import useStore from '../../../store/userStore'



function Dashboard() {
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const {getChannelStats, views, likes, commentsCount,totalSubscribers,}=userStatsStore();
    // Dropdown state

    useEffect(() => {
        const fetchVideos = async () => {

            try {
                await getChannelStats();
                // Process the fetched videos here
            } catch (error) {
                console.error("Error fetching stats:", error);
            }
            };
            fetchVideos();
        
    }, [getChannelStats]);
    const handleUploadClick = () => {
        setModalVisible(true);  // Open the modal
    };

    const handleCloseModal = () => {
        setModalVisible(false);  // Close the modal
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedVideo(file);
        // Further processing can be done with the file, like uploading it to a server
    };
    return (
        <>
            <div className='wrapper'>
                <div className='header'>Channel dashboard</div>
                <div className='sub-wrapper'>
                    <div className='col-1'>
                        <div className='container-upload'><button className='bttn' onClick={handleUploadClick}>Upload videos</button></div>
                    </div>
                    
                    <div className='col-2'>
                        <div className='container-subs'>
                            <div className='subs-label'>Current subscribers</div>
                            <div className='subs-count'>{totalSubscribers}</div>
                            
                        </div>
                        <div className="dropdown-divider"></div>
                        <div className='container-details'>
                            <div className='label'>Total Views</div>
                            <div className='count'>{views}</div>
                            
                        </div>
                        <div className="dropdown-divider"></div>
                        <div className='container-details'>
                            <div className='label'>Total Likes</div>
                            <div className='count'>{likes}</div>
                            
                        </div>
                        <div className="dropdown-divider"></div>
                        <div className='container-details'>
                            <div className='label'>Total Comments</div>
                            <div className='count'>{commentsCount}</div>
                          
                        </div>
                        
                    </div>
                    <div className='col-3'>

                    </div>
                </div>
                {isModalVisible && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2 className='label'>Select a Video to Upload</h2>
                        <div className="dropdown-divider"></div>
                        <div className='upload'>
                            <input type="file" accept="video/*" onChange={handleFileChange} />
                            <button className="btn-upload" onClick={handleCloseModal}>Close</button>
                        </div>

                    </div>
                </div>
            )}

            </div>
        </>
    )
}

export default Dashboard
