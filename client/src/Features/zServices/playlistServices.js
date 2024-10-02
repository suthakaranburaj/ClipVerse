import axios from "axios";

const BACKEND_URL = 'http://localhost:8000/api/v1/playlist';

const getToken = () => {
    const accessToken = localStorage.getItem("accessToken");
    // console.log(accessToken)
    return accessToken; // Adjust based on how you store the token
};

const createPlaylistServices = async(playlistData)=>{
    try {
        const response = await axios.post(`${BACKEND_URL}`,playlistData,{
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
            withCredentials: true,
        });
        return response;
    } catch (error) {
        throw(error)
    }
} 

const getUserPlaylistsServices = async(userId) =>{
    try {
        const response = await axios.get(`${BACKEND_URL}/user/${userId}`,{
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

const getPlaylistByIdServices = async(playlistId) =>{
    try {
        const response = await axios.get(`${BACKEND_URL}/${playlistId}`,{
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

const addVideoToPlaylistServices = async(playlistId,videoId)=>{
    try {
        const response = await axios.patch(`${BACKEND_URL}/add/${videoId}/${playlistId}`,{
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

const removeVideoFromPlaylistServices = async(videoId,playlistId) =>{
    try {
        const response = await axios.patch(`${BACKEND_URL}/remove/${videoId}/${playlistId}`,{
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

const deletePlaylistServices = async(playlistId) =>{
    try {
        const response = await axios.delete(`${BACKEND_URL}/${playlistId}`,{
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

const updatePlaylistServices = async(playlistId)=>{
    try {
        const response = await axios.patch(`${BACKEND_URL}/${playlistId}`,{
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

export {
    createPlaylistServices,
    getUserPlaylistsServices,
    getPlaylistByIdServices,
    addVideoToPlaylistServices,
    removeVideoFromPlaylistServices,
    deletePlaylistServices,
    updatePlaylistServices,
}