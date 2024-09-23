import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../../components/Navbar/Navbar';
import SearchBar from '../../components/SearchBar/SearchBar';

import devStore from '../../store/devStore';

import './Layout.scss';

function LayoutPage() {

    const { isNavOpen } = devStore();

    return (
        <>
            <div className='SearchBar'>
                <SearchBar />
            </div>
            <div className='container'>
                <div className={`left-side ${isNavOpen ? '' : 'hidden'}`}>
                    <Navbar />
                </div>
                <div className={isNavOpen ? 'right-side-WithNav' : 'right-side-WithoutNav'}>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default LayoutPage;
