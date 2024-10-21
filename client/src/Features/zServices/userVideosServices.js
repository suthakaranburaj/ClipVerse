import axios from "axios";
const BACKEND_URL = 'http://localhost:8000/api/v1/videos';
const BACKEND_URL2 ='http://localhost:8000/api/v1/users/history';

const getToken = () => {
    const accessToken = localStorage.getItem("accessToken");
    // console.log(accessToken)
    return accessToken; // Adjust based on how you store the token
};

const publishAVideoService = async (videoData) => {
    try {
        // console.log(getToken)
        const response = await axios.post(`${BACKEND_URL}`, videoData, {
            headers: {
                Authorization: `Bearer ${getToken()}`,
                'Content-Type': 'multipart/form-data',
            },
            withCredentials: true,
        });
        return response;
    } catch (error) {
        throw error;
    }
};

const getAllVideosService = async ({ page = 1, limit = 10, query = '', sortBy = 'date', sortType = 'desc', userId = null }) => {
    try {
        const response = await axios.get(`${BACKEND_URL}`, {
            params: {
                page,
                limit,
                query,
                sortBy,
                sortType,
                userId,
            },
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
            withCredentials: true,
        });
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const getVideoByIdService = async(videoId) =>{
    try {
        const response = await axios.get(`${BACKEND_URL}/${videoId}`, {
            headers: {
                Authorization: `Bearer ${getToken()}`
            },
            withCredentials: true,
        });
        return response;
    } catch (error) {
        throw error
    }
}

const updateVideoService = async(videoId, videoData) =>{
    try {
        const response = await axios.patch(`${BACKEND_URL}/${videoId}/updatevideo`, videoData, {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
            withCredentials: true,
        });        
        return response;
    } catch (error) {
        throw error;
    }
}

const deleteVideoService = async(videoId) => {
    try {
        const response = await axios.delete(`${BACKEND_URL}/${videoId}`,{
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
            withCredentials: true,
        });        
        return response;
    } catch (error) {
        throw error;
    }
}

const togglePublishStatusService = async({videoId}) => {
    try {
        const response = await axios.patch(`${BACKEND_URL}/toggle/publish/${videoId}`, null, {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
            withCredentials: true,
        });        
        return response;
    } catch (error) {
        throw error;
    }
}

const userWatchHistoryService = async(videoId) =>{
    try {
        const response = await axios.post(`${BACKEND_URL}/${videoId}`,null,{
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
            withCredentials: true,
        });
        return response;
    } catch (error) {
        throw error;
    }
}

const incrementVideoViewsService = async (videoId) => {
    try {
        const response = await axios.patch(`${BACKEND_URL}/${videoId}`,null,
            {
                headers: {
                    Authorization: `Bearer ${getToken()}`
                },
                withCredentials: true,
            });
            return response;
    } catch (error) {
        throw(error)
    }
};

const getuserWatchHistoryService = async () =>{
    try {
        const response = await axios.get(`${BACKEND_URL2}`,{
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

const getChannelVideosService = async(channelId) =>{
    try {
        const response = await axios.get(`${BACKEND_URL}/${channelId}/videos`,{
            headers:{
                Authorization:`Bearer ${getToken()}`
            },

        });
        return response;
    } catch (error) {
        throw(error);
    }
};

export {
    publishAVideoService,
    getAllVideosService,
    getVideoByIdService,
    updateVideoService,
    deleteVideoService,
    togglePublishStatusService,
    userWatchHistoryService,
    incrementVideoViewsService,
    getuserWatchHistoryService,
    getChannelVideosService,
}