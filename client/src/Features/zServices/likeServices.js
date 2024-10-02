import axios from "axios";
const BACKEND_URL = 'http://localhost:8000/api/v1/likes';

const getToken = () => {
    const accessToken = localStorage.getItem("accessToken");
    // console.log(accessToken)
    return accessToken; // Adjust based on how you store the token
};

const toggleVideoLikeServices = async(videoId)=>{
    try {
        const response = await axios.post(`${BACKEND_URL}/toggle/v/${videoId}`,{
            headers: {
                Authorization: `Bearer ${getToken()}`,
                'Content-Type': 'multipart/form-data',
            },
            withCredentials: true,
        });
        return response;
    } catch (error) {
        throw(error)
    }
};

const toggleCommentLikeServices = async(commentId)=>{
    try {
        const response = await axios.post(`${BACKEND_URL}/toggle/c/${commentId}`,{
            headers: {
                Authorization: `Bearer ${getToken()}`,
                'Content-Type': 'multipart/form-data',
            },
            withCredentials: true,
        });
        return response;
    } catch (error) {
        throw(error);
    }
};

const toggleTweetLikeServices = async(tweetId) =>{
    try {
        const response = await axios.post(`${BACKEND_URL}/toggle/t/${tweetId}`,{
            headers: {
                Authorization: `Bearer ${getToken()}`,
                'Content-Type': 'multipart/form-data',
            },
            withCredentials: true,
        });
        return response;
    } catch (error) {
        throw(error)
    }
};

const getLikedVideosServices = async(videoIds)=>{
    try {
        const response = await axios.get(`${BACKEND_URL}/videos`,videoIds,{
            headers: {
                Authorization: `Bearer ${getToken()}`,
                'Content-Type': 'multipart/form-data',
            },
            withCredentials: true,
        });
        return response;
    } catch (error) {
        throw(error)
    }
};

const getLikesOfVideosServices = async() =>{
    try {
        const response = await axios.get(`${BACKEND_URL}`,{
            headers: {
                Authorization: `Bearer ${getToken()}`,
                'Content-Type': 'multipart/form-data',
            },
            withCredentials: true,
        });
        return response;
    } catch (error) {
        throw(error);
    }
}

export{
    toggleVideoLikeServices,
    toggleCommentLikeServices,
    toggleTweetLikeServices,
    getLikedVideosServices,
    getLikesOfVideosServices,
}
