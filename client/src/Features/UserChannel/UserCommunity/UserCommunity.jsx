import React from 'react'
import './UserCommunity.scss'
import profilePic from '../../../assets/profile_pic.webp'

function UserCommunity() {
    return (
        <div className='userCommunityContainer'>
            <div className='tweetContainer'>
                <div className='firstRow'>
                    <div>
                        <img src={profilePic} alt="" />
                        <p>Username</p>
                    </div>
                    <div>
                        <p>Visibility:</p>
                        <p>Public</p>
                    </div>
                </div>
                <div>
                    <textarea placeholder="Write something...">
                    </textarea>
                </div>
                <div>
                    <button>Post</button>
                </div>
            </div>
        </div>
    )
}

export default UserCommunity
