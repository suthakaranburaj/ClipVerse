import axios from "axios";
const BACKEND_URL = 'http://localhost:8000/api/v1/subscriptions';

const getToken = () => {
    const accessToken = localStorage.getItem("accessToken");
    // console.log(accessToken)
    return accessToken; // Adjust based on how you store the token
};

const toggleSubscriptionServices = async(channelId,SubscriptionData)=>{
    try {
        const response = await axios.post(`${BACKEND_URL}/c/${channelId}`,SubscriptionData,{
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
            withCredentials: true,
        });
        return response;
    } catch (error) {
        throw(error)
    }
};

const getUserChannelSubscribersServices = async(subscriberId)=>{
    try {
        const response = await axios.get(`${BACKEND_URL}/u/${subscriberId}`,{
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
            withCredentials: true,
        });
        return response;
    } catch (error) {
        throw(error)
    }
};

const getSubscribedChannelsServices = async(channelId) =>{
    try {
        const response = await axios.get(`${BACKEND_URL}/c/${channelId}`,{
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
            withCredentials: true,
        });
        return response;
    } catch (error) {
        throw(error);
    }
}

export{
    toggleSubscriptionServices,
    getUserChannelSubscribersServices,
    getSubscribedChannelsServices,
}