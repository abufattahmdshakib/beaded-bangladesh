import React from 'react';
import BannerSlider from '../../pages/BannerSlider/BannerSlider';
import Testimonial from '../../pages/Testimonial/Testimonial';
import TopCategories from '../../pages/TopCategories/TopCategories';
import OurBestsellers from '../../pages/OurBestsellers/OurBestsellers';
import OurNecklaces from '../../pages/OurNecklaces/OurNecklaces';
import OurEarrings from '../../pages/OurEarrings/OurEarrings';

const Home = () => {
    return (
        <div>
            <div className='mb-10'>
                <BannerSlider></BannerSlider>
            </div>
            <div className='my-20 w-11/12 mx-auto'>
                <OurBestsellers></OurBestsellers>
            </div>
            <div className='my-20 w-11/12 mx-auto'>
                <TopCategories></TopCategories>
            </div>
            <div className='my-20 w-11/12 mx-auto'>
                <OurNecklaces></OurNecklaces>
            </div>
            <div className='my-20 w-11/12 mx-auto'>
                <OurEarrings></OurEarrings>
            </div>
            <div className='mt-10'>
                <Testimonial></Testimonial>
            </div>
        </div>
    );
};

export default Home;