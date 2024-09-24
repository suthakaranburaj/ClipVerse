import { create } from "zustand";

import { loginUser } from "../Features/Authentication/userAuthServices";
import { registerUser } from "../Features/Authentication/userAuthServices";

const useStore = create((set) => ({

    user:null,
    error: null,
    isLoading: false,
    isAuthenticated: !!localStorage,

    login: async ({ username, email, password }) => {

        set(() => ({ isLoading: true, error: null }));

        try {
            const response = await loginUser({username, email, password});

            set({ 
                user: response.data.data,
                isAuthenticated:true,
                error:null,
            });

            localStorage.setItem("user", JSON.stringify(response.data.user));
            set(() => ({ isLoading: false }));

        } catch (error) {
            set({
                error: error.response?.data?.message || 'Login failed',
                isAuthenticated: false,
                isLoading:false,
            })

            return error;
        }

    },

    register: async (formData) => {

        set(()=>({isLoading: true, error: null}));

        try {
            const response = await registerUser(formData); 
            // console.log("Registration response:", response);
            set({
                user: response.data.data,
                isAuthenticated:true,
                error:null,
            });

            localStorage.setItem("user",JSON.stringify(response.data.user));
            // console.log("User registered:", JSON.stringify(response.data.user));
            // console.log("LocalStorage User:", localStorage.getItem("user"));

            set(()=>({ isLoading:false }));
            

        } catch (error) {
            set({
                error: error.response?.data?.message || 'Login failed',
                isAuthenticated: false,
                isLoading:false,
            });

            return error;
        }

    },

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