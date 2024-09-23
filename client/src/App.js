import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import LayoutPage from "./pages/Layout/LayoutPage";
import HomePage from './pages/Homepage/HomePage';
import UserChannel from "./pages/UserChannel/UserChannel";

// Define the routes
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<LayoutPage />}>
            <Route index element={<HomePage />} />
            <Route path='userchannel' element={<UserChannel />} />
        </Route>
    )
);

function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;
