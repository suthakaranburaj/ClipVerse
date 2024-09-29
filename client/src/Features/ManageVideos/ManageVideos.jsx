import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from './components/NavMangeVideo/Sidebar';
import SearchBar from './components/ManageSearchBar/SearchBar';
import NoNavbar from './components/NavMangeVideo/NoSideBar'
import devStore from '../../store/devStore';

import './ManageVideos.scss';


function ManageVideos() {

    const { isNavOpen } = devStore();
    return (
        <>
            <div className='SearchBar'>
                <SearchBar />
            </div>
            <div className='container'>
                <div  className='left-side2'>
                    {isNavOpen ? " " : <NoNavbar />}
                </div>
                
                <div className={`left-side ${isNavOpen ? '' : 'hidden'}`}>
                {isNavOpen ? <Navbar /> : <NoNavbar />}
                </div>
                <div className={isNavOpen ? 'right-side-WithNav' : 'right-side-WithoutNav'}>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default ManageVideos
