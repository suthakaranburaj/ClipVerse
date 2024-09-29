import mongoose from "mongoose"
import {Comment} from "../models/comment.model.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"

const getVideoComments = asyncHandler(async (req, res) => {
    //TODO: get all comments for a video
    const {videoId} = req.params
    const {page = 1, limit = 10} = req.query

    const skip = (page - 1) * limit; 
    const commentLimit = parseInt(limit);

    // const sortOptions = {};
    // sortOptions[sortBy] = sortType === 'asc' ? 1 : -1;

    const comments = await Comment
                    .find({video:videoId})
                    // .sort(sortOptions)   // Sort the videos
                    .skip(skip)          // Skip the previous videos for pagination
                    .limit(commentLimit); ;
    const totalComments = await Comment.find({video:videoId});
    const totalCommentsCount=totalComments.length;

    const videoComment=[
        comments,
        totalComments,
        totalCommentsCount
    ]

    return res
    .status(200)
    .json(new ApiResponse(200,videoComment,"Comments of Video fetch successfully !!"))

})

const addComment = asyncHandler(async (req, res) => {
    // TODO: add a comment to a video
    //user id 
    //video id
    //content from the body
    //content hai ki nahi check karenge
    const userId = req.user._id;
    
    const {content} = req.body;
    if(!content){
        throw new ApiError(400,"Content is required !!");
    }

    const {videoId} = req.params;
    if(!videoId){
        throw new ApiError(400,"Video Id is Missing !!");
    }

    const newComment = await Comment.create({
        content:content,
        video:videoId,
        owner:userId,
    });
    await newComment.save();

    return res
    .status(201)
    .json( new ApiResponse(201,"Comment created and uploaded successfully !!"));

})

const updateComment = asyncHandler(async (req, res) => {
    // TODO: update a comment
    const{content}=req.body;
    if(!content){
        throw new ApiError(400,"Content is required !!");
    }

    const {commentId} = req.params;
    if(!commentId){
        throw new ApiError(400,"Comment Id is missing !!");
    }

    const comment = await Comment.findById(commentId);
    if(!comment){
        throw new ApiError(400,"Comment not found");
    }

    const userId = req.user._id;

    const videoId = await Comment.findById({owner:userId,_id:commentId});
    if(!videoId){
        throw new ApiError(400,"Video Id is missing !!");
    }

    comment.content=content;
    await comment.save();

    return res
    .status(201)
    .json(new ApiResponse(201,"Comment updated successfully !!"));
})

const deleteComment = asyncHandler(async (req, res) => {
    // TODO: delete a comment
    const {commentId}=req.params;
    if(!commentId){
        throw new ApiError(400,"Comment ID is missing");
    }

    const comment = await Comment.findById(commentId);
    if(!comment){
        throw new ApiError(400,"Comment not found");
    }

    if(req.user._id.toString() !== comment.owner.toString()){
        throw new ApiError(404,"Unautherized to delete this Comment")
    }

    await Comment.findByIdAndDelete(commentId);

    return res
    .status(200)
    .json(new ApiResponse(200,"Comment Deleted successfully !!"));
})

export {
    getVideoComments, 
    addComment, 
    updateComment,
     deleteComment
    }
