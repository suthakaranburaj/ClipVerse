import React, { useEffect ,useState} from 'react'
import { Link } from 'react-router-dom'
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

    // useEffect(() => {
    //     if (video?.owner?._id) {
    //         setChannelId(video.owner._id);
    //     }
    // }, [video]);

    useEffect(() => {
        const fetchSubscribedChannels = async () => {
            if (subscriberId) {
                await getSubscribedChannels(subscriberId);
                setMinLoading(false);
            }
        };
        fetchSubscribedChannels();
    }, [subscriberId, getSubscribedChannels]); // Remove subscribedChannels from dependencies


    useEffect(() => {
        const fetchSubscribersForChannels = async () => {
            if (subscribedChannels && subscribedChannels.length > 0) {
                const fetchSubscribers = subscribedChannels.map(async (channel) => {
                    if (channel?._id) {
                        const subscribers = await getUserChannelSubscribers(channel._id);
                        setSubscribersMap((prevMap) => ({
                            ...prevMap,
                            [channel._id]: subscribers.length,
                        }));
                    }
                });
                await Promise.all(fetchSubscribers);
            }
        };

        if (subscribedChannels.length > 0) {
            fetchSubscribersForChannels();
        }
    }, [subscribedChannels, getUserChannelSubscribers]); // Only fetch subscribers when subscribedChannels is updated

    if (subscriptionStoreLoading || minLoading) return <div><Loader /></div>;  
    return (
        <div className='SubscriptionContainer'>
            <div className='SubscribedChannel'>
                {subscribedChannels?.map((subscribedChannel)=>(
                    <Link key={subscribedChannel?._id} to={`/${subscribedChannel?.username}/${subscribedChannel?._id}`}>
                        <div  className='subscribedChannelContainer'>
                            <div className='subscribedChannelContainer1'>
                                <img src={subscribedChannel?.avatar} alt="" />
                            </div>
                            <div className='subscribedChannelContainer2'>
                                <p>{subscribedChannel?.username}</p>
                                <p>{subscribedChannel?.fullName}</p>
                                <p>{subscribersMap[subscribedChannel?._id] !== undefined ? subscribersMap[subscribedChannel._id] : '-'} subscribers</p>
                            </div>
                        </div>
                    </Link>
                ))}
                
            </div>
        </div>
    )
}

export default Subscriptions
