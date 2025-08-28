import React, { useState, useContext, useRef, useEffect } from "react";
import logo from "../../../src/assets/Group.png";
import userlogo from "../../../src/assets/user.png";
import cartlogo from "../../../src/assets/shopping-bag.png";
import { Link, NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { AuthContext } from "../../../src/pages/Auth/AuthProvider";

const MobileNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const userRef = useRef(null);

  const handleClose = () => {
    setMenuOpen(false);
    setUserDropdownOpen(false);
  };

  const handleLogout = () => {
    logOut()
      .then(() => console.log("Logged out successfully"))
      .catch((error) => console.log(error));
    handleClose();
  };

  // Close user dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userRef.current && !userRef.current.contains(event.target)) {
        setUserDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="md:hidden w-full bg-white relative z-50 shadow-md">
      {/* Top bar */}
      <div className="flex justify-between items-center px-4 py-4">
        {!menuOpen ? (
          <button onClick={() => setMenuOpen(true)}>
            <HiMenu size={20} className="text-black" />
          </button>
        ) : (
          <>
            <Link to="/"><img className="w-[120px] h-[36px]" src={logo} alt="Logo" /></Link>
            <button onClick={handleClose}>
              <HiX size={20} className="text-black" />
            </button>
          </>
        )}

        {!menuOpen && (
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link to="/"><img className="w-[120px] h-[36px]" src={logo} alt="Logo" /></Link>
          </div>
        )}

        {!menuOpen && (
          <div>
            <Link to="/cart">
              <img src={cartlogo} alt="shopping-bag" />
            </Link>
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
          <div className="mt-4 flex flex-col gap-2" ref={userRef}>
            {user ? (
              <div>
                <div
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                >
                  <img
                    src={user.photoURL || userlogo}
                    alt="userimg"
                    className="w-10 h-10 rounded-full border-3 border-[#00B5A5]"
                  />
                  <span className="text-[#00B5A5] jost-font-uppercase border-b-2 font-[500]">{user.displayName || "User"}</span>
                </div>

                {userDropdownOpen && (
                  <div className="flex flex-col mt-2 ml-12 gap-2">
                    <Link
                      to="/profile"
                      onClick={handleClose}
                      className="text-left text-[#1E1E1E] font-[400] hover:underline"
                    >
                      My Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="text-left text-[#00B5A5] font-[400] hover:underline"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/signin" onClick={handleClose} className="flex items-center gap-2">
                <img src={userlogo} alt="userlogo" className="w-6 h-6" />
                Sign In
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
