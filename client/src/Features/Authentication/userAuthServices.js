import axios from "axios";

const BACKEND_URL = '/api/v1/';

const loginUser = async ({ name, email, password }) => {
    try {
        const response = await axios.post(`${BACKEND_URL}/login`, { name, email, password });
        return response;
    } catch (error) {
        return error;
    }
};

const registerUser = async({userName, fullName, email, password, avatar, coverImage }) => { 
    try{
        const response = await axios.post(`${BACKEND_URL}/registration`,{userName, fullName, email, password, avatar, coverImage});
        return response;
    }catch(error){
        return error;
    }
};

export {
    loginUser,
    registerUser
};
