import axios from "axios";
const BACKEND_URL = 'http://localhost:8000/api/v1/comments';

const getToken = () => {
    const accessToken = localStorage.getItem("accessToken");
    // console.log(accessToken)
    return accessToken; // Adjust based on how you store the token
};

const getVideoCommentsServices = async (videoId,{ page = 1, limit = 40 }) => {
    try {
        // console.log(`${BACKEND_URL}/${videoId}`)
        const response = await axios.get(`${BACKEND_URL}/${videoId}`,{
            params: {
                page,  // Pass page from params
                limit, // Pass limit from params
            },
            headers: {
                Authorization: `Bearer ${getToken()}`, // Pass the token
            },
            withCredentials: true,  // Ensure credentials are sent
        });
        return response;
    } catch (error) {
        throw error;  // Throw the error to handle it outside
    }
};

const getAllVideosCommentsServices = async() => {
    try {
        const response = await axios.get(`${BACKEND_URL}`,{
            headers: {
                Authorization: `Bearer ${getToken()}`, // Pass the token
            },
            withCredentials: true,  // Ensure credentials are sent
        });
        return response;
    } catch (error) {
        throw(error);
    }
};

const addCommentOnVideoServices = async(videoId,content) => {
    try {
        const response = await axios.post(`${BACKEND_URL}/${videoId}`,{content},{
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

const updateCommentOnVideoServices = async(commentId,content)=>{
    try {
        const response = await axios.patch(`${BACKEND_URL}/c/${commentId}`,content,{
            headers: {
                Authorization: `Bearer ${getToken()}`,
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        });
        return response;
    } catch (error) {
        throw(error);
    }
};

const deleteCommentOnVideoServices = async(commentId) =>{
    try {
        const response = await axios.delete(`${BACKEND_URL}/c/${commentId}`,{
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

// const getAllCommentsServices = async() =>{
//     try {
//         const response = await axios.get(`${BACKEND_URL}`,{
//             headers: {
//                 Authorization: `Bearer ${getToken()}`,
//             },
//             withCredentials: true,
//         });
//         return response;
//     } catch (error) {
//         throw(error)
//     }
// };
export{
    getVideoCommentsServices,
    addCommentOnVideoServices,
    updateCommentOnVideoServices,
    deleteCommentOnVideoServices,
    getAllVideosCommentsServices,
    // getAllCommentsServices,
}