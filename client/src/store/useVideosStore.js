import { create } from "zustand";
import useStore from "./userStore";
import { persist } from "zustand/middleware";
import { getAllVideosService, updateVideoService, getVideoByIdService, publishAVideoService, deleteVideoService, togglePublishStatusService, incrementVideoViewsService, userWatchHistoryService, getuserWatchHistoryService} from "../Features/zServices/userVideosServices";

const useVideosStore = create(
    persist(
        (set,get)=>({
        user:null,
        video:null,
        videos:[],
        isLoading:false,
        error:null,
        isAuthenticated:useStore.getState().isAuthenticated,
        watchHistorys:[],

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

        getVideoById: async (videoId) => {
            set({ isLoading: true, error: null });
            try {
                const response = await getVideoByIdService(videoId);
                const fetchedVideo = response.data.video;
        
                set((state) => ({
                    video: fetchedVideo,
                    videos: [
                        ...state.videos, // Spread the existing videos (array) to preserve them
                        fetchedVideo,    // Add the newly fetched video
                    ],
                    isLoading: false,
                    error: null,
                }));
            } catch (error) {
                set({
                    isLoading: false,
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
                // window.location.reload();
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
                // console.log(response.data);
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
                // window.location.reload();
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
        
        userWatchHistory: async (videoId) =>{
            set({isLoading:true,error:null});
            try {
                const response = await userWatchHistoryService(videoId);
                const watchHistory = response.data.user.watchHistory;
                // console.log(watchHistory);
                set((state) =>({
                    watchHistorys: [watchHistory,...state.watchHistorys],
                    isLoading:false,
                    error:null,
                }));
            } catch (error) {
                set({
                    isLoading:false,
                    error:error.response?.data?.message || "Failed to add the video in watch history !!",
                })
            }
        },

        incrementVideoViews: async (videoId) => {
            set({ isLoading: true, error: null });
            try {
                const response = await incrementVideoViewsService(videoId); // Call the service
                // console.log(response)
                set({
                    isLoading: false,
                    error: null,
                });
                return response;
            } catch (error) {
                set({
                    isLoading: false,
                    error: error.response?.data?.message || "Failed to increment views",
                });
            }
        },

        getuserWatchHistory: async() =>{
            set({isLoading:true,error:null});
            try {
                const response = await getuserWatchHistoryService();
                // console.log(response.data.data);
                set({
                    watchHistorys:response.data.data,
                    isLoading:false,
                    error:null,
                });
            } catch (error) {
                set({
                    isLoading:false,
                    error:error.response?.data?.message || "Failed to fetch the watch history !!"
                })
            }
        }

    }),

        {
            name:"video-storage",
            getStorage:()=>localStorage
        }
    )
);



export default useVideosStore;