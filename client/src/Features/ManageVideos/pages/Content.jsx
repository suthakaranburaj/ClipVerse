import React, { useEffect } from 'react';

import './Content.scss';
import useStore from '../../../store/userStore';

import image1 from '../../../assets/user_coverImage.jpg'
import userStatsStore from '../../../store/userStatsStore';
import useCommentsStore from '../../../store/useCommentsStore'
import useLikesStore from '../../../store/useLikesStore';
function Content() {
    const {getChannelVideos ,isLoading,error,videos} = userStatsStore();
    const {getAllVideosComments,commentOfVideoCount} = useCommentsStore();
    const {getLikesVideos,likesOfVideoCount}=useLikesStore();
    const {user}=useStore();
    // Fetch videos when the component mounts
    useEffect(() => {
        const fetchVideosAndComments = async () => {
            try {
                await getChannelVideos();
                // console.log("helo")
                await getAllVideosComments();
                await getLikesVideos();
            } catch (error) {
                console.error("Error fetching videos or comments:", error);
            }
        };

        fetchVideosAndComments();
    }, [getChannelVideos, user.userId,getAllVideosComments,getLikesVideos]);

    const getCommentsCountForVideo = (videoId) => {
        const matchedVideo = commentOfVideoCount?.find(item => item.video === videoId);
        return matchedVideo ? matchedVideo.commentsCount : 0;
    };
    const getLikesCountForVideo = (videoId) => {
        const matchedVideo = likesOfVideoCount?.find(item => item.video === videoId);
        return matchedVideo ? matchedVideo.likesCount : 0;
    };
    return (
        <>
            <div className='contentContainer'>
                <div className='level-1'>
                    <div className='head'>
                        <div>Channel content</div>
                    </div>
                    <div className='bttns'>
                        <div className='pressables'><button>Videos</button></div>
                        <div className='pressables'><button>Shorts</button></div>
                        <div className='pressables'><button>Live</button></div>
                        <div className='pressables'><button>Post</button></div>
                        <div className='pressables'><button>Playlists</button></div>
                        <div className='pressables'><button>Podcasts</button></div>
                        <div className='pressables'><button>Promotions</button></div>
                    </div>
                </div>
                <div className="divider"></div>

                {/* Loading and Error States */}
                {isLoading && <p>Loading videos...</p>}
                {error && <p>Error: {error}</p>}

                <div className='level-2'>
                    <div className='label'>Filter</div>
                </div>
                <div className='level-3'>
                    <div className='part-1'>
                        <div className='box'></div>
                        <div className='label'>videos</div>
                    </div>
                    <div className='part-2'>
                        <div>Visibility</div>
                        <div>Duration</div>
                        <div>Date ↓</div>
                    </div>
                    <div className='part-3'>
                        <div>Views</div>
                        <div>Comments</div>
                        <div>Likes</div>
                    </div>
                </div>
                <div className="divider"></div>

                <div className='level-4'>
                    {videos?.length > 0 ? (
                        videos.map((video) => (
                            <React.Fragment key={video?._id}>
                                <div className='videoContainer'>
                                    <img src={video?.thumbnail ? video?.thumbnail : image1} alt="Thumbnail" />
                                    <div className='videoTitleDescriptionContainer'>
                                        <p>{video?.title ? video?.title : 'Title here'}</p>
                                        <p>{video?.description ? video?.description : 'Description here'}</p>
                                    </div>
                                    <div className='videoStatsContainer'>
                                        <div className='statsPart1'>
                                            <p>{video?.visibility}</p>
                                            <p>{video?.duration}</p>
                                            <div>
                                                <p>{new Date(video?.createdAt).toLocaleDateString()}</p>
                                                <p>{video?.isPublished ? "Published" : "Unpublished"}</p>
                                            </div>
                                        </div>
                                        <div className='statsPart2'>
                                            <p>{video?.views}</p>
                                            {/* Display the comments count for the matching video */}
                                            <p>{getCommentsCountForVideo(video?._id)}</p>
                                            <p>{getLikesCountForVideo(video?._id)}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="divider"></div>
                            </React.Fragment>
                        ))
                    ) : (
                        <p>No videos available.</p>
                    )}
                </div>
            </div>
        </>
    );
}

export default Content;
