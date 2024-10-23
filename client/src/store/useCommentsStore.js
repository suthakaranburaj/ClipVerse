import {create} from "zustand";
import  {
            getVideoCommentsServices,
            getAllVideosCommentsServices,
            addCommentOnVideoServices,
            deleteCommentOnVideoServices,
            updateCommentOnVideoServices,
        } from '../Features/zServices/commentsServices'

const useCommentsStore = create((set)=>({
    commentsOfVideo:[],
    commentsOfVideoCount:[],
    allComments:[],
    isLoading:false,
    error:null,

    getVideoComments: async (videoId,params = {page: 1, limit: 40}) => {
        set({ isLoading: true, error: null });
    
        try {

        const response = await getVideoCommentsServices(videoId,params);
        // console.log(response);
        // console.log(response.data.data.results);
        // console.log(response);

        set({
            commentsOfVideo: response.data.data.results,
            isLoading: false,
            error: null,
        });
        // console.log(commentsOfVideo)
        return true;
        } catch (error) {
        set({
            isLoading: false,
            error: error.response?.data?.message || "Failed fetching Video comments",
        });
        return false;
        }
    },


    getAllVideosComments: async () => {
        set({ isLoading: true, error: null });

        try {
            const response = await getAllVideosCommentsServices(); // Update API endpoint as needed
            const videosData = response.data.data.results;
            const allComments = videosData.reduce((acc, video) => {
                return [...acc, ...video.comments]; // Add all comments from each video to the accumulator
            }, []);
            const commentsOfVideoCount = videosData.map((videos) => {
                // Check if the video property exists
                if (videos.video) {
                return {
                    videoId: videos.video._id,
                    commentsCount: videos.commentsCount,
                };
                } else {
                  // Handle cases where video is missing (optional)
                  return 0; // Or return an empty object {}
                }
                
            });
            // console.log(commentsOfVideoCount)
            set({ 
                allComments, 
                isLoading: false,
                commentsOfVideoCount,
            });
        } catch (err) {
            set({ error: err.message, isLoading: false });
        }
    },
    
    addCommentOnVideo:async(videoId,content)=>{
        set({isLoading:true,error:null});
        try {
            const response = await addCommentOnVideoServices(videoId,content);
            const VideoComment = response.data
            // console.log(VideoComment)
            set((state) =>({
                commentsOfVideo:[VideoComment,...state.commentsOfVideo],
                allComments:[VideoComment,...state.allComments],
                isLoading:false,
                error:null,
            }))
            return response;
        } catch (error) {
            set({
                isLoading:false,
                error:error.response?.data?.message || "Failed to publich Comment",
            })
        }
    },

    deleteCommentOnVideo : async(commentId) =>{
        set({isLoading:true,error:null})
        try {
            await deleteCommentOnVideoServices(commentId);
            set((state) =>({
                commentsOfVideo:state.commentsOfVideo.filter((comment) => comment._id !== commentId),
                allComments:state.allComments.filter((comment) => comment._id !== commentId),
                isLoading:false,
                error:null,
            }));
        } catch (error) {
            set({
                error:error.response?.message?.data,
                isLoading:false,
            });
        }
    },

    updateCommentOnVideo: async (commentId, content) => {
        set({ isLoading: true, error: null });
        try {
            const response = await updateCommentOnVideoServices(commentId, content);
            const updatedComment = response.data.data;
            // console.log(content)
            // console.log(updatedComment)
            set((state) => ({
                commentsOfVideo: state.commentsOfVideo.map((comment) =>
                    comment._id === updatedComment._id ? updatedComment : comment
                ),
                allComments: state.allComments.map((comment) =>
                    comment._id === updatedComment._id ? updatedComment : comment
                ),
                isLoading: false,
                error: null,
            }));
            return response;
        } catch (error) {
            set({
                isLoading: false,
                error: error.response?.message?.data,
            });
        }
    },
}));

export default useCommentsStore;
