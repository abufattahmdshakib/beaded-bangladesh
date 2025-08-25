import React from 'react';
import logo from '../../../src/assets/Group.png';
import userlogo from '../../../src/assets/user.png';
import cartlogo from '../../../src/assets/shopping-bag.png';
import { Link, NavLink } from 'react-router-dom';
import MobileNavbar from './MobileNavbar';

const Navbar = () => {
    return (
        <div className="w-full mx-auto bg-white">
            {/* Desktop Logo */}
            <div className="hidden md:flex justify-center">
                <Link to="/"><img className="w-[180px] h-[54px] my-6" src={logo} alt="Logo" /></Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex justify-between items-center px-12">
                {/* Left navlinks */}
                <div className="flex items-center gap-6 md:gap-4 lg:gap-6 text-[#1E1E1E] text-[17px] md:text-[14px]  lg:text-[17px] font-[400] jost-font-uppercase mb-6">
                    <NavLink
                        to="/ViewShop"
                        className={({ isActive }) =>
                            isActive ? "border border-black py-[8px] px-[14px]" : ""
                        }
                    >
                        View Shop
                    </NavLink>
                    <NavLink
                        to="/HotDeals"
                        className={({ isActive }) =>
                            isActive ? "border border-black py-[8px] px-[14px]" : ""
                        }
                    >
                        Hot Deals
                    </NavLink>
                    <NavLink
                        to="/EidCollection"
                        className={({ isActive }) =>
                            isActive ? "border border-black py-[8px] px-[14px]" : ""
                        }
                    >
                        Eid Collection
                    </NavLink>
                    <NavLink
                        to="/BoishakhiCollection"
                        className={({ isActive }) =>
                            isActive ? "border border-black py-[8px] px-[14px]" : ""
                        }
                    >
                        Boishakhi Collection
                    </NavLink>
                </div>

                {/* Right user/cart */}
                <div className="flex items-center gap-6 md:text-[14px] lg:text-[17px] text-[#1E1E1E] jost-font-uppercase mb-6">
                    <div className="flex items-center gap-2">
                        <img src={userlogo} alt="userlogo" />
                        <Link>Sign In</Link>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src={cartlogo} alt="shopping-bag" />
                        <Link>CART: 0</Link>
                    </div>
                </div>
            </div>

            {/* Mobile Navbar */}
            <MobileNavbar />
        </div>
    );
};

export default Navbar;
