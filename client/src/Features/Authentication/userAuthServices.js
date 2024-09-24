import axios from "axios";

const BACKEND_URL = 'http://localhost:8000/api/v1/users';

const loginUser = async ({ name, email, password }) => {
    try {
        const response = await axios.post(`${BACKEND_URL}/login`, { name, email, password });
        return response;
    } catch (error) {
        return error;
    }
};

const registerUser = async (formData) => {
    try {

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        };

        const response = await axios.post(`${BACKEND_URL}/register`, formData, config);
        return response;
    } catch (error) {
        return error;
    }
};

export {
    loginUser,
    registerUser
};
