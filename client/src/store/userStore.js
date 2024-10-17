import { create } from "zustand";

import { loginUser, registerUser} from "../Features/Authentication/userAuthServices";

// Get user data from localStorage if available
const getStoredUser = () => {
    const storedUser = localStorage.getItem("user");
    try {
        return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
        console.error("Error parsing stored user data:", error);
        // If data is invalid, remove it from localStorage
        localStorage.removeItem("user");
        return null;
    }
};

const useStore = create((set) => ({

    user: getStoredUser(),
    error: null,
    isLoading: false,
    isAuthenticated: !!localStorage.getItem("user"),
    watchHistory: [],

    login: async ({ username, email, password }) => {
        set(() => ({ isLoading: true, error: null }));

        try {
            const response = await loginUser({ username, email, password });
            const userData = response.data.data.user;
            const accessToken = response.data.data.accessToken;
            // console.log(accessToken);
            // console.log("response:::::::::",response);

            set({
                user: userData,
                isAuthenticated: true,
                isLoading: false,
                error: null
            });

            localStorage.setItem("user", JSON.stringify(userData));
            localStorage.setItem("accessToken",accessToken)
        } catch (error) {
            // console.log("errorr::::::",error.response.data.message);
            
            set(() => ({
                error: error?.response?.data?.message || 'Login failed',
                isAuthenticated: false,
                isLoading: false
            }));
        }
    },

    register: async (formData) => {

        set(() => ({ isLoading: true, error: null }));

        try {
            const response = await registerUser(formData);
            const accessToken = response.data.data.accessToken;
            set({
                user: response.data.data.user,
                isAuthenticated: true,
                error: null,
            });
            console.log(response.data)
            console.log(response.data.data);
            console.log(accessToken)
            localStorage.setItem("user", JSON.stringify(response.data.data.user));
            localStorage.setItem("accessToken",accessToken);

            set(() => ({ isLoading: false }));

        } catch (error) {
            set({
                error: error.response?.data?.message || 'Login failed',
                isAuthenticated: false,
                isLoading: false,
            });

            return error;
        }

    },

    // Logout function
    logout: () => {
        try {
            set({
                user: null,
                isAuthenticated: false,
                error: null,
            });

            localStorage.removeItem("user");
            localStorage.removeItem("accessToken");
        } catch (error) {
            set({
                error: error?.response?.data?.message,
            })
        }
    },

}));

export default useStore;