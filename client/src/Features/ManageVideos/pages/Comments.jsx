import React, { useEffect } from 'react';
import useCommentsStore from '../../../store/useCommentsStore'; // Adjust the import path

function Comments() {
    const { allComments, getAllVideosComments, isLoading, error } = useCommentsStore();

    // Fetch comments when component mounts
    useEffect(() => {
        getAllVideosComments(); // Trigger fetching all comments
    }, [getAllVideosComments]);

    return (
        <div>
            {isLoading ? (
                <p>Loading comments...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <div>
                    {allComments.length === 0 ? (
                        <p>No comments available.</p>
                    ) : (
                        <ul>
                            {allComments.map((comment) => (
                                <li key={comment._id}>
                                    <img src={comment.owner.avatar} className='w-10 h-10 rounded-full' alt="" />
                                    <p>{comment.content}</p>
                                    <p><strong>Video Title</strong> {comment.video.title}</p>
                                    <hr />
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
