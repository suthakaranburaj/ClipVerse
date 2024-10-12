import { create } from "zustand";
import {getUserChannelSubscribersServices ,toggleSubscriptionServices, getSubscribedChannelsServices} from '../Features/zServices/subscriptionServices'

const useSubscriptionStore = create((set)=>({
    channelSubscribers:[],
    isLoading:false,
    error:null,
    subscribe:false,
    subscribedChannels:[],


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
            set({ 
                isLoading: false,
                error:null,
                subscribe:true,
            });
            return response;
        } catch (error) {
            set({
                isLoading:false,
                error:error.response?.data?.message || "Failed to Toggle Subscription"
            })
        }
    },

    getSubscribedChannels : async(subscriberId)=>{
        set({isLoading:true,error:null})
        try {
            const response = await getSubscribedChannelsServices(subscriberId);
            set({
                isLoading:false,
                error:null,
                subscribedChannels:response.data.data,
            })
            // console.log(response.data);
            // console.log(response)
        } catch (error) {
            set({
                isLoading:false,
                error:error.response?.message?.data || "Failed to Fetch subscribed channels list!"
            })
        }
    }
}));

export default useSubscriptionStore;

