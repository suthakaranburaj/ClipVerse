// UpdateVideo.js
import React from 'react';
import { useForm } from 'react-hook-form';
import './UpdateVideo.scss';

function UpdateVideo() {
const { register, handleSubmit, reset } = useForm();

const onSubmit = (data) => {
console.log(data);
reset();
};

return (
<div className="update-video">
    <h2>Update Video</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" {...register('title', { required: true })} />
    </div>

    <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea id="description" {...register('description', { required: true })}></textarea>
    </div>

    <div className="form-group">
        <label htmlFor="thumbnail">Thumbnail:</label>
        <input type="file" id="thumbnail" {...register('thumbnail')} />
    </div>

    <div className="form-group">
        <label htmlFor="publish">Publish:</label>
        <input type="checkbox" id="publish" {...register('publish')} />
    </div>

    <div className="form-buttons">
        <button type="button" className="close-button">Close</button>
        <button type="submit" className="update-button">Update</button>
    </div>
    </form>
</div>
);
}

export default UpdateVideo;
