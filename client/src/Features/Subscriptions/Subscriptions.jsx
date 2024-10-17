import React, { useEffect } from 'react'
import './Subscriptions.scss'
import useSubscriptionStore from '../../store/useSubscriptionStore'
import userStore from '../../store/userStore'

function Subscriptions() {

    const {user} = userStore();
    const {getSubscribedChannels,subscribedChannels} = useSubscriptionStore();
    const subscriberId = user?._id;

    useEffect(()=>{
        const fetchData = async()=>{
            if(subscriberId){
                await getSubscribedChannels(subscriberId);
            }
        }
        fetchData();
    },[subscriberId])
    return (
        <div className='SubscriptionContainer'>
            <div className='SubscribedChannel'>
                {subscribedChannels?.map((subscribedChannel)=>(
                    <div key={subscribedChannel?._id} className='subscribedChannelContainer'>
                        <div className='subscribedChannelContainer1'>
                            <img src={subscribedChannel?.avatar} alt="" />
                        </div>
                        <div className='subscribedChannelContainer2'>
                            <p>{subscribedChannel?.username}</p>
                            <p>{subscribedChannel?.fullName}</p>
                        </div>
                    </div>
                ))}
                
            </div>
        </div>
    )
}

export default Subscriptions
