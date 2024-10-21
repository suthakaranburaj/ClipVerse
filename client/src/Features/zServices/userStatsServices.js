import axios from 'axios';

const BACKEND_URL='https://clip-verse-backend.onrender.com/api/v1/dashboard';
const Channel_url = 'https://clip-verse-backend.onrender.com/api/v1/users'

const getToken = () => {
    const accessToken = localStorage.getItem("accessToken");
    // console.log(accessToken)
    return accessToken; // Adjust based on how you store the token
};

const getChannelStatsService= async() =>{
    try {
        const response = await axios.get(`${BACKEND_URL}/stats`,{
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
            withCredentials: true,
        });
        return response;
    } catch (error) {
        throw error;
    }
};


const getChannelVideosService = async()=>{
    try {
        const response = await axios.get(`${BACKEND_URL}/videos`,{
            headers: {
                Authorization: `Bearer ${getToken()}`
            },
            withCredentials: true,
        });
        return response;
    } catch (error) {
        throw(error);
    }
};

const getUserChannelProfileServices = async(username)=>{
    try {
        const response = await axios.get(`${Channel_url}/c/${username}`,{
            headers:{
                Authorization: `Bearer ${getToken()}`
            },
            withCredentials:true,
        });
        return response;
    } catch (error) {
        throw (error);
    }
};

export{
    getChannelStatsService,
    getChannelVideosService,
    getUserChannelProfileServices,
}