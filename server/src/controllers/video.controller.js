import mongoose, {isValidObjectId} from "mongoose"
import {Video} from "../models/video.model.js"
import {User} from "../models/user.model.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import { error } from "console"


const getAllVideos = asyncHandler(async (req, res) => {
    const { page = 1, limit = 10, query, sortBy, sortType, userId } = req.query



    //TODO: get all videos based on query, sort, pagination
    


})

const publishAVideo = asyncHandler(async (req, res) => {

    // 1. Title and description - validate 
    // 2. Video validate   
    // 3. Vidoe upload 
    // 4. Thumbnail validate
    // 5. Thumbnail upload
    // 6. Catories - body - [] 
    // 7. Duration figure out   
    // 8. Url console.log and save

    const { title, description, categorizes, isPublished ,duration} = req.body;
    // TODO: get video, upload to cloudinary, create video

    if (!title || !description || !categorizes || !isPublished) {
        throw new ApiError(400, "All field are required !!");
    }

    const videoPath = req.files?.videoFile[0]?.path;
    const thumbnailPath = req.files?.thumbnail[0]?.path;

    if (!videoPath) {
        throw new ApiError(400, "Video not found !!");
    }
    if (!thumbnailPath) {
        throw new ApiError(400, "Thumbnail not found !!");
    }

    const video = await uploadOnCloudinary(videoPath);
    const thumbnail = await uploadOnCloudinary(thumbnailPath);

    if (!video) {
        throw new ApiError(400, "Failed to upload video !!");
    }
    if (!thumbnail) {
        throw new ApiError(400, "Failed to upload thumbnail !!");
    }

    console.log(video);
    const newVideo = await Video.create({
        videoFile: video.url,
        thumbnail: thumbnail.url,
        title,
        description,
        categorizes,
        isPublished,
        duration,
        owner: req.user?._id
    });

    await newVideo.save();

    return res
        .status(200)
        .json(new ApiResponse(200, {}, "Video uploaded successfully !!"));
})

const getVideoById = asyncHandler(async (req, res) => {
    const { videoId } = req.params
    //TODO: get video by id
})

const updateVideo = asyncHandler(async (req, res) => {
    const { videoId } = req.params
    //TODO: update video details like title, description, thumbnail

})

const deleteVideo = asyncHandler(async (req, res) => {
    const { videoId } = req.params
    //TODO: delete video
})

const togglePublishStatus = asyncHandler(async (req, res) => {
    const { videoId } = req.params
})

export {
    getAllVideos,
    publishAVideo,
    getVideoById,
    updateVideo,
    deleteVideo,
    togglePublishStatus
}
