import { create } from "zustand";
import {  getLikesOfVideosServices ,toggleVideoLikeServices,getLikesOfVideoServices, getLikedVideosServices, toggleCommentLikeServices,getLikesOfCommentServices} from "../Features/zServices/likeServices";

const useLikesStore = create((set)=>({
    likesOfVideo:[],
    likesOfVideoCount:[],
    isLoading:false,
    error:null,
    likesOfVideoNumber:0,
    likedVideos:[],
    likesOfComments:[],
    likesOfCommentsNumber:0,

    getLikesVideos: async()=>{
        set({isLoading:true,error:null});
        try {
            const response = await getLikesOfVideosServices();
            // console.log(response.data)
            set({
                likesOfVideoCount:response.data.data.results,
            })
        } catch (error) {
            set({
                isLoading:false,
                error:error.response?.data?.message || "Failed to fetch Likes of Videos"
            })
            return false;
        }
    },

    toggleVideoLike : async(videoId) => {
        set({isLoading:true, error: null});
        try {
            const response = await toggleVideoLikeServices(videoId);
            
            set({
                isLoading:false,
                error:null,
            })
            // console.log(response);
            return response;
        } catch (error) {
            set({
                isLoading:false,
                error:error.response?.data?.message || "Failed to toggle Like of video"
            })
        }
    },

    getVideoLikes : async(videoId) =>{
        set({isLoading:true,error:null});
        try {
            const response = await getLikesOfVideoServices(videoId);
            set({
                isLoading:false,
                error:null,
                likesOfVideoNumber:response.data.data.videoLikesCount,
                likesOfVideo:response.data.data.likes,
            })
            // console.log(response);
            return response;
        } catch (error) {
            set({
                isLoading:false,
                error:error.response?.data?.message || "Failed to fetch likes of video !!"
            })
        }
    },

    getLikedVideos : async()=>{
        set({isLoading:true,error:null})
        try {
            const response = await getLikedVideosServices();
            set({
                isLoading:false,
                error:null,
                likedVideos:response.data.data,
            })
            // console.log(response.data.data);
            return response;
        } catch (error) {
            set({
                isLoading:false,
                error:error.response?.message?.data || "Failed to fetch Liked Videos"
            })
        }
    },

    toggleCommentLike : async(commentId)=>{
        set({isLoading:true,error:null});
        try {
            const response = await toggleCommentLikeServices(commentId);
            // console.log(response.data)
            set({
                isLoading:false,
                error:null,
            })
            return response;
        } catch (error) {
            set({
                isLoading:false,
                error:error.response?.message?.data || "Failed to toggle comment like!!"
            })
        }
    },

    getLikesOfComment: async (commentId) => {
        set({ isLoading: true, error: null });
        try {
            const response = await getLikesOfCommentServices(commentId);
            // console.log(response.data)
            set((state) => ({
                isLoading: false,
                error: null,
                likesOfComments: {
                    ...state.likesOfComments,
                    [commentId]: {
                        likes: response.data.data.likesCount,
                        likedByUser: response.data.data.likes.some(
                            (like) => like.likedBy === state.currentUserId
                        ),
                    },
                },
            }));
            // console.log(likesOfComments);
            return response;
        } catch (error) {
            set({
                isLoading: false,
                error: error.response?.data?.message || "Failed to fetch likes of comment !!",
            });
        }
    },
    setCurrentUserId: (userId) => set({ currentUserId: userId }),
}));

export default useLikesStore;