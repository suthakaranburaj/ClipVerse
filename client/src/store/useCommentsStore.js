import {create} from "zustand";
import {getVideosCommentsServices,getAllVideosCommentsServices} from '../Features/zServices/commentsServices'

const useCommentsStore = create((set)=>({
    commentsOfVideo:[],
    commentsOfVideoCount:[],
    allComments:[],
    isLoading:false,
    error:null,

    // getVideoComments: async (params = {page: 1, limit: 40}) => {
    //     set({ isLoading: true, error: null });
    
    //     try {
    //       // Destructure page and limit from params    
    //     const response = await getVideosCommentsServices(params);
    //     console.log(response);
    //     console.log(response.data.data.results.videoId);

    //     // console.log(response);
    //     set({
    //         commentsOfVideos: response.data.results.videoId.comments,   // Array of objects containing videoId, comments, and commentsCount
    //         totalCommentsCount: response.data.results, // Total number of comments for all videos
    //         isLoading: false,
    //         error: null,
    //     });

    //     return true;
    //     } catch (error) {
    //     set({
    //         isLoading: false,
    //         error: error.response?.data?.message || "Failed fetching Video comments",
    //     });
    //     return false;
    //     }
    // },


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
    

}));

export default useCommentsStore;
