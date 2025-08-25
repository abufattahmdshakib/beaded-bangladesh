import React, { useState } from "react";
import logo from "../../../src/assets/Group.png";
import userlogo from "../../../src/assets/user.png";
import cartlogo from "../../../src/assets/shopping-bag.png";
import { Link, NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const MobileNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClose = () => setMenuOpen(false);

  return (
    <div className="md:hidden w-full bg-white relative z-50 shadow-md">
      {/* Top bar */}
      <div className="flex justify-between items-center px-4 py-4">
        {!menuOpen ? (
          // Hamburger icon left
          <button onClick={() => setMenuOpen(true)}>
            <HiMenu size={20} className="text-black" />
          </button>
        ) : (
          // Menu open: logo left, X icon right
          <>
           <Link to="/"><img className="w-[120px] h-[36px]" src={logo} alt="Logo" /></Link>
            <button onClick={handleClose}>
              <HiX size={20} className="text-black" />
            </button>
          </>
        )}

        {/* Center logo only when menu closed */}
        {!menuOpen && (
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link to="/"><img className="w-[120px] h-[36px]" src={logo} alt="Logo" /></Link>
          </div>
        )}

        {/* Cart icon only when menu closed */}
        {!menuOpen && (
          <div>
            <img src={cartlogo} alt="shopping-bag" />
          </div>
        )}
      </div>

      {/* Dropdown menu */}
      {menuOpen && (
        <div className="bg-white h-[100dvh] px-4 pb-4 flex flex-col gap-4 border-t jost-font-uppercase">
          <NavLink
            to="/ViewShop"
            className={({ isActive }) =>
              `text-[17px] ${isActive ? "text-[#1E1E1E] font-bold" : "text-[#1E1E1E]"}`
            }
            onClick={handleClose}
          >
            View Shop
          </NavLink>

          <NavLink
            to="/HotDeals"
            className={({ isActive }) =>
              `text-[17px] ${isActive ? "text-[#1E1E1E] font-bold" : "text-[#1E1E1E]"}`
            }
            onClick={handleClose}
          >
            Hot Deals
          </NavLink>

          <NavLink
            to="/EidCollection"
            className={({ isActive }) =>
              `text-[17px] ${isActive ? "text-[#1E1E1E] font-bold" : "text-[#1E1E1E]"}`
            }
            onClick={handleClose}
          >
            Eid Collection
          </NavLink>

          <NavLink
            to="/BoishakhiCollection"
            className={({ isActive }) =>
              `text-[17px] ${isActive ? "text-[#1E1E1E] font-bold" : "text-[#1E1E1E]"}`
            }
            onClick={handleClose}
          >
            Boishakhi Collection
          </NavLink>

          {/* User section */}
          <div
            onClick={handleClose}
            className="flex items-center gap-2 mt-2 text-[#1E1E1E]"
          >
            <img src={userlogo} alt="userlogo" className="w-6 h-6" />
            <Link to="/">Sign In</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
