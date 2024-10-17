import mongoose, { isValidObjectId } from "mongoose"
import { Video } from "../models/video.model.js"
import { User } from "../models/user.model.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import { uploadOnCloudinary,deleteOnCloudinary } from "../utils/cloudinary.js"


const getAllVideos = asyncHandler(async (req, res) => {
    const { page = 1, limit = 20, query, sortBy, sortType, userId } = req.query
    //TODO: get all videos based on query, sort, pagination
    let filter = {};
    // console.log(req.query);

    // 2. Add search query filter (for title or description search)
    if (query) {
        filter = {
            $or: [
                { title: { $regex: query, $options: 'i' } }, // Search in title (case-insensitive)
                { description: { $regex: query, $options: 'i' } } // Search in description (case-insensitive)
            ]
        };
    }

    // 3. Add filter for userId if provided (for videos uploaded by a specific user)
    if (userId) {
        filter.owner = userId;
    }

    // 4. Calculate the pagination values
    const skip = (page - 1) * limit; // Skip videos to get to the correct page
    const videoLimit = parseInt(limit); // Parse the limit to a number

    // 5. Sorting logic (convert sortType to either 1 for ascending or -1 for descending)
    const sortOptions = {};
    sortOptions[sortBy] = sortType === 'asc' ? 1 : -1;

    // 6. Fetch the videos with pagination, filtering, and sorting
    const videos = await Video.find(filter)
        .sort(sortOptions)   // Sort the videos
        .skip(skip)          // Skip the previous videos for pagination
        .limit(videoLimit)   // Limit the number of videos returned
        .populate('owner', 'avatar username');

    // 7. Get the total count of videos that match the filter for pagination metadata
    const totalVideos = await Video.countDocuments(filter);

    // 8. Return the results as a JSON response
    return res.status(200).json({
        success: true,
        page: parseInt(page),
        limit: videoLimit,
        totalPages: Math.ceil(totalVideos / limit), // Total number of pages
        totalVideos,
        videos
    });
});

const publishAVideo = asyncHandler(async (req, res) => {

    const { title, description, isPublished } = req.body;


    if (!title || !description || !isPublished) {
        return res
        .status(400)
        .json( new ApiError(400, "All fields are required!"));
    }

    const videoPath = req.files?.videoFile?.[0]?.path; 
    const thumbnailPath = req.files?.thumbnail?.[0]?.path;

    if (!videoPath) {
        return res
        .status(400)
        .json( new ApiError(400, "Video file not found!"));
    }
    if (!thumbnailPath) {
        return res
        .status(400)
        .json( new ApiError(400, "Thumbnail file not found!"));
    }


    const video = await uploadOnCloudinary(videoPath);
    const thumbnail = await uploadOnCloudinary(thumbnailPath);


    if (!video) {
        return res
        .status(400)
        .json( new ApiError(400, "Failed to upload video!"));
    }
    if (!thumbnail) {
        return res
        .status(400)
        .json( new ApiError(400, "Failed to upload thumbnail!"));
    }


    const duration = video.duration || 0; 

    
    const newVideo = await Video.create({
        videoFile: video.url, 
        thumbnail: thumbnail.url, 
        title,
        description,
        // categories,
        isPublished,
        duration,
        owner: req.user?._id 
    });


    await newVideo.save();

    return res
        .status(200)
        .json(new ApiResponse(200, { video: newVideo }, "Video published successfully!")); // Return the new video object
});

const getVideoById = asyncHandler(async (req, res) => {
    const { videoId } = req.params
    //TODO: get video by id

    if (!videoId) {
        return res
        .status(400)
        .json( new ApiError(400, "Video id required !!"));
    }

    const video = await Video.findById(videoId).populate('owner', 'avatar fullName'); //yaha error hua tha which was Video.findById({videoId})

    if (!video) {
        return res
        .status(400)
        .json( new ApiError(400, "Video not found !!"));
    }

    res
    .status(200)
    .json({
        status:true,
        video,
        message: "Video sent successfully"
    });
})

const updateVideo = asyncHandler(async (req, res) => {
    const { title, description,isPublished } = req.body;  // Change 'categorizes' to 'categories'
    const thumbnail = req.files?.thumbnail?.[0]?.path;

    const { videoId } = req.params;
    if (!videoId) {
        return res
        .status(400)
        .json( new ApiError(400, "Video ID is missing"));
    }

    const video = await Video.findById(videoId);
    if (!video) {
        return res
        .status(400)
        .json( new ApiError(400, "Video not found"));
    }

    const videoOwnerId = await User.findById(video.owner);
    if (!videoOwnerId) {
        return res
        .status(404)
        .json( new ApiError(404, "User not found"));
    }

    // Check if the current user is the video owner
    if (req.user._id.toString() !== video.owner.toString()) {
        return res
        .status(403)
        .json( new ApiError(403, "Unauthorized to update this video"));
    }

    // Handle thumbnail update
    if (thumbnail) {
        if (video.thumbnail) {
            await deleteOnCloudinary(video.thumbnail);
        }

        const uploadedThumbnail = await uploadOnCloudinary(thumbnail);

        video.thumbnail = uploadedThumbnail.secure_url;
    }

    if(isPublished) video.isPublished = isPublished;
    // Update title if provided
    if (title) video.title = title;

    // Update description if provided
    if (description) video.description = description;
    // console.log(req.body.categories)
    // Update categories if provided and validate
    // if (categories) {
    //     if (Array.isArray(categories) && categories.length <= 5) {
    // video.categories = categories;
    // console.log(video.categories)

    await video.save();

    res.status(200).json({
        success: true,
        message: "Video updated successfully",
        video,
    });
});

const deleteVideo = asyncHandler(async (req, res) => {
    const {videoId}  = req.params
    
    if(!videoId){
        return res
        .status(400)
        .json( new ApiError(400,"Video Id is missing"));
    }

    const video = await Video.findById(videoId);

    if(!video){
        return res
        .status(400)
        .json( new ApiError(400,"Video not found"));
    }

    if (req.user._id.toString() !== video.owner.toString()) {
        return res
        .status(403)
        .json( new ApiError(403, "Unauthorized to delete this video"));
    }

    if (video.videoFile) {
        const publicIdOfVideo = video.videoFile.split('/').pop().split('.')[0];
        await deleteOnCloudinary(publicIdOfVideo, 'video');
    }

    if (video.thumbnail) {
        const publicIdOfThumbnail = video.thumbnail.split('/').pop().split('.')[0];
        await deleteOnCloudinary(publicIdOfThumbnail, 'image');
    }

    await Video.findByIdAndDelete(videoId);

    return res
    .status(200)
    .json(
        new ApiResponse(200, "Video deleted successfully")
    );

})

const togglePublishStatus = asyncHandler(async (req, res) => {
    const { videoId } = req.params;

    if (!videoId) {
        return res
        .status(400)
        .json( new ApiError(400, "Video id not found !!"));
    }

    const video = await Video.findById( videoId );  //yaha pe error hua

    if (!video) {
        return res
        .status(400)
        .json( new ApiError(400, "Video not found !!"));
    }

    const status = video.isPublished ? false : true;

    video.isPublished = status;

    await video.save();

    return res
        .status(200)
        .json(new ApiResponse(200, video, "Publish toggled succesfully !!"));

})

const addUserWatchHistoryand = asyncHandler(async ( req,res)=>{
    const {videoId} = req.params;
    const userId = req.user?._id;

    if(!videoId){
        throw ApiError(400,"Video Id is missing !!")
    }
    if(!userId){
        throw ApiError(400,"User Id is missing !!")
    }

    const updatedUser = await User.findByIdAndUpdate(
        userId,
        {
            $addToSet: { watchHistory: videoId },  // Ensure the video is not added multiple times
        },
        { new: true }
    ).populate({
        path: 'watchHistory',
        populate: {
            path: 'owner',
            select: 'fullName username avatar',
        },
    });

    return res
    .status(200)
    .json(new ApiResponse(200,updatedUser.updatedUser.watchHistory,"Video added to Watch History successfully !!"))

})

const increamentViews = asyncHandler(async (req, res) => {
    const { videoId } = req.params; // Extract the videoId from params
    if (!videoId) {
        return res
        .status(400)
        .json( new ApiError(400, "Video Id is missing !!"));
    }

    const video = await Video.findByIdAndUpdate(
        videoId,
        { $inc: { views: 1 } }, // Increment views by 1
        { new: true } // Return the updated document
    );
    // console.log("Hellow")

    if (!video) {
        return res
            .status(404)
            .json(new ApiError(404, "Video not found !!"));
    }

    return res
        .status(200)
        .json(new ApiResponse(200, "Views of the video incremented successfully !!"));
});


export {
    getAllVideos,
    publishAVideo,
    getVideoById,
    updateVideo,
    deleteVideo,
    togglePublishStatus,
    addUserWatchHistoryand,
    increamentViews,
}
