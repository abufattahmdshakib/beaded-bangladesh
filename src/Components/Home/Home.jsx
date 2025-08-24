import React from 'react';
import BannerSlider from '../../pages/BannerSlider/BannerSlider';
import Testimonial from '../../pages/Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <div className='mb-10'>
                <BannerSlider></BannerSlider>
            </div>
            <div className='mt-10'>
                <Testimonial></Testimonial>
            </div>
        </div>
    );
};

export default Home;