import {create} from "zustand";
import {getVideosCommentsServices,getAllVideosCommentsServices} from '../Features/zServices/commentsServices'

const useCommentsStore = create((set)=>({
    commentsOfVideo:[],
    commentOfVideoCount:[],
    isLoading:false,
    error:null,

    getVideoComments: async (params = {page: 1, limit: 40}) => {
        set({ isLoading: true, error: null });
    
        try {
          // Destructure page and limit from params    
        const response = await getVideosCommentsServices(params);
        console.log(response);
        console.log(response.data.data.results.videoId.commentsCount);

        // console.log(response);
        set({
            commentsOfVideos: response.data.results.videoId.comments,   // Array of objects containing videoId, comments, and commentsCount
            totalCommentsCount: response.data.results.videoId.commentsCount, // Total number of comments for all videos
            isLoading: false,
            error: null,
        });

        return true;
        } catch (error) {
        set({
            isLoading: false,
            error: error.response?.data?.message || "Failed fetching Video comments",
        });
        return false;
        }
    },

    getAllVideosComments : async ()=>{
        set({isLoading:true,error:null});
        try {
            const response = await getAllVideosCommentsServices();
            console.log(response.data.data);
            set({
                commentOfVideoCount:response.data.data.results,
                commentsOfVideo:response.data.results,
            });
            return true;
        } catch (error) {
            set({
                isLoading:false,
                error:error.response?.data?.message || "Failed fetching Videos Comments !!"
            })
            return false;
        }
    }
}));

export default useCommentsStore;
