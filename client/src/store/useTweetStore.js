import { create } from "zustand";
import 
    {
    getUserTweetsServices
    } from '../Features/zServices/tweetsServices'


const useTweetStore = create((set)=>({
    userTweets:[],
    isLoading:false,
    error:null,

    getUserTweets: async(userId)=>{
        set({isLoading:true,error:null});
        try {
            // console.log(userId)
            const response = await getUserTweetsServices(userId);
            // console.log(response.data.data.tweets);
            set({
                isLoading:false,
                error:null,
                userTweets:response.data.data.tweets,
            })
        } catch (error) {
            set({
                isLoading:false, 
                error:error.response?.message?.data || "Failed to fetch user tweets"
            })
        }
    }
    

}))

export default useTweetStore;