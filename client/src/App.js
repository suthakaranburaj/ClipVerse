import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";

import LayoutPage from "./Layout/LayoutPage";
import HomePage from './Features/Homepage/HomePage';
import UserChannel from "./Features/UserChannel/UserChannelTemplate/UserChannel";
import UserPlaylist from "./Features/UserChannel/UserPlaylist/userPlaylist";
import UserCommunity from "./Features/UserChannel/UserCommunity/UserCommunity";
import WatchVideo from './Features/WatchVideo/WatchVideo'
import LoginPage from "./Features/Authentication/LoginPage/LoginPage";
import RegistrationPage from "./Features/Authentication/RegistrationPage/RegistrationPage";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegistrationPage />} />
            <Route path='/manageVideos' element={<RegistrationPage />} />
            <Route path='/' element={<LayoutPage />}>
                <Route path='' element={<HomePage />} />
                <Route path='userchannel' element={<UserChannel />}>
                    <Route path='playlist' element={<UserPlaylist />} />
                    <Route path='community' element={<UserCommunity />} />
                </Route>
                <Route path='watchvideo' element={<WatchVideo />} />
            </Route>
        </>
    )
);

function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;
