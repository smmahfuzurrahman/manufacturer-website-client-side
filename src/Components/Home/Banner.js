import React from 'react';
import banner from '../../images/Banner.png';
import './Banner.css';
const Banner = () => {
    return (
        <div className="body">

            <div className='banner-text'>
                <h1>Computer Village</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia architecto ducimus consectetur quisquam porro fuga aperiam, consequuntur molestias mollitia eaque repellat illo quis doloremque eveniet, cupiditate quaerat optio officiis deserunt?</p>
            </div>

            <div className='absolute right-0 z-1 sm:none'>
                <img src={banner} alt="" />
            </div>

        </div>
    );
};

export default Banner;