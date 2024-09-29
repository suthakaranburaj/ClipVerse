import mongoose, {isValidObjectId} from "mongoose"
import {Playlist} from "../models/playlist.model.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {asyncHandler} from "../utils/asyncHandler.js"


const createPlaylist = asyncHandler(async (req, res) => {
    //TODO: create playlist
    const {name, description , videos} = req.body
    if(!name || !description){
        throw new ApiError(400,"Name and Description is required !!");
    }

    if(!Array.isArray(videos)){
        throw new ApiError(400,"VideoIds should be in an array !!");
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
        throw new ApiError(400,"Playlist Id is missing !!");
    }
    if(!videoId){
        throw new ApiError(400,"VideoId is missing !!");
    }

    const playlist = await Playlist.findById(playlistId);

    if (!playlist) {
        throw new ApiError(404, "Playlist not found!");
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
        throw new ApiError(400,"Playlist Id is missing !!");
    }
    if(!videoId){
        throw new ApiError(400,"VideoId is missing !!");
    }

    const playlist = await Playlist.findById(playlistId);

    const playlistVideos = playlist.videos;
    if(playlistVideos.length === 0){
        throw new ApiError(400,"No videos present in the Playlist")
    }
    if(!playlistVideos.includes(videoId)){
        throw new ApiError(404,"Video not found in the playlist")
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
        throw new ApiError(400,"Playlist Id is missing !!");
    }

    const playlist= await Playlist.findById(playlistId);
    if (!playlist) {
        throw new ApiError(404, "Playlist not found!");
    }

    if(req.user._id.toString() !== playlist.owner.toString()){
        throw new ApiError(403,"Unautherized to delete this Playlist")
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
        throw new ApiError(400,"Playlist ID not found !!");
    }
    const {name, description} = req.body

    const playlist = await Playlist.findById(playlistId);
    if(!playlist){
        throw new ApiError(400,"Playlist not found");
    }

    if(req.user._id.toString() !== playlist.owner.toString()){
        throw new ApiError(403,"Unauthorized to Update the Playlist !");
    }

    playlist.description = description;
    playlist.name = name;

    await playlist.save();

    return res
    .status(200)
    .json(new ApiResponse(200,"Playlist Updated successfully !!"));
    
})

export {
    createPlaylist,
    getUserPlaylists,
    getPlaylistById,
    addVideoToPlaylist,
    removeVideoFromPlaylist,
    deletePlaylist,
    updatePlaylist
}
