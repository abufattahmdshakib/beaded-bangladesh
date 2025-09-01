import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";
import ProfileInfo from "./ProfileInfo";
import Wishlist from "./Wishlist";
import MyAddresses from "./MyAddresses";
import MyOrders from "./MyOrders";

const UserProfile = () => {
  const { user, wishlist } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState("profile");
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/"); 
    }
  }, [user, navigate]);

  
  if (!user) {
    return null; 
  }

  return (
    <div  className="border-t-1 border-[#7D7D7D] px-4">
      <div className="max-w-10/12 mx-auto my-20">
        {/* User Image */}
        <div className="flex justify-center mb-4">
          <img
            src={user?.photoURL || "/src/assets/user.png"}
            alt="userimg"
            className="w-44 h-44 rounded-full"
          />
        </div>

        {/* User Name */}
        <h2 className="text-center jost-font-uppercase text-[28px] md:text-[40px] font-[500] text-[#1E1E1E] mb-16">
          {user?.displayName || "User"}
        </h2>

        {/* Tabs */}
        <div className="grid md:grid-cols-4 grid-cols-2 mb-4 gap-2 border-b-2 border-gray-300">
          <button
            onClick={() => setActiveTab("profile")}
            className={`px-4 pb-4 ${
              activeTab === "profile"
                ? " text-[#00B5A5] border-b-2 jost-font-uppercase text-[16px] font-[500]"
                : "text-[#7D7D7D] jost-font-uppercase text-[16px] font-[500]"
            }`}
          >
            Profile Info
          </button>
          <button
            onClick={() => setActiveTab("addresses")}
            className={`px-4 pb-4 ${
              activeTab === "addresses"
                ? "text-[#00B5A5] border-b-2 jost-font-uppercase text-[16px] font-[500]"
                : "text-[#7D7D7D] jost-font-uppercase text-[16px] font-[500] "
            }`}
          >
            My Addresses
          </button>
          <button
            onClick={() => setActiveTab("orders")}
            className={`px-4 pb-4  ${
              activeTab === "orders"
                ? "text-[#00B5A5] border-b-2 jost-font-uppercase text-[16px] font-[500]"
                : "text-[#7D7D7D] jost-font-uppercase text-[16px] font-[500] "
            }`}
          >
            My Orders
          </button>
          <button
            onClick={() => setActiveTab("wishlist")}
            className={`px-4 pb-4 ${
              activeTab === "wishlist"
                ? "text-[#00B5A5] border-b-2 jost-font-uppercase text-[16px] font-[500]"
                : "text-[#7D7D7D] jost-font-uppercase text-[16px] font-[500] "
            }`}
          >
            My Wishlist
          </button>
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === "profile" && <ProfileInfo user={user} />}
          {activeTab === "addresses" && <MyAddresses />}
          {activeTab === "orders" && <MyOrders />}
          {activeTab === "wishlist" && <Wishlist wishlist={wishlist || []} />}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
