import React, { useState, useContext } from "react";
import { AuthContext } from "../pages/Auth/AuthProvider";

const UserProfile = () => {
    const { user, wishlist } = useContext(AuthContext);
    const [activeTab, setActiveTab] = useState("profile");

    return (
        <div className="border-t-1 border-[#7D7D7D] px-4">
            <div className="my-10 bg-white p-6">
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

                {/* Buttons */}
                <div className="flex justify-around mb-4 flex-wrap gap-2">
                    <button onClick={() => setActiveTab("profile")} className={`px-3 py-2 rounded ${activeTab === "profile" ? "bg-[#00B5A5] text-white" : "bg-gray-100"}`}>Profile Info</button>
                    <button onClick={() => setActiveTab("addresses")} className={`px-3 py-2 rounded ${activeTab === "addresses" ? "bg-[#00B5A5] text-white" : "bg-gray-100"}`}>My Addresses</button>
                    <button onClick={() => setActiveTab("orders")} className={`px-3 py-2 rounded ${activeTab === "orders" ? "bg-[#00B5A5] text-white" : "bg-gray-100"}`}>My Orders</button>
                    <button onClick={() => setActiveTab("wishlist")} className={`px-3 py-2 rounded ${activeTab === "wishlist" ? "bg-[#00B5A5] text-white" : "bg-gray-100"}`}>My Wishlist</button>
                </div>

                {/* Content Area */}
                <div className="border-t pt-4">
                    {activeTab === "profile" && (
                        <div>
                            <h3 className="font-semibold mb-2">Profile Info</h3>
                            <p>Email: {user?.email || "user@example.com"}</p>
                            <p>Mobile: {user?.mobile || "No mobile number added"}</p>
                            <p>Member since: Jan 2025</p>
                        </div>
                    )}
                    {activeTab === "addresses" && (
                        <div>
                            <h3 className="font-semibold mb-2">My Addresses</h3>
                            <p>No addresses added yet.</p>
                        </div>
                    )}
                    {activeTab === "orders" && (
                        <div>
                            <h3 className="font-semibold mb-2">My Orders</h3>
                            <p>You have no orders yet.</p>
                        </div>
                    )}
                    {activeTab === "wishlist" && (
                        <div>
                            <h3 className="font-semibold mb-2">My Wishlist</h3>
                            {wishlist.length === 0 ? (
                                <p>Your wishlist is empty.</p>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {wishlist.map((product) => (
                                        <div key={product.id} className="border p-3 rounded shadow hover:shadow-md transition">
                                            <img src={product.image} alt={product.title} className="w-full h-40 object-cover mb-2 rounded"/>
                                            <h4 className="text-[#1E1E1E] font-semibold">{product.title}</h4>
                                            <p className="text-[#00B5A5] font-[400]">{product.price}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
