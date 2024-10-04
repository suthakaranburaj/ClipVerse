import mongoose, {isValidObjectId} from "mongoose"
import {User} from "../models/user.model.js"
import { Subscription } from "../models/subscription.model.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"


const toggleSubscription = asyncHandler(async (req, res) => {
    const {channelId} = req.params
    console.log(req)
    console.log(req.params)
    if(!channelId){
        throw new ApiError(400,"Channel Id is missing !!")
    }
    // TODO: toggle subscription
    //1)user ko find karenge
    //2)if agar subscription true and tho false karo and vice versa
    //3)store in db
    //4)return res

    const subscriberId = req.user._id;
    if(!subscriberId){
        throw new ApiError(400,"Subscriber ID is missing !!");
    }

    if(subscriberId.toString()==channelId.toString()){
        throw new ApiError(400,"You cannot subscribe your own channel !!")
    }
    const existingSubriber = await Subscription.findOne({
        subscriber: subscriberId,
        channel: channelId,
    })

    if(existingSubriber){
        await Subscription.findByIdAndDelete(existingSubriber._id);
        return res
        .status(200)
        .json(new ApiResponse(200,"Unsubscribed successfully"))
    }
    else{
        const newSubscription = new Subscription({
            subscriber:subscriberId,
            channel:channelId,
        })

        await  newSubscription.save();
        return res
        .status(201)
        .json(new ApiResponse(201,channelId,"Subscribed Successfully"));
    };
});

// controller to return subscriber list of a channel
const getUserChannelSubscribers = asyncHandler(async (req, res) => {
    const {channelId} = req.body;
    if(!channelId){
        throw new ApiError(400,"Channel Id is missing !!");
    }

    if(!mongoose.isValidObjectId(channelId)){
        throw new  ApiError(400,"Invalid Channel ID")
    }

    const subscriptions = await Subscription.find({ channel: channelId }).populate('subscriber', 'fullName username avatar');
    if (!subscriptions || subscriptions.length === 0) {
        return res.status(200).json(new ApiResponse(200, [], "No subscribers found for this channel"));
    }

    const subscribers = subscriptions.map(sub => sub.subscriber);

    return res.status(200).json(
        new ApiResponse(200, subscribers, "Subscribers fetched successfully")
    );


});

// controller to return channel list to which user has subscribed
const getSubscribedChannels = asyncHandler(async (req, res) => {
    const { subscriberId } = req.params
    if(!subscriberId){
        throw new ApiError(400,"SubscriberId is Missing");
    }
    if(!mongoose.isValidObjectId(subscriberId)){
        throw new ApiError(400,"Invalid Subscriber ID")
    }

    const subscribedChannel= await Subscription.find({subscriber:subscriberId}).populate('channel','username fullName');
    if (!subscribedChannel || subscribedChannel.length === 0) {
        return res.status(200).json(new ApiResponse(200, [], "No subscribers found for this channel"));
    }

    const subscribedChannels = subscribedChannel.map(sub=>sub.channel);

    return res
    .status(200)
    .json(new ApiResponse(200,subscribedChannels,"Channels fetched successfully"));

});

export {
    toggleSubscription,
    getUserChannelSubscribers,
    getSubscribedChannels
}