import React, { useState, useContext, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../src/pages/Auth/AuthProvider";
import Swal from "sweetalert2";

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { user, login, handleWithGoogle } = useContext(AuthContext); // resetPassword removed from here
    const navigate = useNavigate();

    const passwordRegex =  /^.{8,}$/;

    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [user, navigate]);

    // login form submit
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        if (!passwordRegex.test(password)) {
            Swal.fire({
                icon: "error",
                title: "Weak Password",
                text: "Password must be at least 8 characters long.",
            });
            return;
        }

        login(email, password)
            .then((result) => {
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Logged in Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate("/");
                console.log(result.user);
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Login Failed",
                    text: error.message,
                });
            });
    };

    return (
        <div className="border-t-1 border-[#7D7D7D] px-4">
            <div className="flex justify-center items-center min-h-screen">
                <div className="bg-gray-100 p-8 w-full max-w-md">
                    <h1 className="jost-font-uppercase text-[36px] text-[#1E1E1E] font-[400] text-center mb-4">
                        Sign In
                    </h1>

                    <h2 className="jost-font-uppercase text-[14px] text-center text-[#1E1E1E] font-[400] mb-3">
                        CONNECT WITH
                    </h2>

                    <button
                        onClick={handleWithGoogle}
                        className="w-full flex items-center justify-center gap-2 border border-[#B7B7B7] py-2 jost-font-uppercase text-[#1E1E1E] font-[400] hover:bg-gray-100 transition"
                    >
                        <FcGoogle size={22} />
                        Continue with Google
                    </button>

                    <div className="flex items-center my-6">
                        <hr className="flex-grow border-gray-300" />
                        <span className="px-2 text-[#1E1E1E] text-sm font-[400] jost-font-uppercase">OR</span>
                        <hr className="flex-grow border-gray-300" />
                    </div>

                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label className="block text-[#1E1E1E] text-[14px] mb-1 font-[400] jost-font-uppercase">Email</label>
                            <input
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                                className="w-full border border-[#B7B7B7] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder:text-[#7D7D7D] placeholder:font-[400] placeholder:jost-font-capitalize"
                                required
                            />
                        </div>

                        <div className="mb-4 relative">
                            <label className="block text-[#1E1E1E] text-[14px] mb-1 font-[400] jost-font-uppercase">Password</label>
                            <input
                                name="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                className="w-full border border-[#B7B7B7] px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder:text-[#7D7D7D] placeholder:font-[400] placeholder:jost-font-capitalize"
                                required
                            />
                            <span
                                className="absolute right-3 top-9 cursor-pointer text-[#1E1E1E]"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>

                        <div className="flex justify-center my-4">
                            <button type="submit" className="w-60 text-center rounded-4xl bg-[#00B5A5] text-white py-2 jost-font-uppercase font-[400] hover:bg-[#009988] transition">
                                Sign In
                            </button>
                        </div>
                    </form>

                    {/* Changed here: Navigate to RecoverPassword page */}
                    <p
                        onClick={() => navigate("/recover-password")} // ✅ Change marked
                        className="text-center text-[14px] text-[#1E1E1E] mt-2 cursor-pointer hover:underline font-[500] jost-font-uppercase"
                    >
                        Forgot Password?
                    </p>

                    <p className="text-center text-[14px] text-[#7D7D7D] border-t-1 pt-4 mt-6 font-[400]">
                        Don’t have an account?{" "}
                        <Link to="/signup" className="text-[#00B5A5] font-[400] jost-font-uppercase hover:underline">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
