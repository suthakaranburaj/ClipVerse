import React from 'react'
import logo from '../../assets/ClipVerse_logo_with_name.png'
import './SplashScreen.scss'
function SplashScreen() {
    return (
        <div>
            <div className="splash-screen">
            <img src={logo} alt="Company Logo" className="logo" />
            </div>
        </div>
    )
}

export default SplashScreen
