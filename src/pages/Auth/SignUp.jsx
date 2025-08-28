import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div className="border-t-1 border-[#7D7D7D] px-4">
            <div className="flex justify-center items-center min-h-screen my-12">
                <div className="bg-gray-100  p-12 w-full max-w-md">
                    {/* Heading */}
                    <h1 className="jost-font-uppercase text-[36px] text-[#1E1E1E] font-[400] text-center mb-4">
                        Sign Up
                    </h1>

                    {/* Connect With */}
                    <h2 className="jost-font-uppercase text-[14px] text-center text-[#1E1E1E] font-[400] mb-3">
                        CONNECT WITH
                    </h2>

                    {/* Google Sign In */}
                    <button className="w-full flex items-center justify-center gap-2 border border-[#B7B7B7] py-2 jost-font-uppercase text-[#1E1E1E] font-[400] hover:bg-gray-100 transition">
                        <FcGoogle size={22} />
                        Continue with Google
                    </button>

                    {/* Divider */}
                    <div className="flex items-center my-6">
                        <hr className="flex-grow border-gray-300" />
                        <span className="px-2 text-[#1E1E1E] text-sm font-[400] jost-font-uppercase">OR</span>
                        <hr className="flex-grow border-gray-300" />
                    </div>

                    {/* Name Input */}
                    <div className="mb-4">
                        <label className="block text-[#1E1E1E] text-[14px] mb-1 font-[400] jost-font-uppercase">Full Name</label>
                        <input
                            type="text"
                            placeholder="Enter your full name"
                            className="w-full border border-[#B7B7B7] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder:text-[#7D7D7D] placeholder:font-[400] placeholder:jost-font-capitalize"
                        />
                    </div>

                    {/* Email Input */}
                    <div className="mb-4">
                        <label className="block text-[#1E1E1E] text-[14px] mb-1 font-[400] jost-font-uppercase">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full border border-[#B7B7B7] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder:text-[#7D7D7D] placeholder:font-[400] placeholder:jost-font-capitalize"
                        />
                    </div>

                    {/* Mobile Input */}
                    <div className="mb-4">
                        <label className="block text-[#1E1E1E] text-[14px] mb-1 font-[400] jost-font-uppercase">Mobile</label>
                        <input
                            type="tel"
                            placeholder="Enter your mobile number"
                            className="w-full border border-[#B7B7B7] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder:text-[#7D7D7D] placeholder:font-[400] placeholder:jost-font-capitalize"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="mb-4 relative">
                        <label className="block text-[#1E1E1E] text-[14px] mb-1 font-[400] jost-font-uppercase">Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            className="w-full border border-[#B7B7B7] px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder:text-[#7D7D7D] placeholder:font-[400] placeholder:jost-font-capitalize"
                        />
                        <span
                            className="absolute right-3 top-9 cursor-pointer text-[#1E1E1E]"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>

                    {/* Confirm Password Input */}
                    <div className="mb-6 relative">
                        <label className="block text-[#1E1E1E] text-[14px] mb-1 font-[400] jost-font-uppercase">Confirm Password</label>
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm your password"
                            className="w-full border border-[#B7B7B7] px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder:text-[#7D7D7D] placeholder:font-[400] placeholder:jost-font-capitalize"
                        />
                        <span
                            className="absolute right-3 top-9 cursor-pointer text-[#1E1E1E]"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>

                    {/* Create Account Button */}
                    <div className="flex justify-center my-4">
                        <button className="w-60 text-center rounded-4xl bg-[#00B5A5] text-white py-2 jost-font-uppercase font-[400] hover:bg-[#009988] transition">
                            CREATE YOUR ACCOUNT
                        </button>
                    </div>

                    {/* Already have account link */}
                    <p className="text-center text-[14px] text-[#7D7D7D] border-t-1 pt-4 mt-6 font-[400]">
                        Already have an account?{" "}
                        <Link to="/signin" className="text-[#00B5A5] font-[400] jost-font-uppercase hover:underline">
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
