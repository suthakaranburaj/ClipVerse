import React, { useEffect ,useState} from 'react'
import './Subscriptions.scss'
import useSubscriptionStore from '../../store/useSubscriptionStore'
import userStore from '../../store/userStore'
import Loader from '../../components/Loader/Loader'

function Subscriptions() {

    const {user} = userStore();
    const 
    {
        getSubscribedChannels,
        subscribedChannels,
        isLoading:subscriptionStoreLoading,
        channelSubscribers,
        getUserChannelSubscribers,
    } = useSubscriptionStore();
    const subscriberId = user?._id;
    const [minLoading, setMinLoading] = useState(true); // State for minimum loading time
    const [subscribersMap, setSubscribersMap] = useState({}); // State to store subscribers for each channel



    useEffect(()=>{
        const fetchData = async()=>{
            if(subscriberId){
                await getSubscribedChannels(subscriberId);
                // await getUserChannelSubscribers(subscriberId);

                const fetchSubscribers = subscribedChannels?.map(async(channel)=>{
                    if(channel?._id){
                        const subscribers = await getUserChannelSubscribers(channel._id); // Fetch subscribers for each channel
            
                        // Update subscribersMap with channelId as the key and subscriber count as the value
                        setSubscribersMap((prevMap) => ({
                            ...prevMap,
                            [channel._id]: subscribers.length, // Assuming you get an array of subscribers
                        }));
                    }
                });
                await Promise.all(fetchSubscribers);
            }

            setTimeout(() => {
                setMinLoading(false);
            }, 700);
        }
        fetchData();
    },[subscriberId])

    if (subscriptionStoreLoading || minLoading) return <div><Loader /></div>;  
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
                            <p>{subscribersMap[subscribedChannel?._id] || 0} subscribers</p>
                        </div>
                    </div>
                ))}
                
            </div>
        </div>
    )
}

export default Subscriptions
