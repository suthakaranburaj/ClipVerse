import React from 'react';
import image from "https://gratisography.com/photo/cyber-kitty/" 
function HomePage() {
    return (
        <div className='flex'>
            <div>
                <img 
                    src={image}
                    alt="Description of the image" 
                />
            </div>
        </div>
    );
}

export default HomePage;
