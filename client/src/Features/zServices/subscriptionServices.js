import axios from "axios";
const BACKEND_URL = 'https://clipverse-backend.onrender.com/api/v1/subscriptions';

const getToken = () => {
    const accessToken = localStorage.getItem("accessToken");
    // console.log(accessToken)
    return accessToken; // Adjust based on how you store the token
};

const toggleSubscriptionServices = async(channelId)=>{
    // console.log('Channel ID:', channelId); // Check the value of channelId
    // console.log('Authorization Token:', getToken());

    try {
        const response = await axios.post(`${BACKEND_URL}/c/${channelId}`,{},{
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

const getUserChannelSubscribersServices = async(channelId)=>{
    try {
        // console.log(channelId)
        const response = await axios.get(`${BACKEND_URL}/c/${channelId}`,{
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

const getSubscribedChannelsServices = async(subscriberId) =>{
    try {
        const response = await axios.get(`${BACKEND_URL}/u/${subscriberId}`,{
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