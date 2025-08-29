import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";
import ProfileInfo from "./ProfileInfo";
import Addresses from "./Addresses";
import Orders from "./Orders";
import Wishlist from "./Wishlist";

const UserProfile = () => {
  const { user, wishlist } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState("profile");
  const navigate = useNavigate();

  // Redirect to homepage if user is not logged in
  useEffect(() => {
    if (!user) {
      navigate("/"); // redirect to homepage
    }
  }, [user, navigate]);

  // Optional: can still show a loading spinner briefly if you want
  if (!user) {
    return null; // or a spinner <p>Loading...</p>
  }

  return (
    <div className="rounded-lg shadow-md my-6">
      <div className="bg-white p-6">
        {/* User Image */}
        <div className="flex justify-center mb-4">
          <img
            src={user?.photoURL || "/src/assets/user.png"}
            alt="userimg"
            className="w-24 h-24 rounded-full border-4 border-[#00B5A5]"
          />
        </div>

        {/* User Name */}
        <h2 className="text-center text-xl font-semibold text-[#00B5A5] mb-6">
          {user?.displayName || "User"}
        </h2>

        {/* Tabs */}
        <div className="flex justify-around mb-4 flex-wrap gap-2">
          <button
            onClick={() => setActiveTab("profile")}
            className={`px-3 py-2 rounded ${
              activeTab === "profile"
                ? "bg-[#00B5A5] text-white"
                : "bg-gray-100"
            }`}
          >
            Profile Info
          </button>
          <button
            onClick={() => setActiveTab("addresses")}
            className={`px-3 py-2 rounded ${
              activeTab === "addresses"
                ? "bg-[#00B5A5] text-white"
                : "bg-gray-100"
            }`}
          >
            My Addresses
          </button>
          <button
            onClick={() => setActiveTab("orders")}
            className={`px-3 py-2 rounded ${
              activeTab === "orders"
                ? "bg-[#00B5A5] text-white"
                : "bg-gray-100"
            }`}
          >
            My Orders
          </button>
          <button
            onClick={() => setActiveTab("wishlist")}
            className={`px-3 py-2 rounded ${
              activeTab === "wishlist"
                ? "bg-[#00B5A5] text-white"
                : "bg-gray-100"
            }`}
          >
            My Wishlist
          </button>
        </div>

        {/* Tab Content */}
        <div className="border-t pt-4">
          {activeTab === "profile" && <ProfileInfo user={user} />}
          {activeTab === "addresses" && <Addresses />}
          {activeTab === "orders" && <Orders />}
          {activeTab === "wishlist" && <Wishlist wishlist={wishlist || []} />}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
