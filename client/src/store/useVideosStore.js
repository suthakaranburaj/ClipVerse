import { create } from "zustand";
import useStore from "./userStore";
import { getAllVideosService, updateVideoService, getVideoByIdService, publishAVideoService, deleteVideoService, togglePublishStatusService } from "../Features/zServices/userVideosServices";

const useVideosStore = create((set,get)=>({
    video:null,
    videos:[],
    isLoading:false,
    error:null,
    isAuthenticated:useStore.getState().isAuthenticated,

    getAllVideos: async(params={}) => {
        set({isLoading: true, error:null});
        try {
            const response = await getAllVideosService(params);
            set({
                videos:response.data.videos,
                isLoading:false,
                error:null
            });
        } catch (error) {
            set({
                isLoading:false,
                error:error.response?.data?.message || "Failed to fetch videos"
            });
        }
    },

    getVideoById: async(videoId) =>{
        set({ isLoading :true, error: null});
        try {
            const response = await getVideoByIdService(videoId);
            set({
                video:response.data.video,
                isLoading:false,
                error:null
            });
        } catch (error) {
            set({
                isLoading:false,
                error: error.response?.data?.message || "Failed to fetch video",
            });
        }
    },

    publishAVideo: async(videoData) =>{
        set({ isLoading: true, error: null});
        try {
            const response = await publishAVideoService(videoData);
            const publishAVideo = response.data.video;

            set((state) =>({
                videos: [publishAVideo,...state.videos],
                isLoading:false,
                error:null
            }));
        } catch (error) {
            set({
                isLoading:false,
                error:error.response?.data?.message || "Failed to publish video",
            });
        }
    },

    updateVideo: async(videoId,videoData)=>{
        set({isLoading: true,error: null});
        try {
            const response = await updateVideoService(videoId,videoData);
            const updateVideo = response.data.video;
            set((state) =>({
                videos:state.videos.map((video) =>
                video._id === videoId ? updateVideo : video
            ),
            isLoading:false,
            error:null
            }));
        } catch (error) {
            set({
            isLoading:false,
            error: error.response?.data?.message || "Failed to update Video",
            });
        }
    },

    deleteVideo: async(videoId) => {
        set({isLoading: true, error: null});
        try {
            await deleteVideoService(videoId);
            set((state) =>({
                videos:state.videos.filter((video) => video._id !== videoId),
                isLoading:false,
                error: null
            }));
        } catch (error) {
            set({
                isLoading:false,
                error:error.response?.data?.message || "Failed to delete video",
            });
        }
    },

    togglePublishStatus: async(videoId) => {
        set({isLoading: true, error: null});
        try {
            const response = await togglePublishStatusService(videoId);
            const updateVideo = response.data.video;
            set((state) =>({
                videos: state.videos.map((video)=>
                video._id === videoId ? updateVideo : video
            ),
            isLoading:false,
            error: null
            }));
        } catch (error) {
            set({
                isLoading:false,
                error:error.response?.data?.message || "Failed to toggle publish status",
            });
        }
    },
}));



export default useVideosStore;