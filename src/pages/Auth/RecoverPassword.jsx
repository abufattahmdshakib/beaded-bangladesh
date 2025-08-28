import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../src/pages/Auth/AuthProvider";
import Swal from "sweetalert2";

const RecoverPassword = () => {
  const [emailSent, setEmailSent] = useState(false);
  const { resetPassword } = useContext(AuthContext);
  const [email, setEmail] = useState("");

  const handleSendEmail = async () => {
    if (!email) {
      Swal.fire({
        icon: "warning",
        title: "Enter Email",
        text: "Please enter your email to reset password.",
      });
      return;
    }

    try {
      await resetPassword(email);
      setEmailSent(true);
      Swal.fire({
        icon: "success",
        title: "Email Sent",
        text: `Check your inbox (${email}) for the password reset link.`,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Something Went Wrong",
        text: error.message,
      });
    }
  };

  const handleResendEmail = () => {
    handleSendEmail();
  };

  return (
    <div className="border-t border-[#7D7D7D] px-4 py-12">
      <div className="flex justify-center items-center my-12">
        <div className="bg-gray-100 p-8 w-full max-w-lg">
          {!emailSent ? (
            <>
              <h1 className="jost-font-uppercase text-[26px] text-[#1E1E1E] font-[400] text-center mb-4">
                Recover Password
              </h1>

              <div className="mb-4">
                <label className="block text-[#1E1E1E] text-[14px] mb-1 font-[400] jost-font-uppercase">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-[#B7B7B7] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder:text-[#7D7D7D] placeholder:font-[400] placeholder:jost-font-capitalize"
                />
              </div>

              <p className="text-[#1E1E1E] text-[14px] mb-6 font-[400] text-center">
                We’ll email you a link that will let you change your password.
              </p>

              <div className="flex justify-center my-4">
                <button
                  onClick={handleSendEmail}
                  className="w-60 text-center rounded-4xl bg-[#00B5A5] text-white py-2 jost-font-uppercase font-[400] hover:bg-[#009988] transition"
                >
                  SEND EMAIL
                </button>
              </div>

              <p className="text-center text-[14px] text-[#7D7D7D] border-t border-[#B7B7B7] pt-4 mt-6 font-[400]">
                Don’t have an account?{" "}
                <Link
                  to="/signup"
                  className="text-[#00B5A5] font-[400] jost-font-uppercase hover:underline"
                >
                  Sign Up
                </Link>
              </p>
            </>
          ) : (
            <>
              <h1 className="jost-font-uppercase text-[26px] text-[#1E1E1E] font-[400] text-center mb-4">
                Check your email
              </h1>

              <p className="text-[#1E1E1E] text-[14px] mb-6 font-[Jost] text-center">
                If we found an account with <span className="font-semibold">{email}</span>, an
                email has been sent. <br />
                Please check your email in a moment.
              </p>

              <div className="flex justify-center items-center gap-2 my-4">
                <p className="text-[16px] text-[#7D7D7D] font-[400]">
                  Didn’t receive a link?
                </p>
                <button
                  onClick={handleResendEmail}
                  className="text-[#1E1E1E] jost-font-uppercase font-[500] hover:underline text-[16px] transition"
                >
                  RESEND EMAIL
                </button>
              </div>

              <p className="text-center text-[14px] text-[#7D7D7D] border-t border-[#B7B7B7] pt-4 mt-6 font-[400]">
                Don’t have an account?{" "}
                <Link
                  to="/signup"
                  className="text-[#00B5A5] font-[400] jost-font-uppercase hover:underline"
                >
                  Sign Up
                </Link>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecoverPassword;
