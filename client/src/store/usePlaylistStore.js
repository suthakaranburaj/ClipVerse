import { create } from "zustand";
import  {
            getUserPlaylistsServices,
            createPlaylistServices, 
            getPlaylistByIdServices,
            deletePlaylistServices,
            removeVideoFromPlaylistServices,
            updatePlaylistServices,
        } from '../Features/zServices/playlistServices'
import { faL } from "@fortawesome/free-solid-svg-icons";

const usePlaylistStore = create((set)=>({
    userPlaylists:[],
    isLoading:false,
    error:null,
    playlist:null,
    playlist:null,

    getUserPlaylists : async(userId) =>{
        set({isLoading:true,error:null})
        try {
            const response = await getUserPlaylistsServices(userId);
            set({
                isLoading:false,
                error:null,
                userPlaylists:response.data.data,
            })
            // console.log(response.data.data)
            // console.log(response.data)
        } catch (error) {
            set({
                isLoading:false,
                error:error.response?.message?.data,
            })
        }
    },

    createPlaylist : async({name, description,videos}) =>{
        // console.log(name)
        // console.log(description)
        // console.log(videos,"helo")
        set({isLoading:true,error:null});
        try {
            //         for (const [key, value] of formData.entries()) {
            // console.log(`Key: ${key}, Value: ${value}`);
        // }
            const response = await createPlaylistServices({name, description,videos});
            const playlist = response.data.data;
            console.log(response);
            set((state) =>({
                userPlaylists:[playlist,...state.userPlaylists],
                playlist:playlist,
                isLoading:false,
                error:null,
            }));

        } catch (error) {
            set({
                isLoading:false,
                error:error.response?.data?.message || "Failed to Create Playlist !!"
            })
        }
    },

    getPlaylistById : async(playlistId)=>{
        set({isLoading:true,error:null});
        try {
            const response = await getPlaylistByIdServices(playlistId);
            set({
                isLoading:false,
                error:null,
                playlist:response.data.data,
            })
        } catch (error) {
            set({
                isLoading:false,
                error:error.response?.data?.message || "failed to fetch the playlist !!"
            })
        }
    },

    deletePlaylist : async(playlistId)=>{
        set({isLoading:true,error:null});
        try {
            await deletePlaylistServices(playlistId);
            set({
                isLoading:false,
                error:null,
            })
        } catch (error) {
            set({
                isLoading:false,
                error:error.response?.message?.data,
            })
        }
    },

    removeVideoFromPlaylist : async(videoId,playlistId)=>{
        set({isLoading:true,error:null});
        try {
            // console.log("Video ID:", videoId);
            // console.log("Playlist ID:", playlistId);

            await removeVideoFromPlaylistServices(videoId,playlistId)
            set({
                isLoading:false,
                error:null
            })
        } catch (error) {
            set({
                isLoading:false,
                error:error.response?.message?.data,
            })
        }
    },

    updatePlaylist : async(playlistId,{name , description})=>{
        set({isLoading:true,error:null})
        try {
            const response = await updatePlaylistServices(playlistId,{name , description});
            // const updatedPlaylist = response.data.data
            set({
                isLoading:false,
                error:null,
            })
            return response;
        } catch (error) {
            set({
                isLoading:false,
                error:error.response?.message?.data || "Failed to update Playlist"
            })
        }
    }
}));

export default usePlaylistStore;