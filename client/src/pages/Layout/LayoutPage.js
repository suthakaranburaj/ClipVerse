import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Navbar from '../../components/Navbar/Navbar';
import HomePage from '../Homepage/HomePage';

import './Layout.scss';
import SearchBar from '../../components/SearchBar/SearchBar';

function LayoutPage() {
    return (
        <>
            <div className='container'>
                <div className='left-side'>
                    <Navbar />
                </div>
                <div className='right-side'>
                    <div className='SearchBar'>
                        <SearchBar/>
                    </div>
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default LayoutPage
