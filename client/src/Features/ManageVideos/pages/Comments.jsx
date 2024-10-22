import React, { useEffect,useState } from 'react';
import useCommentsStore from '../../../store/useCommentsStore'; // Adjust the import path
import Loader from '../../../components/Loader/Loader';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import './Comments.scss'
import { Link } from 'react-router-dom'
import defaultImage from '../../assets/profile_pic.webp'



function Comments() {
    const { allComments, getAllVideosComments, isLoading:commentLoadingStore, error } = useCommentsStore();
    const [minLoading, setMinLoading] = useState(true); // State for minimum loading time


    // Fetch comments when component mounts
    useEffect(() => {
        const fetchData = async()=>{
            await getAllVideosComments(); // Trigger fetching all comments
            setTimeout(() => {
                setMinLoading(false);
            }, 1000);
        }
        fetchData();

    }, [getAllVideosComments]);

    dayjs.extend(relativeTime);
    return (
        <div>
            {commentLoadingStore || minLoading ? (
                <Loader/>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <div className='mainDiv'>
                    {allComments.length === 0 ? (
                        <p className='NoComments'>No comments available.</p>
                    ) : (
                        <ul className='commentsContainer'>
                            {allComments.map((comment) => (
                                <li key={comment._id} className='commentsMain'>
                                    <Link to={`/${comment.owner?.username}/${comment.owner?._id}`}>
                                        <div className='commentsMain1'>
                                            <div className='commentsMain11'>
                                                <img 
                                                    src={comment?.owner?.avatar ? comment.owner.avatar : defaultImage} 
                                                    className='commentsMain111' alt="" 
                                                />
                                            </div>
                                            <p className='commentsMain12'>{comment.owner?.username}</p>
                                        </div>
                                    </Link>
                                    <div className='commentsMain2'>
                                        <p className='commentsMain21'>{comment.content}</p>
                                    </div>
                                    <div className='commentsMain3'>
                                        <p className='commentsMain31'><strong>Video Title:</strong>{comment.video.title}</p>
                                        <p className='time'>{dayjs(comment?.createdAt).fromNow()}</p>
                                    </div>
                                    {/* <hr /> */}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </div>
    );
}

export default Comments;
