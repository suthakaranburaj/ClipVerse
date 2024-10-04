import { create } from "zustand";
import {  getLikesOfVideosServices } from "../Features/zServices/likeServices";

const useLikesStore = create((set)=>({
    likesOfVideo:[],
    likesOfVideoCount:[],
    isLoading:false,
    error:null,

    getLikesVideos: async()=>{
        set({isLoading:true,error:null});
        try {
            const response = await getLikesOfVideosServices();
            // console.log(response.data)
            set({
                likesOfVideo:response.data.results,
                likesOfVideoCount:response.data.data.results,
            })
        } catch (error) {
            set({
                isLoading:false,
                error:error.response?.data?.message || "Failed to fetch Likes of Videos"
            })
            return false;
        }
    }
}));

export default useLikesStore;