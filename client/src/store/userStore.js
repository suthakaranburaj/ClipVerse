import { create } from "zustand";

import { loginUser, registerUser } from "../Features/Authentication/userAuthServices";

const useStore = create((set) => ({

    user: null,
    error: null,
    isLoading: false,
    isAuthenticated: !!localStorage.getItem("user"),

    login: async ({ username, email, password }) => {
        set(() => ({ isLoading: true, error: null }));

        try {
            const response = await loginUser({ username, email, password });
            console.log("response:::::::::",response);

            set({
                user: response.data.data.user,
                isAuthenticated: true,
                isLoading: false,
                error: null
            });

            localStorage.setItem("user", JSON.stringify(response.data.data.user));
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