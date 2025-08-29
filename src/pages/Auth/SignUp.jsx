import React, { useState, useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../src/pages/Auth/AuthProvider";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [imageURL, setImageURL] = useState(null);
    const { createUser, setUser, handleWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const passwordRegex = /^.{8,}$/;
    const imgbbApiKey = "077d9c3c5de79bf9f91643037ed35fc4";

    // ✅ Image Upload
    const handleImageUpload = (e) => {
        const imageFile = e.target.files[0];
        const formData = new FormData();
        formData.append("image", imageFile);

        fetch(`https://api.imgbb.com/1/upload?key=${imgbbApiKey}`, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    setImageURL(data.data.display_url);
                    Swal.fire({
                        icon: "success",
                        title: "Image Uploaded",
                        text: "Image uploaded successfully!",
                        timer: 1500,
                        showConfirmButton: false,
                    });
                }
            })
            .catch((err) => console.error("Image upload failed:", err));
    };

    // ✅ Google SignUp
    const handleGoogleSignUp = () => {
        handleWithGoogle()
            .then((result) => {
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Signed in with Google",
                    showConfirmButton: false,
                    timer: 2000,
                });
                navigate("/"); // redirect after login
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Google Sign In Failed",
                    text: error.message,
                });
            });
    };

    // ✅ Normal SignUp
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const mobile = form.mobile.value.trim();
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        if (!name || !email || !password || !confirmPassword) {
            Swal.fire({
                icon: "error",
                title: "Missing Fields",
                text: "Please fill in all required fields.",
            });
            return;
        }

        if (password !== confirmPassword) {
            Swal.fire({
                icon: "error",
                title: "Password Mismatch",
                text: "Password and Confirm Password must be the same.",
            });
            return;
        }

        if (!passwordRegex.test(password)) {
            Swal.fire({
                icon: "error",
                title: "Invalid Password",
                text: "Password must be at least 8 characters long.",
            });
            return;
        }

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                updateProfile(user, {
                    displayName: name,
                    photoURL: imageURL || "",
                })
                    .then(() => {
                        Swal.fire({
                            position: "top-center",
                            icon: "success",
                            title: "Successfully Registered",
                            showConfirmButton: false,
                            timer: 1500,
                        });
                        navigate("/"); // ✅ redirect
                    })
                    .catch((error) => {
                        console.error("Profile update failed:", error.message);
                        Swal.fire({
                            icon: "error",
                            title: "Profile Update Failed",
                            text: error.message,
                        });
                    });
            })
            .catch((error) => {
                Swal.fire({
                    icon: "error",
                    title: "Registration Failed",
                    text: error.message,
                });
            });
    };


    return (
        <div className="border-t-1 border-[#7D7D7D] px-4">
            <div className="flex justify-center items-center min-h-screen my-12">
                <div className="bg-gray-100 p-12 w-full max-w-md">
                    <h1 className="jost-font-uppercase text-[36px] text-[#1E1E1E] font-[400] text-center mb-4">
                        Sign Up
                    </h1>

                    <h2 className="jost-font-uppercase text-[14px] text-center text-[#1E1E1E] font-[400] mb-3">
                        CONNECT WITH
                    </h2>

                    {/* ✅ Google Button */}
                    <button
                        onClick={handleGoogleSignUp}
                        type="button"
                        className="w-full flex items-center justify-center gap-2 border border-[#B7B7B7] py-2 jost-font-uppercase text-[#1E1E1E] font-[400] hover:bg-gray-100 transition"
                    >
                        <FcGoogle size={22} />
                        Continue with Google
                    </button>

                    <div className="flex items-center my-6">
                        <hr className="flex-grow border-gray-300" />
                        <span className="px-2 text-[#1E1E1E] text-sm font-[400] jost-font-uppercase">
                            OR
                        </span>
                        <hr className="flex-grow border-gray-300" />
                    </div>

                    {/* ✅ Sign Up Form */}
                    <form onSubmit={handleRegister}>
                        <div className="mb-4">
                            <label className="block text-[#1E1E1E] text-[14px] mb-1 font-[400] jost-font-uppercase">
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your full name"
                                className="w-full border border-[#B7B7B7] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder:text-[#7D7D7D]"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-[#1E1E1E] text-[14px] mb-1 font-[400] jost-font-uppercase">
                                Profile Image
                            </label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                className="w-full border border-[#B7B7B7] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            />
                            {imageURL && (
                                <img
                                    src={imageURL}
                                    alt="preview"
                                    className="w-20 h-20 mt-2 rounded-full object-cover"
                                />
                            )}
                        </div>

                        <div className="mb-4">
                            <label className="block text-[#1E1E1E] text-[14px] mb-1 font-[400] jost-font-uppercase">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                className="w-full border border-[#B7B7B7] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder:text-[#7D7D7D]"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-[#1E1E1E] text-[14px] mb-1 font-[400] jost-font-uppercase">
                                Mobile
                            </label>
                            <input
                                type="tel"
                                name="mobile"
                                placeholder="Enter your mobile number"
                                className="w-full border border-[#B7B7B7] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder:text-[#7D7D7D]"
                            />
                        </div>

                        <div className="mb-4 relative">
                            <label className="block text-[#1E1E1E] text-[14px] mb-1 font-[400] jost-font-uppercase">
                                Password
                            </label>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Enter your password"
                                className="w-full border border-[#B7B7B7] px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder:text-[#7D7D7D]"
                                required
                            />
                            <span
                                className="absolute right-3 top-9 cursor-pointer text-[#1E1E1E]"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>

                        <div className="mb-6 relative">
                            <label className="block text-[#1E1E1E] text-[14px] mb-1 font-[400] jost-font-uppercase">
                                Confirm Password
                            </label>
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                name="confirmPassword"
                                placeholder="Confirm your password"
                                className="w-full border border-[#B7B7B7] px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder:text-[#7D7D7D]"
                                required
                            />
                            <span
                                className="absolute right-3 top-9 cursor-pointer text-[#1E1E1E]"
                                onClick={() =>
                                    setShowConfirmPassword(!showConfirmPassword)
                                }
                            >
                                {showConfirmPassword ? (
                                    <FaEyeSlash />
                                ) : (
                                    <FaEye />
                                )}
                            </span>
                        </div>

                        <div className="flex justify-center my-4">
                            <button
                                type="submit"
                                className="w-60 text-center rounded-4xl bg-[#00B5A5] text-white py-2 jost-font-uppercase font-[400] hover:bg-[#009988] transition"
                            >
                                CREATE YOUR ACCOUNT
                            </button>
                        </div>
                    </form>

                    <p className="text-center text-[14px] text-[#7D7D7D] border-t-1 pt-4 mt-6 font-[400]">
                        Already have an account?{" "}
                        <Link
                            to="/signin"
                            className="text-[#00B5A5] font-[400] jost-font-uppercase hover:underline"
                        >
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
