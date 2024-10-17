import React from "react";
import { FaHome, FaHistory, FaRegThumbsUp } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { CgPlayList, CgProfile } from "react-icons/cg";
import { RiVideoLine, RiPlayListLine } from "react-icons/ri";
import { Link, useNavigate, NavLink } from "react-router-dom";
import useStore from '../../store/userStore';
import { useState, useEffect } from "react";


import useSubscriptionStore from "../../store/useSubscriptionStore";

import './Navbar.scss';

function Navbar() {

    const {user} = useStore();
    const channelId = user?._id;
    const navigate = useNavigate();

    const {getSubscribedChannels,subscribedChannels} = useSubscriptionStore();
    const subscriberId = user?._id;

    useEffect(()=>{
        const fetchData = async()=>{
            if(subscriberId){
                await getSubscribedChannels(subscriberId);
            }
        }
        fetchData();
    },[subscriberId ])
    console.log(subscribedChannels)
    const handleLinkToCommunity = (subscribedChannel)=>{
        navigate(`/community/${subscribedChannel?._id}`, { 
            state: { subscribedChannel } 
        });
    }
    return (
        <div className="sidebar">
            <div className="sidebar-section">
                <NavLink 
                    to="/"
                    className={({isActive}) =>(isActive ? 'sidebar-item active' : 'sidebar-item')}
                >
                    <FaHome className="sidebar-icon" size={24} />
                    <span className="sidebar-label">Home</span>
                </NavLink>
                {/* <div className="sidebar-item">
                    <SiYoutubeshorts className="sidebar-icon" size={24} />
                    <span className="sidebar-label">Feeds</span>
                </div> */}
                <NavLink 
                    to='/subscription'
                    className={({isActive}) =>(isActive ? 'sidebar-item active' : 'sidebar-item')}
                >
                    <MdOutlineSubscriptions className="sidebar-icon" size={24} />

                    <span className="sidebar-label">Subscriptions</span>
                </NavLink>
            </div>
            <div className="sidebar-divider"></div>
            <div className="sidebar-section">
                <div className="sidebar-header">You</div>
                <NavLink 
                    to={`/${user?.username}/${channelId}`} key={channelId} 
                    className='sidebar-item'
                >
                    <CgProfile className="sidebar-icon" size={24} />
                    Your channel
                </NavLink>
                <NavLink 
                    to="/watch-history"
                    className={({isActive}) =>(isActive ? 'sidebar-item active' : 'sidebar-item')}
                >
                    <FaHistory className="sidebar-icon" size={24} />
                    Watch History
                </NavLink>
                {/* <NavLink 
                    to={`userchannel/${user?._id}/playlist`} 
                    className={({isActive}) =>(isActive ? 'sidebar-item active' : 'sidebar-item')}
                >
                    <CgPlayList className="sidebar-icon" size={24} />
                    Playlists                    
                </NavLink> */}
                {/* <div className="sidebar-item">
                    <RiVideoLine className="sidebar-icon" size={24} />
                    <span className="sidebar-label">Your videos</span>
                </div> */}
                {/* <div className="sidebar-item">
                    <RiPlayListLine className="sidebar-icon" size={24} />
                    <span className="sidebar-label">Watch later</span>
                </div> */}
                <NavLink 
                    to='likedvideos'
                    className={({isActive}) =>(isActive ? 'sidebar-item active' : 'sidebar-item')}
                >
                    <FaRegThumbsUp className="sidebar-icon" size={24} />
                    <span className="sidebar-label">Liked videos</span>
                </NavLink>
            </div>
            <div className="sidebar-divider"></div>
            <div className="sidebar-section pb-12">
                <div className="sidebar-header">Communities</div>
                {subscribedChannels?.map((subscribedChannel)=>(
                    <div 
                        className="sidebar-item" 
                        key={subscribedChannel?._id}
                        onClick={()=>handleLinkToCommunity(subscribedChannel)}
                    >
                        <img
                            src={subscribedChannel?.avatar}
                            alt="Profile 1"
                            className="profile-img"
                        />
                        <span className="sidebar-label">{subscribedChannel.username}</span>
                    </div>
                ))}
            </div>
        </div>
  );
}

export default Navbar;
