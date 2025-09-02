import React from "react";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const Confirmation = ({setStep}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-4">
      {/* Animated Circle with Check Icon */}
      <div className="w-24 h-24 rounded-full border-4 border-green-500 flex items-center justify-center mb-6 relative">
        {/* Animated border */}
        <span className="absolute w-full h-full rounded-full border-4 border-green-300 animate-ping"></span>
        {/* Check icon */}
        <Check size={38} className="text-green-500 relative" />
      </div>

      {/* Confirmation Text */}
      <h1 className="jost-font-capitalize text-3xl  sm:text-4xl font-[400] mb-2">Your order has been confirmed</h1>
      <p className="jost-font-capitalize text-gray-600 mb-4">
        Thank you for ordering from{" "}
        <Link to="/" className="text-[#00B5A5] hover:underline">
          Beaded Bangladesh
        </Link>.
      </p>
      <h2 className="jost-font-capitalize text-lg font-medium mb-6">Order Code: #10102</h2>

      {/* View Order Button */}
      <button onClick={() => setStep(2)} className="jost-font-uppercase bg-[#00B5A5] hover:bg-[#287d77] text-white my-6 px-6 py-2 rounded-full font-[600] transition">
        VIEW YOUR ORDER
      </button>
    </div>
  );
};

export default Confirmation;
