import { create } from "zustand";
import { getChannelVideosService } from "../Features/zServices/userStatsServices";

const userStatsStore = create((set)=>({
    user:null,
    videos:[],
    isLoading:false,
    error:null,

    getChannelVideos:async () =>{
        set({isLoading:true, error: null});
        try {
            const response= await getChannelVideosService();
            console.log(response);
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


