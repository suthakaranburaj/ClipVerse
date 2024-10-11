import mongoose, {isValidObjectId} from "mongoose"
import {Like} from "../models/like.model.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"
import { Video } from "../models/video.model.js"
import {Tweet} from '../models/tweet.model.js'
import { Comment } from "../models/comment.model.js"
import { response } from "express"

const toggleVideoLike = asyncHandler(async (req, res) => {
    //TODO: toggle like on video
    //user ko find karna hai jisne like kiya
    //video ko like kiya hai ki unlike kiya woh check karna hai
    //fir uske hisaab se toggle karna hai

    const {videoId} = req.params
    if(!videoId){
        return res
        .status(400)
        .json( new ApiError(400,"Video Id is missing"));
    }
    
    const userId= req.user._id;
    if(!userId){
        return res
        .status(400)
        .json( new ApiError(400,"User Id is missing"));
    }

    
    const video = await Video.findById(videoId);
    if(!video){
        return res
        .status(404)
        .json( new ApiError(404,"Video Does not exist"));
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
        return res
        .status(400)
        .json( new ApiError(400,"Comment Id is missing"));
    }
    
    const userId= req.user._id;
    if(!userId){
        return res
        .status(400)
        .json( new ApiError(400,"User Id is missing"));
    }

    
    const comment = await Comment.findById({_id:commentId});
    if(!comment){
        return res
        .status(404)
        .json( new ApiError(404,"Comment Does not exist"));
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
        return res
        .status(400)
        .json( new ApiError(400,"Tweet Id is missing"));
    }
    
    const userId= req.user._id;
    if(!userId){
        return res
        .status(400)
        .json( new ApiError(400,"User Id is missing"));
    }

    
    const tweet = await Tweet.findById(tweetId);
    if(!tweet){
        return res
        .status(404)
        .json( new ApiError(404,"tweet Does not exist"));
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
        return res
        .status(400)
        .json( new ApiError(400,"User Id is missing"));
    }
    if(!mongoose.isValidObjectId(userId)){
        return res
        .status(400)
        .json( new ApiError(400,"Invalid User ID"));
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

const getLikesOfVideos = asyncHandler( async(req,res) =>{
    const userId = req.user?._id;

    const userVideosIds = await Video.find({owner:userId}).select(Video._id);
    if(!userVideosIds){
        return res
        .status(400)
        .json( new ApiError(400,"No Videos Found"));
    }

    const allVideosLikesCount = await Promise.all(
        userVideosIds.map(async(videoId)=>{
        const likes = await Like.find({video:videoId})
                                .sort({createdAt:-1});

        const video = likes.length>0 ? likes[0].video : null;
        return{
            video,
            likesCount:likes.length,
            likes
        };
        })
    );

    const responseData={
        results:allVideosLikesCount,
    }

    return res
    .status(200)
    .json(new ApiResponse(200,responseData,"Likes of Videos Fetch successfully"))
})

const getLikesOfVideo = asyncHandler( async(req,res)=>{

    const {videoId} = req.params;
    if(!videoId){
        return res
        .status(400)
        .json(new ApiError(400,"Video Id is missing !!"));
    }

    const likes = await Like.find({video:videoId});
    if(likes.length === 0){
        return res
        .status(200)
        .json(new ApiResponse(200,"No likes for the video"))
    }

    const likesCount = likes.length;

    const responseData = {
        likes,
        videoLikesCount:likesCount,
    }

    return res
    .status(200)
    .json(new ApiResponse(200,responseData,"Likes of the video Fetched successfully !!"))
})

export {
    toggleCommentLike,
    toggleTweetLike,
    toggleVideoLike,
    getLikedVideos,
    getLikesOfVideos,
    getLikesOfVideo
}