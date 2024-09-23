import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../../components/Navbar/Navbar';
import SearchBar from '../../components/SearchBar/SearchBar';
import './Layout.scss';
import { useSelector } from 'react-redux';

function LayoutPage() {
    const isOpen = useSelector((state)=>state.navbar.isOpen);
    return (
        <>
            <div className='SearchBar'>
                <SearchBar />
            </div>
            <div className='container'>
                <div className={`left-side ${isOpen ? '' : 'hidden'}`}>
                    <Navbar />
                </div>
                <div className={isOpen ? 'right-side-WithNav' : 'right-side-WithoutNav'}>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default LayoutPage;
