import axios from "axios";
const BACKEND_URL = 'http://localhost:8000/api/v1/tweets';

const getToken = () => {
    const accessToken = localStorage.getItem("accessToken");
    // console.log(accessToken)
    return accessToken; // Adjust based on how you store the token
};

const createTweetServices = async(content) =>{
    try {
        const response = await axios.post(`${BACKEND_URL}`,content,{
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

const getUserTweetsServices = async(userId) =>{
    try {
        // console.log(userId)
        const response = await axios.get(`${BACKEND_URL}/user/${userId}`,{
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

const updateTweetServices = async(tweetId,content)=>{
    try {
        const response = await axios.patch(`${BACKEND_URL}/${tweetId}`,content,{
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

const deleteTweetServices = async(tweetId) =>{
    try {
        const response = await axios.delete(`${BACKEND_URL}/${tweetId}`,{
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



export{
    createTweetServices,
    getUserTweetsServices,
    updateTweetServices,
    deleteTweetServices,
}