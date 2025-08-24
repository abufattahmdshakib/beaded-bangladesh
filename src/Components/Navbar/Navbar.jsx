import React from 'react';
import logo from '../../../public/assets/Group.png';
import userlogo from '../../../public/assets/user.png';
import cartlogo from '../../../public/assets/shopping-bag.png';
import { Link, NavLink } from 'react-router-dom';
import MobileNavbar from './MobileNavbar';

const Navbar = () => {
    return (
        <div className="w-full mx-auto bg-white">
            {/* Desktop Logo */}
            <div className="hidden md:flex justify-center">
                <img className="w-[180px] h-[54px] my-6" src={logo} alt="Logo" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex justify-between items-center px-12">
                {/* Left navlinks */}
                <div className="flex gap-6 text-[#1E1E1E] text-[17px] font-[400] jost-font-uppercase mb-6">
                    <NavLink
                        to="/view-shop"
                        className={({ isActive }) =>
                            isActive ? "border-b border-black pb-[2px]" : ""
                        }
                    >
                        View Shop
                    </NavLink>
                    <NavLink
                        to="/hot-deals"
                        className={({ isActive }) =>
                            isActive ? "border-b border-black pb-[2px]" : ""
                        }
                    >
                        Hot Deals
                    </NavLink>
                    <NavLink
                        to="/eid-collection"
                        className={({ isActive }) =>
                            isActive ? "border-b border-black pb-[2px]" : ""
                        }
                    >
                        Eid Collection
                    </NavLink>
                    <NavLink
                        to="/boishakhi-collection"
                        className={({ isActive }) =>
                            isActive ? "border-b border-black pb-[2px]" : ""
                        }
                    >
                        Boishakhi Collection
                    </NavLink>
                </div>

                {/* Right user/cart */}
                <div className="flex items-center gap-6 text-[17px] text-[#1E1E1E] jost-font-uppercase mb-6">
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
