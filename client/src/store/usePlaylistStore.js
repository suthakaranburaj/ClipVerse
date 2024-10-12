import { create } from "zustand";
import {getUserPlaylistsServices} from '../Features/zServices/playlistServices'

const usePlaylistStore = create((set)=>({
    userPlaylists:[],
    isLoading:false,
    error:null,

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
}));

export default usePlaylistStore;