import React, { useContext, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { AuthContext } from "../Auth/AuthProvider";
import { useNavigate } from "react-router-dom";

const ProfileInfo = ({ user }) => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const [editMode, setEditMode] = useState(false);

  const fullName = user?.displayName || "Not Provided";
  const nameParts = fullName.split(" ");
  const firstName = nameParts[0] || "Not added";
  const lastName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : "Not added";

  const handleSignOut = () => {
    logout()
      .then(() => navigate("/signin"))
      .catch((error) => console.error("Sign out error:", error));
  };

  const handleChangePassword = () => navigate("/change-password");

  return (
    <div className="bg-white p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 border-b border-gray-400 pb-3">
        <h1 className="text-[24px] font-[500] jost-font-capitalize text-[#1E1E1E]">Profile Info</h1>
        <button
          className="flex gap-2 text-gray-600 hover:text-[#00B5A5]"
          onClick={() => setEditMode(!editMode)}
        >
          {editMode ? "SAVE" : <>EDIT <FaEdit size={20} /></>}
        </button>
      </div>

      {/* Profile Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {/* First Name */}
        <div>
          <p className="jost-font-uppercase font-[500] text[14px] text-[#6D6D6D]">First Name</p>
          {editMode ? (
            <input
              type="text"
              defaultValue={firstName}
              className="w-full border border-[#B7B7B7] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-[#6D6D6D]"
            />
          ) : (
            <p className="jost-font-capitalize font-[400] text-[#1E1E1E]">{firstName}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <p className="jost-font-uppercase font-[500] text[14px] text-[#6D6D6D]">Email</p>
          {editMode ? (
            <input
              type="email"
              defaultValue={user?.email || "user@example.com"}
              className="w-full border border-[#B7B7B7] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-[#6D6D6D]"
            />
          ) : (
            <p className="jost-font-capitalize font-[400] text-[#1E1E1E]">{user?.email || "user@example.com"}</p>
          )}
        </div>

        {/* Gender */}
        <div>
          <p className="jost-font-uppercase font-[500] text[14px] text-[#6D6D6D]">Gender</p>
          {editMode ? (
            <input
              type="text"
              defaultValue={user?.gender || "Not specified"}
              className="w-full border border-[#B7B7B7] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-[#6D6D6D]"
            />
          ) : (
            <p className="jost-font-capitalize font-[400] text-[#1E1E1E]">{user?.gender || "Not specified"}</p>
          )}
        </div>

        {/* Last Name */}
        <div>
          <p className="jost-font-uppercase font-[500] text[14px] text-[#6D6D6D]">Last Name</p>
          {editMode ? (
            <input
              type="text"
              defaultValue={lastName}
              className="w-full border border-[#B7B7B7] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-[#6D6D6D]"
            />
          ) : (
            <p className="jost-font-capitalize font-[400] text-[#1E1E1E]">{lastName}</p>
          )}
        </div>

        {/* Phone No. */}
        <div>
          <p className="jost-font-uppercase font-[500] text[14px] text-[#6D6D6D]">Phone No.</p>
          {editMode ? (
            <input
              type="text"
              defaultValue={user?.mobile || "No mobile number added"}
              className="w-full border border-[#B7B7B7] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-[#6D6D6D]"
            />
          ) : (
            <p className="jost-font-capitalize font-[400] text-[#1E1E1E]">{user?.mobile || "No mobile number added"}</p>
          )}
        </div>

        {/* Date of Birth */}
        <div>
          <p className="jost-font-uppercase font-[500] text[14px] text-[#6D6D6D]">Date of Birth</p>
          {editMode ? (
            <input
              type="date"
              defaultValue={user?.dob || ""}
              className="w-full border border-[#B7B7B7] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-[#6D6D6D]"
            />
          ) : (
            <p className="jost-font-capitalize font-[400] text-[#1E1E1E]">{user?.dob || "Not provided"}</p>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      {!editMode && (
        <div className="flex justify-end mt-12 gap-4 md:gap-16">
          <button
            onClick={handleChangePassword}
            className="jost-font-uppercase font-[500] text[14px] text-black hover:underline"
          >
            Change Password
          </button>
          <button
            onClick={handleSignOut}
            className="text-black jost-font-uppercase font-[500] text[14px] hover:underline"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileInfo;
