import { create } from "zustand";
import { getChannelVideosService ,getChannelStatsService,getUserChannelProfileServices  } from "../Features/zServices/userStatsServices";

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
    channel:null,

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

    fetchChannelProfile: async (username) => {
        set({ isLoading: true, error: null });
        try {
            const response = await getUserChannelProfileServices(username);
            set({
            channel: response.data.data, // assuming response follows your ApiResponse format
            isLoading: false,
            error: null,
            });
        } catch (err) {
            set({
            isLoading: false,
            error: err.response ? err.response.data.message : err.message,
            });
        }
        },

        // Clear channel data
        clearChannel: () => {
        set({ channel: null, error: null });
        }

}));

export default userStatsStore;


