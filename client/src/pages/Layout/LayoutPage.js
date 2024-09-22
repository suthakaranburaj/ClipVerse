import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Navbar from '../../components/Navbar/Navbar';
import HomePage from '../Homepage/HomePage';
import SearchBar from '../../components/SearchBar/SearchBar';
import UserPage from '../UserChannel/UserChannel.jsx';
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
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/UserChannelName' element={<UserPage/>} />
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default LayoutPage
