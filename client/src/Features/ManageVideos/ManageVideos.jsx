import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from './components/NavMangeVideo/Sidebar';
import SearchBar from './components/ManageSearchBar/SearchBar';
import NoNavbar from './components/NavMangeVideo/NoSideBar'
import devStore from '../../store/devStore';
import Dashboard from './pages/Dashboard';
import Content from './pages/Content';
import Comments from './pages/Comments'
import Subscription from './pages/Subscription';

import './ManageVideos.scss';


function ManageVideos() {

    const { isNavOpen, displayer } = devStore(); // Access the state

    // Create a function to dynamically render components based on `displayer`
    const renderContent = () => {
        switch (displayer) {
            case 'dashboard':
                return <Dashboard/>;
            case 'content':
                return <Content/>;
            case 'comments':
                return <Comments />;
            case 'subscription':
                return <Subscription/>
            // default:
            //     return <Dashboard />; // Fallback to Dashboard
        }
    };

    return (
        <>
            <div className='SearchBar'>
                <SearchBar />
            </div>
            <div className='layoutContainer'>
                <div className='left-side2'>
                    {isNavOpen ? " " : <NoNavbar />}
                </div>

                <div className={`left-side ${isNavOpen ? '' : 'hidden'}`}>
                    {isNavOpen ? <Navbar /> : <NoNavbar />}
                </div>
                <div className={isNavOpen ? 'right-side-WithNav' : 'right-side-WithoutNav'}>
                    <Outlet />
                    {renderContent()}
                </div>
                
                



            </div>
        </>
    )
}

export default ManageVideos
