import { create } from "zustand";

import { loginUser } from "../Features/Authentication/userAuthServices";
import { registerUser } from "../Features/Authentication/userAuthServices";

const useStore = create((set) => ({

    user: null,
    error: null,
    isLoading: false,

    login: async ({ name, email, password }) => {

        set(() => ({ isLoading: true, error: null }));

        try {
            const response = loginUser(name, email, password);

            set({ user: response.data.user });

            localStorage.setItem("user", JSON.stringify(response.data.user));
            set(() => ({ isLoading: false }));
        } catch (error) {
            set(() => ({ error: error }));
        }

    },

    register: async ({ userName, fullName, email, password, avatar, coverImage }) => {

        set(()=>({isLoading: true, error: null}));

        try {
            const response = registerUser({userName, fullName, email, password, avatar, coverImage });
            
            set({user: response.data.user});

            localStorage.setItem("user",JSON.stringify(response.data.user));
            set(()=>({isLoading:false}));

        } catch (error) {
            set(()=>({error:error}));
        }

    },

    logout: () => {

        set({ user: null });

        localStorage.removeItem("user");
    },

}));

export default useStore;
