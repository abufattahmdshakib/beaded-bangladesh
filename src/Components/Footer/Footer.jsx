import React from 'react';
import logo2 from '../../../src/assets/image 3.png';
import facebook from '../../../src/assets/Group 23.png';
import instagram from '../../../src/assets/Group 24.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='block lg:flex justify-center lg:justify-between items-center h-[210px] lg:h-[120px] bg-[#1E1E1E] text-center lg:text-left'>
            <div className='block lg:flex items-center gap-4 font-[400] jost-font-capitalize lg:pl-16 justify-center'>
                <p className='lg:block hidden text-[#FFFFFF] text-[19px]'>Follow us on</p>
                <img className='block lg:hidden mx-auto pt-5 mb-4' src={logo2} alt="logo2" />
                <div className='flex gap-4 justify-center'>
                    <Link><img src={facebook} alt="facebook" /></Link>
                    <Link><img src={instagram} alt="facebook" /></Link>
                </div>
            </div>
            <div className='mt-2 lg:mt-0'>
                <p className='text-[19px] text-[#FFF] font-[400] jost-font-capitalize'>
                    @All rights reserved by <span className='text-[#67C18C]'>beadedbangladesh</span>
                </p>
            </div>
            <div className='mt-2 lg:mt-0'>
                <p className='text-[19px] text-[#FFF] font-[400] jost-font-capitalize lg:pr-16'>
                    Made with love by <span className='text-[#67C18C]'>Antopolis</span>
                </p>
            </div>
        </div>

    );
};

export default Footer;