import axios from "axios";
const BACKEND_URL = 'https://clipverse.onrender.com/api/v1/likes';

const getToken = () => {
    const accessToken = localStorage.getItem("accessToken");
    // console.log(accessToken)
    return accessToken; // Adjust based on how you store the token
};

const toggleVideoLikeServices = async(videoId)=>{
    try {
        const response = await axios.post(`${BACKEND_URL}/toggle/v/${videoId}`,{},{
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
        const response = await axios.post(`${BACKEND_URL}/toggle/c/${commentId}`,{},{
            headers: {
                Authorization: `Bearer ${getToken()}`,
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

const getLikedVideosServices = async()=>{
    try {
        const response = await axios.get(`${BACKEND_URL}/videos`,{
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

const getLikesOfVideoServices = async(videoId) =>{
    try {
        const response = await axios.get(`${BACKEND_URL}/${videoId}`,{
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
}

const getLikesOfCommentServices = async(commentId)=>{
    try {
        const response = await axios.get(`${BACKEND_URL}/comment/${commentId}`,{
            headers:{
                Authorization:`Bearer ${getToken()}`,
            }
        });
        return response;
    } catch (error) {
        throw(error)
    }
}

export{
    toggleVideoLikeServices,
    toggleCommentLikeServices,
    toggleTweetLikeServices,
    getLikedVideosServices,
    getLikesOfVideosServices,
    getLikesOfVideoServices,
    getLikesOfCommentServices,
}
