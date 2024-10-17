import { create } from "zustand";
import { getChannelVideosService ,getChannelStatsService } from "../Features/zServices/userStatsServices";

const userStatsStore = create((set)=>({
    user:null,
    videos:[],
    isLoading:false,
    error:null,
    likes:0,
    commentsCount:0,
    comments:[],
    views:0,
    totalSubscribers:0,

    getChannelStats:async () =>{
        set({isLoading:true, error: null});
        try {
            const response= await getChannelStatsService();
            const data=response.data.data;
            // console.log(response);
            set({
                commentsCount:data.totalComments,
                likes:data.totalLikesCount,
                comments:data.comments,
                totalSubscribers:data.totalSubscribersCount,
                views:data.totalVideoViews,
                isLoading:false,
                error:null,
            });
        } catch (error) {
            set({
                isLoading:false,
                error: error.response?.data?.message || "Failed to fetch stats",
            });

        }
    },

    getChannelVideos:async () =>{
        set({isLoading:true, error: null});
        try {
            const response= await getChannelVideosService();
            // console.log(response.data.data);
            set({
                videos:response.data.data,
                isLoading:false,
                error:null,
            });
        } catch (error) {
            set({
                isLoading:false,
                error: error.response?.data?.message || "Failed to fetch stats",
            });

        }
    },

}));

export default userStatsStore;


