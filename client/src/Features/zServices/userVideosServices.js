import axios from "axios";
const BACKEND_URL = 'http://localhost:8000/api/v1/videos';

const getToken = () => {
    const accessToken = localStorage.getItem("accessToken");
    console.log(accessToken)
    return accessToken; // Adjust based on how you store the token
};

const publishAVideoService = async (videoData) => {
    try {
        const response = await axios.post(`${BACKEND_URL}`, videoData, {
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
        const response = await axios.patch(`${BACKEND_URL}/${videoId}`, videoData, {
            headers: {
                Authorization: `Bearer ${getToken()}`
            },
            withCredentials: true,
        });        
        return response;
    } catch (error) {
        throw error;
    }
}

const deleteVideoService = async({videoId}) => {
    try {
        const response = await axios.delete(`${BACKEND_URL}/${videoId}`,);        
        return response;
    } catch (error) {
        throw error;
    }
}

const togglePublishStatusService = async({videoId}) => {
    try {
        const response = await axios.patch(`${BACKEND_URL}/toggle/publish/${videoId}`, null, {
            headers: {
                Authorization: `Bearer ${getToken()}`
            },
            withCredentials: true,
        });        
        return response;
    } catch (error) {
        throw error;
    }
}

// const incrementVideoViewsService = async (videoId) => {
//     try {
//         const response = await axios.put(`/api/videos/${videoId}`,
//             {
//                 headers: {
//                     Authorization: `Bearer ${getToken()}`
//                 },
//                 withCredentials: true,
//             });
//             return response;
//     } catch (error) {
//         throw(error)
//     }
// };
export {
    publishAVideoService,
    getAllVideosService,
    getVideoByIdService,
    updateVideoService,
    deleteVideoService,
    togglePublishStatusService,
    // incrementVideoViewsService,
}