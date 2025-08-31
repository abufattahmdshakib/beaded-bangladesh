import React, { useContext, useState, useRef, useEffect } from 'react';
import logo from '../../../src/assets/Group.png';
import userlogo from '../../../src/assets/user.png';
import cartlogo from '../../../src/assets/shopping-bag.png';
import { Link, NavLink } from 'react-router-dom';
import MobileNavbar from './MobileNavbar';
import { AuthContext } from "../../../src/pages/Auth/AuthProvider";
import YourCart from '../../../src/pages/Cart/YourCart';

const Navbar = () => {
    const { user, logOut, cart = [] } = useContext(AuthContext);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const dropdownRef = useRef(null);

    const handleLogout = () => {
        logOut()
            .then(() => console.log('Logged out successfully'))
            .catch((error) => console.log(error));
        setDropdownOpen(false);
    };

    // Close dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="w-full mx-auto bg-white">
            {/* Desktop Logo */}
            <div className="hidden md:flex justify-center">
                <Link to="/"><img className="w-[180px] h-[54px] my-6" src={logo} alt="Logo" /></Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex justify-between items-center px-12">
                {/* Left navlinks */}
                <div className="flex items-center gap-6 md:gap-4 lg:gap-6 text-[#1E1E1E] text-[17px] md:text-[14px] lg:text-[17px] font-[400] jost-font-uppercase mb-6">
                    <NavLink to="/ViewShop" className={({ isActive }) => isActive ? "border border-black py-[8px] px-[14px]" : ""}>View Shop</NavLink>
                    <NavLink to="/HotDeals" className={({ isActive }) => isActive ? "border border-black py-[8px] px-[14px]" : ""}>Hot Deals</NavLink>
                    <NavLink to="/EidCollection" className={({ isActive }) => isActive ? "border border-black py-[8px] px-[14px]" : ""}>Eid Collection</NavLink>
                    <NavLink to="/BoishakhiCollection" className={({ isActive }) => isActive ? "border border-black py-[8px] px-[14px]" : ""}>Boishakhi Collection</NavLink>
                </div>

                {/* Right user/cart */}
                <div className="flex items-center gap-6 md:text-[14px] lg:text-[17px] text-[#1E1E1E] jost-font-uppercase mb-6">
                    {/* User / Auth */}
                    <div className="relative" ref={dropdownRef}>
                        {user ? (
                            <div>
                                <img
                                    className="w-10 h-10 border-3 border-[#00B5A5] rounded-full cursor-pointer"
                                    src={user.photoURL || userlogo}
                                    alt="userimg"
                                    onClick={() => setDropdownOpen(!dropdownOpen)}
                                />
                                {dropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-60 bg-white border border-gray-300 shadow-md flex flex-col px-2 py-2 z-50">
                                        <div className='mb-6'>
                                            <span className="pl-2 text-[#00B5A5] jost-font-uppercase py-2 border-b-2 font-[600]">{user.displayName || "User"}</span>
                                        </div>
                                        <Link
                                            to="/UserProfile"
                                            className="jost-font-uppercase text-[#1E1E1E] px-4 py-2 hover:bg-gray-100"
                                            onClick={() => setDropdownOpen(false)}
                                        >
                                            My Profile
                                        </Link>
                                        <button
                                            onClick={handleLogout}
                                            className="jost-font-uppercase text-[#1E1E1E] px-4 py-2 text-left hover:bg-gray-100 w-full"
                                        >
                                            Sign Out
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="flex items-center gap-2">
                                <img src={userlogo} alt="userlogo" />
                                <Link to="/signin">Sign In</Link>
                            </div>
                        )}
                    </div>

                    {/* Cart */}
                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => setIsCartOpen(true)}>
                        <img src={cartlogo} alt="cart" />
                        <span>CART: {cart.length}</span>
                    </div>
                </div>
            </div>

            {/* Mobile Navbar */}
            <MobileNavbar />

            {/* Cart Popup */}
            {isCartOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                    <div className="bg-white max-w-6xl w-full p-6 relative rounded-md overflow-auto max-h-[90vh]">
                        <button
                            onClick={() => setIsCartOpen(false)}
                            className="absolute top-4 right-4 text-xl font-bold"
                        >
                            X
                        </button>
                        <YourCart isOpen={isCartOpen} setIsOpen={setIsCartOpen} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
