import React from 'react';



import './Content.scss';


function Content() {

 
    return (
        <>
            <div className='outer'>
                <div className='level-1'>
                    <div className='head'>
                        <div>
                            Channel content
                        </div>
                        
                    </div>
                    <div className='bttns'>
                        <div className='pressables'><button>Videos</button></div>
                        <div  className='pressables'><button>Shorts</button></div>
                        <div  className='pressables'><button>Live</button></div>
                        <div  className='pressables'><button>Post</button></div>
                        <div  className='pressables'><button>Playlists</button></div>
                        <div  className='pressables'><button>Podcasts</button></div>
                        <div  className='pressables'><button>Promotions</button></div>
                    </div>
                </div>
                <div className="divider"></div>
                <div className='level-2'>

                </div>
                <div className='level-3'>

                </div>
                <div className='level-4'>

                </div>
            </div>
        </>
    )
}

export default Content
