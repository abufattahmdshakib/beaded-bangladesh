import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // শুধু আগের পেজে যাবে
    navigate(-1);
  };

  return (
    <div className="border-t-1 border-[#7D7D7D] px-4">
      <div className="flex justify-center items-center min-h-screen my-8">
        <div className="bg-gray-100 p-12 w-full max-w-md">
          <h1 className="jost-font-uppercase text-[26px] text-[#1E1E1E] font-[400] text-center mb-8">
            Change Password
          </h1>

          <form onSubmit={handleSubmit}>
            {/* Current Password */}
            <div className="mb-4 relative">
              <label className="block text-[#1E1E1E] text-[14px] mb-1 font-[500] jost-font-uppercase">
                Current Password
              </label>
              <input
                type={showCurrentPassword ? "text" : "password"}
                name="currentPassword"
                placeholder="Enter your current password"
                className="w-full border border-[#B7B7B7] px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder:text-[#7D7D7D]"
                required
              />
              <span
                className="absolute right-3 top-9 cursor-pointer text-[#1E1E1E]"
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
              >
                {showCurrentPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {/* New Password */}
            <div className="mb-4 relative">
              <label className="block text-[#1E1E1E] text-[14px] mb-1 font-[500] jost-font-uppercase">
                New Password
              </label>
              <input
                type={showNewPassword ? "text" : "password"}
                name="newPassword"
                placeholder="Enter your new password"
                className="w-full border border-[#B7B7B7] px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder:text-[#7D7D7D]"
                required
              />
              <span
                className="absolute right-3 top-9 cursor-pointer text-[#1E1E1E]"
                onClick={() => setShowNewPassword(!showNewPassword)}
              >
                {showNewPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {/* Confirm Password */}
            <div className="mb-6 relative">
              <label className="block text-[#1E1E1E] text-[14px] mb-1 font-[500] jost-font-uppercase">
                Confirm Password
              </label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm your new password"
                className="w-full border border-[#B7B7B7] px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder:text-[#7D7D7D]"
                required
              />
              <span
                className="absolute right-3 top-9 cursor-pointer text-[#1E1E1E]"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {/* Action Buttons - vertically */}
            <div className="flex flex-col gap-4 mt-6">
              <button
                type="submit"
                className="w-60 mx-auto text-[14px] text-center rounded-4xl bg-[#00B5A5] text-white py-[12px] jost-font-uppercase font-[400] hover:bg-[#009988] transition"
              >
                Save
              </button>
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="w-60 mx-auto text-[14px] text-center rounded-4xl border-2 text-[#1E1E1E] py-2 jost-font-uppercase font-[500] hover:border-3 transition"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
