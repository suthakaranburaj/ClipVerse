import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../../components/Navbar/Navbar';
import SearchBar from '../../components/SearchBar/SearchBar';
import './Layout.scss';

function LayoutPage() {
    return (
        <>
            <div className='SearchBar'>
                <SearchBar />
            </div>
            <div className='container'>
                <div className='left-side'>
                    <Navbar />
                </div>
                <div className='right-side'>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default LayoutPage;
