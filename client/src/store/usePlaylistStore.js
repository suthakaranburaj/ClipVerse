import { create } from "zustand";
import  {
            getUserPlaylistsServices,
            createPlaylistServices, 
            getPlaylistByIdServices,
            deletePlaylistServices,
        } from '../Features/zServices/playlistServices'

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
            console.log(response.data.data)
            console.log(response.data)
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
    }
}));

export default usePlaylistStore;