import React from 'react';
import { Outlet ,NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons'



import './ManageVideos.scss';
import useStore from '../../store/userStore';


function ManageVideos() {

    const {isAuthenticated , user} = useStore();
    return (
        <>
        <div>
            hello
        </div>
        </>
    )
}

export default ManageVideos
