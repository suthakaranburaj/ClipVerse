import React from 'react';
import { MdOutlineSubscriptions } from "react-icons/md";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons'; // Import the cross icon 
import { faSquareMinus } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';


import './NoSideBar.scss';
import devStore from '../../../../store/devStore';
import useStore from '../../../../store/userStore';


function Navbar() {
    // const { isNavOpen } = devStore();
    // const { isAuthenticated, user } = useStore();
    const { setDisplayer } = devStore(); 
    return (
        <div className='sidebar2'>

            <div className="sidebar2-section">
                {/* <Link to="/"> */}
                <div className="sidebar2-item" onClick={() => setDisplayer('dashboard')}>
                <FontAwesomeIcon icon={faChartLine} className="sidebar2-icon"  />
                    <span className="sidebar2-label">Dashboard</span>
                </div>
                {/* </Link> */}
                <div className="sidebar2-item" onClick={() => setDisplayer('content')}>
                    <FontAwesomeIcon icon={faSquareMinus} className="Man-sidebar-icon"/>
                    <span className="sidebar2-label">Content</span>
                </div>
                <div className="sidebar2-item" onClick={() => setDisplayer('comments')}>
                    <MdOutlineSubscriptions className="sidebar2-icon" size={24} />
                    <span className="sidebar2-label">Comments</span>
                </div>
                <div className="sidebar2-item" onClick={() => setDisplayer('subscription')}>
                    <FontAwesomeIcon icon={faUser} className="sidebar2-icon"/>
                    <div className="sidebar2-label">Subscribers</div>

                </div>
            </div>
        </div>
    );
}

export default Navbar;
