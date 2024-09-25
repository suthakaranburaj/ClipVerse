import { create } from "zustand";

import { loginUser } from "../Features/Authentication/userAuthServices";
import { registerUser } from "../Features/Authentication/userAuthServices";

const savedUser = JSON.parse(localStorage.getItem("user")) || null;

const useStore = create((set) => ({

    user:savedUser,
    error: null,
    isLoading: false,
    isAuthenticated: !!savedUser,

    login: async ({ username, email, password }) => {

        set(() => ({ isLoading: true, error: null }));

        try {
            const response = await loginUser({username, email, password});

            // console.log("Login response:",response);
            // console.log("Login response data:",response.data);
            const loggedInUser = response.data.data.user;  // Adjust based on your backend
            localStorage.setItem("user", JSON.stringify(loggedInUser));

            set({ 
                user: loggedInUser,
                isAuthenticated: true,
                error: null,
            });

            set(() => ({ isLoading: false }));

        } catch (error) {
            set({
                error: error.response?.data?.message || 'Login failed',
                isAuthenticated: false,
                isLoading:false,
            });
        }

    },

    register: async (formData) => {

        set(()=>({ isLoading: true, error: null }));

        try {
            const response = await registerUser(formData); 
            const registeredUser = response.data.data.user; 
            // console.log("Registration response:", response);

            localStorage.setItem("user",JSON.stringify(registerUser));

            set({
                user: registeredUser,
                isAuthenticated:true,
                error:null,
            });

            // console.log("User registered:", JSON.stringify(response.data.user));
            // console.log("LocalStorage User:", localStorage.getItem("user"));

            set(()=>({ isLoading:false }));
            

        } catch (error) {
            set({
                error: error.response?.data?.message || 'Login failed',
                isAuthenticated: false,
                isLoading:false,
            });
        }

    },

    logout: () => {
        localStorage.removeItem("user");

        set({
            user: null,
            isAuthenticated: false,
            error: null,
        });
    },

}));

export default useStore;