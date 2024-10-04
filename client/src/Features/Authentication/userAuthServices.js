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

const updateCoverImage = async(formData) =>{
    try {
        const response = await axios.post(`${BACKEND_URL}/cover-image`,formData ,{
            headers: {
                'Content-Type':'multipart/form-data'
            },

        });
        return response;
    } catch (error) {
        console.error("Error uploading avatar:", error);
        throw error;
    }
}

const updateAccountDetails = async({username , email}) =>{
    try {
        const response = await axios.post(`${BACKEND_URL}/update-account`,{username,email});
        return response;
    } catch (error) {
        throw error;
    }
}

const updateUserAvatar = async(formData) => {
    try {

        const response = await axios.post(`${BACKEND_URL}/avatar`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
        });
        return response;
    } catch (error) {
        console.error("Error uploading avatar:", error);
        throw error; // Re-throw the error for further handling
    }
}




export {
    loginUser,
    registerUser,
    updateCoverImage,
    updateUserAvatar,
    updateAccountDetails,
};
