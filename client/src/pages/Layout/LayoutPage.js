import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Navbar from '../../components/Navbar/Navbar';
import HomePage from '../Homepage/HomePage';

function LayoutPage() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<HomePage />} />
            </Routes>
        </>
    )
}

export default LayoutPage
