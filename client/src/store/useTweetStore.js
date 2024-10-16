import { create } from "zustand";
import 
    {
    getUserTweetsServices,
    createTweetServices,
    } from '../Features/zServices/tweetsServices'
import { faL } from "@fortawesome/free-solid-svg-icons";


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
    },

    createTweet: async(content)=>{
        set({isLoading:true,error:null});
        try {
            const response = await createTweetServices(content);
            const newTweet = response.data.data.tweet
            set((state)=>({
                isLoading:false,
                error:null,
                userTweets:[newTweet,...state.userTweets]
            }))
        } catch (error) {
            set({
                isLoading:false,
                error:error.response?.message?.data || "Failed to create Tweet",
            })
        }
    }
    

}))

export default useTweetStore;