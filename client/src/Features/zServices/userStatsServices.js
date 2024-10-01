import axios from 'axios';

const BACKEND_URL='http://localhost:8000/api/v1/dashboard';

const getToken = () => {
    const accessToken = localStorage.getItem("accessToken");
    console.log(accessToken)
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
        const response = await axios.get('http://localhost:8000/api/v1/dashboard/videos',{
            headers: {
                Authorization: `Bearer ${getToken()}`
            },
            withCredentials: true,
        });
        return response;
    } catch (error) {
        throw(error);
    }
}
export{
    getChannelStatsService,
    getChannelVideosService,
}