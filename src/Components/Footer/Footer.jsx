import React from 'react';
import logo2 from '../../../src/assets/image 3.png';
import { Link } from 'react-router-dom';
import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='block lg:flex justify-center lg:justify-between items-center h-[210px] lg:h-[120px] bg-[#1E1E1E] text-center lg:text-left'>
            <div className='block lg:flex items-center gap-4 font-[400] jost-font-capitalize lg:pl-16 justify-center'>
                <p className='lg:block hidden text-[#FFFFFF] text-[19px]'>Follow us on</p>
                <img className='block lg:hidden mx-auto pt-5 mb-4' src={logo2} alt="logo2" />
                <div className='flex gap-4 justify-center'>
                    <Link
                        to="https://www.facebook.com/abufattahmdshakib"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#FFF] hover:text-[#1877F2] transition"
                    >
                        <FaFacebook size={24} />
                    </Link>
                    <Link
                        to="https://github.com/abufattahmdshakib"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#FFF] hover:text-[#67C18C] transition"
                    >
                        <FaGithub size={24} />
                    </Link>
                </div>
            </div>
            <div className='mt-2 lg:mt-0'>
                <p className='text-[19px] text-[#FFF] font-[400] jost-font-capitalize'>
                    @All rights reserved by <span className='text-[#67C18C]'>beadedbangladesh</span>
                </p>
            </div>
            <div className='mt-2 lg:mt-0'>
                <p className='text-[19px] text-[#FFF] font-[400] jost-font-capitalize lg:pr-16'>
                    Made with love by{" "}
                    <Link
                        to="https://www.linkedin.com/in/abu-fattah-md-shakib/" target="_blank"
                        className='
      relative text-[#67C18C] 
      after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#67C18C] 
      after:transition-all after:duration-300 hover:after:w-full
    '
                    >
                        Abu Fattah Md Shakib
                    </Link>
                </p>

            </div>
        </div>

    );
};

export default Footer;