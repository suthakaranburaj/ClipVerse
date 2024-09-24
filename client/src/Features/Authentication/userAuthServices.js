import axios from "axios";

const BACKEND_URL = 'http://localhost:8000/api/v1/users';

const loginUser = async ({ username, email, password }) => {
    try {
        const response = await axios.post(`${BACKEND_URL}/login`, { username, email, password });
        return response;
    } catch (error) {
        throw error;
    }
};

const registerUser = async(formData) => { 
    try{
        const response = await axios.post(`${BACKEND_URL}/register`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });        
        return response;
    } catch (error) {
        throw error;
    }
};

export {
    loginUser,
    registerUser
};
