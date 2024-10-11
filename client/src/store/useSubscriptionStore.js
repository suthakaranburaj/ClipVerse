import { create } from "zustand";
import {getUserChannelSubscribersServices ,toggleSubscriptionServices} from '../Features/zServices/subscriptionServices'

const useSubscriptionStore = create((set)=>({
    channelSubscribers:[],
    isLoading:false,
    error:null,
    subscribe:false,


    getUserChannelSubscribers: async(channelId)=>{
        set({isLoading:true , error:null});
        try {
            const response = await getUserChannelSubscribersServices(channelId);
            // console.log(response.data.data);
            set({
                channelSubscribers:response.data.data,
                isLoading:false,
                error:null
            });
        } catch (error) {
            set({
                isLoading:false,
                error:error.response?.data?.message || "Failed to fetch subscribers list"
            })
        }
    },

    toggleSubscription:async(channelId)=>{
        set({isLoading:true, error:null});
        try {
            const response = await toggleSubscriptionServices(channelId);
            // console.log(response);
            return response;
            set({ 
                isLoading: false,
                error:null,
                subscribe:true,
            });
        } catch (error) {
            set({
                isLoading:false,
                error:error.response?.data?.message || "Failed to Toggle Subscription"
            })
        }
    }
}));

export default useSubscriptionStore;

