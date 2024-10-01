import axios from 'axios';

const BACKEND_URL='http://localhost:8000/api/v1/users/';

const getToken = () => {
    const accessToken = localStorage.getItem("accessToken");
    console.log(accessToken)
    return accessToken; // Adjust based on how you store the token
};

const getAllCommentsService= async(userId) =>{
    try {
        const response = await axios.get(`${BACKEND_URL}/${userId}/comments`,null,{
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

const getAllLikesService= async(userId)=>{
    try {
        const response = await axios.get(`${BACKEND_URL}/${userId}/likes`,null,{
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

const getAllViewsService = async(userId)=>{
    try {
        const response = await axios.get(`${BACKEND_URL}/${userId}/views`,null,{
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
    getAllCommentsService,
    getAllLikesService,
    getAllViewsService,
    getChannelVideosService,
}