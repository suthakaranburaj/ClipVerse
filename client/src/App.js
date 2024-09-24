import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";

import LayoutPage from "./pages/Layout/LayoutPage";
import HomePage from './pages/Homepage/HomePage';
import UserChannel from "./pages/UserChannel/UserChannel";
import UserPlaylist from "./pages/UserChannel/userPlaylist/userPlaylist";
import UserCommunity from "./pages/UserChannel/UserCommunity/UserCommunity";
import WatchVideo from './pages/WatchVideo/WatchVideo'
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/registration' element={<RegistrationPage />} />
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
