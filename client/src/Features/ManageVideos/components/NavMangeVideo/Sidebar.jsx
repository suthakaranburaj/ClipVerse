import React from 'react';
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import './Sidebar.scss';
import devStore from '../../../../store/devStore';
import useStore from '../../../../store/userStore';
import image1 from '../../../../assets/profile_pic.webp';
function Sidebar() {
  const { displayer, setDisplayer } = devStore(); // Access state and action
  const { isNavOpen } = devStore();
  const { user, isAuthenticated, logout } = useStore();
     
  return (
    <div className='Man-sidebar'>
      <div className="Profile-sidebar-section">
        <img
          src={isAuthenticated && user?.avatar ? user.avatar : image1}
          className="image rounded-full bg-green-600 mr-5 mb-5 flex items-center justify-center text-white font-bold cursor-pointer"

        />
        <div className="label">{isAuthenticated && user?.fullName ? user?.fullName : "Name"}</div>
        <div className="label">{isAuthenticated && user?.username ? user?.username : "Username"}</div>
      </div>
      <div className="Option-sidebar-section">
        <div className="Man-sidebar-item" onClick={() => setDisplayer('dashboard')}>
          <SiYoutubeshorts className="Man-sidebar-icon" size={24} />
          <span className="Man-sidebar-label">Dashboard</span>
        </div>
        <div className="Man-sidebar-item" onClick={() => setDisplayer('content')}>
          <MdOutlineSubscriptions className="Man-sidebar-icon" size={24} />
          <span className="Man-sidebar-label">Content</span>
        </div>
        <div className="Man-sidebar-item" onClick={() => setDisplayer('analytics')}>
          <SiYoutubeshorts className="Man-sidebar-icon" size={24} />
          <span className="Man-sidebar-label">Analytics</span>
        </div>
        <div className="Man-sidebar-item" onClick={() => setDisplayer('comments')}>
          <MdOutlineSubscriptions className="Man-sidebar-icon" size={24} />
          <span className="Man-sidebar-label">Comments</span>
        </div>
        <div className="Man-sidebar-item" onClick={()=> setDisplayer('subscription')}>
          <SiYoutubeshorts className="Man-sidebar-icon" size={24} />
          <span className="Man-sidebar-label">Subtitle</span>
        </div>
        <div className="Man-sidebar-item">
          <MdOutlineSubscriptions className="Man-sidebar-icon" size={24} />
          <span className="Man-sidebar-label">Copyright</span>
        </div>
        <div className="Man-sidebar-item">
          <SiYoutubeshorts className="Man-sidebar-icon" size={24} />
          <span className="Man-sidebar-label">Earn</span>
        </div>
        <div className="Man-sidebar-item">
          <MdOutlineSubscriptions className="Man-sidebar-icon" size={24} />
          <span className="Man-sidebar-label">Customisation</span>
        </div>
        <div className="Man-sidebar-item">
          <SiYoutubeshorts className="Man-sidebar-icon" size={24} />
          <span className="Man-sidebar-label">Audio Library</span>
        </div>
        
      </div>
      <div className="sidebar-divider"></div>
      <div className="help-sidebar-section">
        <div className="Man-sidebar-item">
          <SiYoutubeshorts className="Man-sidebar-icon" size={24} />
          <span className="Man-sidebar-label">Shorts</span>
        </div>
        <div className="Man-sidebar-item">
          <MdOutlineSubscriptions className="Man-sidebar-icon" size={24} />
          <span className="Man-sidebar-label">Subscriptions</span>
        </div>
      </div>
      {/* <div className="sidebar-section">
        <Link to="/">
          <div className="sidebar-item active">
            <FaHome className="sidebar-icon" size={24} />
            <span className="sidebar-label">Home</span>
          </div>
        </Link>
        <div className="sidebar-item">
          <SiYoutubeshorts className="sidebar-icon" size={24} />
          <span className="sidebar-label">Shorts</span>
        </div>
        <div className="sidebar-item">
          <MdOutlineSubscriptions className="sidebar-icon" size={24} />
          <span className="sidebar-label">Subscriptions</span>
        </div>
      </div>

      <div className="sidebar-divider"></div>

      <div className="sidebar-section">
        <div className="sidebar-header">You</div>
        <div className="sidebar-item">
          <CgProfile className="sidebar-icon" size={24} />
          <Link to="/userchannel" className="sidebar-label">Your channel</ Link>
          
        </div>
        <div className="sidebar-item">
          <FaHistory className="sidebar-icon" size={24} />
          <span className="sidebar-label">History</span>
        </div>
        <div className="sidebar-item">
          <CgPlayList className="sidebar-icon" size={24} />
          <span className="sidebar-label">Playlists</span>
        </div>
        <div className="sidebar-item">
          <RiVideoLine className="sidebar-icon" size={24} />
          <span className="sidebar-label">Your videos</span>
        </div>
        <div className="sidebar-item">
          <RiPlayListLine className="sidebar-icon" size={24} />
          <span className="sidebar-label">Watch later</span>
        </div>
        <div className="sidebar-item">
          <FaRegThumbsUp className="sidebar-icon" size={24} />
          <span className="sidebar-label">Liked videos</span>
        </div>
      </div>

      <div className="sidebar-divider"></div>

      <div className="sidebar-section">
        <div className="sidebar-header">Subscriptions</div>
        <div className="sidebar-item">
          <img src="/path-to-profile-image1.jpg" alt="Profile 1" className="profile-img" />
          <span className="sidebar-label">SR PAY</span>
        </div>

        <div className="sidebar-item">
          <img src="/path-to-profile-image4.jpg" alt="Profile 4" className="profile-img" />
          <span className="sidebar-label">Joe Rogan</span>
        </div>
      </div> */}
    </div>
  );
}

export default Sidebar;
