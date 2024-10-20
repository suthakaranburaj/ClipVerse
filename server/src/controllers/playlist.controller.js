import mongoose, {isValidObjectId} from "mongoose"
import {Playlist} from "../models/playlist.model.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"


const createPlaylist = asyncHandler(async (req, res) => {
    //TODO: create playlist

    const {name, description , videos} = req.body
    console.log(name,description,videos);
    if(!name || !description){
        return res
        .status(400)
        .json( new ApiError(400,"Name and Description is required !!"));
    }

    if(!Array.isArray(videos)){
        return res
        .status(400)
        .json( new ApiError(400,"VideoIds should be in an array !!"));
    }
    const userId = req.user._id;

    const newPlaylist = await Playlist.create({
        name,
        description,
        videos,
        owner:userId,
    })

    return res
    .status(201)
    .json(new ApiResponse(201,newPlaylist,"Playlist Created successfully !!"))

})

const getUserPlaylists = asyncHandler(async (req, res) => {
    const {userId} = req.params
    //TODO: get user playlists

    const playlists = await Playlist.find({owner:userId});

    return res
    .status(200)
    .json(new ApiResponse(200,playlists,"User Playlists Fetched successfully !!"));

})

const getPlaylistById = asyncHandler(async (req, res) => {
    const {playlistId} = req.params
    //TODO: get playlist by id

    const playlist = await Playlist.findById(playlistId);

    return res
    .status(200)
    .json( new ApiResponse(200,playlist,"Playlist by Id fetched successfully !!"));
})

const addVideoToPlaylist = asyncHandler(async (req, res) => {
    const {playlistId, videoId} = req.params
    if(!playlistId){
        return res
        .status(400)
        .json( new ApiError(400,"Playlist Id is missing !!"));
    }
    if(!videoId){
        return res
        .status(400)
        .json( new ApiError(400,"VideoId is missing !!"));
    }

    const playlist = await Playlist.findById(playlistId);

    if (!playlist) {
        return res
        .status(404)
        .json( new ApiError(404, "Playlist not found!"));
    }
    playlist.videos.push(videoId);
    await playlist.save();

    return res
    .status(200)
    .json(new ApiResponse(201,"Video added to the playlist successfully !!"));

})

const removeVideoFromPlaylist = asyncHandler(async (req, res) => {
    const {playlistId, videoId} = req.params
    // TODO: remove video from playlist
    if(!playlistId){
        return res
        .status(400)
        .json( new ApiError(400,"Playlist Id is missing !!"));
    }

    const userId = req.user?._id;

    if(!videoId){
        return res
        .status(400)
        .json( new ApiError(400,"VideoId is missing !!"));
    }

    const playlist = await Playlist.findById(playlistId);
    // console.log(playlist)

    // console.log(playlist?.owner?._id)
    // console.log(user)
    if(!playlist.owner._id.equals(userId)){
        return res
            .status(400)
            .json(new ApiError(400,"Unauthorized Access !!"));
    }
    
    const playlistVideos = playlist.videos;
    if(playlistVideos.length === 0){
        return res
        .status(400)
        .json( new ApiError(400,"No videos present in the Playlist"));
    }
    if(!playlistVideos.includes(videoId)){
        return res
        .status(404)
        .json( new ApiError(404,"Video not found in the playlist"));
    }
    playlistVideos.remove(videoId);
    await playlist.save();

    return res
    .status(200)
    .json(new ApiResponse(200,"Video removed from the playlist successfully !!"))
})

const deletePlaylist = asyncHandler(async (req, res) => {
    // TODO: delete playlist
    const {playlistId} = req.params
    if(!playlistId){
        return res
        .status(400)
        .json( new ApiError(400,"Playlist Id is missing !!"));
    }

    const playlist= await Playlist.findById(playlistId);
    if (!playlist) {
        return res
        .status(404)
        .json( new ApiError(404, "Playlist not found!"));
    }

    if(req.user._id.toString() !== playlist.owner.toString()){
        return res
        .status(403)
        .json( new ApiError(403,"Unautherized to delete this Playlist"));
    }

    await Playlist.findByIdAndDelete(playlistId);

    return res
    .status(200)
    .json(new ApiResponse(200,null,"Playlist Deleted successfully !!"));
})

const updatePlaylist = asyncHandler(async (req, res) => {
    //TODO: update playlist

    const {playlistId} = req.params
    if(!playlistId){
        return res
        .status(400)
        .json( new ApiError(400,"Playlist ID not found !!"));
    }
    const {name, description} = req.body

    const playlist = await Playlist.findById(playlistId);
    if(!playlist){
        return res
        .status(400)
        .json( new ApiError(400,"Playlist not found"));
    }

    if(req.user._id.toString() !== playlist.owner.toString()){
        return res
        .status(403)
        .json( new ApiError(403,"Unauthorized to Update the Playlist !"));
    }

    playlist.description = description;
    playlist.name = name;

    await playlist.save();

    return res
    .status(200)
    .json(new ApiResponse(200,"Playlist Updated successfully !!"));
    
})

const addVideosToPlaylist = asyncHandler(async(req,res)=>{
    const {playlistId}= req.params;
    const { videoIds } = req.body;

    if (!playlistId) {
        return res
            .status(400)
            .json(new ApiError(400, "Playlist Id is missing !!"));
    }

    if (!videoIds || !Array.isArray(videoIds) || videoIds.length === 0) {
        return res
            .status(400)
            .json(new ApiError(400, "An array of Video IDs is required !!"));
    }

    const playlist = await Playlist.findById(playlistId);

    if (!playlist) {
        return res
            .status(404)
            .json(new ApiError(404, "Playlist not found!"));
    }

    videoIds.forEach((videoId) => {
        if (!playlist.videos.includes(videoId)) {
            playlist.videos.push(videoId);
        }
    });

    await playlist.save();

    return res
        .status(200)
        .json(new ApiResponse(201, "Videos added to the playlist successfully !!"));
})

export {
    createPlaylist,
    getUserPlaylists,
    getPlaylistById,
    addVideoToPlaylist,
    removeVideoFromPlaylist,
    deletePlaylist,
    updatePlaylist,
    addVideosToPlaylist,
}
