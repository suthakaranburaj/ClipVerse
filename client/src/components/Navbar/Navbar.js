import React from 'react';

import { FaHome, FaHistory, FaRegThumbsUp } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { CgPlayList, CgProfile } from "react-icons/cg";
import { IoLogoYoutube } from "react-icons/io";

import './Navbar.scss';

function Navbar() {
  return (
    <div className="navbar-container">
      <div className='parts'>
        <div className='section flex gap-4'>
          <FaHome />
          Home
        </div>
        <div className='section flex gap-4'>
          <SiYoutubeshorts />
          Shorts
        </div>
        <div className='section flex gap-4'>
          <MdOutlineSubscriptions />
          Subscription
        </div>
      </div>
      <div className='line'></div>
      <div className='parts'>
        You >
        <div className='section flex gap-4'>
          <FaHistory />
          History
        </div>
        <div className='section flex gap-4'>
          <CgPlayList />
          Playlist
        </div>
        <div className='section flex gap-4'>
          <FaRegThumbsUp />
          Liked
        </div>
        <div className='section flex gap-4'>
          <IoLogoYoutube />
          Channel
        </div>
      </div>
      <div className='line'></div>
      <div className='parts'>
        Subscription
        <div className='section flex gap-4'>
          <CgProfile />
          Abhishek Upmanyu
        </div>
        <div className='section flex gap-4'>
          <CgProfile />
          Abhishek Upmanyu
        </div>
        <div className='section flex gap-4'>
          <CgProfile />
          Abhishek Upmanyu
        </div>
        <div className='section flex gap-4'>
          <CgProfile />
          Abhishek Upmanyu
        </div>
      </div>
      <div className='line'></div>
    </div>
  )
}

export default Navbar
