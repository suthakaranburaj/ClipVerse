import mongoose, {isValidObjectId} from "mongoose"
import {Like} from "../models/like.model.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"
import { Video } from "../models/video.model.js"
import {Tweet} from '../models/tweet.model.js'

const toggleVideoLike = asyncHandler(async (req, res) => {
    //TODO: toggle like on video
    //user ko find karna hai jisne like kiya
    //video ko like kiya hai ki unlike kiya woh check karna hai
    //fir uske hisaab se toggle karna hai

    const {videoId} = req.params
    if(!videoId){
        throw new ApiError(400,"Video Id is missing");
    }
    
    const userId= req.user._id;
    if(!userId){
        throw new ApiError(400,"User Id is missing");
    }

    
    const video = await Video.findById(videoId);
    if(!video){
        throw new ApiError(404,"Video Does not exist");
    }

    const existingLike = await Like.findOne({video:videoId,likedBy:userId})
    if(existingLike){
        await Like.findByIdAndDelete(existingLike._id);
        return res
        .status(200)
        .json(new ApiResponse(200,"Video Unlike successfully"));
    }
    else{
        const newLike= new Like({
            video:videoId,
            likedBy:userId,
        })
        await newLike.save();
        return res
        .status(200)
        .json(new ApiResponse(201,"Video Liked successfully"));
    }

})

const toggleCommentLike = asyncHandler(async (req, res) => {
    const {commentId} = req.params
    //TODO: toggle like on comment
    //same as of toggleVideoLike

    if(!commentId){
        throw new ApiError(400,"Comment Id is missing");
    }
    
    const userId= req.user._id;
    if(!userId){
        throw new ApiError(400,"User Id is missing");
    }

    
    const comment = await Comment.findById(commentId);
    if(!comment){
        throw new ApiError(404,"Comment Does not exist");
    }

    const existingLike = await Like.findOne({comment:commentId,likedBy:userId})
    if(existingLike){
        await Like.findByIdAndDelete(existingLike._id);
        return res
        .status(200)
        .json(new ApiResponse(200,"Comment Unlike successfully"));
    }
    else{
        const newLike= new Like({
            comment:commentId,
            likedBy:userId,
        })
        await newLike.save();
        return res
        .status(200)
        .json(new ApiResponse(201,"Comment Liked successfully"));
    }


})

const toggleTweetLike = asyncHandler(async (req, res) => {
    const {tweetId} = req.params
    //TODO: toggle like on tweet
    //same as of toggleVideoLike
    if(!tweetId){
        throw new ApiError(400,"Tweet Id is missing");
    }
    
    const userId= req.user._id;
    if(!userId){
        throw new ApiError(400,"User Id is missing");
    }

    
    const tweet = await Tweet.findById(tweetId);
    if(!tweet){
        throw new ApiError(404,"tweet Does not exist");
    }

    const existingLike = await Like.findOne({tweet:tweetId,likedBy:userId})
    if(existingLike){
        await Like.findByIdAndDelete(existingLike._id);
        return res
        .status(200)
        .json(new ApiResponse(200,"Tweet Unlike successfully"));
    }
    else{
        const newLike= new Like({
            tweet:tweetId,
            likedBy:userId,
        })
        await newLike.save();
        return res
        .status(200)
        .json(new ApiResponse(201,"tweet Liked successfully"));
    }

}
)

const getLikedVideos = asyncHandler(async (req, res) => {
    //TODO: get all liked videos
    const userId = req.user._id;
    if(!userId){
        throw new ApiError(400,"User Id is missing");
    }
    if(!mongoose.isValidObjectId(userId)){
        throw new ApiError(400,"Invalid User ID")
    }

    const userLikedVideo= await Like.find({likedBy:userId}).populate('video');
    if (!userLikedVideo || userLikedVideo.length === 0) {
        return res.status(200).json(new ApiResponse(200, [], "No Liked Video found for this user"));
    }

    const userLikedVideos = userLikedVideo.map(like => like.video);

    return res
    .status(200)
    .json(new ApiResponse(200,userLikedVideos,"User Liked Videos fetched successfully"));

})

export {
    toggleCommentLike,
    toggleTweetLike,
    toggleVideoLike,
    getLikedVideos
}