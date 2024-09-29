import { create } from "zustand";

import { loginUser, registerUser } from "../Features/Authentication/userAuthServices";

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

    login: async ({ username, email, password }) => {
        set(() => ({ isLoading: true, error: null }));

        try {
            const response = await loginUser({ username, email, password });
            const userData = response.data.data.user;
            console.log("response:::::::::",response);

            set({
                user: userData,
                isAuthenticated: true,
                isLoading: false,
                error: null
            });

            localStorage.setItem("user", JSON.stringify(userData));
        } catch (error) {
            console.log("errorr::::::",error);
            
            set(() => ({
                error: error.message || 'Login failed',
                isAuthenticated: false,
                isLoading: false
            }));
        }
    },

    register: async (formData) => {

        set(() => ({ isLoading: true, error: null }));

        try {
            const response = await registerUser(formData);
            // console.log("Registration response:", response);
            set({
                user: response.data.data,
                isAuthenticated: true,
                error: null,
            });

            localStorage.setItem("user", JSON.stringify(response.data.user));
            // console.log("User registered:", JSON.stringify(response.data.user));
            // console.log("LocalStorage User:", localStorage.getItem("user"));

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
        } catch (error) {
            console.error("Logout error: ", error);
        }
    },

}));

export default useStore;