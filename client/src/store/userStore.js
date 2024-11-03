import { create } from "zustand";
import {
    loginUser,
    registerUser,
    updateCoverImage,
    updateUserAvatar,
    updateAccountDetails,
} from "../Features/Authentication/userAuthServices";

// Get user data from localStorage if available
const getStoredUser = () => {
    const storedUser = localStorage.getItem("user");
    try {
        return storedUser ? JSON.parse(storedUser) : {};
    } catch (error) {
        console.error("Error parsing stored user data:", error);
        localStorage.removeItem("user");
        return null;
    }
};

const useStore = create((set, get) => ({
    user: getStoredUser(),
    error: null,
    isLoading: false,
    isAuthenticated: !!localStorage.getItem("user"),
    watchHistory: [],

    login: async ({ username, email, password }) => {
        set({ isLoading: true, error: null });

        try {
            const response = await loginUser({ username, email, password });
            const userData = response.data.data.user;
            const accessToken = response.data.data.accessToken;

            set({
                user: userData,
                isAuthenticated: true,
                isLoading: false,
                error: null
            });

            localStorage.setItem("user", JSON.stringify(userData));
            localStorage.setItem("accessToken", accessToken);
        } catch (error) {
            set({
                error: error?.response?.data?.message || 'Login failed',
                isAuthenticated: false,
                isLoading: false
            });
        }
    },

    register: async (formData) => {
        set({ isLoading: true, error: null });

        try {
            const response = await registerUser(formData);
            const userData = response.data.data.user;
            const accessToken = response.data.data.accessToken;

            set({
                user: userData,
                isAuthenticated: true,
                error: null,
                isLoading: false
            });

            localStorage.setItem("user", JSON.stringify(userData));
            localStorage.setItem("accessToken", accessToken);
        } catch (error) {
            set({
                error: error.response?.data?.message || 'Registration failed',
                isAuthenticated: false,
                isLoading: false
            });
        }
    },

    logout: () => {
        set({
            user: null,
            isAuthenticated: false,
            error: null
        });

        localStorage.removeItem("user");
        localStorage.removeItem("accessToken");
    },

    // updatePassword: async (oldPassword, newPassword) => {
    //     set({ isLoading: true, error: null });

    //     try {
    //         await updateCoverImage({ oldPassword, newPassword });
    //         set({ isLoading: false, error: null });
    //     } catch (error) {
    //         set({
    //             error: error.response?.data?.message || 'Password update failed',
    //             isLoading: false
    //         });
    //     }
    // },

    updateDetails: async (fullname, email) => {
        // console.log("aaya re");
        // console.log(fullname, email);

        set({ isLoading: true, error: null });

        try {
            const response = await updateAccountDetails( fullname, email );
            console.log(response);
            set({
                user: response.data.data,
                isLoading: false,
                error: null
            });

            localStorage.setItem("user", JSON.stringify(response.data.data));
        } catch (error) {
            set({
                error: error.response?.data?.message || 'Details update failed',
                isLoading: false
            });
        }
    },

    updateAvatar: async (avatarFile) => {
        set({ isLoading: true, error: null });

        console.log(avatarFile);
        

        try {
            const response = await updateUserAvatar(avatarFile);
            set({
                user: { ...get().user, avatar: response.data.data.avatar },
                isLoading: false,
                error: null
            });
            console.log(response);

            localStorage.setItem("user", JSON.stringify(get().user));
        } catch (error) {
            set({
                error: error.response?.data?.message || 'Avatar update failed',
                isLoading: false
            });
        }
    },

    updateCoverImage: async (coverImageFile) => {
        set({ isLoading: true, error: null });

        try {
            const response = await updateCoverImage(coverImageFile);
            set({
                user: { ...get().user, coverImage: response.data.data.coverImage },
                isLoading: false,
                error: null
            });

            localStorage.setItem("user", JSON.stringify(get().user));
        } catch (error) {
            set({
                error: error.response?.data?.message || 'Cover image update failed',
                isLoading: false
            });
        }
    }
}));

export default useStore;
