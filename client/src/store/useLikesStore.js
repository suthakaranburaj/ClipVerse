import { create } from "zustand";
import {  getLikesOfVideosServices ,toggleVideoLikeServices,getLikesOfVideoServices, getLikedVideosServices} from "../Features/zServices/likeServices";

const useLikesStore = create((set)=>({
    likesOfVideo:[],
    likesOfVideoCount:[],
    isLoading:false,
    error:null,
    likesOfVideoNumber:0,
    likedVideos:[],

    getLikesVideos: async()=>{
        set({isLoading:true,error:null});
        try {
            const response = await getLikesOfVideosServices();
            // console.log(response.data)
            set({
                likesOfVideoCount:response.data.data.results,
            })
        } catch (error) {
            set({
                isLoading:false,
                error:error.response?.data?.message || "Failed to fetch Likes of Videos"
            })
            return false;
        }
    },

    toggleVideoLike : async(videoId) => {
        set({isLoading:true, error: null});
        try {
            const response = await toggleVideoLikeServices(videoId);
            
            set({
                isLoading:false,
                error:null,
            })
            console.log(response);
            return response;
        } catch (error) {
            set({
                isLoading:false,
                error:error.response?.data?.message || "Failed to toggle Like of video"
            })
        }
    },

    getVideoLikes : async(videoId) =>{
        set({isLoading:true,error:null});
        try {
            const response = await getLikesOfVideoServices(videoId);
            set({
                isLoading:false,
                error:null,
                likesOfVideoNumber:response.data.data.videoLikesCount,
                likesOfVideo:response.data.data.likes,
            })
            console.log(response);
            return response;
        } catch (error) {
            set({
                isLoading:false,
                error:error.response?.data?.message || "Failed to fetch likes of video !!"
            })
        }
    },

    getLikedVideos : async()=>{
        set({isLoading:true,error:null})
        try {
            const response = await getLikedVideosServices();
            set({
                isLoading:false,
                error:null,
                likedVideos:response.data.data,
            })
            console.log(response.data.data);
            return response;
        } catch (error) {
            set({
                isLoading:false,
                error:error.response?.message?.data || "Failed to fetch Liked Videos"
            })
        }
    }

}));

export default useLikesStore;