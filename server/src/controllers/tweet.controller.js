import mongoose, { isValidObjectId } from "mongoose"
import {Tweet} from "../models/tweet.model.js"
import {User} from "../models/user.model.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"

const createTweet = asyncHandler(async (req, res) => {
    //TODO: create tweet
    //1.Content is required
    //2.content ko post karenge db me
    //3.return res
    const {content} = req.body;
    if(!content){
        throw new ApiError(400,"Content is required");
    }

    const newTweet = await Tweet.create({
        content,
        owner: req.user?._id 
    });
    await newTweet.save();

    return res
    .status(201)
    .json(new ApiResponse(201,{tweet:newTweet},"Tweet created successfully"));

})

const getUserTweets = asyncHandler(async (req, res) => {
    // TODO: get user tweets
    //1)req.params se user ka id milega usko ek const me save karenge
    //2)check it is empty or not
    //3)find the user by id
    //4)find the tweets by user
    //5)return res

    const {userId} = req.params;
    if(!userId){
        throw new ApiError(400,"User Id not found!");
    }

    const user = await User.findById(userId);
    if(!user){
        throw new ApiError(400,"User not found!");
    }

    const tweets = await Tweet.find({owner:userId});

    return res
    .status(200)
    .json(new ApiResponse(200,{tweets}));

})

const updateTweet = asyncHandler(async (req, res) => {
    //TODO: update tweet
    //tweetid from req.params
    //tweetid is there or not
    //find user with its id
    //user exist or not
    //content = newContent
    //save it in database
    
    const {content} = req.body;
    if(!content){
        throw new ApiError(400,"Content is required");
    }

    const {tweetId} = req.params;
    if(!tweetId){
        throw new ApiError(400,"Tweet Id not found")
    }

    const tweet = await Tweet.findById(tweetId);
    if(!tweet){
        throw new ApiError(400,"Tweet not found")
    }

    const userId = await User.findById(tweet.owner);
    if(!userId){
        throw new ApiError(404,"User not found");
    }

    tweet.content=content;
    await tweet.save();

    return res
    .status(200)
    .json(new ApiResponse(200,{Tweet},"Tweet updated successfully !!"));
    

})

const deleteTweet = asyncHandler(async (req, res) => {
    //TODO: delete tweet
    //1)tweetId from req.params 
    //2)tweetid exist or not
    //3)tweetid se userid
    //4)fir user
    //5)and then delete tweet
    //6)return res

    const {tweetId} = req.params;
    if(!tweetId){
        throw new ApiError(400,"TweetId is not found")
    }

    const tweet = await Tweet.findById(tweetId);
    if(!tweet){
        throw new ApiError(400,"Tweet not found");
    }

    if(req.user._id.toString() !== tweet.owner.toString()){
        throw new ApiError(404,"Unautherized to delete this Tweet")
    }

    await Tweet.findByIdAndDelete(tweetId);

    return res
    .status(200)
    .json(new ApiResponse(200,"Tweet deleted successfully !!"));

});

export {
    createTweet,
    getUserTweets,
    updateTweet,
    deleteTweet
}
