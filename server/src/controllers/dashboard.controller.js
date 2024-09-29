import mongoose from "mongoose"
import { Video } from "../models/video.model.js"
import { Subscription } from "../models/subscription.model.js"
import { Like } from "../models/like.model.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import { channel } from "diagnostics_channel"

const getChannelStats = asyncHandler(async (req, res) => {

    // TODO: Get the channel stats like total video views, total subscribers, total videos, total likes etc.
    //find video 
    //find total video views (both for 1 video and for all videos)
    //subscribers
    //total videos
    //total likes
    //comment's 

    const userId = req.user._id;
    if (!userId) {
        throw new ApiError(400, "User id not found !!");
    }

    const userVideos = await Video.find({ owner: userId });
    if (!userVideos) {
        return res
            .status(200)
            .json(new ApiResponse(200, {}, "No video's uploaded yet !!"));
    }

    const totalVideos = userVideos.length;
    const totalVideoViews = userVideos.reduce((sum, video) => sum + video.views);

    const totalSubs = await Subscription.find({ channel: userId });
    const totalSubCount = totalSubs.length;

    const totalLikes = await Like.find({ video: userVideos[0]._id });
    const totalComments = await Comment.find({ video: userVideos[0]._id });

    return res
        .status(200)
        .json(new ApiResponse(
            200,
            {
                totalVideos,
                totalVideoViews,
                totalSubCount,
                totalLikes,
                totalComments
            },
            "Password changed successfully"
        ));
})

const getChannelVideos = asyncHandler(async (req, res) => {
    // TODO: Get all the videos uploaded by the channel
    //user kon hai find karna hai
    //user ka videos find karna hai 
    //map karke response
    const userId = req.user._id;

    const userVideos = await Video.find({ owner: userId });
    if (!userVideos || userVideos.length === 0) {
        return res
            .status(200)
            .json(new ApiResponse(200, "No Videos found !!"));
    }


    return res
        .status(200)
        .json(new ApiResponse(200, userVideos, "Videos Fetched Successfully !!"));

})

export {
    getChannelStats,
    getChannelVideos
}