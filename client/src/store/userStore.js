import { create } from "zustand";
import axios from 'axios';

const useStore = create((set) => ({

    user: null,
    login: async ({ name, email, password }) => {

        try {
            const response = await axios.post("/api/v1/login", { name, email, password });

            set({ user: response.data.user });

            localStorage.setItem("user", JSON.stringify(response.data.user));
        } catch (error) {
            console.error("Login failed", error);
        }

    },

    logout: () => {

        set({ user: null });

        localStorage.removeItem("user");
    },

}));

export default useStore;
