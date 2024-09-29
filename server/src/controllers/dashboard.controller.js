import mongoose from "mongoose"
import {Video} from "../models/video.model.js"
import {Subscription} from "../models/subscription.model.js"
import {Like} from "../models/like.model.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"

const getChannelStats = asyncHandler(async (req, res) => {
    // TODO: Get the channel stats like total video views, total subscribers, total videos, total likes etc.
    //find userId
    //find total video views
    //subscribers
    //total videos
    //total likes
    const userId = req.user._id;

    const userVideos = await Video.find({owner:userId});
    const totalVideos = userVideos.length;

    const totalVideoViews = userVideos.reduce((sum,video) =>sum + video.views);


})

const getChannelVideos = asyncHandler(async (req, res) => {
    // TODO: Get all the videos uploaded by the channel
    //user kon hai find karna hai
    //user ka videos find karna hai 
    //map karke response
    const userId = req.user._id;

    const userVideos = await Video.find({owner:userId});
    if(!userVideos || userVideos.length === 0){
        return res
        .status(200)
        .json(new ApiResponse(200,"No Videos found !!"));
    }


    return res
    .status(200)
    .json(new ApiResponse(200,userVideos,"Videos Fetched Successfully !!"));

})

export {
    getChannelStats, 
    getChannelVideos
    }