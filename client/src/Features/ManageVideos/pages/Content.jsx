import React, { useEffect, useState } from 'react';

import './Content.scss';
import useStore from '../../../store/userStore';

import image1 from '../../../assets/user_coverImage.jpg'
import userStatsStore from '../../../store/userStatsStore';
import useCommentsStore from '../../../store/useCommentsStore'
import useLikesStore from '../../../store/useLikesStore';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';

import useVideosStore from '../../../store/useVideosStore';

function Content() {
    const {getChannelVideos ,isLoading,error,videos} = userStatsStore();
    const {getAllVideosComments,commentsOfVideoCount} = useCommentsStore();
    const {getLikesVideos,likesOfVideoCount}=useLikesStore();
    const {user}=useStore();
    const {deleteVideo, updateVideo, getAllVideos}=useVideosStore();

    const [isFormOpen, setIsFormOpen] = useState(false);
    const [currentVideo, setCurrentVideo] = useState(null);

    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        const fetchVideosAndComments = async () => {
            try {
                await getChannelVideos();
                await getAllVideosComments();
                await getLikesVideos();
            } catch (error) {
                console.error("Error fetching videos or comments:", error);
            }
        };

        fetchVideosAndComments();
    }, [getChannelVideos, user?.userId,getAllVideosComments,getLikesVideos]);


    const getCommentsCountForVideo = (videoId) => {
        const matchedVideo = commentsOfVideoCount?.find(item => item.videoId=== videoId);
        return matchedVideo ? matchedVideo.commentsCount : 0;
    };
    const getLikesCountForVideo = (videoId) => {
        const matchedVideo = likesOfVideoCount?.find(item => item.video === videoId);
        return matchedVideo ? matchedVideo.likesCount : 0;
    };
    const handleDelete = async (videoId) => {
        try {
            await deleteVideo(videoId);
            await getChannelVideos();
            await getAllVideos();
        } catch (error) {
            console.error("Error deleting video:", error);
        }
    };
    

    const handleEdit = (video) => {
        setCurrentVideo(video);
        setIsFormOpen(true);
    };

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append('title',data.title);
        formData.append('description',data.description);
        formData.append('thumbnail',data.thumbnail[0]);
        formData.append('isPublished', data.isPublished);
        try {
            await updateVideo(currentVideo._id,formData);
            await getChannelVideos();
            setIsFormOpen(false);
            reset();
        } catch (error) {
            console.error("Error updating videos:",error);
        }
    };

    const handleCloseForm = () => {
        setIsFormOpen(false);
        reset(); // Reset the form fields
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
                        {/* <div className='box'></div> */}
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
                        videos?.map((video) => (
                            <React.Fragment key={video?._id}>
                                <div className='videoContainer'>
                                    <div className='videoContainer1'>
                                        <img src={video?.thumbnail ? video?.thumbnail : image1} alt="Thumbnail" />
                                    </div>
                                    <div className='videoTitleDescriptionContainer'>
                                        <p>{video?.title ? video?.title : 'Title here'}</p>
                                        <p>{video?.description ? video?.description : 'Description here'}</p>
                                    </div>
                                    <div className='videoStatsContainer'>
                                        <div className='statsPart1'>
                                        <div>
                                            {video?.isPublished ? (
                                                <p>Published</p>
                                            ) : (<p>Not Published</p>)}
                                        </div>
                                            <p>{video?.duration}</p>
                                            <div>
                                                <p>{new Date(video?.createdAt).toLocaleDateString()}</p>
                                                {/* <p>{video?.isPublished ? "Published" : "Unpublished"}</p> */}
                                            </div>
                                        </div>
                                        <div className='statsPart2'>
                                            <p>{video?.views}</p>
                                            {/* Display the comments count for the matching video */}
                                            <p>{getCommentsCountForVideo(video?._id)}</p>
                                            <p>{getLikesCountForVideo(video?._id)}</p>
                                            
                                        </div>
                                    </div>
                                    <FontAwesomeIcon
                                        icon={faPen}
                                        className='text-green-600 mr-3'
                                        onClick={() => handleEdit(video)}
                                    />
                                    <FontAwesomeIcon 
                                        icon={faTrash} className='text-red-600 mr-5'
                                        onClick={()=>handleDelete(video._id)}
                                    />

                                </div>
                                {/* <div className="divider"></div> */}
                            </React.Fragment>
                        ))
                    ) : (
                        <p>No videos available.</p>
                    )}
                </div>
            </div>

             {/* Edit Form */}
            {isFormOpen && (
                <div className="editFormOverlay">
                    <div className="editForm">
                        <h3>Edit Video</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label>Title</label>
                            <input
                                type="text"
                                {...register('title')}
                                defaultValue={currentVideo?.title}
                            />
                            
                            <label>Description</label>
                            <textarea
                                {...register('description')}
                                defaultValue={currentVideo?.description}
                            />

                            <label>upload your Thumbnail</label>
                            <input
                                type="file"
                                {...register('thumbnail')}
                            />

                            <label>Is Published</label>
                            <input
                                type="checkbox"
                                {...register('isPublished')}
                                defaultChecked={currentVideo?.isPublished}
                            />

                            <div className="formButtons">
                                <button type="submit">Submit</button>
                                <button type="button" onClick={handleCloseForm}>Close</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default Content;
